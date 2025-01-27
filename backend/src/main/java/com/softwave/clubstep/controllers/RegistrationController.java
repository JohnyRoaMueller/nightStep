package com.softwave.clubstep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.base.RegisteringUser;
import com.softwave.clubstep.services.RegistrationService;

@RestController
public class RegistrationController {


    RegistrationService registrationService;
    


    public RegistrationController(RegistrationService userRegistrationService) {
        this.registrationService = userRegistrationService;
    }
    
    
    @PostMapping("/register")
    public void createUser(@RequestBody RegisteringUser registeringUser) {

        registrationService.registerUser(registeringUser);

    }


}
