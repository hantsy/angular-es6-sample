import angular from 'angular';
import Navbar from './navbar/';
import Footer from './footer/';
import Hero from './hero/';

let commonComponentsModule = angular.module('app.common.components', [
  Navbar,
  Footer,
  Hero
])

.name;

export default commonComponentsModule;
