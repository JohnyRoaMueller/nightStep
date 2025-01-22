package com.softwave.clubstep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.base.RegisteringUser;
import com.softwave.clubstep.services.UserRegistrationService;

@RestController
public class UserRegistrationController {


    UserRegistrationService userRegistrationService;


    public UserRegistrationController(UserRegistrationService userRegistrationService) {
        this.userRegistrationService = userRegistrationService;
    }
    
    
    @CrossOrigin(origins = "http://localhost:5173") // Erlaube den Zugriff nur von diesem Origin
    @PostMapping("/register")
    public void createUser(@RequestBody RegisteringUser registeringUser) {

        userRegistrationService.registerUser(registeringUser);

    }


}
