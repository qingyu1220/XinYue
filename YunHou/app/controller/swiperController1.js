app.controller('swiperControlleri', ['$scope','swiperService', function($scope,swiperService) {
    $scope.sw1 = function() {
        var mySwiper1 = new Swiper(".swiper-container", {
            autoplay: 2000, //可选选项，自动滑动
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    }
    swiperService.swiperData1().success(function (res){
    	$scope.swiperData1 = res.swiper;
    })
}])