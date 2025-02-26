package com.softwave.clubstep.controllers;

import java.net.http.HttpResponse;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.CookieService;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.LoginService;
import com.softwave.clubstep.services.PasswordService;
import com.softwave.clubstep.services.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
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


    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody UserAuth loginRequest, HttpServletResponse response) {
        System.out.println("api/login erreicht");

        UserAuth currentUser = userService.getUserOrNull(loginRequest.getUsername());

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        if (!passwordService.comparePasswort(currentUser, loginRequest)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Password is wrong");
        }

        response.addCookie(
            cookieService.createJwtAuthCookie(
                jwtProvider.getToken(
                    loginRequest.getUsername())));
        return ResponseEntity.ok("Login successful");
        }
}