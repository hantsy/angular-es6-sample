import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

let footerModule = angular.module('app.common.components.footer', [
  uiRouter
])

.component('appFooter', footerComponent)

.name;

export default footerModule;
