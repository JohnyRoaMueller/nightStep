package com.softwave.clubstep.security.authentication;

import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;

/* This service check if the mail-adress is already taken -
 * if not, 
 */

@Service
public class UserDetailsServiceImpl implements UserDetailsService  {
    
    private UserAuthRepository userAuthRepository;

    public UserDetailsServiceImpl() {
        this.userAuthRepository = userAuthRepository;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        String email = username;

        Optional<UserAuth> user = userAuthRepository.findByEmail(username);
        UserBuilder builder = null;
        if(user.isPresent()) {
            UserAuth currentUser = user.get();
                builder = User.withUsername(username);
                builder.password(currentUser.getPassword());
                // builder.authorities(currentUser.getRole());
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();

    }

    


}
