app.directive('babyDir',function(){
	return {
		controller : 'babyCtrl',
		scope : true,
		templateUrl : 'views/selfPro.html'
	}
})
app.directive('cosmeticDir',function(){
	return {
		controller : 'cosmeticCtrl',
		scope : true,
		templateUrl : 'views/selfPro.html'
	}
})
app.directive('popDir',function(){
	return {
		controller : 'popCtrl',
		scope : true,
		templateUrl : 'views/selfPro.html'
	}
})