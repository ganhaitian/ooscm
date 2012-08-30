package com.sohu.occsm.auth.modal;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class User implements Authentication,UserDetails{

	private String id;
	
	private String key;

	public User(String accessid,String accesskey){
		this.id=accessid;
		this.key=accesskey;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getName() {
		return id;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	public Object getCredentials() {
		return key;
	}

	public Object getDetails() {
		return null;
	}

	public Object getPrincipal() {
		return id;
	}

	public boolean isAuthenticated() {
		return false;
	}

	public void setAuthenticated(boolean isAuthenticated)
			throws IllegalArgumentException {
		
	}

	public String getPassword() {
		return key;
	}

	public String getUsername() {
		return id;
	}

	public boolean isAccountNonExpired() {
		return false;
	}

	public boolean isAccountNonLocked() {
		return false;
	}

	public boolean isCredentialsNonExpired() {
		return false;
	}

	public boolean isEnabled() {
		return false;
	}
	
	
}
