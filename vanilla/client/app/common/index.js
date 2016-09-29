import angular from 'angular';
import commonComponentsModule from './components/';
import commonServicesModule from './services/';
import commonDirectivesModule from './directives';
import layoutModule from './layout';

let commonModule = angular.module('app.common', [
  commonComponentsModule,
  commonServicesModule,
  commonDirectivesModule,
  layoutModule
])

.name;

export default commonModule;
