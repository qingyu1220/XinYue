app.controller('selfStoreCtrl',['$scope',function($scope){
	$scope.activity = function (idx) {
		var navLi = document.getElementsByTagName('li');
		for(var i = 0; i < navLi.length; i++) {
			navLi[i].className = '';
		}
		navLi[idx].className = 'activity';
	}
}])
app.controller('popCtrl',['$scope','selfStoreSev',function($scope,selfStoreSev){
	selfStoreSev.popPro().success(function(res){
		$scope.products = res.products;
	})
}])
app.controller('babyCtrl',['$scope','selfStoreSev',function($scope,selfStoreSev){
	selfStoreSev.babyPro().success(function(res){
		$scope.products = res.products;
	})
}])
app.controller('cosmeticCtrl',['$scope','selfStoreSev',function($scope,selfStoreSev){
	selfStoreSev.cosmeticPro().success(function(res){
		$scope.products = res.products;
	})
}])
