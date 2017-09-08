import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('app.common.components.navbar', [
  uiRouter
])

.component('appNavbar', navbarComponent)

.name;

export default navbarModule;
