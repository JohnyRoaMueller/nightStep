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

import com.softwave.clubstep.base.RegisteringUser;
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
Spring-Endpunkte basieren auf Java-Servlets.
Servlets verarbeiten HTTP-Anfragen und geben Antworten zurück (meist HTML oder JSON).
Spring abstrahiert diese Technik, sodass Entwickler mit Annotationen wie
@RestController und @GetMapping arbeiten können,
während die Anfragen im Hintergrund durch einen Servlet-Container (z.B. Tomcat) verarbeitet werden.
*/}


    @GetMapping("api/home")
    public Iterable<Club> getClubs() {
        return clubRepo.findAll();
    }

    
    @PostMapping("api/add")
    public void addClubs() {

        String name = "clubName";
		String district = "clubDistrict";
		String clubAdress = "clubAdress";
		String clubDescription = "clubDescription";
		List<String> picAdresses = new ArrayList<String>();
		picAdresses.add("C:\\vscode-projects\\clubstep-project\\uploads\\images\\AboutBlank\\AboutBlank.png");

        clubRepo.save(new Club(name, district, clubAdress, clubDescription, picAdresses));
        System.out.println("Club added");
    }
}
