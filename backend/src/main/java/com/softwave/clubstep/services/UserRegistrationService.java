package com.softwave.clubstep.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.base.RegisteringUser;

import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.UserAuth;

import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class UserRegistrationService {


    private PasswordEncoder passwordEncoder;

    private UserAuthRepository userAuthRepo;

    private GuestRepository guestRepo;

    private HostRepository hostRepo;


    public UserRegistrationService(PasswordEncoder passwordEncoder, UserAuthRepository userAuthRepo, GuestRepository guestRepo, HostRepository hostRepo) {
        this.passwordEncoder = passwordEncoder;
        this.userAuthRepo = userAuthRepo;
        this.guestRepo = guestRepo;
        this.hostRepo = hostRepo;
    }





    public void registerUser(RegisteringUser registeringUser) {

    
        System.out.println(registeringUser);


        switch(registeringUser.getRole()) {
            case GUEST:
                Guest newGuest = new Guest();
                    newGuest.setSalutation(registeringUser.getSalutation());
                    newGuest.setFirstname(registeringUser.getFirstname());
                    newGuest.setLastname(registeringUser.getLastname());
                    newGuest.setStreet(registeringUser.getStreet());
                    newGuest.setHousenumber(registeringUser.getHousenumber());
                    newGuest.setPhonenumber(registeringUser.getPhonenumber());
                UserAuth newUserAuth = new UserAuth();
                    newUserAuth.setEmail(registeringUser.getEmail());
                    newUserAuth.setPassword(passwordEncoder.encode(registeringUser.getPassword()));
                    newUserAuth.setRole(registeringUser.getRole());       
                guestRepo.save(newGuest);
                userAuthRepo.save(newUserAuth);
                System.out.println("guest created :" + newGuest);       
                break;

            case HOST:
                System.out.println("host created");
                break;

            default:
                System.out.println("not fitting userrole found");
                break;
        }
    }   
}
