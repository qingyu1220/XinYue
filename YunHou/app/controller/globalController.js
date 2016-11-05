app.controller('globalController',["$scope","globalService",function ($scope,globalService){
    globalService.swiper().success(function (res) {
        $scope.swiper = res;
    })
    globalService.items().success(function(res) {
        $scope.items = res;
    })//接收数据
}])

