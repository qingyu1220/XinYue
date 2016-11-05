app.service('monkeyFreService', ['$http', function($http) {
    this.getJson = function(){
    	// return $http.get("http://api.mall.yunhou.com/Widgets/widgetget?method=getWidgetData&activeId=22209&_=1477713105859&callback=jsonp2")
    	return $http.get("public/json/car.json");
    }

}])
