function jwtInterceptor(JWT, AppConstants, $window, $q) {
    'ngInject';

    return {
        // automatically attach Authorization header
        request: function(config) {
            if (/*config.url.indexOf(AppConstants.api) === 0 &&*/ JWT.get()) {
                config.headers.Authorization = 'Token ' + JWT.get();
            }
            return config;
        },

        // Handle 401
        responseError: function(rejection) {
            if (rejection.status === 401) {
                // clear any JWT token being stored
                JWT.destroy();
                // do a hard page refresh
                $window.location.reload();
            }
            return $q.reject(rejection);
        }
    };
}

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

  $httpProvider.interceptors.push(jwtInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);
  $locationProvider.html5Mode(true).hashPrefix('!');

  // $stateProvider
  //   .state('app', {
  //     abstract: true,
  //     template: '<app-view></app-view',
  //     resolve: {
  //       auth: function (Auth) {
  //         return Auth.verifyAuth();
  //       }
  //     }
  //   });

  // $urlRouterProvider.otherwise('/');
}

export default AppConfig;
