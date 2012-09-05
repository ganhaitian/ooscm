package com.sohu.occsm.model;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import com.aliyun.openservices.oss.model.ObjectMetadata;

public class UploadSource {

	private String bucketName;
	
	private String key;
	
	private ObjectMetadata objectMetadata;
	
	private InputStream inputStream;

	public String getBucketName() {
		return bucketName;
	}

	public void setBucketName(String bucketName) {
		this.bucketName = bucketName;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		try {
			this.key=URLDecoder.decode(key,"UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			this.key = key;
		}
		
	}

	public ObjectMetadata getObjectMetaData() {
		return objectMetadata;
	}

	public void setObjectMetaData(ObjectMetadata objectMetadata) {
		this.objectMetadata = objectMetadata;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}
	
}
