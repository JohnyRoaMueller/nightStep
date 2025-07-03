package com.softwave.clubstep.services;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.base.BaseUser;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

@Service
public class EntityFinder {

    Logger logger = LoggerFactory.getLogger(getClass());
    
    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    GuestRepository guestRepository;

    @Autowired
    HostRepository hostRepository;

    @Autowired
    VenueRepository venueRepository;






    
    public UserAuth getUserAuthByUsernameOrNull(String username) {
        /* try to find existing user in Database */
        /* var of type "Object" can have a value or not */
        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);
        /* check if userOpt is present */
        if (userOption.isPresent()) return userOption.get(); else return null;
    }  

    public UserAuth getUserAuthOrNull(Optional<UserAuth> userAuthOption) {
        if (userAuthOption.isEmpty()) { return null; }
        else return userAuthOption.get();
    }






    public Guest getGuestOrNull(String username) {

        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);

        if (!userOption.isPresent()) return null;

        UserAuth currentUserAuth = userOption.get();

        Guest guest = currentUserAuth.getGuest();

        return guest;
    }   
    
    






    public Host getHostByUsernameOrNull(String username) {

        logger.info(username);

        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);

        if (userOption.isEmpty()) {   
            logger.info("host not found");
            return null;
        }

        UserAuth currentUserAuth = userOption.get();

        logger.info("currentUserAuth: {}", currentUserAuth);
        logger.info("currentUserAuth.username: {}", currentUserAuth.getUsername());


        Host host = currentUserAuth.getHost();

        if (host == null) {
            logger.info("Host is null for username: {}", username);
        }

        return host;
    }    


    public Host getHostOrNull(Optional<Host> hostOption) {
        if (hostOption.isEmpty()) {return null;}
        else return hostOption.get();
    }

    public Event getEventOrNull(Optional<Event> eventOption) {
        if (eventOption.isEmpty()) { return null; }
        else return eventOption.get();
    }






    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //
    // Get?OrNull //// Get?OrNull //// Get?OrNull //// Get?OrNull //  
    
    public Venue getVenueOrNull(Optional<Venue> venueOption) {
        if (venueOption.isEmpty()) { return null; }
        else return venueOption.get();
    }

    public Venue getVenueByNameOrNull(String venuename) {
        
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
