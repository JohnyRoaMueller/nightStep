package com.softwave.clubstep.domain.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.UserAuth;

@RepositoryRestResource
public interface UserAuthRepository extends CrudRepository<UserAuth, Long> {
    

    Optional<UserAuth> findByEmail(String email);

}
