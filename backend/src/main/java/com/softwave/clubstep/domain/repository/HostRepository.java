package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;


public interface HostRepository extends MongoRepository<Host, String> {

    Optional<Host> findByFirstname(String firstname);
    Optional<Host> findByUserAuth(UserAuth userAuth);
    Optional<Host> findByEmail(String email);

}