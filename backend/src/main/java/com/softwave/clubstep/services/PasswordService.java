package com.softwave.clubstep.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

@Service
public class PasswordService {

    @Autowired 
    PasswordEncoder passwordEncoder;

    @Autowired
    UserAuthRepository userAuthRepository;
        
    public boolean comparePasswort(UserAuth currentUserAuth, UserAuth request) {
    /* Password extracted from the HTTP request */
    String requestPassword = request.getPassword();

    String databasePassword = currentUserAuth.getPassword();
        
    if (passwordEncoder.matches(requestPassword, databasePassword)) return true; else return false;
    }
}
