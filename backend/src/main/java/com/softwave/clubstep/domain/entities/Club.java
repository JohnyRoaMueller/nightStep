package com.softwave.clubstep.domain.entities;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
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
public class Club{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String name, district, address, description;

    @ElementCollection
    @CollectionTable(name = "club_pic_addresses", joinColumns = @JoinColumn(name = "club_id"))
    @Column(name = "pic_address", columnDefinition = "TEXT")
    private List<String> picAdresses; 

    public Club() {}

    public Club(String name,
     String district, String address, String description, List<String> picAdresses) {
        super();
        this.name = name;
        this.district = district;
        this.address = address;
        this.description = description;
        this.picAdresses = picAdresses;
    }


    /** ↓↓↓↓↓↓ cardinalities  ↓↓↓↓↓↓*/
    /** ↓↓↓↓↓↓ cardinalities  ↓↓↓↓↓↓*/
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private Host host;

    @ManyToMany
    @JoinTable(
        name = "club_follower", 
        joinColumns = @JoinColumn(name = "club_id"), 
        inverseJoinColumns = @JoinColumn(name = "follower_id")
    )
    private List<Guest> follower;


    /* ↓↓↓↓↓↓ getter / setter ↓↓↓↓↓↓ */
    /* ↓↓↓↓↓↓ getter / setter ↓↓↓↓↓↓ */
    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}
    
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    
    public String getadress() {return address;}
    public void setadress(String adress) {this.address = adress;}

    public String getDistrict() {return district;}
    public void setDistrict(String district) {this.district = district;}

    public String getdescription() {return description;}
    public void setdescription(String description) {this.description = description;}

    public List<String> getPicAdresses() {return picAdresses;}
    public void setPicAdresses(List<String> picAdresses) {this.picAdresses = picAdresses;}


    /** ↓↓↓↓↓↓ cardinalitie getter/setter ↓↓↓↓↓↓*/
    /** ↓↓↓↓↓↓ cardinalitie getter/setter ↓↓↓↓↓↓*/
    
}
