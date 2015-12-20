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

angular.module('myApp').service('galleryService', function(){
    this.imageArray = [
        { name: 'Leaflet', src: 'img/Leaflet.jpg', description: ['leaf, black, white, pattern']},
        { name: 'blueFloral', src: 'img/blueFloral.jpg', description: ['leaf, blue, color, flower']},
        { name: 'random', src: 'img/random.jpg', description: ['random, dots, black, white']},
        { name: 'Unknown', src: 'img/unknown.jpg', description: ['random, dots, black, white']},
        { name: 'leaf', src: 'img/leaf.gif', description: ['leaf, black, white']},
        { name: 'forest', src: 'img/forest.jpg' , description: ['leaf, forest, black, white, color, landscape']},
        { name: 'foresty', src: 'img/foresty.jpg' , description: ['flower, green, forest, color']},
        { name: 'Summer Leaves', src:'img/Summer-Leaves.jpg', description: ['leaf, color']}
    ];
});

angular.module('myApp').controller('galleryControl', ['$scope', 'galleryService', function($scope, galleryService){
    $scope.imageArray = galleryService.imageArray;

}]);

angular.module('myApp').controller('submitControl', ['$scope', 'galleryService', function($scope, galleryService){
    $scope.submitForm = function(){

    };

    $scope.tempImage = { name:'', src:'', location:'', description:''};

}]);

angular.module('myApp').controller('blogControl', ['$scope', 'galleryService', function($scope, galleryService){
    $scope.imageArray = galleryService.imageArray;
}]);