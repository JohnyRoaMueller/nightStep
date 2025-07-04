package com.softwave.clubstep.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.controllers.EventController;
import com.softwave.clubstep.controllers.RegistrationController;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**

@Service
public class ServerstartService {

    @Autowired
    RegistrationService registrationService;

    @Autowired
    EntityFinder userService;

    @Autowired
    UploadService uploadService;

    @Autowired
    VenueService venueService;

    @Autowired
    HostRepository hostRepository;

    @Autowired 
    UserAuthRepository userAuthRepository;

    @Autowired
    VenueRepository venueRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    EventController eventController;


    Logger logger = LoggerFactory.getLogger(ServerstartService.class);


    public void createHostUserByServerstart(@ModelAttribute RegistrationHostDTO registeringHost, List<File> images, List<Event> events) {

        if (userAuthRepository.findByUsername(registeringHost.getUsername()).isPresent()) return;

        logger.info("let's create some Account by Serverstart");

        registrationService.registerHostUser(registeringHost);

        for (File image : images) {
            logger.info("addImages begins");

            // Erstelle das Zielverzeichnis, falls es nicht existiert
            String newDirPath = String.format("./uploads/host_images/%s/venues/%s", registeringHost.getUsername(), registeringHost.getNameOfVenue());
            File dir = new File(newDirPath);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            try (FileInputStream fileInputStream = new FileInputStream(image)) {
                byte[] buffer = new byte[(int) image.length()];
                fileInputStream.read(buffer);

                String newImagePath = String.format("./uploads/host_images/%s/venues/%s/%s", registeringHost.getUsername(), registeringHost.getNameOfVenue(), image.getName());

                File targetFile = new File(newImagePath);

                // Schreiben des Dateiinhalts in die Ziel-Datei
                try (OutputStream outStream = new FileOutputStream(targetFile)) {
                    outStream.write(buffer);
                }

            } catch (IOException e) {
                logger.error("Error while processing the image: " + image.getName(), e);
            }
    }

    String name = registeringHost.getNameOfVenue();
    String type = registeringHost.getTypeOfVenue();
    int capacity = Integer.parseInt(registeringHost.getCapacity());
    String city = registeringHost.getCityOfVenue();
    String disctrict = venueService.defineDistrict(Integer.parseInt(registeringHost.getPostcodeOfVenue()));
    String street = registeringHost.getStreetOfVenue();
    String houseNumber = registeringHost.getHousenumberOfVenue();
    String postalCode = registeringHost.getPostcodeOfVenue();
    String description = null;
    List<String> picAddresses = new ArrayList<>();

    for (File image : images) {
        String path = String.format("./uploads/host_images/%s/venues/%s/%s", registeringHost.getUsername(), registeringHost.getNameOfVenue(), image.getName()); 
        picAddresses.add(path);
    }


    Host host = userService.getHostByUsernameOrNull(registeringHost.getUsername());

    System.out.println(registeringHost.getUsername());

    System.out.println(String.format("XXX:%s", host));

    Venue firstVenue = new Venue(name, type, capacity, city, disctrict, street, houseNumber, postalCode, description, picAddresses, host, null, events);

    venueRepository.save(firstVenue);

    if (events.get(0) != null) {
        Event event = events.get(0);
        event.setVenue(firstVenue);
        eventRepository.save(event);
        
    }

    }
}


 */