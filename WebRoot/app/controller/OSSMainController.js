
	Ext.define('oss.controller.OSSMainController',{
		extend:'Ext.app.Controller',
		views:['OSSBucketPanel','OSSControlPanel','OSSSourcePanel','OSSMainPanel',
		       'OSSSourceGrid'],
		stores:['BucketViewStore','Source'],
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
					},
					selectionchange:function(view,selections,options){
						var selBucket=this.getSelectedBucket();
						this.getSourceStore().load({
							params:{
								'bucketName':selBucket.get('name')
							}
						});
					}
				},
				'sourcegrid':{
					afterrender:function(){
//						Ext.query('a[name=download_source]')
//						.on('click',function(){
//							alert('download');
//						});
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
				},
				'#delbucket_btn':{
					click:function(){
						this.delSelectedBucket();
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
		},
		delSelectedBucket:function(){
			var bucket=this.getSelectedBucket();
			var bucketStore=this.getBucketView().getStore();
			Ext.Ajax.request({
				url:'delBucket.do',
				params:{
					'bucketName':bucket.get('name')
				},
				success:function(response){
					bucketStore.remove(bucket);
					//alert(response.responseText);
				}
			});
		},
		getSelectedBucket:function(){
			return this.getBucketView().getSelectionModel().getLastSelected();
		}
	});