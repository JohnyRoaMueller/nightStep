package com.softwave.clubstep.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class UserService {
    
    @Autowired
    UserAuthRepository userAuthRepository;

    public UserAuth getUserOrNull(String username) {
        /* try to find existing user in Database */
        /* var of type "Object" can have a value or not */
        Optional<UserAuth> userOption = userAuthRepository.findByUsername(username);
        /* check if userOpt is present */
        if (userOption.isPresent()) return userOption.get(); else return null;
    }    
}
