package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.base.BaseUser;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;


@Entity
public class Guest extends BaseUser {
    


    public Guest() {};


    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @ManyToMany(mappedBy = "followers")
    @JsonManagedReference
    private List<Venue> followedClubs;

    @OneToOne(mappedBy = "guest")
    @JsonManagedReference
    private UserAuth userAuth;
    
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


                {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    public List<Venue> getFollowedClub() {
        return followedClubs;
    }

    public void setFollowedClub(List<Venue> followedClubs) {
        this.followedClubs = followedClubs;
    }

    public UserAuth getUserAuth() {
        return userAuth;
    }

    public void setUserAuth(UserAuth userAuth) {
        this.userAuth = userAuth;
    }
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
