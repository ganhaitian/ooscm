package com.sohu.occsm.auth;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.sohu.occsm.service.IUserService;

public class LoginAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	protected final Logger logger = Logger.getLogger("sys.security");
	
	@Autowired
	private IUserService userService;
	
	public LoginAuthenticationFilter(){
		//Because we should share the authentication info between web request.
		//Then set the strategy mode to global.
		//SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_GLOBAL);
	}
	
	 @Override
	 public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) 
			 throws AuthenticationException {
		 
		 String accessId=request.getParameter("accessid");
		 String accessKey=request.getParameter("accesskey");

		 logger.info(accessId+" send the authentication request!"); 
		 
		 UsernamePasswordAuthenticationToken authRequest=
		 new UsernamePasswordAuthenticationToken(accessId,accessKey);
		 
		 return this.getAuthenticationManager().authenticate(authRequest);
	 
	 }


}
