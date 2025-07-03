package com.softwave.clubstep.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.stream.util.EventReaderDelegate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authorization.method.AuthorizeReturnObject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

import jakarta.transaction.Transactional;

@Service
public class EventService {


    @Autowired
    EntityFinder entityFinder;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    VenueRepository venueRepository;

    @Autowired
    HostRepository hostRepository;

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    UploadService uploadService;

    @Autowired
    VenueService venueService;
    
    
    public void addEvent(EventDTO event, Venue venue) throws IOException {

        Logger logger = LoggerFactory.getLogger(EventService.class.getName());


        String usernameOfHost = venue.getHost().getUserAuth().getUsername();

        String nameOfVenue = venue.getName();

        Event newEvent = new Event(
            event.getName(),
            event.getStartTimeDate(),
            event.getEndTimeDate(),
            event.getPrice(),
            event.getLikes(),
            event.getDescription(),
            "0",
            extractEventImagePaths(event.getImages(), usernameOfHost, event.getName(), nameOfVenue),
            venue);
        eventRepository.save(newEvent);

        logger.info("The extracted imagePaths of the event");
        logger.info(String.join(", ", newEvent.getImagePaths()));

        uploadService.addEventImages(event.getImages(), usernameOfHost, nameOfVenue, event.getName());

    }

    public List<String> extractEventImagePaths(List<MultipartFile> images, String username, String nameOfEvent, String nameOfVenue) {
        List<String> imagePaths = new ArrayList<String>();
       

        for (MultipartFile image : images) {

            if (image.getOriginalFilename().startsWith("./uploads/host_images/") ) {
                String filename = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("/") + 1);
                String path = String.format("./uploads/host_images/%s/venues/%s/%s", username, nameOfVenue, filename); 
            imagePaths.add(path);
                continue;
            }

            String path = String.format("./uploads/host_images/%s/venues/%s/events/%s/%s", username, nameOfVenue, nameOfEvent, image.getOriginalFilename()); 
            imagePaths.add(path);
        }
        return imagePaths;
    }

}
