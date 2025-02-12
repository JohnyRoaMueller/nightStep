package com.softwave.clubstep.controllers;

import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.AuthenticateService;
import com.softwave.clubstep.services.JwtService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @Autowired
    UserAuthRepository userAuthRepo;

    @Autowired
    JwtService jwtService;
    
    
    @GetMapping("/api/userdata")
    public ResponseEntity<String> userdata(HttpServletRequest request) {

      System.out.println("/api/userdata erreicht");

      String user = jwtService.getAuthUser(request);

      return ResponseEntity.ok(user);

   


    }

}
