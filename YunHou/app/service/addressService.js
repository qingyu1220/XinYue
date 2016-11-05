app.service('addressService',['$http',function ($http){
    this.addressData = function (){
        return $http.get('public/json/city.json');
    }
}])
