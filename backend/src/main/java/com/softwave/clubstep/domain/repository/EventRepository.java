package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;


public interface EventRepository extends MongoRepository<Event, String> {

    Optional<Event> findByName(String name);

    Optional<Event> findByVenue(Venue venue);

}