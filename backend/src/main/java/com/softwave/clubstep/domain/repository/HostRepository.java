package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;

@Repository
public interface HostRepository extends MongoRepository<Host, String> {

    Optional<Host> findByFirstname(String firstname);
    Optional<Host> findByEmail(String email);
    Optional<Host> findByUserAuthId(String userAuthId);

}