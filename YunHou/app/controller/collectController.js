app.controller('collectController',['$scope',function ($scope) {
	$scope.fn = function (i) {
		angular.element('.list>a').parent().children('a').removeClass('active');
		angular.element('.list>a').eq(i).addClass('active');
	}
}])



