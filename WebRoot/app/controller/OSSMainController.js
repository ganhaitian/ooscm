
	Ext.define('oss.controller.OSSMainController',{
		extend:'Ext.app.Controller',
		views:['OSSBucketPanel','OSSControlPanel','OSSSourcePanel','OSSMainPanel'],
		stores:['BucketViewStore'],
		models:['Bucket'],
		refs:[{
			ref:'bucketView',
			selector:'#bucket_view'
		}],
		init:function(){
			this.control({
				'#bucket_view':{
					afterrender:function(cmp,options){
						cmp.getStore().load();
						Ext.defer(function(){
							this.getBucketView().getSelectionModel().select(0);
						},300,this);					
					}
				},
				'#addbucket_btn':{
					click:function(){
						var bucketStore=this.getBucketView().getStore();
						var id=bucketStore.count()+1;
						var value="newbucket";
						var me=this;
						bucketStore.add({
							'name':value,
							'id':id
						});
						var bucket=Ext.getDom('bucket-'+id);
						bucket.innerHTML='<input id="edit-input" type="text" value="'+value+'" class="edit-input" >';
						Ext.get('edit-input').on('blur',function(evt,el,o){
							bucket.innerHTML=el.value;
							bucketStore.findRecord('id',id).set('name',el.value);
							me.addBucket(el.value);
						});
						//Select the first element.
						this.getBucketView().getSelectionModel().select(id-1);
					}
				}
			});
		},
		addBucket:function(bucketName){
			Ext.Ajax.request({
				url:'addBucket.do',
				params:{
					'buketName':bucketName
				},
				success:function(response){
					alert(response.responseText);
				}
			});
		}
	});