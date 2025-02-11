package com.softwave.clubstep.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.base.RegisteringUser;

import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;

import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

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



    public void registerUser(RegisteringUser registeringUser) {

    
        logger.debug("User role: {}", registeringUser.getRole());

        UserAuth newUserAuth = new UserAuth();

        switch(registeringUser.getRole()) {
            
            case GUEST:
                Guest newGuest = new Guest();
                                            newGuest.setFirstname(registeringUser.getFirstname());
                                            newGuest.setLastname(registeringUser.getLastname());
                                            newGuest.setEmail(registeringUser.getEmail());
                                            newGuest.setGender(registeringUser.getGender());
                                            newGuest.setBirthday(registeringUser.getBirthday());
                                            //-----------------------------------------------------//
                                            newUserAuth.setUsername(registeringUser.getUsername());
                                            newUserAuth.setPassword(passwordEncoder.encode(registeringUser.getPassword()));
                                            newUserAuth.setEmail(registeringUser.getEmail());
                                            newUserAuth.setRole(registeringUser.getRole());       
                guestRepo.save(newGuest);
                userAuthRepo.save(newUserAuth);
                System.out.println("guest created :" + newGuest.getFirstname());   
                System.out.println("guest created :" + newUserAuth.getPassword());      
                break;

            case HOST:
                Host newHost = new Host();
                                            newHost.setFirstname(registeringUser.getFirstname());
                                            newHost.setLastname(registeringUser.getLastname());
                                            newHost.setEmail(registeringUser.getEmail());
                                            newHost.setGender(registeringUser.getGender());
                                            newHost.setBirthday(registeringUser.getBirthday());
                                            //-----------------------------------------------------//
                                            newUserAuth.setUsername(registeringUser.getUsername());
                                            newUserAuth.setPassword(passwordEncoder.encode(registeringUser.getPassword()));
                                            newUserAuth.setEmail(registeringUser.getEmail());
                                            newUserAuth.setRole(registeringUser.getRole());   
                hostRepo.save(newHost);
                userAuthRepo.save(newUserAuth);
                System.out.println("host created:" + newUserAuth.getPassword());
                break;

            default:
                System.out.println("not fitting userrole found");
                break;
        }
    }   
}
