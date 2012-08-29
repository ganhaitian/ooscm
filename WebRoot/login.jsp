<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>OSS登录</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style type="text/css">
		
		html, body, div, h1, h2, h3, h4, h5, h6, p, img, dl,
		dt, dd, ol, ul, li, table, tr, td, form, object, embed,
		article, aside, canvas, command, details, fieldset,
		figcaption, figure, footer, group, header, hgroup, legend,
		mark, menu, meter, nav, output, progress, section, summary,
		time, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		} 
		
		article, aside, details, figcaption, figure, footer,
		header, hgroup, menu, nav, section {
		display: block;
		} 
		
		html {
		font: 81.25% arial, helvetica, sans-serif;
		background: #fff;
		color: #333;
		line-height: 1;
		direction: ltr;
		} 
		
		a {
		color: #15c;
		text-decoration: none;
		}
		a:active {
		color: #d14836;
		} 
		
		a:hover {
		text-decoration: underline;
		}
		
		h1, h2, h3, h4, h5, h6 {
		color: #222;
		font-size: 1.54em;
		font-weight: normal;
		line-height: 24px;
		margin: 0 0 .8em;
		}
		
		p {
		line-height: 17px;
		margin: 0 0 1em;
		}
		
		ol, ul {
		list-style: none;
		line-height: 17px;
		margin: 0 0 1em;
		}
		
		li {
		margin: 0 0 .5em;
		}
		table {
		border-collapse: collapse;
		border-spacing: 0;
		}
		strong {
		color: #222;
		} 
		
	</style>  	
	<style>
		
		html, body {
		position: absolute;
		height: 100%;
		min-width: 100%;
		} 
		
		.wrapper {
		position: relative;
		min-height: 100%;
		} 
		
		.wrapper + style + iframe {
		display: none;
		}
		.content {
		padding: 0 44px;
		} 
		
		 .header-bar {
			height: 71px;
			background: #f1f1f1;
			border-bottom: 1px solid #e5e5e5;
			overflow: hidden;
		 } 
	
		 .clearfix:after {
		 visibility: hidden;
		 display: block;
		 font-size: 0;
		 content: '.';
		 clear: both;
		 height: 0;
		 }
		
		 .header .logo {
			margin: 8px 0 0;
			float: left;
		 } 
		 
		  .main {
			margin: 0 auto;
			width: 650px;
			padding-top: 23px;
			padding-bottom: 100px;
		 }
		 
		 .main {
		    max-width: 1000px;
		    min-width: 780px;
		    width: auto;
		 } 
		 
		 .sign-in {
		    float: right;
		    width: 335px;
		}
		
		.signin-box, .accountchooser-box {
		    background: none repeat scroll 0 0 #F1F1F1;
		    border: 1px solid #E5E5E5;
		    margin: 12px 0 0;
		    padding: 20px 25px 15px;
		}
		
		.signin-box div {
		    margin: 0 0 1.5em;
		}
		
		.signin-box label {
		    display: block;
		}
		
		.signin-box .accessid-label, .signin-box .accesskey-label {
		    -moz-user-select: none;
		    display: block;
		    font-weight: bold;
		    margin: 0 0 0.5em;
		}
		
		.signin-box input[type="email"], .signin-box input[type="text"], .signin-box input[type="password"] {
		    direction: ltr;
		    font-size: 15px;
		    height: 32px;
		    width: 100%;
		}
		
		input[type="email"], input[type="number"], input[type="password"], input[type="tel"], input[type="text"], input[type="url"] {
		    -moz-border-bottom-colors: none;
		    -moz-border-image: none;
		    -moz-border-left-colors: none;
		    -moz-border-right-colors: none;
		    -moz-border-top-colors: none;
		    -moz-box-sizing: border-box;
		    background: none repeat scroll 0 0 #FFFFFF;
		    border-color: #C0C0C0 #D9D9D9 #D9D9D9;
		    border-radius: 1px 1px 1px 1px;
		    border-right: 1px solid #D9D9D9;
		    border-style: solid;
		    border-width: 1px;
		    display: inline-block;
		    height: 29px;
		    margin: 0;
		    padding: 0 8px;
		}
		
		.signin-box input[type="submit"] {
		    font-size: 13px;
		    height: 32px;
		    margin: 0 1.5em 1.2em 0;
		}
		
		button.g-button, input.g-button[type="submit"] {
		    height: 29px;
		    line-height: 29px;
		    margin: 0;
		    vertical-align: bottom;
		}
		
		.g-button-submit {
		    background-color: #4D90FE;
		    background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);
		    border: 1px solid #3079ED;
		    color: #FFFFFF;
		    text-shadow: 0 1px rgba(0, 0, 0, 0.1);
		}
		
		button, input, select, textarea {
		    font-family: inherit;
		    font-size: inherit;
		}
		
		
	</style>
  </head>
  
  <body> 
  	<div class="wrapper">
  		<div class="header-bar">
  			<div class="header content clearfix">
  				<img class="logo" alt="aliyun" src="./source/images/logo.png" >
  			</div>
  		</div>
  		<div class="main content clearfix">
  			<div class="sign-in">
  				<div class="signin-box">
  					<h2>登录<strong></strong></h2>
  					<form id="loginform" method="post" action="LoginAuth" novalidate="" >
  						<div class="accessid-div" >
  							<label for="accessid">
  								<strong class="accessid-label">Accessid</strong>
  							</label>
  							<input id="accessid" type="text" value="" name="accessid" spellcheck="false" > 
  						</div>
  						<div class="accesskey-div">
  							<label for="accesskey">
  								<strong class="accesskey-label">Accesskey</strong>
  							</label>
  							<input id="accesskey" type="password" value="" name="accesskey" >
  						</div>
  						<input id="signIn" type="submit" value="登入" class="g-button g-button-submit" name="signIn">
  					</form>
  				</div>
  			</div>
  			<div class="product-info"></div>
  		</div>
  		<div class="footer-bar"></div>
  	</div>
  </body>
</html>
