package com.softwave.clubstep.domain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.Venue;

@RepositoryRestResource
public interface VenueRepository extends CrudRepository<Venue, Long> {

    Optional<Venue> findByName(String name);
    Optional<Venue> findByHost(Host host);
    
}
