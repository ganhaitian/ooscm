package com.sohu.occsm.auth;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.service.IUserService;

public class LoginAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	protected final Logger logger = Logger.getLogger("sys.security");
	
	public LoginAuthenticationFilter(){
	}
	
	 @Override
	 public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) 
			 throws AuthenticationException {
		 
		 String accessId=request.getParameter("accessid");
		 String accessKey=request.getParameter("accesskey");

		 logger.info(accessId+" send the authentication request!");  
		 
		 return getAuthenticationManager().authenticate(new User(accessId,accessKey)); 
	 
	 }


}
