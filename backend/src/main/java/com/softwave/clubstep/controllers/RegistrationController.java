package com.softwave.clubstep.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.services.RegistrationService;

@RestController
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    Logger logger = LoggerFactory.getLogger(RegistrationController.class);
    
    
    
    @PostMapping("/api/register/guest")
    public void createGuestUser(@RequestBody RegisteringGuestUserDTO registeringUser) {

        logger.info("/api/register/guest");
        registrationService.registerGuestUser(registeringUser);
    }

    @PostMapping("/api/register/host")
    public void createHostUser(@ModelAttribute RegistrationHostUserDTO registeringUser) {

        MultipartFile fileOne = registeringUser.getImageOne();

        System.out.println(fileOne);
        
        logger.info("/api/register/host reached");
        // registrationService.registerHostUser(registeringUser);
    }
}
