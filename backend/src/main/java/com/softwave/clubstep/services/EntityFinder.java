package com.softwave.clubstep.services;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return userAuthRepository.findByUsername(username).orElse(null);
    }

    public UserAuth getUserAuthOrNull(Optional<UserAuth> userAuthOption) {
        return userAuthOption.orElse(null);
    }

    public Guest getGuestOrNull(String username) {
        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);
        if (userOption.isEmpty()) return null;

        UserAuth currentUserAuth = userOption.get();
        String guestId = currentUserAuth.getUserRefId();
        if (guestId == null) return null;

        return guestRepository.findById(guestId).orElse(null);
    }

    public Host getHostByUsernameOrNull(String username) {
        logger.info("Suche Host für Username: {}", username);
        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);
        if (userOption.isEmpty()) {
            logger.info("Host nicht gefunden");
            return null;
        }

        UserAuth currentUserAuth = userOption.get();
        String hostId = currentUserAuth.getUserRefId();
        if (hostId == null) {
            logger.info("Host-ID ist null für Username: {}", username);
            return null;
        }

        return hostRepository.findById(hostId).orElse(null);
    }

    public Host getHostOrNull(Optional<Host> hostOption) {
        return hostOption.orElse(null);
    }

    public Event getEventOrNull(Optional<Event> eventOption) {
        return eventOption.orElse(null);
    }

    public Venue getVenueOrNull(Optional<Venue> venueOption) {
        return venueOption.orElse(null);
    }

    public Venue getVenueByNameOrNull(String venueName) {
        return venueRepository.findByName(venueName).orElse(null);
    }

    public Venue getVenueOfHostOrNull(Host host) {
        if (host == null) return null;
        return venueRepository.findByHost(host).orElse(null);
    }
}
