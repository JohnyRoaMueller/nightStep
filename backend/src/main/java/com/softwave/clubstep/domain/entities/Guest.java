package com.softwave.clubstep.domain.entities;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.softwave.clubstep.base.BaseUser;

@Document(collection = "guests")
public class Guest extends BaseUser {

    @Id
    private String id;

    private List<String> followedClubIds;


    public Guest() {}

    {/*getter / setter*/}

    public String getId() { return id; }
    public void setId( String id ) { this.id = id; }

    public List<String> getFollowedClubIds() { return followedClubIds; }
    public void setFollowedClubIds(List<String> followedClubIds) { this.followedClubIds = followedClubIds; }

}
