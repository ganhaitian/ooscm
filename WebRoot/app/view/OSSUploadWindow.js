
	Ext.define('oss.view.OSSUploadWindow',{
		extend:'Ext.window.Window',
		alias:'widget.uploadwindow',
		title:'文件上传',
		width:640,
		height:320,
		layout:'fit',
		closeAction:'hide',
		modal:true,
		resizable:false,
		dockedItems:[{
			dock:'top',
			xtype:'toolbar',
			id:'upload_toolbar',
			height:30,
			items:[{
			    xtype:'tbtext',
			    id:'add_file_btn',
			    text:'<span id="sel_file_btn" style="top:0px;" ></span>',
			    style:{
			    	top:0
			    }
		}]},{
			dock:'bottom',
			xtype:'toolbar',
			items:['->',{
				text:'清空列表',
				id:'clear_uploadlist_btn',
				iconCls:'ico-btn ib-clear'
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
				dataIndex:'size',
				align:'right',
				width:70
			},{
				text:'状态',
				align:'center',
				//dataIndex:'status',
				//width:95,
				xtype:'templatecolumn',
				tpl:new Ext.XTemplate(
				//'<tpl switch="status">',
				'<tpl if="status == 1" >',
					'<div class="upload-busy" >正在保存</div>',
				'</tpl>',
				'<tpl if="status == 2" >',
					'<div class="upload-complete" >上传成功</div>',
				//'<tpl else>',
				//	'<div class="upload-complete" ></div>',
				'</tpl>'
				)
			},{
				
				text:'操作'
			}]
		}]
	});
	