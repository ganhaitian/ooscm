package com.sohu.occsm.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.service.IOSSService;

public class AliyunAuthenticationProvider  implements AuthenticationProvider{
	
	@Autowired
	private IOSSService ossService;

	
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		User user=(User)authentication;
		ossService.initializeClient(user);
		return user;
	}

	public boolean supports(Class<?> authentication) {
		return true;
	}

}
