package com.softwave.clubstep.controllers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.repository.ClubRepository;

@RestController
@RequestMapping("/api")
public class HomeController {

    Logger logger = LoggerFactory.getLogger(getClass());
    
    @Autowired
    ClubRepository clubRepository;

    @GetMapping("/clubs")
    public Iterable<Club> getClubs() {
        logger.info("/ reached");
        return clubRepository.findAll();
    }
}
