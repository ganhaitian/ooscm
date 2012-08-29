package com.sohu.occsm.service;

public interface IAuthenticationService {

	boolean checkAccess(String accessId,String accessKey);
	
}
