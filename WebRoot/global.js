	
	function downloadSource(key){
		var selBucket=Ext.getCmp('bucket_view')
		.getSelectionModel().getLastSelected();
		Ext.Ajax.request({
			url:'getDownloadUrl.do',
			params:{
				'bucketName':selBucket.get('name'),
				'key':key
			},
			success:function(response){
				var result=Ext.JSON.decode(response.responseText);
				alert(result.data.url);
				window.location.href=result.data.url;
			}
		});
	}