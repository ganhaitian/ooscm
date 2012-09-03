	
	Ext.define('oss.store.Source',{
		extend:'Ext.data.Store',
		storeId:'bucketSource',
		model:'oss.model.Object',
		//fields:['key','lastModified'],
		proxy:{
			type:'ajax',
			url:'listObjects.do',
			reader:{
				root:'data',
				type:'json'
			}
		}
	});