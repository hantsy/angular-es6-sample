import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import angular from 'angular';
import toastr from 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
import 'angular-messages';
import 'angular-animate';
import 'angular-touch';
import 'angular-cookies';
import 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import 'angular-translate-handler-log';
import 'angular-translate-interpolation-messageformat';
import uiRouter from '@uirouter/angularjs';
import 'angular-loading-bar/build/loading-bar.css';
import 'angular-loading-bar';
import Common from './common/';
import Components from './components/';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';


const requires = [
  'ngCookies',
  'ngTouch',
  'ngMessages',
  'ngAnimate',
  toastr,
  uiRouter,
  'pascalprecht.translate',
  'angular-loading-bar',
  Common,
  Components
];

angular.module('app', requires)
  .component('app', AppComponent)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);
