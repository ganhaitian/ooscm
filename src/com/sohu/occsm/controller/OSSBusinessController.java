package com.sohu.occsm.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sohu.occsm.model.DownloadUrlRequest;
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
	
	//http://septembermusic.storage.aliyun.com/Wallpapers-room_com___mac_os_x_lion_wallpaper_by_manicho_2560x1600.jpg?response-content-disposition=attachment;filename=Wallpapers-room_com___mac_os_x_lion_wallpaper_by_manicho_2560x1600.jpg&OSSAccessKeyId=9zhc6rgvdpb3f81pyxjkw1r3&Expires=1346594188&Signature=jiN6VXPWgpy1iRA47AYMLC1QvXk%3D
	//http://septembermusic.storage.aliyun.com/wallpaper_blckboard.jpg?response-content-disposition=attachment;filename=wallpaper_blckboard.jpg&OSSAccessKeyId=9zhc6rgvdpb3f81pyxjkw1r3&Expires=1346596048&Signature=9e8bo3Jfnup22NhW2v66u76vl%2Bw%3D
	@RequestMapping("getDownloadUrl.do")
	public @ResponseBody Object getDownloadUrl(@ModelAttribute DownloadUrlRequest request){
		try {
			request.setExpiration(new Date());
			String downloadUrl=ossService.generateUrlRequest(request);
			return genSuccessResponse("",factoryJson("url",downloadUrl));
		} catch (Exception e) {
			e.printStackTrace();
			return genFailureResponse(e.getMessage());
		}
	}
	
}
