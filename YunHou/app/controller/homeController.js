app.controller('homeController',["$scope","homeService",function ($scope,homeService){
	$scope.border = function (i) {
		$("nav a").removeClass("border");
		$("nav a").eq(i).addClass("border");
	}
	$(function () {
		var tid = setInterval(function () {
			var oTimebox = $("#timebox");
			var syTime = oTimebox.text();
			var totalSec = getTotalSecond(syTime) - 1;
			if (totalSec >= 0) {
				oTimebox.text(getNewSyTime(totalSec));
			} else {
				clearInterval(tid);
			}

		}, 1000);

      //根据剩余时间字符串计算出总秒数
      function getTotalSecond(timestr) {
	      	var reg = /\d+/g;
	      	var timenums = new Array();
	      	while ((r = reg.exec(timestr)) != null) {
	      		timenums.push(parseInt(r));
	      	}
	      	var second = 0, i = 0;
	      	if (timenums.length == 4) {
	      		second += timenums[0] * 24 * 3600;
	      		i = 1;
	      	}
	      	second += timenums[i] * 3600 + timenums[++i] * 60 + timenums[++i];
	      	return second;
      }

      //根据剩余秒数生成时间格式
      function getNewSyTime(sec) {
	      	var s = sec % 60;
	        sec = (sec - s) / 60; //min
	        var m = sec % 60;
	        sec = (sec - m) / 60; //hour
	        var h = sec % 24;
	        var d = (sec - h) / 24;//day
	        var syTimeStr = "";
	        if (d > 0) {
	        	syTimeStr += d.toString() + "天";
	        }

	        syTimeStr += ("0" + h.toString()).substr(-2) + ":"
	        + ("0" + m.toString()).substr(-2) + ":"
	        + ("0" + s.toString()).substr(-2);

	        return syTimeStr;
	   	}
	});

	homeService.items().success(function(res){
		$scope.products = res.list;
	})
}])

