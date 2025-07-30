package com.softwave.clubstep.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.softwave.clubstep.DTO.UserAuthDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.UploadService;
import com.softwave.clubstep.services.EntityFinder;
import com.softwave.clubstep.services.VenueService;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api")
public class VenueController {

    Logger logger = LoggerFactory.getLogger(VenueController.class);

    {/*--------------- Repositorys --------------- */}
    private final VenueRepository venueRepository;
    private final HostRepository hostRepository;
    private final UserAuthRepository userAuthRepository;
    {/*--------------- Services --------------- */}
    private final VenueService venueService;
    private final JwtService jwtService;
    private final EntityFinder userService;
    private final UploadService uploadService;
    private final EntityFinder entityFinder;

    
    public VenueController
        (
        VenueRepository venueRepository,
        VenueService venueService,
        JwtService jwtService,
        EntityFinder userService,
        HostRepository hostRepository,
        UserAuthRepository userAuthRepository,
        UploadService uploadService,
        EntityFinder entityFinder
        )
        {
        this.venueRepository = venueRepository;
        this.venueService = venueService;
        this.jwtService = jwtService;
        this.userService = userService;
        this.hostRepository = hostRepository;
        this.userAuthRepository = userAuthRepository;
        this.uploadService = uploadService;
        this.entityFinder = entityFinder;
        }

{/*
Spring endpoints are based on Java Servlets.
Servlets handle HTTP requests and return responses, usually in the form of HTML or JSON.
Spring abstracts this technology, allowing developers to work with annotations like
@RestController and @GetMapping, while the requests are processed in the background by a Servlet container (e.g., Tomcat).
*/}    

    @GetMapping("/venues")
    public Iterable<Venue> getClubs() {
        logger.info("/api/clubs reached");
        return venueRepository.findAll();
    }

  
    @GetMapping("/venue/{venueName}")
    public ResponseEntity<Venue> getSingleVenue(@PathVariable("venueName") String venueName) {

        logger.info("/venue/{venueName} reaced");

        Venue currentVenue = entityFinder.getVenueByNameOrNull(venueName);

        if (currentVenue == null)
        {
            return ResponseEntity.badRequest().body(currentVenue);
        }
        else
        {
            return ResponseEntity.ok().body(currentVenue);
        }
    }

    // Mock Controller
    @GetMapping("/myvenue")
    public ResponseEntity<List<Venue>> getVenuesOfHost(HttpServletRequest request) {

        logger.info("/myvenue reached");

        UserAuth userAuth = jwtService.getAuthUser(request);

        String hostUsername = userAuth.getUsername();

        Optional<UserAuth> hostUserAuthOption = userAuthRepository.findByUsername(hostUsername);

        UserAuth currentUserAuth = hostUserAuthOption.get();

        Host currentHost = entityFinder.getHostOrNull(hostRepository.findByUserAuthId(currentUserAuth.getId()));

        List<String> venueIds = currentHost.getOwnedVenueIds();

        List<Venue> venues = venueRepository.findAllById(venueIds);

        logger.info(venues.toString());


        return ResponseEntity.ok().body(venues);
    }

    // Mock Controller
    @GetMapping("/myvenue/{venueName}")
    public ResponseEntity<Venue> getSingleVenueOfHost(@PathVariable("venueName") String venueName, HttpServletRequest request) {

        logger.info("/myvenue/{venueName} reached");

        UserAuth userAuth = jwtService.getAuthUser(request);

        String hostUsername = userAuth.getUsername();

        Optional<UserAuth> hostUserAuthOption = userAuthRepository.findByUsername(hostUsername);

        UserAuth currentUserAuth = hostUserAuthOption.get();

        Host currentHost = entityFinder.getHostByUsernameOrNull(currentUserAuth.getUsername());

        Venue venue = entityFinder.getVenueOfHostOrNull(currentHost);

        logger.info(venue.toString());


        return ResponseEntity.ok().body(venue);
    }

    @PatchMapping("/myvenue/update/{venueName}")
    public ResponseEntity<String> updateVenueProfile(@PathVariable("venueName") String venueName, @ModelAttribute VenueDTO venueData, HttpServletRequest request) throws IOException {

        logger.info("/myvenue/update/{venueName} reached");

        UserAuth userAuth = jwtService.getAuthUser(request);

        String hostUsername = userAuth.getUsername();

        Optional<UserAuth> hostUserAuthOption = userAuthRepository.findByUsername(hostUsername);

        UserAuth currentUserAuth = hostUserAuthOption.get();

        Host host = entityFinder.getHostByUsernameOrNull(currentUserAuth.getUsername());

        Venue venue = entityFinder.getVenueOfHostOrNull(host);

        if (venue.getClass() == Venue.class) {
            logger.info("venue ist da");
        } else {
            logger.info("venue ist nicht da ");
        }


        logger.info(venue.toString());

        uploadService.addVenueImages(venueData.getImageBlobs(), hostUsername, venueName);

        venueService.updateVenue(venue, venueData);


        return ResponseEntity.ok("host updated");
    }
}
