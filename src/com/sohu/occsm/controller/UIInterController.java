package com.sohu.occsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sohu.occsm.exception.BusinessException;
import com.sohu.occsm.service.IOSSService;

@Controller
@RequestMapping("/**/")
public class UIInterController extends AjaxSpringActionSupport{

	@Autowired
	//@Qualifier("aliyunSdkService")
	private IOSSService ossService;
	
	@RequestMapping("listBuckets.do")
	public @ResponseBody Object listAllBucket(boolean refresh){
		try {
			return genSuccessResponse("",
			ossService.listAllBuckets(refresh));
		} catch (BusinessException e) {
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
