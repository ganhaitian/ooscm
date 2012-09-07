
	Ext.define('oss.model.Object',{
		extend:'Ext.data.Model',
		fields:['key','lastModified','size',
		{
			name:'suffix',
			convert:function(v,record){
				
				if(record.get('key').indexOf("/")!=-1)
					return "folder";
				
				var reg = /(\\+)/g;  
			    var pfn = record.get('key').replace(reg, "#");  
			    var arrpfn = pfn.split("#");  
			    var fn = arrpfn[arrpfn.length - 1];  
			    var arrfn = fn.split(".");  
			    return arrfn[arrfn.length - 1].toLowerCase(); 
			}
		}],
		idProperty:'key'
	});