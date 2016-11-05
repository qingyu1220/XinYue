app.controller('swiperControlleriii', ['$scope','swiperService', function($scope,swiperService) {
    $scope.sw3 = function() {
        var mySwiper3 = new Swiper(".swiper-container", {
            autoplay: 2000, //可选选项，自动滑动
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    }
    swiperService.swiperData3().success(function (res){
    	$scope.swiperData3 = res.slid;
    })
}])