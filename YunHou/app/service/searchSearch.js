app.service('searchService',['$http',function ($http){
    this.searchData = function (){
        return $http.get('public/json/select1.json')
    }
}])
