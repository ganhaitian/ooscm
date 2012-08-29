package com.sohu.occsm.auth;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
		 
		 String accessId=request.getParameter("map.username");
		 String accessKey=request.getParameter("map.password");
		 

		 logger.info(accessId+" send the authentication request!"); 
		 
		 UsernamePasswordAuthenticationToken authRequest=new UsernamePasswordAuthenticationToken(username,password);
		 
		 setDetails(request,authRequest);
		 //Find user entity by his user name.
		 SmUser user=findUser(username);
		 
		 if(user!=null&&!user.isDomain())
			 return createOutlandAuthentication(user);
		 else
			 return this.getAuthenticationManager().authenticate(authRequest);
	 
	 }
	 
	 
	 /**
	  * Create the authentication of the outside domain users.
	  * @param user
	  * @return
	  */
	 private Authentication createOutlandAuthentication(SmUser user) {

		 List<GrantedAuthority> _authorities=new ArrayList<GrantedAuthority>();
		 
		 for(SmRole role:user.getRoles())
			 _authorities.add(new SimpleGrantedAuthority(role.getRolecode()));
		
		return new UsernamePasswordAuthenticationToken(user,"",
				_authorities);
	}

	private SmUser findUser(String loginCode){
		 
		 SmUser user=new SmUser();
		 user.setLogincode(loginCode);
		 user.setDomain(false);
		 
		 return userService.findAllUser(user);
		 
	 }


}
