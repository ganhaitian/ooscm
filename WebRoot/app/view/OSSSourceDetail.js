
	Ext.define('oss.view.OSSSourceDetail',{
		extend:'Ext.view.View',
		alias:'widget.sourcedetail',
		data:[{key:'initializedKey'}],
		id:'source_detail_view',
		tpl:['<div class="sub-search" >',
		     	'<label>搜索条件</label>',
		     	'<input type="text" >',
		     '</div>',
		     '<div></div>',
		     '<div></div>',
		     '<div></div>'],
		store:'SourceDetail'
	});