package com.softwave.clubstep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.softwave.clubstep.security.authentication.JwtProvider;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class LoginController {
    
    @Autowired
    JwtProvider jwtProvider;


    @GetMapping("/api/login")
    public String userLogin(@RequestBody String authData) {
        
        return new String();
    }
    


}
