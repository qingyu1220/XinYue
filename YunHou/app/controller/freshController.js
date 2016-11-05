app.controller('freshController', ['$scope',"freshService",function($scope,freshService){
	freshService.data().success(function (res) {
		$scope.data = res;
		// $scope.slide = res.slid;
		$scope.hotArr = res.productOne;
        $scope.playLifeArr = res.combineColumnTow;
        $scope.title=res.productTwoTitle;
        $scope.selectArr = res.productTwo;
        
	})
}])