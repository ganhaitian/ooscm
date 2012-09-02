
	Ext.define('oss.view.OSSSourceGrid',{
		extend:'Ext.grid.Panel',
		store:'Source',
		alias:'widget.sourcegrid',
		hideHeaders:true,
		columns:[{
			xtype:'templatecolumn',
			header:'',
			align:'center',
			//dataIndex:'name',
			tpl:['<img src="./source/images/unknown.gif" style="padding-top:5px;">'],
			width:40
		},{
			xtype:'templatecolumn',
			header:'',
			tpl:['<div style="padding-top:0px;"><a class="source-name" >{key}</a></div>',
			     '<div><em style="color:#BABABA">{lastModified}</em></div>'],
			flex:1
		}
		,{
			xtype:'templatecolumn',
			cls:'opt-header',
			width:120,
			align:'center',
			tpl:['<a class="source-action-ico ib-share" href="javascript:;" >  </a>',
			     '<a name="download_source" class="source-action-ico ib-download" onclick=','downloadSource("{key}");',' href="javascript:;">  </a>',
			     '<a class="source-action-ico ib-more" href="javascript:;">  </a>']
		}]
	});
	