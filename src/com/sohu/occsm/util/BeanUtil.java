package com.sohu.occsm.util;

import java.lang.reflect.InvocationTargetException;
import java.util.Iterator;

import org.apache.commons.configuration.PropertiesConfiguration;

import com.sun.org.apache.commons.beanutils.BeanUtils;

public class BeanUtil {

	/**
	 * Initialized a object by from the properties file.
	 * @param config
	 * @param target
	 */
	public static void initBeanFromProperties(PropertiesConfiguration config,Object target){
		String key;
		//Class type;
		for(Iterator<String> iter=config.getKeys();iter.hasNext();){
			key=iter.next();
			try {
				BeanUtils.setProperty(target,key,config.getProperty(key));
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}
