package com.softwave.clubstep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.security.authentication.JwtProvider;

@Service
public class AuthenticateService {
    
    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UserAuthRepository userAuthRepo;

    public ResponseEntity<String> authenticateUser(String username) {

        System.out.println(username);
        
        String token = jwtProvider.getToken(username);
        
        String savedPassword = null;

        
        if (token != null) {return ResponseEntity.ok(token);} 
        else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email or password is wrong");

    }
    


}