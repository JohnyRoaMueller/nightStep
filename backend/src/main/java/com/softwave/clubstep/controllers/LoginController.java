package com.softwave.clubstep.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import com.softwave.clubstep.DTO.UserAuthDTO;
import com.softwave.clubstep.domain.entities.UserAuth;
import com.softwave.clubstep.domain.repository.UserAuthRepository;
import com.softwave.clubstep.services.CookieService;
import com.softwave.clubstep.services.JwtService;
import com.softwave.clubstep.services.PasswordService;
import com.softwave.clubstep.services.EntityFinder;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value = "/api")
public class LoginController {

    Logger logger = LoggerFactory.getLogger(LoginController.class);
    
    @Autowired
    JwtService jwtProvider;

    @Autowired
    UserAuthRepository userAuthRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    PasswordService passwordService;

    @Autowired
    CookieService cookieService;

    @Autowired
    EntityFinder userService;


    @PostMapping(value = "/login")
    public ResponseEntity<UserAuth> login(@RequestBody UserAuth loginRequest, HttpServletResponse response) {
        System.out.println("api/login erreicht");

        UserAuth currentUser = userService.getUserAuthByUsernameOrNull(loginRequest.getUsername());

        /** checking if user exist, if not returning a error message */
        if (currentUser == null) {
            UserAuth userAuth = new UserAuth();
            // userAuth.setErrorMessage("user not found");
            logger.info("user login not successfull: " + "user not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(userAuth);
        }

        /** comparing the password of existing user with the password
         *  offered in the http request
         */
        if (!passwordService.comparePasswort(currentUser, loginRequest)) {
            UserAuth userAuth = new UserAuth();
            //  userAuth.setErrorMessage("password not correct");
            logger.info("user login not successfull: " + "password not correct");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(userAuth);
        }


        /** Here we put the jwt in the cookie-header of the http response */
        response.addCookie(
            cookieService.createJwtAuthCookie(
                jwtProvider.getToken(currentUser)));
        
        UserAuth userAuth = new UserAuth();
        userAuth.setUsername(currentUser.getUsername());
        userAuth.setRole(currentUser.getRole());

        logger.info("user login successfull: " + currentUser.getUsername() + " " + currentUser.getRole());

        return ResponseEntity.ok(userAuth);
        }
}