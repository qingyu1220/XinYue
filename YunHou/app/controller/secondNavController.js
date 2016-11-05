app.controller("secondNavController", ['$scope', function($scope) {
    //首页顶部导航
    $scope.tab = function(e) {
        e.target.parent().toggleClass("active");
        // e.target.parent().children().removeClass("active");
        // e.target.toggleClass($scope.toggleClass);

    }

}]);
