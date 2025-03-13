package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.softwave.clubstep.base.BaseUser;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Host extends BaseUser {
    

    public Host() {};

    
    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "host", cascade = CascadeType.ALL)
    private List<Venue> ownedVenues;

    
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


                {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    public List<Venue> getOwnedVenues() {
        return ownedVenues;
    }

    public void setOwnedVenues(List<Venue> ownedVenues) {
        this.ownedVenues = ownedVenues;
    }
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
                {/*getter / setter */}

}
