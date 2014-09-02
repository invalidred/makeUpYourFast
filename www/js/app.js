// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('makeupYourFast', ['ionic', 'makeupYourFast.controllers', 'makeUpYouFast.servies'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'mainController'
    })
    .state('app.rules', {
      url: '/rules',
      views: {
        'menuContent' : {
          templateUrl: 'templates/rules.html',
          controller: 'rulesController'
        }
      }
    })
    .state('app.calculate', {
      url: '/calculate',
      views: {
        'menuContent' : {
          templateUrl: 'templates/calculate.html',
          controller: 'calculateController'
        }
      }
    })
    .state('app.progress', {
      url: '/progress',
      views: {
        'menuContent' : {
          templateUrl: 'templates/progress.html',
          controller: 'progressController'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent' : {
          templateUrl: 'templates/settings.html',
          controller: 'settingsController'
        }
      }
    });

    //if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/calculate');
});
