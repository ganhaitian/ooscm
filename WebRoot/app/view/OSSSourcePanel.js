
	Ext.define('oss.view.OSSSourcePanel',{
		extend:'Ext.panel.Panel',
		alias:'widget.sourcepanel',
		id:'source_panel',
		layout:'fit',
		//title:'资源管理',
		items:[
		{
			xtype:'sourcegrid'
		}
		],
		bodyCls:'source-panel'
	});