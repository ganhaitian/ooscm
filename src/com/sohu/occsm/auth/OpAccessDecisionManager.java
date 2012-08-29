package com.sohu.occsm.auth;

import java.util.Collection;

import org.apache.log4j.Logger;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;

public class OpAccessDecisionManager implements AccessDecisionManager {  
	
	protected final Logger logger = Logger.getLogger("sys.security");
    
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes) throws AccessDeniedException, InsufficientAuthenticationException {  
    	
    	logger.info(authentication);
    	
    	if(authentication.getPrincipal().equals("anonymousUser"))
    		throw new AccessDeniedException("Anonymous login denied!");  
    	else
    		return;

    }  
  
    public boolean supports(ConfigAttribute attribute) {  
        // TODO Auto-generated method stub  
        return true;  
    }  
  
    public boolean supports(Class<?> clazz) {  
        // TODO Auto-generated method stub  
        return true;  
    }  
      
}  
