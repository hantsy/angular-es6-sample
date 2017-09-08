import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import footerComponent from './footer.component';

let footerModule = angular.module('app.common.components.footer', [
  uiRouter
])

.component('appFooter', footerComponent)

.name;

export default footerModule;
