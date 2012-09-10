	
	Global={
		pageSize:25
	};

	function downloadSource(key){
		var selBucket=Ext.getCmp('bucket_view')
		.getSelectionModel().getLastSelected();
		
		if(!key)
			key=Ext.getCmp('source_grid')
			.getSelectionModel()
			.getLastSelected()
			.get('key');
			
		Ext.Ajax.request({
			url:'getDownloadUrl.do',
			params:{
				'bucketName':selBucket.get('name'),
				'key':key
			},
			success:function(response){
				var result=Ext.JSON.decode(response.responseText);
				//alert(result.data.url);
				//window.location.href=result.data.url;
				Ext.getDom('download_area').src=result.data.url;
			}
		});
	}
	
	function deleteObject(key){
		var selBucket=Ext.getCmp('bucket_view')
		.getSelectionModel().getLastSelected();
		
		if(!key)
			key=Ext.getCmp('source_grid')
			.getSelectionModel()
			.getLastSelected()
			.get('key');
		
		Ext.Ajax.request({
			url:'deleteObject.do',
			params:{
				'bucketName':selBucket.get('name'),
				'key':key
			},
			success:function(response){
				var result=Ext.JSON.decode(response.responseText);
				Ext.getCmp('source_grid').getStore().load({
					params:{
						'bucketName':selBucket.get('name')
					}
				});
				//alert(result.data.url);
				//window.location.href=result.data.url;
				//Ext.getDom('download_area').src=result.data.url;
			}
		});
	}
	
	function showMoreMenu(element){
		if(!Global.contextMenu)
			Global.contextMenu=Ext.create('Ext.menu.Menu',{
				 width: 125,
				 height: 100,
				 //plain:true,
				 margin: '0 0 10 0',
				 showSeparator:false,
				 floating: true,  // usually you want this set to True (default)
				 items:[{
					 text:'下载',
					 iconCls:'ico-menu ib-download',
					 handler:function(){
						 downloadSource();
					 }
				 },'-',{
					 text:'移动',
					 iconCls:'ico-menu ib-move'
				 },{
					 text:'重命名',
					 iconCls:'ico-menu ib-rename'
				 },{
					 text:'备注'
				 },{
					 text:'删除',
					 iconCls:'ico-menu ib-delete',
					 handler:function(){
						 deleteObject();
					 }
				 }]
			
			});
		
		Global.contextMenu.showAt(Ext.get(element).getXY());
//		Global.contextMenuTip.hide();
//		Global.contextMenuTip.setTarget(element);
//		Global.contextMenuTip.show();
		//alert('clickmenu');
	}
	
	Global.initSwfObject=function(){
		Global.swfu=new SWFUpload({
		 	upload_url : "uploadFile.do;jsessionid="+Global.jsessionid, 
		 	post_params: {
		 		//id:'a1112'
		 	},
	        button_image_url: "./source/images/upload_btn.png",
		 	button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
			button_cursor: SWFUpload.CURSOR.HAND,
		 	flash_url : "./source/swfobject/swfupload.swf" ,
	        button_placeholder_id: "sel_file_btn",
	        button_width: 61,
	        button_height: 22,
	        button_text_left_padding: 0,
            button_text_top_padding: 0,
	        //button_text:"添加文件",
	        //button_action : "#",
	        file_post_name : "source",
	        file_size_limit : "102400",	// 100MB
			file_types : "*.*",
			file_types_description : "All Files",
			file_upload_limit : "10",
			file_queue_limit : "0",
	        upload_complete_handler:function(file){
	        	//alert('ccc');
	        	var record=Ext.getCmp('upload_grid').getStore().findRecord('filename',file.name);
	        	record.set('status',2);
	        	this.startUpload();
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
	        	try {
	        		/*  I want the next upload to continue automatically so I'll call startUpload here */
	        		if (this.getStats().files_queued === 0) {
	        			//document.getElementById(this.customSettings.cancelButtonId).disabled = true;
	        		} else {	
	        			file.model=Ext.getCmp('upload_grid').getStore().
		        		add({
		        			filename:file.name,
		        			size:file.size
		        		})[0];
	        			this.setPostParams({
	        				bucketName:Ext.getCmp('bucket_view').getSelectionModel().getLastSelected().get('name'),
	        				key:encodeURI(file.name)
	        			});
	        			//this.startUpload();
	        		}
	        	} catch (ex) {
	        		this.debug(ex);
	        	}
	        }, 

	        upload_progress_handler:function(file, bytesLoaded, bytesTotal){
	        	try {
	        		var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);
	        		var record=Ext.getCmp('upload_grid').getStore().findRecord('filename',file.name);
	        		record.set('progress',percent+"%");
	        		if(percent==100){
	        			record.set('status',1);
	        		}
	        	} catch (ex) {
	        		this.debug(ex);
	        	}
	        },
	        upload_success_handler:function(file,serverData){
	        	//alert('bbbbb');
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
	