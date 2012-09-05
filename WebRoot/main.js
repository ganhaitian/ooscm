
	Ext.Loader.setConfig({enabled:true});

	Ext.application({
		name:'oss',
		appFolder:'app',
		controllers:['OSSMainController'],
		launch:function(){
			Ext.create('Ext.container.Viewport',{
				layout:'fit',
				items:[{
					xtype:'mainpanel'
				}]
			});
		}
	});
	
	Ext.QuickTips.init();