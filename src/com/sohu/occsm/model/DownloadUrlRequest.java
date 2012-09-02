package com.sohu.occsm.model;

import com.aliyun.openservices.oss.model.GeneratePresignedUrlRequest;

public class DownloadUrlRequest extends GeneratePresignedUrlRequest{

	public DownloadUrlRequest(){
		this(null,null);
	}
	
	public DownloadUrlRequest(String bucketName, String key) {
		super(bucketName, key);
	}

}
