	
	Global={};

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
				//window.location.href=result.data.url;
				Ext.getDom('download_area').src=result.data.url;
			}
		});
	}
	
	Global.initSwfObject=function(){
		Global.swfu=new SWFUpload({
		 	upload_url : "uploadFile.do;jsessionid="+Global.jsessionid, 
		 	post_params: {
		 		//id:'a1112'
		 	},
	        button_image_url: "./source/swfobject/bt.png",
	        flash_url : "./source/swfobject/swfupload.swf" ,
	        button_placeholder_id: "sel_file_btn",
	        button_width: 55,
	        button_height: 20,
	        button_text:"选择文件",
	        button_action : "#",
	        file_post_name : "source",
	        file_size_limit : "102400",	// 100MB
			file_types : "*.*",
			file_types_description : "All Files",
			file_upload_limit : "10",
			file_queue_limit : "0",
	        upload_complete_handler:function(file){
	        
	        },
	        file_dialog_complete_handler:function(numFilesSelected,numFilesQueued){
	        	try {
	        		this.startUpload();
	        	} catch (ex)  {
	                this.debug(ex);
	        	}
	        },
	        file_queued_handler : function(file){
	        
				//var record = Ext.data.Record({id:file.id, name:file.name, type:file.type, size:file.size, filestatus:file.filestatus});
				//datas.push(record);
				/*var OperStore = Ext.create('Ext.data.Store',{
					data: datas,
					fields: ['id','name']
				});*/
				//Ext.getCmp('uploadsPanel').getStore().load();
				//srcForm.reconfigure(ruleStore, columns);
	            /* var filetype=(file.type.substr(1)).toUpperCase();
	             if(filetype=='JPG' | filetype=='GIF'){
	                 swfu.startUpload();
	             }else{
	                 Ext.Msg.alert('错误','只能上传JPG或GIF格式文件')
	             }*/
				 //swfu.startUpload(file.id);
	        },
	        upload_start_handler:function(file){
	        	//Ext.Msg.progress('上传文件','正在上传文件：'+file.name,'0%');
	        	alert('bbb');
	        	return true;
	        }, 

	        upload_progress_handler:function(file, current_size, total_size){
	           	///var percent = Math.ceil((bytesloaded / file.size) * 100);
	            //Ext.Msg.updateProgress(percent/100,percent+'%');
	            //OperStore.getById(file.id).set('filestatus', 1);		
				//OperStore.getById(file.id).commit();
				//progressBar.updateProgress(current_size/total_size, file.name + ' (' + this.formatBytes(current_size) + ' of ' + this.formatBytes(total_size) + ')');
	        },
	        upload_success_handler:function(file, server_data){
	        	alert('bbb');
	        	//var msg=Ext.decode(server_data);
	        	//alert(msg.success);
//	        	if("true" == msg.success){
//	        		OperStore.getById(file.id).set('filestatus', 2);	
//	        		OperStore.getById(file.id).commit();
//				
//					var stats = swfu.getStats();
//	                if(stats.files_queued > 0){
//	                	swfu.startUpload();
//	                }else{
//	               		Ext.Msg.alert("提示", "文件上传完毕!");
//	               		windowMsg.close();
//	                	panel.getStore().load();
//	                }
//	        	}else{
//	        		result = false;
//	        		OperStore.getById(file.id).set('filestatus', 3);	
//	        		
//	        		Ext.Msg.alert("提示", "文件上传失败!");
//	               	windowMsg.close();
//	                panel.getStore().load();
//	        	}
	        },
	        upload_error_handler:function(file,errorCode,message){
	        	switch (errorCode) {
	    		case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
	    			//progress.setStatus("Upload Error: " + message);
	    			this.debug("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
	    			progress.setStatus("Configuration Error");
	    			this.debug("Error Code: No backend file, File name: " + file.name + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
	    			progress.setStatus("Upload Failed.");
	    			this.debug("Error Code: Upload Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.IO_ERROR:
	    			progress.setStatus("Server (IO) Error");
	    			this.debug("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
	    			progress.setStatus("Security Error");
	    			this.debug("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
	    			progress.setStatus("Upload limit exceeded.");
	    			this.debug("Error Code: Upload Limit Exceeded, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
	    			progress.setStatus("File not found.");
	    			this.debug("Error Code: The file was not found, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
	    			progress.setStatus("Failed Validation.  Upload skipped.");
	    			this.debug("Error Code: File Validation Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
	    			if (this.getStats().files_queued === 0) {
	    				document.getElementById(this.customSettings.cancelButtonId).disabled = true;
	    			}
	    			progress.setStatus("Cancelled");
	    			progress.setCancelled();
	    			break;
	    		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
	    			progress.setStatus("Stopped");
	    			break;
	    		default:
	    			progress.setStatus("Unhandled Error: " + error_code);
	    			this.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
	    			break;
	        	}
	        },
	        file_queue_error_handler:function(file,error_code,message){
	        	alert('file_queue');
	        }
		});
	};
	