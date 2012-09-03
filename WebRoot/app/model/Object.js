
	Ext.define('oss.model.Object',{
		extend:'Ext.data.Model',
		fields:['key','lastModified',
		{
			name:'suffix',
			convert:function(v,record){
				var reg = /(\\+)/g;  
			    var pfn = record.get('key').replace(reg, "#");  
			    var arrpfn = pfn.split("#");  
			    var fn = arrpfn[arrpfn.length - 1];  
			    var arrfn = fn.split(".");  
			    return arrfn[arrfn.length - 1]; 
			}
		}],
		idProperty:'key'
	});