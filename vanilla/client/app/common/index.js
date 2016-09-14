import angular from 'angular';
import commonComponentsModule from './components/';
import commonServicesModule from './services/';

let commonModule = angular.module('app.common', [
  commonComponentsModule,
  commonServicesModule
])

.name;

export default commonModule;
