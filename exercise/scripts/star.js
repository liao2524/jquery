﻿/*商品评分效果*/
$(function(){
	
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent()
		   		.parent()
		   		.removeClass()
		   		.addClass("rating "+cl+"star");
		 var a=$(".pro_rating ul").attr("class");
		 alert(a);
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	});
});