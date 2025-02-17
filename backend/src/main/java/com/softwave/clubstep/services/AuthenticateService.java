package com.softwave.clubstep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class AuthenticateService {
    
    @Autowired
    JwtService jwtService;

    @Autowired
    UserAuthRepository userAuthRepo;

    public ResponseEntity<String> authenticateUser(String username) {

        System.out.println(username);
        
        String token = jwtService.getToken(username);
        
        String savedPassword = null;

        
        if (token != null) {return ResponseEntity.ok(token);} 
        else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email or password is wrong");

    }
    


}