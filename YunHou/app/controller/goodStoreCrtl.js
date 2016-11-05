app.controller('goodStoreCtrl',['$scope','goodStoreSev',function($scope,goodStoreSev){
	goodStoreSev.goodStoreImg().success(function(res){
		$scope.goodStoreImg = res.goodStoreImg;
	})

	$scope.activity = function (idx) {
		var navLi = document.getElementsByTagName('li');
		var cBox = document.getElementsByClassName('cBox');
		for(var i = 0; i < navLi.length; i++) {
			navLi[i].className = '';
		}
		navLi[idx].className = 'activity';
	}
	
}])