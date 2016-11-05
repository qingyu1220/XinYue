app.controller("monkeyFreController", ['$scope', 'monkeyFreService', function($scope, monkeyFreService) {
    monkeyFreService.getJson().success(function(res) {
        $scope.hotArr = res.productOne;
        $scope.playLifeArr = res.combineColumnTow;
        $scope.title = res.productTwoTitle;
        $scope.selectArr = res.productTwo;
    })



}]);
