/**
 * Created by dor on 22/04/2016.
 */


var app = angular.module('planner', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/demographics', {
            templateUrl: 'parcitals/demographics.html',
            controller: 'demoCtrl'
        }).when('/instructions', {
            templateUrl: 'parcitals/Instructions.html',
            controller: 'insCtrl'
        }).when('/exp', {
            templateUrl: 'parcitals/experiment.html',
            controller: 'expCtrl'
        }).when('/train', {
            templateUrl: 'parcitals/trainning.html',
            controller: 'trainCtrl'
        }).when('/quiz', {
            templateUrl: 'parcitals/quiz.html',
            controller: 'quizCtrl'
        }).when('/end', {
            templateUrl: 'parcitals/end.html',
            controller: 'endCtrl'
        }).when('/consent', {
            templateUrl: 'parcitals/consent.html',
            controller: 'consentCtrl'
        }).otherwise({
            redirectTo: '/'

        });
    }]);
