package com.softwave.clubstep.enums;

public enum Roles {
    GUEST("GUEST"), HOST("HOST"), ADMIN("ADMIN");

    private String role;

    Roles(String role) {
        this.role = role;
    }

    public String getRole() {
        return this.role;
    }
}
