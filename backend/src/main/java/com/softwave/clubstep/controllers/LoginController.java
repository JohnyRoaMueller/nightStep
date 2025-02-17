package com.softwave.clubstep.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.JwtService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class LoginController {
    
    @Autowired
    JwtService jwtProvider;

    @Autowired
    UserAuthRepository userAuthRepo;

    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody UserAuth request) {
        System.out.println("api/login erreicht");

        /* Password extracted from the HTTP request */
        String requestPassword = request.getPassword();


        /* try to find existing user in Database */
        /* var of type "Object" can have a value or not */
        Optional<UserAuth> userOpt = userAuthRepo.findByUsername(request.getUsername());

        /* check if userOpt is present */
        if (userOpt.isPresent()) {
            /* getting the value of the Option => get user that is asked for*/
            UserAuth presentUserAuth = userOpt.get();
            
            String databasePassword = presentUserAuth.getPassword();
            boolean passwordCheck = passwordEncoder.matches(requestPassword, databasePassword);

            if (passwordCheck) {
                String token = jwtProvider.getToken(presentUserAuth.getUsername());
                System.out.println(token);
                System.out.println("Login succesfully");
                return ResponseEntity.ok(token);
            } else {
                System.out.println("Password is wrong");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Password is wrong");
            }



        } else {
            System.out.println("User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }



        // return ResponseEntity.ok("Login erfolgreich");
    }
}
