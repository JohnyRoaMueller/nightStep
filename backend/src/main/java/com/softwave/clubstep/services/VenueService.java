package com.softwave.clubstep.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.DTO.VenuedataUpdateDTO;
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
    UserService userService;

    @Autowired
    UploadService uploadService;

    
    public void addVenue(RegistrationHostUserDTO registeringHost) {
        String name = registeringHost.getNameOfVenue();
        String type = registeringHost.getTypeOfVenue();
        int capacity = Integer.parseInt(registeringHost.getCapacity());
        String city = registeringHost.getCityOfVenue();
        String disctrict = defineDistrict(Integer.parseInt(registeringHost.getPostcodeOfVenue()));
        String street = registeringHost.getStreetOfVenue();
        String houseNumber = registeringHost.getHousenumberOfVenue();
        String postalCode = registeringHost.getPostcodeOfVenue();
        String description = null;
        List<String> picAddresses = extractImagePaths(registeringHost.getImages(), registeringHost.getUsername());
        Host host = userService.getHostOrNull(registeringHost.getUsername());

        if (host != null) { logger.info("der host ist da!");} else logger.info("der host ist nicht da!");

        venueRepository.save(new Venue(name, type, capacity, city, disctrict, street, houseNumber, postalCode, description, picAddresses, host, null, null));

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

    public List<String> extractImagePaths(List<MultipartFile> images, String username) {
        List<String> imagePaths = new ArrayList<String>();

        for (MultipartFile image : images) {
            if (image.getOriginalFilename().startsWith("/uploads/host_images/")) {
                String filename = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("/") + 1);
                String path = String.format("/uploads/host_images/%s/%s", username, filename); 
                imagePaths.add(path);
                continue;
            }

            String path = String.format("/uploads/host_images/%s/%s", username, image.getOriginalFilename()); 
            imagePaths.add(path);
        }
        return imagePaths;
    }


    public void updateVenue(Venue venue, VenuedataUpdateDTO newVenueData) {
        venue.setName(newVenueData.getName());
        venue.setType(newVenueData.getType());
        venue.setCapacity(newVenueData.getCapacity());
        venue.setCity(newVenueData.getCity());
        venue.setDistrict(defineDistrict(Integer.parseInt(newVenueData.getPostalCode())));
        venue.setHouseNumber(newVenueData.getHouseNumber()); 
        venue.setPostalCode(newVenueData.getPostalCode());
        venue.setDescription(newVenueData.getDescription());

        if (newVenueData.getImageBlobs() != null) {
            venue.setPicAddresses(extractImagePaths(newVenueData.getImageBlobs(), venue.getHost().getUserAuth().getUsername()));
        }
        venueRepository.save(venue);
        logger.info("update setted");
    }


    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //
    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //    
    public Venue getVenueOrNull(String venuename) {
        
        Optional<Venue> venueOption = venueRepository.findByName(venuename);

        if (venueOption.isPresent())
        {
            return venueOption.get();
        }
        else
        {
            return null;
        }
    }

    public Venue getVenueOfHostOrNull(Host host) {

        Optional<Venue> venue = venueRepository.findByHost(host);

        if (venue.isPresent()) return venue.get();
        if (!venue.isPresent()) return null;

        return null;

    }
    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //
    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //   
}

/*
 *  private String name;
    private String type;
    private int capacity;
    private String city;
    private String district;
    private String street;
    private String houseNumber;
    private String postalCode;
    private String description;
    private List<String> picAddresses;
 */