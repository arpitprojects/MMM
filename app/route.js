data.config([ '$routeProvider' , '$locationProvider' ,  function($routeProvider , $locationProvider){
    $routeProvider
    .when('/' , {
        templateUrl : 'home/index.html',
        controller : 'home'
    })
    .when('/mean' , {
        templateUrl : 'partials/mean.html',
        controller : 'mean'
    })
        .when('/median'  , {
        templateUrl  :'partials/median.html',
        controller : 'median'
    })
         .when('/kendo'  , {
        templateUrl  :'partials/kendo.html',
        controller : 'kendo'
    })
        .when('/mode'  , {
        templateUrl  : 'partials/mode.html',
        controller : 'mode'
    })

        .when('/error'  , {
        templateUrl  :'partials/404.html'
    })
    
    $locationProvider.hashPrefix('');
}]);