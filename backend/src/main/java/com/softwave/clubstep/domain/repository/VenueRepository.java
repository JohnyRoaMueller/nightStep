package com.softwave.clubstep.domain.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Venue;

@RepositoryRestResource
public interface VenueRepository extends CrudRepository<Venue, Long> {

    List<Venue> findByName(String address);
}
