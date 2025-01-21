package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.softwave.clubstep.base.BaseUser;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Host extends BaseUser {
    

    public Host() {};

    
    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "host")
    private List<Club> ownedClubs;

    
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


                {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    public List<Club> getFollowedClub() {
        return ownedClubs;
    }

    public void setFollowedClub(List<Club> ownedClubs) {
        this.ownedClubs = ownedClubs;
    }
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
