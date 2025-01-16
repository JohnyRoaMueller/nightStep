package com.softwave.clubstep.domain.entities.users;

import java.util.List;

import com.softwave.clubstep.base.AppUser;
import com.softwave.clubstep.domain.entities.Club;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;


@Entity
public class GuestUser extends AppUser {
    

    public GuestUser() {};

    public GuestUser(
    List<Club> followedClubs
    )
    {
    this.followedClubs = followedClubs;
    }


    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @ManyToMany(mappedBy = "follower")
    private List<Club> followedClubs;

    
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


                {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    public List<Club> getFollowedClub() {
        return followedClubs;
    }

    public void setFollowedClub(List<Club> followedClubs) {
        this.followedClubs = followedClubs;
    }
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
