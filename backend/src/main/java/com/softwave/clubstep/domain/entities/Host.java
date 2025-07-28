package com.softwave.clubstep.domain.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.softwave.clubstep.base.BaseUser;

@Document(collection = "hosts")
public class Host extends BaseUser {

    @Id
    private String id;

    private List<String> ownedVenueIds;

    
    public Host() {}

    {/*getter / setter*/}

    public String getId() { return id; }
    public void setId( String id ) { this.id = id; }

    public List<String> getOwnedVenueIds() { return ownedVenueIds; }
    public void setOwnedVenueIds(List<String> ownedVenueIds) { this.ownedVenueIds = ownedVenueIds; }



}
