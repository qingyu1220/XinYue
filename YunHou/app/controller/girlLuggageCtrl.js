app.controller('girlLuggageCtrl',['$scope',function($scope){
	$scope.activity = function (idx) {
		var navLi = $('li');
		var top = $('.title').eq(idx).offset().top;
		$.each(navLi,function(m,n){
			$(n).removeClass('activity');
		})
		navLi.eq(idx).addClass('activity');
		$('body').scrollTop(top);
	}
	
	var headerH = $('header').height();
	var navH = $('nav').height();
	var bannerH = $('.banner').height();
	var title1Top = $('.title').eq(0).offset().top;
	var title2Top = $('.title').eq(1).offset().top;
	var title3Top = $('.title').eq(2).offset().top;
	window.onscroll = function(){
		var scrollTop = $('body').scrollTop();
		if (scrollTop > headerH+bannerH-navH) {
			$('nav').addClass('nav');
		} else {
			$('nav').removeClass('nav');
		}

		if (scrollTop > title1Top) {
			$('li').removeClass('activity');
			$('li').eq(1).addClass('activity');
		}
		if (scrollTop > title2Top) {
			$('li').removeClass('activity');
			$('li').eq(2).addClass('activity');
		}
		if (scrollTop > title3Top) {
			$('li').removeClass('activity');
			$('li').eq(3).addClass('activity');
		}
		if (scrollTop < title1Top) {
			$('li').removeClass('activity');
			$('li').eq(0).addClass('activity');
		}
	}
}])
app.controller('recommendCtrl',['$scope','recommendSev',function($scope,recommendSev){
	recommendSev.recommendProducts().success(function(res){
		$scope.products = res.products;
	})	
}])
app.controller('coachCtrl', ['$scope','recommendSev', function($scope,recommendSev){
	recommendSev.coachProducts().success(function(res){
		$scope.products = res.products;
	})
}])
app.controller('mkCtrl', ['$scope', 'recommendSev',function($scope,recommendSev){
	recommendSev.MKProducts().success(function(res){
		$scope.products = res.products;
	})
}])
app.controller('ksCtrl', ['$scope','recommendSev', function($scope,recommendSev){
	recommendSev.KSProducts().success(function(res){
		$scope.products = res.products;
	})
}])