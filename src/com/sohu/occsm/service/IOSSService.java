package com.sohu.occsm.service;

import java.util.List;

import com.aliyun.openservices.ClientException;
import com.aliyun.openservices.oss.OSSException;
import com.aliyun.openservices.oss.model.Bucket;
import com.aliyun.openservices.oss.model.GeneratePresignedUrlRequest;
import com.aliyun.openservices.oss.model.GetObjectRequest;
import com.aliyun.openservices.oss.model.ListObjectsRequest;
import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.exception.AccessException;
import com.sohu.occsm.exception.BusinessException;
import com.sohu.occsm.model.UploadSource;

public interface IOSSService {

	public void initializeClient(User user) throws AccessException;
	
	public List<Bucket> listAllBuckets (boolean refresh) throws BusinessException;
	
	public void createBucket(String bucketName) throws OSSException, ClientException;
	
	public void deleteBucket(String bucketName) throws OSSException, ClientException;
	
	public List listObjects(ListObjectsRequest request) throws OSSException, ClientException;
	
	public void downloadObject(GetObjectRequest request) throws OSSException, ClientException;
	
	public String generateUrlRequest(GeneratePresignedUrlRequest request) throws ClientException;
	
	public void uploadObject(UploadSource source) throws OSSException, ClientException;
	
	public void deleteObject(String bucketName,String key) throws OSSException, ClientException;
	
}
