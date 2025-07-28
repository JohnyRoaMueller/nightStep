package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.softwave.clubstep.domain.entities.Venue;

@Repository
public interface VenueRepository extends MongoRepository<Venue, String> {

    Optional<Venue> findByName(String name);
    Optional<Venue> findByHostId(String id);

}