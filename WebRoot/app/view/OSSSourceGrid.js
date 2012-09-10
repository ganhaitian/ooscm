
	Ext.define('oss.view.OSSSourceGrid',{
		extend:'Ext.grid.Panel',
		store:'Source',
		alias:'widget.sourcegrid',
		hideHeaders:true,
		id:'source_grid',
		selModel:Ext.create('Ext.selection.RowModel',{
			allowDeselect:true,
			mode:'SIMPLE'
		}),
		dockedItems:[{
			xtype:'toolbar',
			dock:'top',
			height:50,
			id:'main_tbar',
			items:[{
				xtype:'buttongroup',
				frame:false,
				bodyStyle:{
					'background-image':'-moz-linear-gradient(center top , #E6E6E6, #EFEFEF)'
				},
				//bodyBorder:false,
				items:[{
					text:'上传文件',
					id:'upload-btn',
					iconCls:'ib-upload',
					scale:'medium',
					margin:'0 10 0 10',
					cls:'upload-btn'
				},{
					text:'',
					id:'mkdir-btn',
					cls:'maintbar-btn',
					iconCls:'ib-mkdir',
					scale:'medium'
				}]
			},'->',
			{	
				text:'刷新',
				id:'refresh_objlist_btn'
			},{
				text:'配置',
				id:'config_objlist_btn'
			}]
		},{
			xtype:'toolbar',
			dock:'top',
			id:'path_toolbar',
			height:32,
			items:['<div class="checkbox" ></div>',
			{
				xtype:'tbtext',
				id:'tbar_location_txt',
				text:'september'
			},'->',{
				iconCls:'list-filter lf-date'
			},'-',{
				iconCls:'list-filter lf-star'
			},'-',{
				iconCls:'list-filter order-new'
			},'-',{
				iconCls:'list-filter lf-all'
			},'-',{
				iconCls:'list-filter ls-thumb'
			}]
		},{
			xtype:'toolbar',
			dock:'bottom',
			id:'page_toolbar',
			items:['->',{
				text:'上一页',
				id:'previous_page_btn'
			},{
				text:'下一页',
				id:'next_page_btn'
			},'->']
		}],
//		bbar:{
//			xtype:'pagingtoolbar',
//			store:'Source',
//			displayInfo: true,
//            displayMsg: '显示资源{0} - {1} of {2}',
//            emptyMsg: "没有资源显示"		
//		},
		columns:[{
			xtype:'templatecolumn',
			tpl:['<div class="checkbox" ></div>'],
			width:25
		},{
			xtype:'templatecolumn',
			header:'',
			align:'center',
			//dataIndex:'name',
			tpl:['<img src="./source/images/{suffix}.gif" style="padding-top:5px;">'],
			width:40
		},{
			xtype:'templatecolumn',
			header:'',
			tpl:['<div style="padding-top:0px;"><a class="source-name" >{key}</a></div>',
			     '<div class="file-info" ><em style="color:#BABABA">{lastModified}</em><em>{size}</em></div>'],
			flex:1
		}
		,{
			xtype:'templatecolumn',
			cls:'opt-header',
			width:120,
			align:'center',
			tpl:['<a original-title="分享" class="source-action-ico ib-share" href="javascript:;" >  </a>',
			     '<a original-title="下载" name="download_source" class="source-action-ico ib-download" onclick=','downloadSource("{key}");',' href="javascript:;">  </a>',
			     '<a original-title="更多" class="source-action-ico ib-more" href="javascript:;" onclick="showMoreMenu(this);" >  </a>']
		}]
	});
	