app.controller('MyCtrl', ['$scope', function($scope){
	// 点击时拿到当前商品的信息
	$scope.goShopShow = function ($event) {
		// console.log($event.target);//点击的地方不同目标元素不同
		//使用jQuery
		$scope.img = $(event.target).parents("dl").find("img").attr("src");
		$scope.name = $(event.target).parents("dl").find("h3").html();
		$scope.new = $(event.target).parents("dl").find(".new").html();
		$scope.old = $(event.target).parents("dl").find(".old").html();
	}
}])