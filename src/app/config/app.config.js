import authInterceptor from './auth.interceptor';

function AppConfig($logProvider, toastrConfig, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

    // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app-view></app-view',
      resolve: {
        auth: function (Auth) {
          return Auth.verifyAuth();
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
