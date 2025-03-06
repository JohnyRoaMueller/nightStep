package com.softwave.clubstep.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.ClubRepository;

@Service
public class ClubService {

    Logger logger = LoggerFactory.getLogger(ClubService.class);

    @Autowired
    ClubRepository clubRepository;
    
    public void addClub(RegistrationHostUserDTO registeringHost) {
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

        clubRepository.save(new Club(name, type, capacity, city, disctrict, street, houseNumber, postalCode, description, picAddresses));

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
            String path = String.format("D:\\vscode-projects\\clubstep-project\\backend\\src\\main\\resources\\static\\uploads\\hostImages\\%s\\%s", username, image.getOriginalFilename()); 
            imagePaths.add(path);
        }

        return imagePaths;
    }


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
