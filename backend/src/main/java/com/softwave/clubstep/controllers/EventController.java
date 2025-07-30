package com.softwave.clubstep.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.EntityFinder;
import com.softwave.clubstep.services.EventService;
import com.softwave.clubstep.services.VenueService;

import com.softwave.clubstep.domain.entities.UserAuth;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class EventController {

    Logger logger = LoggerFactory.getLogger(EventController.class); 

    @Autowired
    EventRepository eventRepository;

    @Autowired
    VenueRepository venueRepository;

    @Autowired
    VenueService venueService;

    @Autowired
    UploadService uploadService;

    @Autowired
    EntityFinder userService;

    @Autowired
    JwtService jwtService;

    @Autowired
    HostRepository hostRepository;

    @Autowired
    EntityFinder entityFinder;

    @Autowired
    EventService eventService;

    
    @PostMapping("/events/create")
    public ResponseEntity<String> createEvent(
        @ModelAttribute EventDTO event,
        @RequestPart("venueName") String venueName
    ) throws IOException {

        logger.info("/events/create reached");

        Venue venue = entityFinder.getVenueOrNull(venueRepository.findByName(venueName));

        eventService.addEvent(event, venue);

        return ResponseEntity.ok("new event created");
    }

    @GetMapping("/events/showAllEvents")
    public ResponseEntity<List<Event>> showAllEvents(HttpServletRequest request) {

        logger.info("events/showAllEvents reached");

        UserAuth userinfo = jwtService.getAuthUser(request);
        Host host = userService.getHostByUsernameOrNull(userinfo.getUsername());

        Venue venue = entityFinder.getVenueOfHostOrNull(host);

        List<String> eventIds = venue.getEventIds();
        List<Event> events = eventRepository.findAllById(eventIds);

        return ResponseEntity.ok(events);
    }

    @GetMapping("/events/{venueName}")
    public ResponseEntity<List<Event>> showEventsOfVenue(@PathVariable("venueName") String venueName) {

        logger.info("/events/{venueName} reached");

        Optional<Venue> venueOpt = venueRepository.findByName(venueName);


        if (venueOpt.isPresent()) {

            Venue venue = venueOpt.get();

            logger.info("toString" + venue.getEventIds().toString());

            List<Event> eventList = eventRepository.findAllById(venue.getEventIds());

            System.out.println("the eventList" + eventList);

            return ResponseEntity.ok().body(eventList);

        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/events/hello")
    public void sayHello() {
        System.out.println("hello!");
    }

}
