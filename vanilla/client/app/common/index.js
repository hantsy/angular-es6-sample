import angular from 'angular';
import commonComponentsModule from './components/';
import commonServicesModule from './services/';
import commonDirectivesModule from './directives';

let commonModule = angular.module('app.common', [
  commonComponentsModule,
  commonServicesModule,
  commonDirectivesModule
])

.name;

export default commonModule;
