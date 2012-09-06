
	Ext.Loader.setConfig({enabled:true});
	Ext.Loader.setPath('Ext.ux','./source/js/ext4/ux/');
	
	Ext.require(['Ext.ux.statusbar.StatusBar']);

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