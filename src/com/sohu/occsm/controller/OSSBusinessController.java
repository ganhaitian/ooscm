package com.sohu.occsm.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.sohu.occsm.model.DownloadUrlRequest;
import com.sohu.occsm.service.IOSSService;

@Controller
@RequestMapping("/**/")
public class OSSBusinessController extends AjaxSpringActionSupport {
	
	/**A resource effective time.**/
	public static final long AVAILABLE_PERIOD=3600000;
	
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
	
	@RequestMapping("getDownloadUrl.do")
	public @ResponseBody Object getDownloadUrl(@ModelAttribute DownloadUrlRequest request){
		try {	
			//Set the expired time to one hour later.
			request.setExpiration(new Date(System.currentTimeMillis()+AVAILABLE_PERIOD));
			String downloadUrl=ossService.generateUrlRequest(request);
			return genSuccessResponse("",factoryJson("url",downloadUrl));
		} catch (Exception e) {
			e.printStackTrace();
			return genFailureResponse(e.getMessage());
		}
	}
	
	@RequestMapping("uploadFile.do")
	public void uploadObject(@RequestParam("source") CommonsMultipartFile mFile){
		System.out.println(mFile); 
	}
	
	
}
