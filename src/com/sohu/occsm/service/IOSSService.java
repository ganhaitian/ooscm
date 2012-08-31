package com.sohu.occsm.service;

import java.util.List;

import com.aliyun.openservices.ClientException;
import com.aliyun.openservices.oss.OSSException;
import com.aliyun.openservices.oss.model.Bucket;
import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.exception.AccessException;
import com.sohu.occsm.exception.BusinessException;

public interface IOSSService {

	public void initializeClient(User user) throws AccessException;
	
	public List<Bucket> listAllBuckets (boolean refresh) throws BusinessException;
	
	public void createBucket(String bucketName) throws OSSException, ClientException;
	
}
