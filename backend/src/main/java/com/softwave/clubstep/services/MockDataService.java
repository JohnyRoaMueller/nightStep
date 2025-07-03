package com.softwave.clubstep.services;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

import jakarta.transaction.Transactional;

@Service
public class MockDataService {

    // Repositorys //
    
    @Autowired
    HostRepository hostRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    VenueRepository venueRepository;

    // Services //

    @Autowired
    EntityFinder entityFinder;

    @Autowired
    RegistrationService registrationService;

    @Autowired
    VenueService venueService;

    @Autowired
    EventService eventService;



    @Transactional
    public void mockDataInitializer(List<RegistrationHostDTO> hostDTOs, List<VenueDTO> venueDTOs, List<EventDTO> eventDTOs) throws IOException {

        final Logger logger = Logger.getLogger(MockDataService.class.getName());

        for (int i = 0; i < hostDTOs.size(); i++) {

            // prevents duplicates
            if (hostRepository.findByEmail(hostDTOs.get(i).getEmail()).isPresent()) { return; }

            registrationService.registerHostUser(hostDTOs.get(i));

            Host host = entityFinder.getHostOrNull(hostRepository.findByEmail(hostDTOs.get(i).getEmail()));
            venueService.addVenue(venueDTOs.get(i), host);
            
            
            Venue venue = entityFinder.getVenueOrNull(venueRepository.findByHost(host));
            if (i < eventDTOs.size()) {
                if (eventDTOs.get(i) != null) {
                    eventService.addEvent(eventDTOs.get(i), venue);
                }  
            }
        }        
    }

}
