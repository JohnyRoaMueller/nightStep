package com.softwave.clubstep.domain.entities;

import com.softwave.clubstep.enums.Roles;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userAuths")
public class UserAuth {

    @Id
    private String id;

    private String username;

    private String password;

    private String email;

    private Roles role;

    // refs
    private String userRefId;

    
    public UserAuth() {}

    public UserAuth(
        String username,
        String password,
        String email,
        Roles role,
        String userRefId
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.userRefId = userRefId;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Roles getRole() { return role; }
    public void setRole(Roles role) { this.role = role; }

    public String getUserRefId() { return userRefId; }
    public void setUserRefId(String userRefId) { this.userRefId = userRefId; }
}
