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

    @Autowired
    private PasswordEncoder passwordEncoder;


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

        String name = "clubName";
		String district = "clubDistrict";
		String clubAdress = "clubAdress";
		String clubDescription = "clubDescription";
		List<String> picAdresses = new ArrayList<String>();
		picAdresses.add("C:\\vscode-projects\\clubstep-project\\uploads\\images\\AboutBlank\\AboutBlank.png");

        clubRepo.save(new Club(name, district, clubAdress, clubDescription, picAdresses));
    }

    @CrossOrigin(origins = "http://localhost:5173") // Erlaube den Zugriff nur von diesem Origin
    @PostMapping("/register")
    public void createUser(@RequestBody RegisteringUser registeringUser) {

        System.out.println(registeringUser);

        switch(registeringUser.getRole()) {
            case GUEST:
                System.out.println("guest created");
                Guest newGuest = new Guest();
                    newGuest.setSalutation(registeringUser.getSalutation());
                    newGuest.setFirstname(registeringUser.getFirstname());
                    newGuest.setLastname(registeringUser.getLastname());
                    newGuest.setStreet(registeringUser.getStreet());
                    newGuest.setHousenumber(registeringUser.getHousenumber());
                    newGuest.setPhonenumber(registeringUser.getPhonenumber());
                    System.out.println("Guest Lastnaem: " + newGuest.getLastname() + "Guest housenumber: " + newGuest.getHousenumber());
                UserAuth newUserAuth = new UserAuth();
                    newUserAuth.setEmail(registeringUser.getEmail());
                    newUserAuth.setPassword(passwordEncoder.encode(""));
                    newUserAuth.setRole(registeringUser.getRole());
                    System.out.println(newUserAuth.getPassword());
                    
                    
                break;

            case HOST:
                System.out.println("host created");
                break;

            default:
                System.out.println("not fitting userrole found");
        }
    }
}
