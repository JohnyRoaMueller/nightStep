package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;

public interface VenueRepository extends MongoRepository<Venue, String> {

    Optional<Venue> findByName(String name);
    Optional<Venue> findByHost(Host host);
    Optional<Venue> findByHostId(String id);

}