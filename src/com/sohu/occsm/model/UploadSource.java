package com.sohu.occsm.model;

import java.io.InputStream;

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
		this.key = key;
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
