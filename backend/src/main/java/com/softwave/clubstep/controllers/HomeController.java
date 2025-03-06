package com.softwave.clubstep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.repository.ClubRepository;

@RestController
public class HomeController {
    
    @Autowired
    ClubRepository clubRepository;

    @GetMapping("/")
    public Iterable<Club> getClubs() {
        return clubRepository.findAll();
    }
}
