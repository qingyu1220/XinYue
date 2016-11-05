
(function() {
    var calc = function() {
        var docElement = document.documentElement;
        var clientWidthValue = docElement.clientWidth > 480 ? 480 : docElement.clientWidth;
        docElement.style.fontSize = 100 * (clientWidthValue / 360) + 'px';
    }
    calc();
    window.addEventListener('resize', calc);
})();

var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	// 默认界面
	$urlRouterProvider.when("","/home/homeWraper/monkeyGlobal").otherwise("home");
	// $urlRouterProvider.otherwise('home.homeWraper.monkeyGlobal')
	// 登录界面
	$stateProvider	
	.state("login",{
		url:"/login",
		templateUrl:"views/login.html",
	})
	// 一级主体页
	.state("home",{
		url:"/home",
		controller:"homeController",
		templateUrl:"views/home.html"
	})
	.state("sort",{
		url:"/sort",
		templateUrl:"views/sort.html",
		controller:"sortController"
	})
	.state("car",{
        url : "/car",
        templateUrl : "views/car.html",
        controller : "carController"
    })
	.state("mine",{
		url:"/mine",
		templateUrl:"views/mine.html",
		controller:"mineController"
	})

	// home二级主体页
	.state("home.homeWraper",{
		url:"/homeWraper",
		templateUrl:"views/homeWraper.html"
	})
	.state("home.homeWraper.monkeyGlobal",{
		url:"/monkeyGlobal",
		templateUrl:"views/monkeyGlobal.html",
		controller:"homeController"
	})
	.state("home.homeWraper.monkeyEle",{
		url:"/monkeyEle",
		templateUrl:"views/monkeyEle.html",
		controller:"freshController"
	})
	.state("home.homeWraper.monkeyFre",{
		url:"/monkeyFre",
		templateUrl:"views/monkeyFre.html",
		controller:"freshController"
	})

	// mine二级主体页
			// 订单页
	.state('allOrders',{
        url : '/allOrders',
        templateUrl : 'views/allOrders.html',
        controller : 'allOrdersController'
    })
    .state('allOrders.all',{
        url : '/all',
        templateUrl : 'views/all.html'
        // controller : 'allController'
    })
    .state('allOrders.pay',{
        url : '/pay',
        templateUrl : 'views/pay.html'
        // controller : 'payController'
    })
    .state('allOrders.send',{
        url : '/send',
        templateUrl : 'views/send.html'
        // controller : 'sendController'
    })
    .state('allOrders.take',{
        url : '/take',
        templateUrl : 'views/take.html'
        // controller : 'takeController'
    })
    		// 积分页
    .state('score',{
        url : '/score',
        templateUrl : 'views/score.html',
        controller : 'scoreController'
    })
    .state('score.you',{
        url : '/you',
        templateUrl : 'views/you.html',
        controller : 'youController'
    })
    .state('score.history',{
        url : '/history',
        templateUrl : 'views/history.html',
        controller : 'historyController'
    })
    		// 我的收藏页
    .state('collect',{
        url : '/collect',
        templateUrl : 'views/collect.html',
        controller : 'collectController'
    })
    .state('collect.collectOne',{
        url : '/collectOne',
        templateUrl : 'views/collectOne.html',
        // collectController
    })
    .state('collect.collectTwo',{
        url : '/collectTwo',
        templateUrl : 'views/collectTwo.html'
    })

    // car二级主体页
    .state('carEmpty', {
        url : "/carEmpty",
        templateUrl: 'views/carEmpty.html',
        controller: 'carEmptyController'
    })


    // 商品详情单页
    .state("itemDetail",{
		url:"/itemDetail",
		css:"public/css/itemDetail.css",
		controller:"itemDetailController",
		templateUrl:"views/itemDetail.html"
	})


    // nav子一级
    .state('impress',{
		url : '/impress',
		templateUrl : 'views/impress.html'
	})
	.state('girlLuggage',{
		url : '/girlLuggage',
		templateUrl : 'views/girlLuggage.html'
	})
    
    .state('popularity', {
		url : '/popularity',
		templateUrl : 'views/popularity.html',
		controller : 'popularityController'
	})
	.state('new',{
		url : '/new',
		templateUrl : 'views/thenew.html',
		controller : 'newController'
	})



	// nav子二级
	.state('goodStore',{
		url : '/goodStore',
		templateUrl : 'views/goodStore.html'
	})
	.state('selfStore',{
		url : '/selfStore',
		templateUrl : 'views/selfStore.html'
	})

	// 选择地址
	.state('address',{
		url:'/address',
		templateUrl : 'views/address.html',
		controller : 'addressController'
	})

	// 抢购
	.state('rush',{
		url : '/rush',
		templateUrl : 'views/rush.html',
		controller : 'rushController'
	})

	// 搜索页
	.state('searchPage',{
		url : '/searchPage',
		templateUrl : 'views/searchPage.html',
		controller : 'searchPageController'
	})
	.state('searchMain',{
		url : '/searchMain',
		templateUrl : 'views/searchMain.html',
		controller : 'searchMainController'
	})
	
	
}]);

app.controller('mainController',['$scope',function ($scope){
	$scope.itemStore = {};
}])

app.controller('searchPageController',['$scope',function ($scope){
	$scope.clearHistory = function (){
		$(".searchPage main ul").empty();
	}
	$scope.clearInput = function (){
		$(".searchPage header input").val("");
	}
}])

app.controller('searchMainController',['$scope','searchService',function ($scope,searchService){
 	searchService.searchData().success(function (res){
		$scope.searchData = res.list;	
	})
}])
