package com.softwave.clubstep.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.entities.Club;
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

    @CrossOrigin(origins = "http://localhost:5173") // Erlaube den Zugriff nur von diesem Origin
    @GetMapping("/home")
    public Iterable<Club> getClubs() {
        return clubRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:5173") // Erlaube den Zugriff nur von diesem Origin
    @PostMapping("/add")
    public void addClubs() {
        clubRepo.save(new Club("ClubOne", "clubAdress", "clubDescription"));
    }

}
