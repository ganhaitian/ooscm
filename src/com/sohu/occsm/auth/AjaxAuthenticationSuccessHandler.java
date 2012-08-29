package com.sohu.occsm.auth;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

public class AjaxAuthenticationSuccessHandler implements
		AuthenticationSuccessHandler {

	public void onAuthenticationSuccess(HttpServletRequest request,
			HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		response.setContentType("text/html;charset=UTF-8");
		Writer out=response.getWriter();
		out.write("{success:true,targeturl:'main.jsp',message:''}");
		out.close();
	}

}
