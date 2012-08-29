package com.sohu.occsm.service.impl;

import org.springframework.stereotype.Service;

import com.sohu.occsm.service.IAuthenticationService;

@Service(value="defaultAuthService")
public class DefaultAuthenticationImpl implements IAuthenticationService{

	public boolean checkAccess(String accessId, String accessKey) {
		return false;
	}

}
