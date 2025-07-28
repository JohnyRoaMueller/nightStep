package com.softwave.clubstep.services;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.domain.repository.EventRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;

@Service
public class MockDataService {

    @Autowired
    private HostRepository hostRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private EntityFinder entityFinder;

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private VenueService venueService;

    @Autowired
    private EventService eventService;

    private static final Logger logger = LoggerFactory.getLogger(MockDataService.class);

    public void mockDataInitializer(List<RegistrationHostDTO> hostDTOs, List<VenueDTO> venueDTOs, List<EventDTO> eventDTOs) throws IOException {
        for (int i = 0; i < hostDTOs.size(); i++) {

            if (hostRepository.findByEmail(hostDTOs.get(i).getEmail()).isPresent()) return;

            registrationService.registerHostUser(hostDTOs.get(i));

            Host host = entityFinder.getHostOrNull(hostRepository.findByEmail(hostDTOs.get(i).getEmail()));
            venueService.addVenue(venueDTOs.get(i), host);

            Venue venue = entityFinder.getVenueOrNull(venueRepository.findByHostId(host.getId()));
            if (i < eventDTOs.size() && eventDTOs.get(i) != null) {
                eventService.addEvent(eventDTOs.get(i), venue);
            }
        }
    }
}