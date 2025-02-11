package com.softwave.clubstep.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.softwave.clubstep.base.RegisteringUser;
import com.softwave.clubstep.services.RegistrationService;

@RestController
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;
    
    
    
    @PostMapping("/api/register")
    public void createUser(@RequestBody RegisteringUser registeringUser) {

        Logger logger = LoggerFactory.getLogger(RegistrationController.class);

        registrationService.registerUser(registeringUser);

    }


}
