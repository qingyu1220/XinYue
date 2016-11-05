app.directive("mySwiper", function () {
    return {
        templateUrl: 'views/mySwiper.html',
        controller: 'swiperController'
    };
})
// .controller('mySwiperController', ['$scope',function($scope){
// 	$scope.createLoop = function(){
// 		var mySwiper = new Swiper ('.swiper-container', {
// 		  	autoplay : 1000,
// 		    loop: true,
// 		    // 如果需要分页器
// 		    pagination: '.swiper-pagination'
// 	  	})   
// 	}
// }])


