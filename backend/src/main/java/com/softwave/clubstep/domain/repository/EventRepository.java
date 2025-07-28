package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {

    Optional<Event> findByName(String name);
    Optional<Event> findByVenueId(Venue venueId);

}