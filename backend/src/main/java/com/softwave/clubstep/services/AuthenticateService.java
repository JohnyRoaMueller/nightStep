package com.softwave.clubstep.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class AuthenticateService {

    Logger logger = LoggerFactory.getLogger(AuthenticateService.class);
    
    @Autowired
    JwtService jwtService;

    @Autowired
    UserAuthRepository userAuthRepo;

    public ResponseEntity<String> authenticateUser(String username) {

        System.out.println(username);
        
        String token = jwtService.getToken(null);
        
        String savedPassword = null;

        

        if (token != null) {
            logger.info("token aus getToken:", token);
            return ResponseEntity.ok(token);
        } 

        else {
            logger.info("Bad request vom AuthSerice");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email or password is wrong");
        }
    }
}