

Ext.define('Ext.ux.tree.NodeEditor',{
	extend:'Ext.Editor',
	constructor: function(config) {
        config = Ext.apply({}, config);
        
        if (config.field) {
            config.field.monitorTab = false;
        }
        if (!Ext.isDefined(config.autoSize)) {
            config.autoSize = {
                width: 'boundEl'
            };
        }
        this.callParent([config]);
    },
    onShow:function(){
    	var first=this.boudEL.first();
    	
    }
})