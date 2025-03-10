package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.softwave.clubstep.DTO.RegisteringGuestUserDTO;
import com.softwave.clubstep.base.BaseUser;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;


@Entity
public class Guest extends BaseUser {
    


    public Guest() {};


    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @ManyToMany(mappedBy = "followers")
    private List<Venue> followedClubs;

    
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
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
