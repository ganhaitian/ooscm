package com.sohu.occsm.controller;

import java.util.HashMap;
import java.util.Map;

public abstract class AjaxSpringActionSupport {

	protected Map<String,Object> genSuccessResponse(String msg,Object data){
		Map<String,Object> result=new HashMap<String,Object>();
		result.put("success",true);
		result.put("msg",msg);
		result.put("data",data);
		return result;
	}
	
	protected Map<String,Object> genFailureResponse(String msg){
		Map<String,Object> result=new HashMap<String,Object>();
		result.put("success",false);
		result.put("msg",msg);
		return result;
	}
	
}
