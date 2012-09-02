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
	
	protected ChanningMap<String,Object> factoryJson(String k,String v){
		ChanningMap<String,Object> jsonMap=new ChanningMap<String,Object>();
		return jsonMap.puts(k,v);
	}
	
	protected class ChanningMap<K,V> extends HashMap<K,V>{
		
		/*** For serializing.*/
		private static final long serialVersionUID = -7076647252200355629L;

		public ChanningMap<K,V> puts(K k,V v){
			super.put(k,v);
			return this;
		}
	}
	
}
