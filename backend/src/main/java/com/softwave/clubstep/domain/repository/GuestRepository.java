package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.Host;

@Repository
public interface GuestRepository extends MongoRepository<Guest, String> {

    Optional<Guest> findByFirstname(String firstname);
    Optional<Guest> findByUserAuthId(String userAuthId);
    Optional<Guest> findByEmail(String email);

}