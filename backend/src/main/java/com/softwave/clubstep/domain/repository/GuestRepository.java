package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.softwave.clubstep.domain.entities.Guest;

public interface GuestRepository extends MongoRepository<Guest, String> {

    Optional<Guest> findByFirstname(String firstname);

}