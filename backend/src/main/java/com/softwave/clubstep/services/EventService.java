package com.softwave.clubstep.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

@Service
public class EventService {

    @Autowired
    private EntityFinder entityFinder;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private HostRepository hostRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private UploadService uploadService;

    private final Logger logger = LoggerFactory.getLogger(EventService.class);

    public void addEvent(EventDTO eventDTO, Venue venue) throws IOException {
        Host host = entityFinder.getHostOrNull(
            hostRepository.findById(venue.getHostId())
        );

        if (host == null) {
            throw new IllegalStateException("Host not found for venue: " + venue.getId());
        }

        UserAuth userAuth = entityFinder.getUserAuthOrNull(
            userAuthRepository.findById(host.getUserAuthId())
        );

        if (userAuth == null) {
            throw new IllegalStateException("UserAuth not found for host: " + host.getId());
        }

        String usernameOfHost = userAuth.getUsername();
        String venueName = venue.getName();

        Event newEvent = new Event(
            eventDTO.getName(),
            eventDTO.getStartTimeDate(),
            eventDTO.getEndTimeDate(),
            eventDTO.getPrice(),
            eventDTO.getLikes(),
            eventDTO.getDescription(),
            "0",
            extractEventImagePaths(eventDTO.getImages(), usernameOfHost, eventDTO.getName(), venueName),
            venue.getId()
        );

        eventRepository.save(newEvent);

        logger.info("Saved event with image paths: {}", String.join(", ", newEvent.getImagePaths()));

        uploadService.addEventImages(eventDTO.getImages(), usernameOfHost, venueName, eventDTO.getName());
    }

    public List<String> extractEventImagePaths(List<MultipartFile> images, String username, String nameOfEvent, String nameOfVenue) {
        List<String> imagePaths = new ArrayList<>();

        for (MultipartFile image : images) {
            String originalFilename = image.getOriginalFilename();
            if (originalFilename == null) continue;

            if (originalFilename.startsWith("./uploads/host_images/")) {
                String filename = originalFilename.substring(originalFilename.lastIndexOf("/") + 1);
                String path = String.format("./uploads/host_images/%s/venues/%s/%s", username, nameOfVenue, filename);
                imagePaths.add(path);
            } else {
                String path = String.format("./uploads/host_images/%s/venues/%s/events/%s/%s", username, nameOfVenue, nameOfEvent, originalFilename);
                imagePaths.add(path);
            }
        }

        return imagePaths;
    }
}