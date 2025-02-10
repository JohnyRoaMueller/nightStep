package com.softwave.clubstep.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.RequestCacheConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.softwave.clubstep.security.authentication.AuthEntryPoint;
import com.softwave.clubstep.security.authentication.AuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private WebConfig webConfig;
    @Autowired
    private AuthenticationFilter authenticationFilter;
    @Autowired
    private AuthEntryPoint exeptionHandler;

    

    /* every http request runs threw the SecurityFilterChain, it's thecenter of Spring security. */


     
    // This configuration uses the fluent API style, where each method returns an updated instance of the 
    // HttpSecurity object, allowing chained method calls for a concise and readable configuration.
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        String[] allowedPaths = { "/", "/home", "/api/login", "/register", "/add"};
        http
            .csrf(AbstractHttpConfigurer::disable) // POST request now possible // google it!

            .cors(cors -> cors
                .configurationSource(webConfig.corsConfigurationSource())
            )

            .sessionManagement(sessionManagement -> sessionManagement //The lambda expression allows the configuration of session creation policies by directly modifying the sessionManagement object. Part of fluent API style.
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/**").permitAll() // Zugriff ohne Auth 
            )

            .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class)

            .exceptionHandling(exceptionHandling -> exceptionHandling
                .authenticationEntryPoint(exeptionHandler))

            ;

		return http.build();
	}



    
    {/* Für einfachen Zugriff auf BCryptEncoder */}
    
    {/* JavaDoc zeigt, dass sich durch aufrufen des leeren Konstruktors
        sich das Object durch mehrere Konstruktorenaufrufe (this()) bildet */}
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
