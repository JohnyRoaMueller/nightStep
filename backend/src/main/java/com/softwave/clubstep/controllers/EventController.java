package com.softwave.clubstep.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.UserService;
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
    VenueService venueService;

    @Autowired
    UploadService uploadService;

    @Autowired
    UserService userService;

    @Autowired
    JwtService jwtService;

    @Autowired
    HostRepository hostRepository;

    
    @PostMapping("/events/create")
    public ResponseEntity<String> createEvent(@ModelAttribute EventDTO event) throws IOException {

        logger.info("/events/create reached");

        System.out.println("this this this");
        System.out.println(event.getName());
        System.out.println(event.getVenueName());
        System.out.println(venueService.getVenueOrNull(event.getVenueName()));

        System.out.println("not this not this not this");

        Venue venue = venueService.getVenueOrNull(event.getVenueName());
        String usernameOfHost = venue.getHost().getUserAuth().getUsername();

        String nameOfVenue = venue.getName();

        Event newEvent = new Event(event.getName(), event.getStartTimeDate(), event.getEndTimeDate(), event.getPrice(), event.getLikes(), event.getDescription(), "0", extractImagePaths(event.getImages(), usernameOfHost, nameOfVenue, event.getName()), venue);
        eventRepository.save(newEvent);


        uploadService.addEventImages(event.getImages(), usernameOfHost, nameOfVenue, event.getName());

        return ResponseEntity.ok("new event created");
    }

    @GetMapping("/events/showAllEvents")
    public ResponseEntity<List<Event>> showAllEvents(HttpServletRequest request) {

        logger.info("events/showAllEvents reached");


        UserAuth userinfo = jwtService.getAuthUser(request);
        Host host = userService.getHostOrNull(userinfo.getUsername());

        Venue venue = venueService.getVenueOfHostOrNull(host);

        List<Event> eventList = venue.getEvents();

        return ResponseEntity.ok(eventList);

    }


    public List<String> extractImagePaths(List<MultipartFile> images, String username, String nameOfVenue, String nameOfEvent) {
        List<String> imagePaths = new ArrayList<String>();

        for (MultipartFile image : images) {
            if (image.getOriginalFilename().startsWith("/uploads/host_images/")) {
                String filename = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("/") + 1);
                String path = String.format("./uploads/host_images/%s/venues/%s/events/%s", username, nameOfVenue, nameOfEvent); 
                imagePaths.add(path);
                continue;
            }

            String path = String.format("./uploads/host_images/%s/venues/%s/events/%s/%s", username, nameOfVenue, nameOfEvent, image.getOriginalFilename()); 
            imagePaths.add(path);
        }
        return imagePaths;
    }


}
