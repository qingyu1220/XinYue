app.directive('recommendDir',function(){
	return {
		controller : 'recommendCtrl',
		scope : true,
		templateUrl : 'views/products.html'
	}
})
app.directive('coachDir',function(){
	return {
		controller : 'coachCtrl',
		scope : true,
		templateUrl : 'views/products.html'
	}
})
app.directive('mkDir',function(){
	return {
		controller : 'mkCtrl',
		scope : true,
		templateUrl : 'views/products.html'
	}
})
app.directive('ksDir',function(){
	return {
		controller : 'ksCtrl',
		scope : true,
		templateUrl : 'views/products.html'
	}
})