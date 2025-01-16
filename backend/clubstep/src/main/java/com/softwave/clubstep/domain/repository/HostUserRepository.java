package com.softwave.clubstep.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.users.HostUser;


@RepositoryRestResource
public interface HostUserRepository extends CrudRepository<HostUser, Long> {

    Optional<HostUser> findByFirstname(String firstname);

}