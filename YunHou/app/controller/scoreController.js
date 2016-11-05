app.controller('scoreController',['$scope',function ($scope) {
	$scope.fn = function (i) {
		angular.element('.list>a').parent().children().removeClass('active');
		angular.element('.list>a').eq(i).addClass('active');
	}
}])