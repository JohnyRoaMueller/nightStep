package com.softwave.clubstep.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.MessageFormat;
import java.util.List;

import org.hibernate.result.Outputs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.ClubRepository;
import com.softwave.clubstep.services.ClubService;
import com.softwave.clubstep.services.RegistrationService;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.UserService;

@RestController
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @Autowired
    UserService userService;

    @Autowired
    UploadService uploadService;

    @Autowired
    ClubService clubService;

    Logger logger = LoggerFactory.getLogger(RegistrationController.class);
    
    
    
    @PostMapping("/api/register/guest")
    public void createGuestUser(@RequestBody RegisteringGuestUserDTO registeringGuest) {

        logger.info("/api/register/guest");

        registrationService.registerGuestUser(registeringGuest);
    }

    @PostMapping("/api/register/host")
    public void createHostUser(@ModelAttribute RegistrationHostUserDTO registeringHost) throws IOException {

        logger.info("/api/register/host reached");

        registrationService.registerHostUser(registeringHost);

        uploadService.addImages(registeringHost.getImages(), registeringHost.getUsername());

        clubService.addClub(registeringHost);


    }
}

