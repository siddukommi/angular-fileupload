'use strict';

/**
 * @ngdoc overview
 * @name angularFileuploadApp
 * @description
 * # angularFileuploadApp
 *
 * Main module of the application.
 */


var app = angular
  .module('fileuploadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .when('/fileupload', {
        templateUrl: 'views/fileupload.html',
        controller: 'FileUploadController',
        controllerAs: 'fileupload'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
            

