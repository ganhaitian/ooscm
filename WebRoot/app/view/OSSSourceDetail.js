
	Ext.define('oss.view.OSSSourceDetail',{
		extend:'Ext.view.View',
		alias:'widget.sourcedetail',
		data:[{key:'initializedKey'}],
		id:'source_detail_view',
		tpl:['<div class="sub-search" ></div>',
		     '<div>详细信息</div>',
		     '<div>备注信息</div>',
		     '<div>回收站</div>'],
		store:'SourceDetail.js'
	});