package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Event;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;

@RepositoryRestResource
public interface EventRepository extends MongoRepository<Event, String> {

    Optional<Event> findByName(String name);

    Optional<Event> findByVenue(Venue venue);

}