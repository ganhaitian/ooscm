package com.sohu.occsm.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.exception.AccessException;
import com.sohu.occsm.service.IOSSService;

public class AliyunAuthenticationProvider  implements AuthenticationProvider{
	
	@Autowired
	@Qualifier("aliyunSdkService")
	private IOSSService ossService;

	
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		User user=(User)authentication;
		try {
			ossService.initializeClient(user);
		} catch (AccessException  e) {
			throw new BadCredentialsException("",e);
		}
		return user;
	}

	public boolean supports(Class<?> authentication) {
		return true;
	}

}
