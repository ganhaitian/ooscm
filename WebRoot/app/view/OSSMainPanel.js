
	Ext.define('oss.view.OSSMainPanel',{
		extend:'Ext.panel.Panel',
		layout:'border',
		alias:'widget.mainpanel',
		items:[{
			xtype:'bucketpanel',
			region:'west',
			width:150,
			margins:'2 0 2 2'
		},{
			xtype:'sourcepanel',
			region:'center',
			margins:'2 2 2 0'
		},{
			xtype:'controlpanel',
			region:'south',
			height:300,
			margins:'0 2 2 2'
		}]
	});