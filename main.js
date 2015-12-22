/**
 * Created by Mikaela on 6/17/15.
 */
angular.module('myApp',['ngRoute']);

angular.module('myApp').config(function($routeProvider) {
    $routeProvider
        .when('/aboutUs', {
            templateUrl: 'views/about.html'
        })
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'galleryControl'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html'
        })
        .when('/submit', {
            templateUrl: 'views/submit.html',
            controller: 'submitControl'
        })
        .otherwise({
            templateUrl: 'views/main.html'
        })
});

angular.module('myApp').service('galleryService', function($http, $q){
    var deferred = $q.defer();
    $http.get('main.json').then(function(data){
        deferred.resolve(data);
    });
    this.getArray = function(){
        return deferred.promise;
    }
});

angular.module('myApp').controller('galleryControl', ['$scope', 'galleryService', function($scope, galleryService){
    var promise = galleryService.getArray();
    promise.then(function(data){
        $scope.imgArray = data.data;
        console.log($scope.imgArray);
    });
}]);

angular.module('myApp').controller('submitControl', ['$scope', 'galleryService', function($scope, galleryService){
    $scope.submitForm = function(){

    };

    $scope.tempImage = { name:'', src:'', location:'', description:''};

}]);

angular.module('myApp').controller('blogControl', ['$scope', 'galleryService', function($scope, galleryService){
    $scope.imageArray = galleryService.imageArray;
}]);