import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app.home', {
        url: '/',
        component: 'home',
        data: {
          requiresAuth: false
        }
      });
  })

  .component('home', homeComponent)

  .name;

export default homeModule;
