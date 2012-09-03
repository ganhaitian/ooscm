
	Ext.define('oss.view.OSSBucketPanel',{
		extend:'Ext.panel.Panel',
		//title:'Bucket管理',
		id:'bucket_panel',
		alias:'widget.bucketpanel',
		layout:'fit',
		border:false,
		bodyCls:'bucketPanel',
		title:'<div class="sel-tpl-sidebar-title" >Bucket</div>',
		dockedItems:[{
			xtype:'toolbar',
			dock:'bottom',
			items:[{
				id:'addbucket_btn',
				iconCls:'ico-btn ib-newbucket'
			},{
				id:'delbucket_btn',
				iconCls:'ico-btn ib-delbucket'
			}]
		}],
		items:[{
			xtype:'dataview',
			id:'bucket_view',
			store:'BucketViewStore',
			itemSelector:'.sel-tpl-sidebar-tt',
			cls:'sel-tpl-sidebar-list',
		    selModel: {
		    	deselectOnContainerClick: false,
		    	listeners:{
		    		selectionchange:function(model,selected,options){
		    			if(selected.length==0)
		    				Ext.get('source_panel').first().replaceCls(
		    				'source-panel','source-panel-noborder');
		    			else
		    				Ext.get('source_panel').first().replaceCls(
		    				'source-panel-noborder','source-panel');
		    		}
		    	}
	        },
			tpl:new Ext.XTemplate(
    				//'<div class="sel-tpl-sidebar-title" >Bucket列表</div>',
    				'<ul style="height:100%;">',
	                    '<tpl for=".">',
	                    	'<li class="sel-tpl-sidebar-tt" id="bucket-{id}">',
	                    		'{name}',
	                    	'</li>',
	                    '</tpl>',
                    '</ul>'
    		)
		}]
	});