<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'main.jsp' starting page</title>
    
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
	
	<style type="text/css">
	
		.sel-tpl-sidebar-list{
        	background: none repeat scroll 0 0 #EAEAEA;
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
        	border-color: #EAEAEA;
		    border-style: solid;
		    border-width: 1px 0;
		    font-size: 12px;
		    padding: 3px 10px;
		    cursor:pointer;
        }
        
        #tpl_type_list .x-item-selected {
		    background-color: #7B8B9D;
		    background-image: -moz-linear-gradient(center top , #8493A4, #6F8194);
		    border-color: #7B8B9D;
		    color: #FFFFFF;
		    font-weight: bold;
		    text-shadow: 0 1px 0 #4C5866;
		}
		
		 #bucket_view .x-item-selected {
		    background-color: #7B8B9D;
		    background-image: -moz-linear-gradient(center top , #8493A4, #6F8194);
		    border-color: #7B8B9D;
		    color: #FFFFFF;
		    font-weight: bold;
		    text-shadow: 0 1px 0 #4C5866;
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
	</style>

  </head>
  
  <body>
  </body>
  
</html>
