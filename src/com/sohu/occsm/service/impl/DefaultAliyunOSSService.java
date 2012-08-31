package com.sohu.occsm.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.log4j.Logger;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.aliyun.openservices.ClientConfiguration;
import com.aliyun.openservices.ClientException;
import com.aliyun.openservices.oss.OSSClient;
import com.aliyun.openservices.oss.OSSException;
import com.aliyun.openservices.oss.model.Bucket;
import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.exception.AccessException;
import com.sohu.occsm.exception.BusinessException;
import com.sohu.occsm.service.IOSSService;
import com.sohu.occsm.util.BeanUtil;

@Service(value="aliyunSdkService")
@Scope("singleton")
public class DefaultAliyunOSSService implements IOSSService{

	private OSSClient client;
	
	private ClientConfiguration clientConfig;
	
	//The log plug.
	protected final Logger logger = Logger.getLogger(DefaultAliyunOSSService.class);
	
	//The aliyun end point.
	private static final String OSS_ENDPOINT = "http://storage.aliyun.com/";
	
	//Existed buckets
	private List<Bucket> buckets=new ArrayList<Bucket>();
	
	//The configurations in "config.properties".
	private PropertiesConfiguration config;
	
	{
		try {
			//Initialized the configuration.
			clientConfig=new ClientConfiguration();
			//Load the properties file.
			config=new PropertiesConfiguration("config.properties");
			BeanUtil.initBeanFromProperties(config,clientConfig);
		} catch (ConfigurationException e) {
			logger.error("Load configuration error",e);
		}
		
	}
	
	public void initializeClient(User user) throws AccessException{
		if(client!=null){
			return;
		}
		//Connect to the aliyun server.
		client=new OSSClient(OSS_ENDPOINT,user.getId(),user.getKey(),clientConfig);	
		//Test the accessible.
		try {
			buckets=client.listBuckets();
		} catch (Exception e) {
			//Reset the variable handler.
			e.printStackTrace();
			client=null;
			throw new AccessException("",e);
		}
		
	}
	
	private DefaultAliyunOSSService(){
		
	}

	public List<Bucket> listAllBuckets() throws BusinessException{
		try {
			return client.listBuckets();
		} catch (Exception e) {
			throw new BusinessException(e.getMessage());
		}
	}

	public void createBucket(String bucketName) throws OSSException, ClientException {
		this.client.createBucket(bucketName);
	}
	
}
