package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;


@RepositoryRestResource
public interface HostRepository extends CrudRepository<Host, Long> {

    Optional<Host> findByFirstname(String firstname);

    Optional<Host> findByUserAuth(UserAuth userAuth);

}