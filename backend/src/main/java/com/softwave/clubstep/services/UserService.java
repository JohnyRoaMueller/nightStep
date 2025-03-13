package com.softwave.clubstep.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.base.BaseUser;
import com.softwave.clubstep.domain.entities.Guest;
import com.softwave.clubstep.domain.entities.Host;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class UserService {
    
    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    GuestRepository guestRepository;

    @Autowired
    HostRepository hostRepository;

    
    public UserAuth getUserAuthOrNull(String username) {
        /* try to find existing user in Database */
        /* var of type "Object" can have a value or not */
        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);
        /* check if userOpt is present */
        if (userOption.isPresent()) return userOption.get(); else return null;
    }    


    public Guest getGuestOrNull(String username) {

        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);

        if (!userOption.isPresent()) return null;

        UserAuth currentUserAuth = userOption.get();

        Guest guest = (Guest) currentUserAuth.getBaseUser();

        return guest;
    }    


    public Host getHostOrNull(String username) {

        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);

        if (!userOption.isPresent()) return null;

        UserAuth currentUserAuth = userOption.get();

        Host host = (Host) currentUserAuth.getBaseUser();

        return host;
    }    

}
