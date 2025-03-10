package com.softwave.clubstep.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.repository.VenueRepository;


@RestController
public class ClubController {
    
    private final VenueRepository clubRepo;
    


    public ClubController(VenueRepository clubRepo) {
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

        System.out.println("Clubs added");
    }
}
