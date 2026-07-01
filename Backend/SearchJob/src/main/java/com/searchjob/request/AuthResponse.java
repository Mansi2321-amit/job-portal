package com.searchjob.request;

import com.searchjob.entity.Role;

public class AuthResponse {

    private String token;
    private Role role;

    public AuthResponse(String token, Role role) {
        this.token = token;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public Role getRole() {
        return role;
    }
}