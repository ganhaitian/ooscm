
	Ext.define('oss.controller.OSSMainController',{
		extend:'Ext.app.Controller',
		views:['OSSBucketPanel','OSSControlPanel','OSSSourcePanel','OSSMainPanel',
		       'OSSSourceGrid','OSSUploadWindow','OSSSourceDetail'],
		stores:['BucketViewStore','Source','UploadInfo','SourceDetail'],
		models:['Bucket','Object'],
		refs:[{
			ref:'bucketView',
			selector:'#bucket_view'
		},{
			ref:'sourceGrid',
			selector:'#source_grid'
		}],
		init:function(){
			this.control({
				'#bucket_view':{
					afterrender:function(cmp,options){
						var bucketView=this.getBucketView();
						cmp.getStore().load({
							callback:function(){
								Ext.defer(function(){
									bucketView.getSelectionModel().select(0);
								},300,this);	
							}
						});	
					},
					selectionchange:function(view,selections,options){
						var selBucket=this.getSelectedBucket();
//						this.getSourceStore().load({
//							params:{
//								'bucketName':selBucket.get('name'),
//								'delimiter':'/'
//							}
//						});
						this.loadSourceObjects(true,true);
						Ext.getCmp('tbar_location_txt').setText(selBucket.get('name'));
					}
				},
				'sourcegrid':{
					afterrender:function(cmp,options){
						$('a').tipsy({live:true});
					},
					itemclick:function(view,record,item,index,event,options){
						var desel=[];
						var selections=view.getSelectionModel().getSelection();
						if(!Ext.DomQuery.is(event.target,'div.checkbox')){
							Ext.each(selections,
							function(r){
								if(r!=record)
									desel.push(r);
							});
						}
						
						this.getSourceGrid().getSelectionModel().deselect(desel);
					},
					select:function(rowmodel,record,index,options){
						//alert('select');
						var selTr=Ext.query('tr:nth('+(index+3)+')',this.getSourceGrid().getEl().dom);
						Ext.get(selTr).addCls('focus');
						
						this.getSourceDetailStore().loadData([{
							key:record.get('key'),
							suffix:record.get('suffix'),
							size:record.get('size'),
							lastModified:record.get('lastModified')
						}]);
						
						//alert(record.checked);
					},
					deselect:function(rowmodel,record,index,options){
						var selTr=Ext.query('tr:nth('+(index+3)+')',this.getSourceGrid().getEl().dom);
						Ext.get(selTr).removeCls('focus');
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
				},
				'#upload-btn':{
					click:function(){
						
						if(!Global.uploadWindow)
							Global.uploadWindow=Ext.create('oss.view.OSSUploadWindow',{});
						
						Global.uploadWindow.show();
						//alert('bbb');
						if(!Global.swfu){
							Global.initSwfObject();
							Ext.get('add_file_btn').setTop('0px');
						}
					}
				},
				'uploadwindow':{
					afterrender:function(){
						alert('345');
						//alert('123');
						//Global.initSwfObject();
					}
				},
				'#clear_uploadlist_btn':{
					click:function(){
						this.getUploadInfoStore().removeAll();
					}
				},
				'#refresh_objlist_btn':{
					click:function(){
						this.getSourceStore().load({
							params:{
								'bucketName':this.getSelectedBucket().get('name')
							}
						});
					}
				},
				'uploadwindow':{
					close:function(panel,options){
						//alert('aaaa');
						this.loadSourceObjects(true,true);
					}
				},
				'rowmodel':{
					select:function(){
						alert('aaa');
					}
				},
				'#next_page_btn':{
					click:function(){
						this.loadSourceObjects(false,true);
					}
				},
				'#previous_page_btn':{
					click:function(){
						this.loadSourceObjects(false,false);
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
		},
		loadSourceObjects:function(bucketChanged,direction){
			this.getSourceGrid().setLoading({
				msg:'正在努力加载...'
			},true);
			
			var selBucket=this.getSelectedBucket();
			var sourceStore=this.getSourceStore();
			//If the bucket had been changed,than we fetch data from the start position.
			var lastObject=bucketChanged?null:this.getSourceStore().last();
			//If click the next page
			if(direction){
				
				if(!bucketChanged){
					//We maintain a marker chain for recording paging trace.
					if(!Global.premarker){
						Global.premarker={
							key:null,
						};
					}				
					else
						Global.premarker=Global.premarker.nextmarker;
					
					Global.premarker.nextmarker={
						premarker:Global.premarker,
						key:sourceStore.last().get('key')
					};
				}				
				
				if(Global.nextPageCache&&Global.nextPageCache.length>0){		
					sourceStore.loadData(Global.nextPageCache);
					//Global.nextPageCache=null;
					Ext.Ajax.request({
						url:'listObjects.do',
						async:false,
						params:{
							bucketName:selBucket.get('name'),
							'delimiter':'/',
							'marker':sourceStore.last().get('key'),
							maxKeys:Global.pageSize
						},
						success:function(response){
							Global.nextPageCache=Ext.JSON.decode(response.responseText).data;
							//Set the status of the paging button.
							Ext.getCmp('next_page_btn').setDisabled(
							Global.nextPageCache.length==0?true:false);						
							
							Ext.getCmp('previous_page_btn').setDisabled(false);
						}
					});				
				}else{					
					Ext.Ajax.request({
						url:'listObjects.do',
						async:false,
						params:{
							bucketName:selBucket.get('name'),
							'delimiter':'/',
							'marker':lastObject?lastObject.get('key'):null,
							maxKeys:Global.pageSize*2
						},
						success:function(response){
							var objectsData=Ext.JSON.decode(response.responseText).data;
							sourceStore.loadData(objectsData.slice(0,Global.pageSize));					
							Global.nextPageCache=objectsData.slice(Global.pageSize,Global.pageSize*2);
							//Set the status of the paging button.
							Ext.getCmp('next_page_btn').setDisabled(
							Global.nextPageCache.length==0?true:false);
							//Set the status of the previous pagging button.
							Ext.getCmp('previous_page_btn').setDisabled(bucketChanged?true:false);	
						}
					});
				}
			}else{
				Ext.Ajax.request({
					url:'listObjects.do',
					async:false,
					params:{
						bucketName:selBucket.get('name'),
						'delimiter':'/',
						'marker':Global.premarker?Global.premarker.key:null,
						maxKeys:Global.pageSize
					},
					success:function(response){
						sourceStore.loadData(Ext.JSON.decode(response.responseText).data);
						
						if(Global.premarker)
							Global.premarker=Global.premarker.premarker;
						
						if(!Global.premarker)
							Ext.getCmp('previous_page_btn').setDisabled(true);
						
						Ext.getCmp('next_page_btn').setDisabled(false);
					}
				});
			}
			
			this.getSourceGrid().setLoading(false);
		}
	});