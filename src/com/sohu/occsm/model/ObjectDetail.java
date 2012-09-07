package com.sohu.occsm.model;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import com.aliyun.openservices.oss.model.OSSObjectSummary;

public class ObjectDetail {

	private OSSObjectSummary objectSummary;
	
	public static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	
	public static BigDecimal ONE_GB=new BigDecimal(FileUtils.ONE_GB);
	
	public static BigDecimal ONE_MB=new BigDecimal(FileUtils.ONE_MB);
	
	public static BigDecimal ONE_KB=new BigDecimal(FileUtils.ONE_KB);
	
	public static BigDecimal ONE=new BigDecimal(1);
	
	public ObjectDetail(OSSObjectSummary objectSummary){
		this.objectSummary=objectSummary;
	}
	
	public String getLastModified(){
		return formatter.format(objectSummary.getLastModified());
		//new DateTime(super.getLastModified(),TimeZone.getDefault());
	}
	
	public String getKey(){
		return objectSummary.getKey();
	}
	
	public String getSize(){
		//return FileUtils.byteCountToDisplaySize(objectSummary.getSize());
			BigDecimal size=new BigDecimal(objectSummary.getSize());
			String displaySize;
			
			try{
				if (size.divide(ONE_GB).compareTo(ONE) >=0) {
		            displaySize = String.format("%.2f",size.divide(ONE_GB)) + " GB";
		        } else if (size.divide(ONE_MB).compareTo(ONE) >=0) {
		            displaySize = String.format("%.2f",size.divide(ONE_MB)) + " MB";
		        } else if (size.divide(ONE_KB).compareTo(ONE) >=0) {
		            displaySize = String.format("%.2f",size.divide(ONE_KB)) + " KB";
		        } else {
		            displaySize = String.valueOf(size) + " bytes";
		        }
		        	
		        return displaySize;
			}catch(Exception e){
				e.printStackTrace();
				return "0 KB";
			}
	        
	}
	
	public String getObjectSuffix(){
		return FilenameUtils.getExtension(objectSummary.getKey());
	}

	public void setObjectSummary(OSSObjectSummary objectSummary) {
		this.objectSummary = objectSummary;
	}
	
}
