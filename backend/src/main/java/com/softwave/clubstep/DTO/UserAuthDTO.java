package com.softwave.clubstep.DTO;

import com.softwave.clubstep.enums.Roles;

public class UserAuthDTO {
    
    private String username;

    private Roles role ;

    private String errorMessage;

    
    public UserAuthDTO() {}

    public UserAuthDTO
    (
        String username,
        Roles role,
        String errorMessage
    )
    {
        this.username = username;
        this.role = role;
        this.errorMessage = errorMessage;
    }

    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}

    public Roles getRole() {return role;}
    public void setRole(Roles role) {this.role = role;}

    public String getErrorMessage() {return errorMessage;}
    public void setErrorMessage(String errorMessage) {this.errorMessage = errorMessage;}
 }
