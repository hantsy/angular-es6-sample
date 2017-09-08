import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import profileComponent from './profile.component';

let profileModule = angular.module('profile', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('profile', {
        url: '/profile',
        component: 'profile'
      });
  })
  .component('profile', profileComponent)

  .name;

export default profileModule;
