app.controller("monkeyEleController", ['$scope', 'monkeyEleService',function ($scope,monkeyEleService) {
    monkeyEleService.getJson().success(function(res){
        $scope.hotArr = res.productOne;
        $scope.playLifeArr = res.combineColumnTow;
        
        $scope.title=res.productTwoTitle;
        $scope.selectArr = res.productTwo;
    })



}]);
