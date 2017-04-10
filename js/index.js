/*
* @Author: Administrator
* @Date:   2017-04-01 11:13:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-06 09:41:37
*/



'use strict';

/* 窗口 加载完之后 执行一段代码 */
window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window.onresize=fontSize;
}
