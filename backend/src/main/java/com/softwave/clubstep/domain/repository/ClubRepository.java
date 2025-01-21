package com.softwave.clubstep.domain.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.softwave.clubstep.domain.entities.Club;

@RepositoryRestResource
public interface ClubRepository extends CrudRepository<Club, Long> {



    List<Club> findByAddress(String address);
}
