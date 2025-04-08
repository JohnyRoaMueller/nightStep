package com.softwave.clubstep.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;




@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * Cross-Origin Resource Sharing (CORS) is a security feature implemented by web-
     * browsers to control how resources on a web server can be requested from a different domain.
     * 
     * 
     */

    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        System.out.println("setting CORS-configs");

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://172.20.10.13:5173", "http://10.0.2.24:5173", "http://192.168.178.28:5173", "http://192.168.179.3:5173")); // setting url who have access
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}

