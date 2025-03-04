package com.softwave.clubstep.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.ClubRepository;


@RestController
public class ClubController {
    
    private final ClubRepository clubRepo;
    


    public ClubController(ClubRepository clubRepo) {
        this.clubRepo = clubRepo;
    }

{/*
Spring endpoints are based on Java Servlets.
Servlets handle HTTP requests and return responses, usually in the form of HTML or JSON.
Spring abstracts this technology, allowing developers to work with annotations like
@RestController and @GetMapping, while the requests are processed in the background by a Servlet container (e.g., Tomcat).
*/}
  
    @PostMapping("api/add")
    public void addClubs() {

        String name = "clubName";
		String district = "clubDistrict";
		String clubAdress = "clubAdress";
		String clubDescription = "clubDescription";
		List<String> picAdresses = new ArrayList<String>();
		picAdresses.add("C:\\vscode-projects\\clubstep-project\\uploads\\images\\AboutBlank\\AboutBlank.png");

        
        clubRepo.save(new Club(name, district, clubAdress, clubDescription, picAdresses));


        System.out.println("Clubs added");
    }
}
