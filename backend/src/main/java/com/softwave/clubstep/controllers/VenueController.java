package com.softwave.clubstep.controllers;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.services.VenueService;


@RestController
@RequestMapping("/api")
public class VenueController {

    Logger logger = LoggerFactory.getLogger(VenueController.class);

    {/*--------------- Repositorys --------------- */}
    private final VenueRepository venueRepository;
    {/*--------------- Services --------------- */}
    private final VenueService venueService;

    
    public VenueController
        (
        VenueRepository venueRepository,
        VenueService venueService
        )
        {
        this.venueRepository = venueRepository;
        this.venueService = venueService;
        }

{/*
Spring endpoints are based on Java Servlets.
Servlets handle HTTP requests and return responses, usually in the form of HTML or JSON.
Spring abstracts this technology, allowing developers to work with annotations like
@RestController and @GetMapping, while the requests are processed in the background by a Servlet container (e.g., Tomcat).
*/}
  
    @GetMapping("/venue/{venueName}")
    public ResponseEntity<Venue> getSingleClub(@PathVariable("venueName") String venueName) {

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

    @GetMapping("/robert")
    public void getTest() {
        
        logger.info("Hello, World!");

    }

}
