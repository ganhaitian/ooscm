package com.sohu.occsm.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class UserAuthAction {

	@RequestMapping("LoginAuth")
	public void login(String accessid,String accesskey){
		System.out.println(accessid+accesskey);
	}
	
}
