	
	Ext.define('oss.store.BucketViewStore',{
		extend:'Ext.data.Store',
		model:'oss.model.Bucket',
		storeId:'bucketStore',
	    proxy: {
	        type: 'ajax',
            api:{
                update:'updateDimensionFields',
            	create:'updateDimensionFields',
            	read:'listBuckets.do',
            	destroy:'delTemplateField'
            }, 
  	        reader: {
  	            type: 'json',
  	            root: 'data',
  	            successProperty: 'success',
                totalProperty: 'totalCount'
  	        },
  	        writer:{
              	type:'json' ,
              	//writeAllFields:false,
              	root:'jsonstr',
              	allowSingle:false,
              	encode:true
  	        },
            actionMethods: {
  			    read: 'POST'
  			}
	    }
	});
	
	