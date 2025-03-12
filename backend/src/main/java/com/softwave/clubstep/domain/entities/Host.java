package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.softwave.clubstep.base.BaseUser;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Host extends BaseUser {
    

    public Host() {};

    
    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "host")
    private List<Venue> ownedClubs;

    
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


                {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    public List<Venue> getOwnedClub() {
        return ownedClubs;
    }

    public void setOwnedClub(List<Venue> ownedClubs) {
        this.ownedClubs = ownedClubs;
    }
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
