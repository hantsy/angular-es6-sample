import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appViewComponent from './app-view.component';

let appViewModule = angular.module('app.common.components.appView', [
  uiRouter
])

.component('appView',appViewComponent)

.name;

export default appViewModule;
