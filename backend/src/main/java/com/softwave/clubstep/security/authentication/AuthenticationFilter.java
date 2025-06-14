package com.softwave.clubstep.security.authentication;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.softwave.clubstep.DTO.UserAuthDTO;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.services.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * This filter intercepts incoming HTTP requests, retrieves the JWT from the `Authorization` header, 
 * and authenticates the user by setting the authentication context (a Spring internal mechanism) 
 * in the `SecurityContextHolder` if the token is valid. This ensures that each request is properly authenticated 
 * before continuing through the filter chain.
 */

@Component
public class AuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	JwtService jwtService;


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, java.io.IOException {
		// Get token from the Cookie header
		String jws = request.getHeader(HttpHeaders.COOKIE);
		if (jws != null) {
			// Verify token and get user
			UserAuth user = jwtService.getAuthUser(request);
			// Authenticate
			Authentication authentication = new UsernamePasswordAuthenticationToken(user, null,
					java.util.Collections.emptyList());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		filterChain.doFilter(request, response);
	}
}