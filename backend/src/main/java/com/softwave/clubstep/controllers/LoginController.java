package com.softwave.clubstep.controllers;

import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.CookieService;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.PasswordService;
import com.softwave.clubstep.services.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value = "/api")
public class LoginController {

    Logger logger = LoggerFactory.getLogger(LoginController.class);
    
    @Autowired
    JwtService jwtProvider;

    @Autowired
    UserAuthRepository userAuthRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    PasswordService passwordService;

    @Autowired
    CookieService cookieService;

    @Autowired
    UserService userService;


    @PostMapping(value = "/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserAuth loginRequest, HttpServletResponse response) {
        System.out.println("api/login erreicht");

        UserAuth currentUser = userService.getUserAuthOrNull(loginRequest.getUsername());

        if (currentUser == null) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "User not found");
            logger.info("user login not successfull: " + errorResponse);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }

        if (!passwordService.comparePasswort(currentUser, loginRequest)) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "Password is wrong");
            logger.info("user login not successfull: " + errorResponse);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }

        response.addCookie(
            cookieService.createJwtAuthCookie(
                jwtProvider.getToken(currentUser)));
        
        Map<String, Object> hashResponse = new HashMap<>();
        hashResponse.put("username", currentUser.getUsername());
        hashResponse.put("role", currentUser.getRole());

        logger.info("user login successfull: " + hashResponse);

        return ResponseEntity.ok(hashResponse);
        }
}