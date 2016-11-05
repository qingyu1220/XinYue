// 获取AngularJS程序
var app = angular.module("myApp");

app.controller("carController", ['$scope',  function ($scope) {
    $scope.single = "";
    $scope.add = function(e){
    	if($scope.count == 1){
    		 $scope.single = "-";
    	}

    	$scope.count++;
    	$scope.moneyT+=318;
    }

     $scope.min = function(e){
    	$scope.count--;
    	if($scope.count == 1){
    		e.currentTarget.innerHTML = "";
    	}
    	$scope.moneyT-=318;
    }


    // console.log(conmonProduct);  
    // console.log(conmonProduct.img);
    //打印成功得到对象

}]);


