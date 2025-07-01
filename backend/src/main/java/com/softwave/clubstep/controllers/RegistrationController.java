package com.softwave.clubstep.controllers;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationGuestDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.domain.entities.Host;
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
    public void createGuest(@RequestBody RegistrationGuestDTO registeringGuest) {

        logger.info("/register/guest");

        registrationService.registerGuestUser(registeringGuest);
    }

    @PostMapping(value = "/register/host", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> createHost(
        @RequestPart("hostRegistrationData") RegistrationHostDTO hostRegistrationData,
        @RequestPart("venueRegistrationData") VenueDTO venueRegistrationData,
        @RequestPart("imagesRegistrationData") MultipartFile[] images
    ) throws IOException {

        logger.info("/register/host reached");

        registrationService.registerHostUser(hostRegistrationData);

        venueService.addVenue(venueRegistrationData);

        List<String> picAddresses = venueService.extractImagePaths(venueRegistrationData.getImageBlobs(), hostRegistrationData.getUsername(), venueRegistrationData.getName());
        Host host = userService.getHostOrNull(hostRegistrationData.getUsername());

        uploadService.addVenueImages(hostRegistrationData.getImages(), hostRegistrationData.getUsername(), hostRegistrationData.getNameOfVenue());

        return ResponseEntity.ok("registration successfully");

    }

}