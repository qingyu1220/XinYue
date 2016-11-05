app.controller('addressController',['$scope','addressService',function ($scope,addressService){
    addressService.addressData().success(function (res){
        $scope.addressData = res['城市代码'];
    })
}])
