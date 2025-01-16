package com.softwave.clubstep.domain.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.softwave.clubstep.base.AppUser;
import com.softwave.clubstep.domain.entities.users.GuestUser;
import com.softwave.clubstep.domain.entities.users.HostUser;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Club {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String name, adress, description;

    public Club() {}

    public Club(String name, String adress, String description) {
        super();
        this.name = name;
        this.adress = adress;
        this.description = description;
    }


    /** ↓↓↓ cardinalities  ↓↓↓*/
    /** ↓↓↓ cardinalities  ↓↓↓*/
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private HostUser host;



    @ManyToMany
    @JoinTable(
        name = "club_follower", 
        joinColumns = @JoinColumn(name = "club_id"), 
        inverseJoinColumns = @JoinColumn(name = "follower_id")
    )
    private List<GuestUser> follower;
    /** ↑↑↑ cardinalities ↑↑↑ */
    /** ↑↑↑ cardinalities ↑↑↑ */


    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getadress() {return adress;}
    public void setadress(String adress) {this.adress = adress;}

    public String getdescription() {return description;}
    public void setdescription(String description) {this.description = description;}

    public AppUser getHost() {return host;}
    public void setHost(HostUser host) {this.host = host;}


}
