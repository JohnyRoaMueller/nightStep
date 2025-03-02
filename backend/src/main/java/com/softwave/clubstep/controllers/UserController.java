package com.softwave.clubstep.controllers;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.CookieService;
import com.softwave.clubstep.services.JwtService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class UserController {

    public UserController() {};

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserAuthRepository userAuthRepo;

    @Autowired
    JwtService jwtService;

    @Autowired
    CookieService cookieService;
    
    
    @GetMapping("/api/me")
    public ResponseEntity<Map<String, String>> getUser(HttpServletRequest request) {

      logger.info("/api/me reached");

      Map<String, String> userinfo = jwtService.getAuthUser(request);
      
      if (userinfo == null) {
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
      } 
      
      logger.info("userinfo parsing to frontend: " + userinfo);
      return ResponseEntity.ok(userinfo);
    }


    @GetMapping("/api/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {

      System.out.println("/api/logout erreicht");

      response.addCookie(cookieService.deleteJwtAuthCookie(request));

      return ResponseEntity.ok("cookie deleted");
    }
}
