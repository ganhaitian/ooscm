
	Ext.define('oss.view.OSSBucketPanel',{
		extend:'Ext.panel.Panel',
		//title:'Bucket管理',
		id:'bucket_panel',
		alias:'widget.bucketpanel',
		layout:'fit',
		title:'<div class="sel-tpl-sidebar-title" >Bucket列表</div>',
		dockedItems:[{
			xtype:'toolbar',
			dock:'bottom',
			items:[{
				id:'addbucket_btn',
				iconCls:'ico-btn ib-newbucket'
			},{
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
		    	deselectOnContainerClick: false
	        },
			tpl:new Ext.XTemplate(
    				//'<div class="sel-tpl-sidebar-title" >Bucket列表</div>',
    				'<div style="height:85%">',
	                    '<tpl for=".">',
	                    	'<div class="sel-tpl-sidebar-tt" id="bucket-{id}">',
	                    		'{name}',
	                    	'</div>',
	                    '</tpl>',
                    '</div>'
    		)
		}],
	});