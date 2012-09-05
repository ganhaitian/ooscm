
	Ext.define('oss.view.OSSUploadWindow',{
		extend:'Ext.window.Window',
		alias:'widget.uploadwindow',
		title:'文件上传',
		width:640,
		height:320,
		layout:'fit',
		closeAction:'hide',
		modal:true,
		dockedItems:[{
			dock:'top',
			xtype:'toolbar',
			id:'upload_toolbar',
			height:30,
			items:['->',{
				text:'上传文件',
				id:'sel_file_btn'
				//html:'<div class="file-btn" ><span id="sel_file_btn"></span></div>'
			}]
		}],
		items:[{
			xtype:'gridpanel',
			store:'UploadInfo',
			id:'upload_grid',
			columns:[{
				text:'文件名',
				flex:1,
				dataIndex:'filename'
			},{
				text:'上传进度',
				dataIndex:'progress',
				align:'center'
			},{
				text:'大小',
				dataIndex:'size'
			},{
				text:'操作'
			}]
		}]
	});
	