
	Ext.define('oss.view.OSSSourcePanel',{
		extend:'Ext.panel.Panel',
		alias:'widget.sourcepanel',
		id:'source_panel',
		layout:'border',
		//title:'资源管理',
		items:[
			{
				xtype:'sourcegrid',
				region:'center'
			},{
				xtype:'sourcedetail',
				region:'east',
				width:200
			}
		],
		bodyCls:'source-panel'
	});