package com.sohu.occsm.model;

import org.apache.commons.io.FilenameUtils;

import com.aliyun.openservices.oss.model.OSSObjectSummary;

public class ObjectDetail extends OSSObjectSummary{

	public String getObjectSuffix(){
		return FilenameUtils.getExtension(getKey());
	}
	
}
