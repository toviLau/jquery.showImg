/**
 * 图片展示(大小不定情况)
 * @param type 展示类型[fill(填满-溢出隐藏) | full(完整显示-多余部分留白)]
 * @auther liutaowei 46134256@qq.com	@date 2015-06-06
 * @version 1.0.4
 *
 * --------------- 使用方法 ---------------
 * -----DOM-----
 * <div><img src=img.jpg /></div>
 *
 * -----JS-----
 * $("div").showImg({
 * 		"type":"fill(填满-溢出隐藏) | full(完整显示-多余部分留白)",
 * });
 *
 **/
(function ($) {
	$.fn.showImg = function(opts) {
		var defaults = {
			type:"fill",
		};
		var ops = $.extend(defaults,opts);
		var opsType= ops.type.toLowerCase();
		$(this).find("img").parent().css("overflow","hidden");
		$(this).find("img").load(function(){
			$(this).each(function(){
				var _this	= $(this);
				var _thisPr	= _this.parent();	//获取父元素
				var _thisPW	= _thisPr.width();	//父元素宽度
				var _thisPH	= _thisPr.height();	//父元素高度
				var _thisW	= _this.width();	//当前元素原宽度
				var _thisH	= _this.height();	//当前元素原高度
				$(this).css("position","relative");
				if(opsType == "fill"){
					if(_thisW/_thisH >= _thisPW/_thisPH){ //横图&&方图
						var _thisResizeH	= _thisPH;						//前元素最终高度
						var _thisResizeW	= _thisResizeH*_thisW/_thisH;	//前元素最终宽度
						var _thisResizeL	= (_thisPW - _thisResizeW)*0.5;	//前元素最终上边距边距
						$(this).css({
							"height": _thisResizeH,
							"left"	: _thisResizeL,
							"top"	: "0px",
							"width"	: "auto",
						});
					}else{
						//竖图
						var _thisResizeW	= _thisPW;						//前元素最终宽度
						var _thisResizeH	= _thisResizeW*_thisH/_thisW;	//前元素最终高度
						var _thisResizeT	= (_thisPH - _thisResizeH)*0.5;	//前元素最终后上边距边距
						$(this).css({
							"width"	: _thisResizeW,
							"top"	: _thisResizeT,
							"left"	: "0px",
							"height": "auto",
						});
					}
				}else{
					if(_thisW/_thisH >= _thisPW/_thisPH){ //横图&&方图
						var _thisResizeW	= _thisPW;						//前元素最终宽度
						var _thisResizeH	= _thisResizeW*_thisH/_thisW;	//前元素最终高度
						var _thisResizeT	= (_thisPH - _thisResizeH)*0.5;	//前元素最终后上边距边距
						$(this).css({
							"width"	: _thisResizeW,
							"top"	: _thisResizeT,
							"left"	: "0px",
							"height": "auto",
						});
					}else{
						//竖图
						var _thisResizeH	= _thisPH;						//前元素最终宽度
						var _thisResizeW	= _thisResizeH*_thisW/_thisH;	//前元素最终高度
						var _thisResizeL	= (_thisPW - _thisResizeW)*0.5;	//前元素最终后上边距边距
						$(this).css({
							"height": _thisResizeH,
							"left"	: _thisResizeL,
							"top"	: "0px",
							"width"	: "auto",
						});
					}
				}
			});
		}).each(function() {
		  	if(this.complete) $(this).load();    //让IE与火狐响应load事件
		});
	}
})(jQuery);