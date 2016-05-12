(function($) {
	$.fn.csstouchslider = function(options){
		var defaults = {
			speed: 300,
			sensiv: 50
		};
		var setting = $.extend(defaults, options);
		var $frame = $(this),
		$slide = $frame.find('ul'),
		$item = $frame.find('li'),
		height = document.documentElement.clientHeight,
		itemWidth = $item.outerWidth(),
		itemLength = $item.size(),
		startX, absX,
		moveX = logX = transX = num = 0,
		frameWidth = $frame.outerWidth(),
		slideWidth = frameWidth * itemLength;
		//スタイル
		$slide.css({width: slideWidth +'px'});
		$item.css({width: frameWidth +'px', float: 'left'});
		$('#touchslider').append('<div id="sign"></div>');
		$('#sign').append('<ul></ul>');
		for(var i=0;i<itemLength;i++){
			$('#sign').find('ul').append('<li></li>');
			if(i == 0) $('#sign').find('li').addClass('active');
		}
		//タッチイベント追加
		$frame.on({
			touchstart: touchStart,
			touchmove: touchMove,
			touchend: touchEnd
		});
		//タッチイベント
		function touchStart(event){
			startX = event.originalEvent.changedTouches[0].pageX;
			logX = transX;
		}
		function touchMove(event){
			event.preventDefault();
			moveX = event.originalEvent.changedTouches[0].pageX;
			moveX = (startX - moveX) * -1;
			transX = logX + moveX;
			translateX(transX, 0);
		}
		function touchEnd(event){
			absX = Math.abs(moveX);
			num = Math.ceil(transX / itemWidth);
			if(absX > setting.sensiv){
				if(moveX < 0) num = num - 1;
			}else{
				if(moveX > 0) num = num - 1;
			}
			if(num > 0) num = 0;
			if(num < (itemLength - 1) * -1) num = (itemLength - 1) * -1;
			transX = num * itemWidth;
			translateX(transX, setting.speed);
			$('#sign').find('li').removeClass('active');
			$('#sign').find('li').eq(Math.abs(num)).addClass('active');
		}
		function translateX(transX, speed){
			$slide.css({
				transform:'translateX('+ transX +'px)',
				'-webkit-transform':'translateX('+ transX +'px)',
				'-moz-transform':'translateX('+ transX +'px)',
				'transition-duration':speed +'ms',
				'-webkit-transition-duration':speed +'ms',
				'-moz-transition-duration':speed +'ms'
			});
		}
		return(this);
	};
})(jQuery);
