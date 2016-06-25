function mainConfig ($stateProvider) {
  'ngInject'
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
}

export default mainConfig;
