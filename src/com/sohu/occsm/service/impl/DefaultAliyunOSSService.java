package com.sohu.occsm.service.impl;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.aliyun.openservices.ClientConfiguration;
import com.aliyun.openservices.oss.OSSClient;
import com.sohu.occsm.auth.modal.User;
import com.sohu.occsm.util.BeanUtil;

@Service(value="aliyunSdkService")
public class DefaultAliyunOSSService {

	private OSSClient client;
	
	private ClientConfiguration clientConfig;
	
	//The log plug.
	protected final Logger logger = Logger.getLogger(DefaultAliyunOSSService.class);
	
	//The aliyun end point.
	private static final String OSS_ENDPOINT = "http://storage.aliyun.com/";
	
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
	
	public void initializeClient(User user){
		if(client!=null){
			return;
		}
		//Connect to the aliyun server.
		client=new OSSClient(OSS_ENDPOINT,user.getId(),user.getKey(),clientConfig);	
		
	}
	
	private DefaultAliyunOSSService(){
		
	}
	
}
