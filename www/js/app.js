// Ionic spy App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'spy' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'spy.services' is found in services.js
// 'spy.controllers' is found in controllers.js
angular.module('spy', ['ionic', 'spy.controllers', 'spy.services','spy.myservices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

      .state('tab.details', {
          url: '/details',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/date-details.html',
               controller: 'DashCtrl'
              }
          }
      })

      .state('tab.more_info', {
          url: '/more_info',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/more-info.html',
                  controller: 'MoreInfoCtrl'
              }
          }
      })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

      .state('tab.chat-details', {
          url: '/chats/:chatId/:startDate/:endDate',
          views: {
              'tab-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
              }
          }
      })

      .state('tab.agent-performance', {
          url: '/agent/:chatId',
          views: {
              'tab-chats': {
                  templateUrl: 'templates/agent-performance.html',
                  controller: 'AgentPerfCtrl'
              }
          }
      })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-missedcall.html',
        controller: 'MissedCallCtrl'
      }
    }
  })

        .state('tab.missedCallDetail', {
            url: '/missedCallDetail/:startDate/:endDate',
            views: {
                'tab-account': {
                    templateUrl: 'templates/missedcall-detail.html',
                    controller: 'MissedCallDetailCtrl'
                }
            }
        });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
