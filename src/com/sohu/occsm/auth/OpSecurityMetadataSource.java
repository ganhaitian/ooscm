package com.sohu.occsm.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;

public class OpSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {  
	
	Collection<ConfigAttribute> configAttributes = new ArrayList<ConfigAttribute>();
	
	{
    	ConfigAttribute configAttribute = new SecurityConfig("ROLE_USER");
    	configAttributes.add(configAttribute); 
	}
	
    //由spring调用  
    public OpSecurityMetadataSource() {  

    }  
  
    public Collection<ConfigAttribute> getAllConfigAttributes() {  
        // TODO Auto-generated method stub  
        return null;  
    }  
  
    public boolean supports(Class<?> clazz) {  
        // TODO Auto-generated method stub  
        return true;  
    }  
 
    //返回所请求资源所需要的权限  
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {  
    	return configAttributes;
    }  
  
}  