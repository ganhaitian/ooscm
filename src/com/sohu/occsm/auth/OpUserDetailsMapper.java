package com.sohu.occsm.auth;

import java.util.Collection;

import org.springframework.ldap.core.DirContextOperations;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.ldap.userdetails.LdapUserDetailsMapper;

import com.sohu.occsm.auth.modal.User;

public class OpUserDetailsMapper extends LdapUserDetailsMapper {
	

	public UserDetails mapUserFromContext(DirContextOperations ctx,
			String username, Collection<? extends GrantedAuthority> authorities) {	 
		 return new User(username,null);
	}


}
