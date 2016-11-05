app.controller('allOrdersController',['$scope','$location',function ($scope,$location) {

	// 页面加载时调用
	var a = angular.element('.hd a');
	var b = $location.path().split('/')[2];
	for (var i = 0;i < a.length;i++) {
		if ($(a).eq(i).hasClass(b)) {
			$(a).eq(i).addClass('active').siblings().removeClass('active');
			break;
		}
	}

	/*
		获取元素的方式：以下方式写在函数里面，页面加载时不能触发，所以得单写上面页面加载时加class
			(1) angular.element("#")   引入jquery时可以用这种获取方式，不引入时得用原生DOM，括号里面写document.querySelector('#')或者别的获取方式
			(2) 获取当前所在点击元素，传递参数$event  函数里面$(event.target)
			(3) 用true或false的点击事件
			(4) 用toggleClass的自定义指令下的@，与link结合
			(5) 用ng-style，点击时调用函数，函数中自定义样式，改变样式
	*/  



	// (1)
	$scope.addBorder = function (i) {
		angular.element('.hd>a').removeClass('active');
		// 与jquery相关，选择时要用eq()选择，不能用[]，[]是选择数组的元素的
		angular.element('.hd>a').eq(i).addClass('active');
	}


	// (2)
	// $scope.addBorder = function ($event) {
	// 	// $event.stopPropagation();
	// 	// console.log($(event.target))
	// 	// .parent().children('a').removeClass('active');
	// 	$(event.target).addClass('active').siblings().removeClass('active');
	// }


	// (3)
	// $scope.isClick = false;
	// $scope.addBorder = function () {
	// 	// !$scope.isClick;
	// 	// console.log($scope.isClick);
	// 	$scope.isClick = !$scope.isClick;
	// }


	// (4)
	// app.directive('toggleClass',function () {
	// 	return {
	// 		restrict : 'A',
	// 		scope : {
	// 			toggleClass : '@'
	// 		},
	// 		link : function ($scope,$element) {
	// 			$element.on('click',function () {
	// 				$element.parent().children().removeClass('active');
	// 				$element.toggleClass($scope.toggleClass);
	// 			})
	// 		}
	// 	}
	// })
	

	
	// (5)
	// $scope.addBorder = function (i) {

	// 	$scope.myStyle = {
	// 		borderBottom : '1px solid red'
	// 	}
	// }

}])



