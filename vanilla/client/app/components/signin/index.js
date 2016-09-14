import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signinComponent from './signin.component';

let signinModule = angular.module('signin', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('signin', {
        url: '/signin',
        component: 'signin'
      });
  })
  .component('signin', signinComponent)

  .name;

export default signinModule;
