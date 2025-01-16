package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.users.GuestUser;


@RepositoryRestResource
public interface GuestUserRepository extends CrudRepository<GuestUser, Long> {

    Optional<GuestUser> findByFirstname(String firstname);

}