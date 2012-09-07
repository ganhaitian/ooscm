<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>OSS管理界面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="./source/js/ext4/ext-all-debug.js"></script>
	<link rel="stylesheet" type="text/css" href="./source/js/ext4/resources/css/ext-all-gray.css">

	<script type="text/javascript" src="./main.js"></script>
	<script type="text/javascript" src="./source/swfobject/swfupload.js"></script>
	<script type="text/javascript" src="./global.js"></script>
	<script type="text/javascript" src="./source/js/jquery/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="./source/js/tipsy/jquery.tipsy.js"></script>
	<link rel="stylesheet" type="text/css" href="./source/js/tipsy/tipsy.css">
	
	<script type="text/javascript" >
		Global.jsessionid='<%=request.getSession().getId()%>';
	</script>
	<style type="text/css">
	
		body{
			font:'12px/1.8 Tahoma,Geneva,'宋体';
			font-family:Tahoma,Geneva,'微软雅黑','宋体';
		}
	
		.sel-tpl-sidebar-list{
        	
        }
        
        .sel-tpl-sidebar-title{
        	color: #666666;
		    font-size: 14px;
		    font-weight: bold;
		    padding: 5px;
		    text-shadow: 0 1px 0 white;
		    text-transform: uppercase;
        }
        
        .sel-tpl-sidebar-tt{
        	border-bottom: 1px dotted #CCCCCC;
		    font-size: 12px;
		    padding: 7px 10px;
		    cursor:pointer;
        }
        
        #tpl_type_list .x-item-selected {
		    background: url("./source/images/directory_menu_focus.png") no-repeat scroll right -10px #D6E0ED;
    		border-color: #4783D3;
		}
		
		 #bucket_view .x-item-selected {
		    background-color: #7B8B9D;
		    background-image: -moz-linear-gradient(center top , #8493A4, #6F8194);
		    border-color: #7B8B9D;
		    color: #FFFFFF;
		    font-weight: bold;
		    text-shadow: 0 1px 0 #4C5866;
		    border-color: #4783D3;
		}
		
		#sub_tpl_type_panel .x-item-selected {
		    background: url("../source/img/selected.gif") no-repeat scroll right bottom #EFF5FB;
    		border: 1px solid #99BBE8;
   			padding: 4px;
		}
		
		
		.sub-type-wrap{
			float: left;
    		margin: 4px 0 4px 4px;
    		padding: 5px;
		}
		
		.sub-type{
			background: none repeat scroll 0 0 #DDDDDD;
    		padding: 3px 3px 0; 
		}
		
		.sub-type-wrap span {
		    display: block;
		    overflow: hidden;
		    text-align: center;
		    width: 86px;
		}
		
		#sub_tpl_type_panel .x-item-over{
		    border:1px solid #dddddd;
		    background: #efefef url(../source/img/over.gif) repeat-x left top;
		    padding: 4px;
		}
		
		.ico-btn{
			background-image: url("./source/images/ico_button.png");
		    background-repeat: no-repeat;
		    display: inline-block;
		    height: 16px;
		    overflow: hidden;
		    width: 16px;
		}
		
		.ib-upload{
			background-image: url("./source/images/upload.png");
		}
		
		.ib-mkdir{
			background-image: url("./source/images/ico-mkdir.png");
			top:5px;
			left:3px;
		}
		
		.ib-newbucket{
			background-position: -20px 0;
		}
		
		.ib-delbucket{
			background-position: -40px -60px;
		}
		
		.edit-input{
			width:100%;
		}
		
		.source-panel{
		    border: 5px solid #7B8B9D;
		}
		
		.source-panel-noborder{
			border:0px solid;
		}
		
		.bucketPanel{
			border-right:1px solid #AFB7C3;
		}
		
		.source-action-ico{
			background-image: url("./source/images/ico_list_opt.png");
			float:left;
			margin-left:15px;
			width:16px;
			height:16px;
			line-height:40px;
			display:inline-block;
			margin-top:13px;
		}
		
		#upload-btn{
			background-image: url("./source/images/button_bg.png");
			background-position: 0 0;
		}
		
		#upload-btn .x-btn-inner{
			color:#FFFFFF;
			padding-left:20px;
		}
		
		.upload-btn{
			color:#FFFFFF;
		}
		
		.ib-share{
			background-position: -40px 0;
		}
		
		.ib-share:hover{
			background-position: -40px -20px;
		}
		
		.ib-download{
			background-position: -20px 0;
		}
		
		.ib-download:hover{
			background-position: -20px -20px;
		}
		
		.ib-more{
			background-position: -80px 0;
		}
		
		.ib-more:hover{
			background-position: -80px -20px;
		}
		
		.source-name{
			font:14px/1.8 Tahoma,Geneva,'宋体';
			font-family:Tahoma,Geneva,'微软雅黑','宋体';
		}
		
		.x-body{
			font-family:Tahoma,Geneva,'微软雅黑','宋体';
			font-size:12px;
		}
		
		.x-menu-item-text{
			font-size:12px;
		}
		
		.x-menu-body{
			background:none repeat scroll 0 0 #FFFFFF !important;
			box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
		}
		
		.opt-header{
			
		}
		
		.file-btn{
			float:right;
		}
		
		.swfupload{
			margin-top:3px;
			margin-right:3px;
			float:right;
		}
		
		#main_tbar .x-btn-icon{
			
		}
		
		#main_tbar .x-btn{
			border:1px solid #C5C5C5;
		}
		
		.maintbar-btn{
			border:1px solid #C5C5C5;
			background-image:url("./source/images/button_bg.png");
			background-position:0 -99px;
		}
		
		#clear_uploadlist_btn .x-btn-icon{
			background-position:-40px -60px;
		}
		
		.sub-search{
			background-image:url("./source/images/sub_search.png");
			height:26px;
			margin:10px auto;
			width:160px;
			position:relative;
		}
			
		#source_detail_view{
			background:none repeat scroll 0 0 #EEF2F7;
		}
		
		#source_detail_view label,#source_detail_view input{
			    background: none repeat scroll 0 0 transparent;
			    border: 0 none;
			    cursor: text;
			    font-size: 14px;
			    font-weight: bold;
			    height: 28px;
			    left: 28px;
			    line-height: 15px;
			    overflow: hidden;
			    padding: 6px 0;
			    position: absolute;
			    top: 0;
			    width: 108px;
		}
		
		#source_detail_view label{
			color:#999999;
			z-index:2;
		}
		
		.tbar-btn-ico{
			background-image:url("./source/images/ico_sub_nav.png");
		}
		
		.ib-refresh{
			background-position:0 0;
		}
		
		.x-grid-row-focused{
			background-color:#FFFFDD;
		}
		
		.ico-menu{
			background-image: url("./source/images/ico_list_opt.png");
		    background-repeat: no-repeat;
		    display: inline-block;
		    height: 16px;
		    line-height: 10;
		    overflow: hidden;
		    width: 16px;
		}
		
		.ib-move{
			 background-position: -240px 0;
		}
		
		.ib-rename{
			 background-position: -180px 0;
		}
		
		.ib-delete{
			background-position: -160px 0;
		}
		
		.upload-busy{
			background:url("./source/js/ext4/ux/statusbar/images/saving.gif") no-repeat scroll 3px 0 transparent;
			height:16px;
		}
		
		.upload-complete{
			background:url("./source/js/ext4/ux/statusbar/images/saved.png") no-repeat scroll 3px 0 transparent;
			height:16px;
		}
		
		.object-detail{
			padding:20px 10px 10px;
		}
		
		.file-thumb {
		    background-position: 0 0;
		    background-repeat: no-repeat;
		    display: block;
		    height: 100px;
		    margin: auto;
		    position: relative;
		    width: 100px;
		}
		
		.sub-info .file-name {
		    line-height: 16px;
		    margin-bottom: 6px;
		    max-height: 48px;
		    overflow: hidden;
		    padding: 4px 0 0;
		    text-align: center;
		    width: 160px;
		    word-wrap: break-word;
		}
		
		.tb-mp3{
			 background-image: url("./source/images/mp3_big.gif");
		}
		
		.file-info em{
			color:#BABABA;
			float:left;
			margin-right:10px;
		}
		
		.checkbox {
		    background-image: url("./source/images/checkbox.gif");
		    background-position: 0 0;
		    background-repeat: no-repeat;
		    cursor: default;
		    display: inline-block;
		    height: 20px;
		    overflow: hidden;
		    width: 20px;
		}
		
		.x-grid-cell .checkbox{
			margin-top:10px;
		}
		
		.focus .checkbox{
			background-position: -20px 0;
		}
		
		#path_toolbar{
		    -moz-border-bottom-colors: none;
		    -moz-border-left-colors: none;
		    -moz-border-right-colors: none;
		    -moz-border-top-colors: none;
		    background: url("./source/images/button_bg.png") repeat-x scroll 0 -99px #F3F3F3;
		    border-color: #D1D1D1;
		    border-image: none;
		    border-style: solid;
		    border-width: 1px 0;
		    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
		    cursor: default;
		    height: 32px;
		    z-index: 11;
		}
		
		.list-filter{
		    -moz-user-select: none;
		    background-image: url("./source/images/ico_filter.png");
		    background-repeat: no-repeat;
		    cursor: pointer;
		    float: left;
		    height: 17px;
		    line-height: 10;
		    overflow: hidden;
		    width: 16px;
		}
		
		.lf-date {
		    background-position: -20px 0;
		}
		
		.lf-star {
    		background-position: 0 0;
		}
		
		.order-new {
		    background-position: -200px 0;
		}
		
		.lf-all{
		    background-position: -40px 0;
		}
		
		.ls-thumb {
		    background-position: -340px 0;
		}
		
	</style>

  </head>
  
  <body>
  	<iframe id="download_area" style="display:none"></iframe>
  	<div class="context-menu" style="z-index: 9999999; top: 176px; left: 1057px; display: none;">
  		<ul>
  			<li></li>
  			<li></li>
  			<li></li>
  			<li></li>
  			<li></li>
  		</ul>
  	</div>
  </body>
  
</html>
