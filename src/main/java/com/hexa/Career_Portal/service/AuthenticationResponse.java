package com.hexa.Career_Portal.service;

import com.hexa.Career_Portal.entity.User;

public class AuthenticationResponse {

	private String token;
	private User user;
	
	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public AuthenticationResponse(String token, User user) {
		super();
		this.token = token;
		this.user = user;
	}
	
	
}
