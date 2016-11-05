app.controller('impressCtrl',['$scope','impressSev',function($scope,impressSev){
	impressSev.impressProducts().success(function(res){
		$scope.products = res.products;
	});

	$scope.activity = function (idx) {
		var navLi = $('li');
		var top = $('.cBox').eq(idx).offset().top;
		var headerH = $('header').height();
		$.each(navLi,function(m,n){
			$(n).removeClass('activity');
		})
		navLi.eq(idx).addClass('activity');
		$('body').scrollTop(top-headerH);
	}
}])