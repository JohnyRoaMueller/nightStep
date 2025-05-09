package com.softwave.clubstep.controllers;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.RegistrationService;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.UserService;
import com.softwave.clubstep.services.VenueService;

@RestController
@RequestMapping("/api")
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @Autowired
    UserService userService;

    @Autowired
    UploadService uploadService;

    @Autowired
    VenueService venueService;

    @Autowired
    HostRepository hostRepository;

    @Autowired 
    UserAuthRepository userAuthRepository;

    Logger logger = LoggerFactory.getLogger(RegistrationController.class);
    

    @PostMapping("/register/checkIfUserExists")
    public ResponseEntity<String> checkIfUserExists(@RequestBody String username) {

        logger.info("hello from checkIfUserExists");

        UserAuth user = userService.getUserAuthOrNull(username);

        if (user == null) return ResponseEntity.ok("username avialabel");
        else return ResponseEntity.status(406).body("username not avialable");

    }

    
    @PostMapping("/register/guest")
    public void createGuestUser(@RequestBody RegisteringGuestUserDTO registeringGuest) {

        logger.info("/register/guest");

        registrationService.registerGuestUser(registeringGuest);
    }

    @PostMapping("/register/host")
    public ResponseEntity<String> createHostUser(@ModelAttribute RegistrationHostUserDTO registeringHost) throws IOException {

        if (userAuthRepository.findByUsername(registeringHost.getUsername()).isPresent()) { return ResponseEntity.badRequest().body("username already taken"); }

        logger.info("/register/host reached");

        registrationService.registerHostUser(registeringHost);

        uploadService.addImages(registeringHost.getImages(), registeringHost.getUsername());

        venueService.addVenue(registeringHost);

        return ResponseEntity.ok("registration successfully");

    }

}