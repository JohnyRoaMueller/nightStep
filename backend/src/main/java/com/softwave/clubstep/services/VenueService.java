package com.softwave.clubstep.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.checkerframework.checker.units.qual.A;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

@Service
public class VenueService {

    Logger logger = LoggerFactory.getLogger(VenueService.class);

    @Autowired
    VenueRepository venueRepository;

    @Autowired
    HostRepository hostRepository;

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    EntityFinder userService;

    @Autowired
    UploadService uploadService;

    @Autowired
    EntityFinder entityFinder;


    
    public void addVenue(VenueDTO venueData, Host host) throws IOException {

        String name = venueData.getName();
        String type = venueData.getType();
        int capacity = venueData.getCapacity();
        String city = venueData.getCity();
        String disctrict = defineDistrict(venueData.getPostalCode());
        String street = venueData.getStreet();
        String houseNumber = venueData.getHouseNumber();
        int postalCode = venueData.getPostalCode();
        String description = null;
        List<MultipartFile> imageBlobs = venueData.getImageBlobs();

        UserAuth hostUserAuth = entityFinder.getUserAuthOrNull(userAuthRepository.findByHost(host));
        List<String> picAddresses = extractVenueImagePaths(imageBlobs, hostUserAuth.getUsername(), name);
        uploadService.addVenueImages(imageBlobs, hostUserAuth.getUsername(), name);    

        Venue newVenue = new Venue(name, type, capacity, city, disctrict, street, houseNumber, postalCode, description, picAddresses, host, null, null);

        venueRepository.save(newVenue);

        logger.info("club added to db");
    }

    public String defineDistrict(int postcode) {
        if (postcode >= 10585 && postcode <= 14199) return "Charlottenburg-Wilmersdorf";
        else if (postcode >= 10243 && postcode <= 10999) return "Friedrichshain-Kreuzberg";
        else if (postcode >= 10315 && postcode <= 13059) return "Lichtenberg";
        else if (postcode >= 12619 && postcode <= 13959) return "Marzahn-Hellersdorf";
        else if (postcode >= 10115 && postcode <= 10559) return "Mitte";
        else if (postcode >= 12043 && postcode <= 12359) return "Neukölln";
        else if (postcode >= 13156 && postcode <= 13189) return "Pankow";
        else if (postcode >= 13403 && postcode <= 13469) return "Reinickendorf";
        else if (postcode >= 13581 && postcode <= 13599) return "Spandau";
        else if (postcode >= 12157 && postcode <= 14169) return "Steglitz-Zehlendorf";
        else if (postcode >= 12043 && postcode <= 14199) return "Tempelhof-Schöneberg";
        else if (postcode >= 12435 && postcode <= 12559) return "Treptow-Köpenick";
        else return "Unbekannter Bezirk";
    }

    public List<String> extractVenueImagePaths(List<MultipartFile> images, String username, String nameOfVenue) {
        List<String> imagePaths = new ArrayList<String>();


        for (MultipartFile image : images) {
            logger.info(image.getOriginalFilename() + " original");
        }
       
        for (MultipartFile image : images) {

            if (image.getOriginalFilename().startsWith("./uploads/host_images/") ) {
                String filename = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("/") + 1);
                String path = String.format("./uploads/host_images/%s/venues/%s/%s", username, nameOfVenue, filename); 
            imagePaths.add(path);
                continue;
            }

            String path = String.format("./uploads/host_images/%s/venues/%s/%s", username, nameOfVenue, image.getOriginalFilename()); 
            imagePaths.add(path);
        }
        return imagePaths;
    }


    public void updateVenue(Venue venue, VenueDTO newVenueData) {
        venue.setName(newVenueData.getName());
        venue.setType(newVenueData.getType());
        venue.setCapacity(newVenueData.getCapacity());
        venue.setCity(newVenueData.getCity());
        venue.setDistrict(defineDistrict(newVenueData.getPostalCode()));
        venue.setHouseNumber(newVenueData.getHouseNumber()); 
        venue.setPostalCode(newVenueData.getPostalCode());
        venue.setDescription(newVenueData.getDescription());

        if (newVenueData.getImageBlobs() != null) {
            venue.setPicAddresses(extractVenueImagePaths(newVenueData.getImageBlobs(), venue.getHost().getUserAuth().getUsername(), newVenueData.getName()));
        }
        venueRepository.save(venue);
        logger.info("update setted");
    }
  
}
