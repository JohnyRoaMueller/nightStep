package com.softwave.clubstep.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.base.BaseUser;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.UserService;
import com.softwave.clubstep.services.VenueService;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api")
public class VenueController {

    Logger logger = LoggerFactory.getLogger(VenueController.class);

    {/*--------------- Repositorys --------------- */}
    private final VenueRepository venueRepository;
    private final HostRepository hostRepository;
    private final UserAuthRepository userAuthRepository;
    {/*--------------- Services --------------- */}
    private final VenueService venueService;
    private final JwtService jwtService;
    private final UserService userService;

    
    public VenueController
        (
        VenueRepository venueRepository,
        VenueService venueService,
        JwtService jwtService,
        UserService userService,
        HostRepository hostRepository,
        UserAuthRepository userAuthRepository
        )
        {
        this.venueRepository = venueRepository;
        this.venueService = venueService;
        this.jwtService = jwtService;
        this.userService = userService;
        this.hostRepository = hostRepository;
        this.userAuthRepository = userAuthRepository;
        }

{/*
Spring endpoints are based on Java Servlets.
Servlets handle HTTP requests and return responses, usually in the form of HTML or JSON.
Spring abstracts this technology, allowing developers to work with annotations like
@RestController and @GetMapping, while the requests are processed in the background by a Servlet container (e.g., Tomcat).
*/}
  
    @GetMapping("/venue/{venueName}")
    public ResponseEntity<Venue> getSingleVenue(@PathVariable("venueName") String venueName) {

        logger.info("/venue/{venueName}");

        Venue currentVenue = venueService.getVenueOrNull(venueName);

        if (currentVenue == null)
        {
            return ResponseEntity.badRequest().body(currentVenue);
        }
        else
        {
            return ResponseEntity.ok().body(currentVenue);
        }
    }


    @GetMapping("/myvenue")
    public ResponseEntity<Venue> getVenueOfHost(HttpServletRequest request) {

        logger.info("/myvenue reached");

        Map<String, String> userdata = jwtService.getAuthUser(request);

        String hostUsername = userdata.get("username");

        Optional<UserAuth> hostUserAuthOption = userAuthRepository.findByUsername(hostUsername);

        UserAuth currentUserAuth = hostUserAuthOption.get();

        BaseUser currentUser = currentUserAuth.getBaseUser();

        String currentUserFirstname = currentUser.getFirstname();

        Optional<Host> hostOption = hostRepository.findByFirstname(currentUserFirstname);

        Host currentHost = hostOption.get();

        List<Venue> venues = currentHost.getOwnedVenues();

        System.out.println(venues.toString());



        return null;
    }


}
