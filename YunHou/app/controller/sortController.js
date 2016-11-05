app.controller('sortController', ['$scope', 'sortService',function($scope,sortService){
	var li = $(".sort ul li");
	li.eq(0).addClass("bg");
	$scope.bg = function (index) {
		li.parent().children().removeClass("bg");
		li.eq(index).addClass("bg");
	}	
}])