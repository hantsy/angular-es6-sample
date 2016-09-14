import angular from 'angular';
import Navbar from './navbar/';
import Hero from './hero/';

let commonComponentsModule = angular.module('app.common.components', [
  Navbar,
  Hero
])

.name;

export default commonComponentsModule;
