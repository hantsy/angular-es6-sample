import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('app.common.components.navbar', [
  uiRouter
])

.component('appNavbar', navbarComponent)

.name;

export default navbarModule;
