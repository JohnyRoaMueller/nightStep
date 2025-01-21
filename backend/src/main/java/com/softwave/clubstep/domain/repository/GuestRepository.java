package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Guest;


@RepositoryRestResource
public interface GuestRepository extends CrudRepository<Guest, Long> {



    Optional<Guest> findByFirstname(String firstname);

}