package com.softwave.clubstep.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CsrfFilter;
import com.softwave.clubstep.security.authentication.CsrfTokenResponseHeaderBindingFilter;
import org.springframework.security.config.annotation.web.configurers.CorsConfigurer;
import com.softwave.clubstep.security.WebConfig;

import com.softwave.clubstep.security.WebConfig;

import org.springframework.security.web.csrf.CsrfToken; //
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private WebConfig webConfig;

    

    /** every http request runs threw the SecurityFilterChain, it's the
     * center of Spring security
     */

     
    
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        String[] allowedPaths = { "/", "/home", "/login", "/register"};
        http.
            csrf(AbstractHttpConfigurer::disable); // POST request now possible // google it!
            
        http
            .cors(cors -> cors.configurationSource(webConfig.corsConfigurationSource()))
                .sessionManagement((sessionManagement) -> 
                    sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//.addFilterAfter(new CsrfTokenResponseHeaderBindingFilter(), CsrfFilter.class)
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers(allowedPaths).permitAll() // Zugriff ohne Auth
                .requestMatchers(HttpMethod.POST, "/register" ).permitAll()
          

        );

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
