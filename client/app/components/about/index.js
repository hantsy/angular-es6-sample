import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [uiRouter])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('app.about', {
        url: '/about',
        component: 'about',
        data: {
          requiresAuth: false
        }
      });
  })

  .component('about', aboutComponent)

  .name;

export default aboutModule;
