package com.sohu.occsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sohu.occsm.service.IOSSService;

@Controller
@RequestMapping("/**/")
public class OSSBusinessController extends AjaxSpringActionSupport {
	
	@Autowired
	@Qualifier("aliyunSdkService")
	private IOSSService ossService;
	
	@RequestMapping("addBucket.do")
	public @ResponseBody Object addBucket(String buketName){
		try {
			ossService.createBucket(buketName);
			return genSuccessResponse("",null);
		} catch (Exception e) {
			e.printStackTrace();
			return genFailureResponse(e.getMessage());
		}
	}
	
	@RequestMapping("delBucket.do")
	public @ResponseBody Object deleteBucket(String bucketName){
		try {
			ossService.deleteBucket(bucketName);
			return genSuccessResponse("",null);
		} catch (Exception e) {
			e.printStackTrace();
			return genFailureResponse(e.getMessage());
		}
	}
	
	@RequestMapping("listObjects.do")
	public @ResponseBody Object listObjects(String bucketName){
		try {
			return genSuccessResponse("",ossService.listObjects(bucketName));
		} catch (Exception e) {
			e.printStackTrace();
			return genFailureResponse(e.getMessage());
		}
	}
	
}
