package com.softwave.clubstep.controllers;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.UserService;
import com.softwave.clubstep.services.VenueService;

@RestController
@RequestMapping("/api")
public class EventController {

    Logger logger = LoggerFactory.getLogger(EventController.class); 

    @Autowired
    EventRepository eventRepository;

    @Autowired
    VenueService venueService;

    @Autowired
    UploadService uploadService;

    @Autowired
    UserService userService;

    
    @PostMapping("/events/create")
    public ResponseEntity<String> createEvent(@ModelAttribute EventDTO event) throws IOException {

        logger.info("/events/create reached");

        System.out.println("this this this");
        System.out.println(event.getName());
        System.out.println(event.getVenueName());
        System.out.println(venueService.getVenueOrNull(event.getVenueName()));

        System.out.println("not this not this not this");
        Event newEvent = new Event(event.getName(), event.getStartTimeDate(), event.getEndTimeDate(), event.getPrice(), event.getLikes(), event.getDescription(), venueService.getVenueOrNull(event.getVenueName()));
        eventRepository.save(newEvent);

        Venue venue = venueService.getVenueOrNull(event.getVenueName());
        String usernameOfHost = venue.getHost().getUserAuth().getUsername();

        String nameOfVenue = venue.getName();

        uploadService.addEventImages(event.getImages(), usernameOfHost, nameOfVenue, event.getName());

        return ResponseEntity.ok("new event created");
    }
}
