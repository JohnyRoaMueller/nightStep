package com.softwave.clubstep.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.DTO.RegistrationGuestDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;

import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

import jakarta.transaction.Transactional;

@Service
public class RegistrationService {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationService.class);

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserAuthRepository userAuthRepo;
    @Autowired
    private GuestRepository guestRepo;
    @Autowired
    private HostRepository hostRepo;
    @Autowired
    private EntityFinder entityFinder;

    public void registerGuestUser(RegistrationGuestDTO registeringUser) {

        UserAuth newUserAuth = new UserAuth();
        Guest newGuest = new Guest();

            newUserAuth.setUsername(registeringUser.getUsername());
            newUserAuth.setPassword(passwordEncoder.encode(registeringUser.getPassword()));
            newUserAuth.setEmail(registeringUser.getEmail());
            newUserAuth.setRole(registeringUser.getRole()); 
            //-----------------------------------------------------//
            userAuthRepo.save(newUserAuth);


            newGuest.setFirstname(registeringUser.getFirstname());
            newGuest.setLastname(registeringUser.getLastname());
            newGuest.setEmail(registeringUser.getEmail());
            newGuest.setGender(registeringUser.getGender());
            newGuest.setBirthday(registeringUser.getBirthday());
            newGuest.setUserAuthId(entityFinder.getUserAuthOrNull(userAuthRepo.findByUsername(newUserAuth.getUsername())).getId());
            //-----------------------------------------------------//
            guestRepo.save(newGuest);

                logger.info("new Guest created: " + "username: " + newUserAuth.getUsername() + " role: " + newUserAuth.getRole());   
    }   

    public void registerHostUser(RegistrationHostDTO registeringUser) {

        UserAuth newUserAuth = new UserAuth();
        Host newHost = new Host();

            newUserAuth.setUsername(registeringUser.getUsername());
            newUserAuth.setPassword(passwordEncoder.encode(registeringUser.getPassword()));
            newUserAuth.setEmail(registeringUser.getEmail());
            newUserAuth.setRole(registeringUser.getRole());  
            //-----------------------------------------------------//
            userAuthRepo.save(newUserAuth);


            newHost.setFirstname(registeringUser.getFirstname());
            newHost.setLastname(registeringUser.getLastname());
            newHost.setEmail(registeringUser.getEmail());
            newHost.setGender(registeringUser.getGender());
            newHost.setBirthday(registeringUser.getBirthday());
            newHost.setUserAuthId(entityFinder.getUserAuthOrNull(userAuthRepo.findByUsername(newUserAuth.getUsername())).getId());
            //-----------------------------------------------------//
            hostRepo.save(newHost);

            logger.info("new Host created: " + "username: " + newUserAuth.getUsername() + " role: " + newUserAuth.getRole());   

    }   
}
