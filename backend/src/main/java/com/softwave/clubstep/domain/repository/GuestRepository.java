package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Guest;

@RepositoryRestResource
public interface GuestRepository extends MongoRepository<Guest, String> {

    Optional<Guest> findByFirstname(String firstname);

}