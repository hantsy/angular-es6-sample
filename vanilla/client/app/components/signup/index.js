import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commonSevices from '../../common/services/';
import signupComponent from './signup.component';

let signupModule = angular.module('signup', [
  commonSevices,
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('app.signup', {
        url: '/signup',
        component: 'signup',
        data: {
          requiresAuth: false
        }
      });
  })
  .component('signup', signupComponent)

  .name;

export default signupModule;
