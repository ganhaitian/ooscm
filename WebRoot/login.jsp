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
		
		button, input, select, textarea {
		    font-family: inherit;
		    font-size: inherit;
		}
		
		input[type="email"]:hover, input[type="number"]:hover, input[type="password"]:hover, input[type="tel"]:hover, input[type="text"]:hover, input[type="url"]:hover {
		    -moz-border-bottom-colors: none;
		    -moz-border-left-colors: none;
		    -moz-border-right-colors: none;
		    -moz-border-top-colors: none;
		    border-color: #A0A0A0 #B9B9B9 #B9B9B9;
		    border-image: none;
		    border-right: 1px solid #B9B9B9;
		    border-style: solid;
		    border-width: 1px;
		    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
		}
		
		input[type="email"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="tel"]:focus, input[type="text"]:focus, input[type="url"]:focus {
		    border: 1px solid #4D90FE;
		    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;
		    outline: medium none;
		}
		
		input[type=email][disabled=disabled],
		input[type=number][disabled=disabled],
		input[type=password][disabled=disabled],
		input[type=tel][disabled=disabled],
		input[type=text][disabled=disabled],
		input[type=url][disabled=disabled] {
		border: 1px solid #e5e5e5;
		background: #f1f1f1;
		} 
		
		input[type=email][disabled=disabled]:hover,
		input[type=number][disabled=disabled]:hover,
		input[type=password][disabled=disabled]:hover,
		input[type=tel][disabled=disabled]:hover,
		input[type=text][disabled=disabled]:hover,
		input[type=url][disabled=disabled]:hover {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		}
		input[type=email][readonly=readonly],
		input[type=number][readonly=readonly],
		input[type=password][readonly=readonly],
		input[type=text][readonly=readonly],
		input[type=url][readonly=readonly] {
		border: 1px solid #d9d9d9;
		} 
		
		 input[type=email][readonly=readonly]:hover,
		input[type=number][readonly=readonly]:hover,
		input[type=password][readonly=readonly]:hover,
		input[type=text][readonly=readonly]:hover,
		input[type=url][readonly=readonly]:hover,
		input[type=email][readonly=readonly]:focus,
		input[type=number][readonly=readonly]:focus,
		input[type=password][readonly=readonly]:focus,
		input[type=text][readonly=readonly]:focus,
		input[type=url][readonly=readonly]:focus {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		}
		input[type=checkbox].form-error,
		input[type=email].form-error,
		input[type=number].form-error,
		input[type=password].form-error,
		input[type=text].form-error,
		input[type=url].form-error {
		border: 1px solid #dd4b39;
		} 
		
		.product-headers {
		    margin: 0 0 1.5em;
		}
		
		.product-headers h1 {
		    font-size: 25px;
		    margin: 0 !important;
		}
		
		.product-headers h2 {
		    font-size: 16px;
		    margin: 0.4em 0 0;
		}
		
		.main h1:first-child {
		    margin: 0 0 0.92em;
		}
		
		.redtext {
		    color: #DD4B39;
		}
		
		p {
		    line-height: 17px;
		    margin: 0 0 1em;
		}
		
		.product-info {
		    margin: 0 385px 0 0;
		}
		
		.features {
		    margin: 2em 0 0;
		    overflow: hidden;
		}
		
		ol, ul {
		    line-height: 17px;
		    list-style: none outside none;
		    margin: 0 0 1em;
		}
		
		.features img {
		    float: left;
		    margin: -3px 0 0;
		}
		
		.features p {
		    margin: 0 0 0 68px;
		}
		
		.features .title {
		    font-size: 16px;
		    margin-bottom: 0.3em;
		}
		
		.features li {
		    margin: 3px 0 2em;
		}
		
		.oss ul.mail-links {
		    margin: 0;
		    overflow: hidden;
		}
		.oss ul.mail-links li {
		    display: inline-block;
		    margin-right: 20px;
		}
		
		a {
		    color: #1155CC;
		    text-decoration: none;
		}
		a:active {
		    color: #D14836;
		}
		a:hover {
		    text-decoration: underline;
		}
		
		.footer {
		    font-size: 0.85em;
		    line-height: 0;
		    padding-top: 9px;
		    white-space: nowrap;
		}
		.footer ul {
		    color: #999999;
		    float: left;
		    max-width: 80%;
		}
		.footer ul li {
		    display: inline;
		    padding: 0 1.5em 0 0;
		}
		.footer a {
		    color: #333333;
		}
		
		.footer form {
		    text-align: right;
		}
		.footer form .lang-chooser {
		    max-width: 20%;
		}
		
		.footer-bar {
		    border-top: 1px solid #EBEBEB;
		    bottom: 0;
		    height: 35px;
		    overflow: hidden;
		    position: absolute;
		    width: 100%;
		}
		
		.header .signin-button, .header .signup-button {
		    float: right;
		    margin: 22px 0 0;
		}
		
		.header .signup-button a {
		    margin: 0 0 0 1em;
		    position: relative;
		    top: -1px;
		}
		
		.g-button {
		    -moz-transition: all 0.218s ease 0s;
		    -moz-user-select: none;
		    background-color: #F5F5F5;
		    background-image: -moz-linear-gradient(center top , #F5F5F5, #F1F1F1);
		    border: 1px solid #DCDCDC;
		    border-radius: 2px 2px 2px 2px;
		    color: #444444;
		    cursor: default;
		    display: inline-block;
		    font-size: 11px;
		    font-weight: bold;
		    height: 27px;
		    line-height: 27px;
		    min-width: 46px;
		    padding: 0 8px;
		    text-align: center;
		}
		
		.g-button:hover {
		    -moz-transition: all 0s ease 0s;
		    background-color: #F8F8F8;
		    background-image: -moz-linear-gradient(center top , #F8F8F8, #F1F1F1);
		    border: 1px solid #C6C6C6;
		    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		    color: #333333;
		    text-decoration: none;
		}
		.g-button:active {
		    background-color: #F6F6F6;
		    background-image: -moz-linear-gradient(center top , #F6F6F6, #F1F1F1);
		    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
		}
		.g-button:visited {
		    color: #666666;
		}
		
		.g-button-red {
		    background-color: #D14836;
		    background-image: -moz-linear-gradient(center top , #DD4B39, #D14836);
		    border: 1px solid transparent;
		    color: #FFFFFF;
		    text-shadow: 0 1px rgba(0, 0, 0, 0.1);
		    text-transform: uppercase;
		}
		
		.g-button-red:hover {
		    background-color: #C53727;
		    background-image: -moz-linear-gradient(center top , #DD4B39, #C53727);
		    border: 1px solid #B0281A;
		    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
		    color: #FFFFFF;
		    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		}
		.g-button-red:active {
		    background-color: #B0281A;
		    background-image: -moz-linear-gradient(center top , #DD4B39, #B0281A);
		    border: 1px solid #992A1B;
		    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;
		}
		
		.g-button-submit {
		    background-color: #4D90FE;
		    background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);
		    border: 1px solid #3079ED;
		    color: #FFFFFF;
		    text-shadow: 0 1px rgba(0, 0, 0, 0.1);
		}
		
		.g-button-submit:hover {
		    background-color: #357AE8;
		    background-image: -moz-linear-gradient(center top , #4D90FE, #357AE8);
		    border: 1px solid #2F5BB7;
		    color: #FFFFFF;
		    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		}
		
		.g-button-submit:active {
		    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;
		}
		
	</style>
  	<style>
  		.oss  .oss -promo {
		border: 1px solid #ebebeb;
		margin: 30px 0 0;
		padding: 20px;
		overflow: hidden;
		}
		.oss  .oss -promo h3,
		.oss  .oss -promo p {
		margin-left: 60px;
		}
		.oss  .oss -promo img {
		width: 42px;
		margin: 3px 0 0;
		float: left;
		}
		.oss  .oss -promo h3 {
		font-size: 16px;
		margin-bottom: .3em;
		}
		.oss  .oss -promo p {
		margin-bottom: 0;
		}
		.oss  .oss -promo p:last-of-type {
		margin-bottom: 0;
		}
		.oss  .oss -promo a {
		white-space: nowrap;
		}
		.oss  ul.oss -links {
		margin: 0;
		overflow: hidden;
		}
		.oss  ul.oss -links li {
		display: inline-block;
		margin-right: 20px;
		*display: inline; /*ie7*/
		} 
  	</style>
  </head>
  
  <body> 
  	<div class="wrapper">
  		<div class="header-bar">
  			<div class="header content clearfix">
  				<img class="logo" alt="aliyun" src="./source/images/logo.png" >
  				<span class="signup-button">
  					第一次使用阿里云？
  					<a id="link-signup" class="g-button g-button-red" href=""> 创建帐户 </a>
  				</span>
  			</div>
  		</div>
  		<div class="main content clearfix">
  			<div class="sign-in">
  				<div class="signin-box">
  					<h2>登录<strong></strong></h2>
  					<form id="loginform" method="post" action="j_spring_security_check" novalidate="" >
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
  			<div class="product-info oss">
  				<div class="product-headers">
  					<h1 class="redtext">阿里云 OSS</h1>
  					<h2>适用于有存储需求的开发者、企业，与存储应用服务提供商</h2>
  				</div>
  				<p>阿里云存储服务，是阿里云对外提供的海量，安全，低成本，高可靠的云存储服务。有以下特点:</p>
  				<ul class="features">
  					<li>
  						<img alt="" src="./source/images/filing_cabinet-g42.png">
  						<p class="title">无限扩容</p>
  						<p>
  							弹性存储，安全保障,无限制满足您的扩容需求
  						</p>
  					</li>
  					<li>
  						<img alt="" src="./source/images/pie_chart_48.png">
  						<p class="title">高效节约</p>
  						<p>
  							按实际使用量进行计费，即满足峰值配置要求，又节约日常成本
  						</p>
  					</li>
  					<li>
  						<img alt="" src="./source/images/graph.png">
  						<p class="title">性能卓越</p>
  						<p>
  							海量数据存储，不限文件数目和大小。支持单个文件可达5TB，通过文件组合方式构建更大文件
  						</p>
  					</li>
  				</ul>
  				<ul class="mail-links">
  					<li>
  						<a onclick="" href="">关于 OSS</a>
  					</li>
  					<li>
  						<a onclick="" href="">使用帮助</a>
  					</li>
  					<li>
  						<a onclick="" href="">创建账号</a>
  					</li>
  				</ul>
  			</div>
  		</div>
  		<div class="footer-bar">
  			<div class="footer content clearfix">
				<ul>
					<li>© 2012  阿里巴巴</li>
					<li>
						<a target="_blank" href="">用阿里云办公</a>
					</li>
					<li>
						<a target="_blank" href="http://mail.google.com/mail/help/intl/zh-CN/privacy.html">隐私政策</a>
					</li>
					<li>
						<a target="_blank" href="http://mail.google.com/mail/help/intl/zh-CN/program_policies.html">计划政策</a>
					</li>
					<li>
						<a target="_blank" href="http://www.google.com/accounts/TOS?loc=CN&hl=zh-CN">使用条款</a>
					</li>
				</ul>
  			</div>
  		</div>
  	</div>
  </body>
</html>
