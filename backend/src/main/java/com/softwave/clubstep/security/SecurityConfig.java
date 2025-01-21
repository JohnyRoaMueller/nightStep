package com.softwave.clubstep.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    
    {/* Für einfachen Zugriff auf BCryptEncoder */}
    
    {/* JavaDoc zeigt, dass sich durch aufrufen des leeren Konstruktors
        sich das Object durch mehrere Konstruktorenaufrufe (this()) bildet */}
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }



    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .anyRequest().permitAll() // Alle Anfragen sind öffentlich zugänglich
            )
            .csrf(csrf -> csrf.disable()); // Falls CSRF-Schutz nicht benötigt wird, kannst du ihn deaktivieren

        return http.build();
    }

    
}
