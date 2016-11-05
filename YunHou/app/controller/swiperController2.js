app.controller('swiperControllerii', ['$scope','swiperService', function($scope,swiperService) {
    $scope.sw2 = function() {
        var mySwiper2 = new Swiper(".swiper-container", {
            autoplay: 2000, //可选选项，自动滑动
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    }
    swiperService.swiperData2().success(function (res){
    	$scope.swiperData2 = res.slid;
    })
}])