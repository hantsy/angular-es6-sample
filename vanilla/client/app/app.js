import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import angular from 'angular';
import toastr from 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
import 'angular-messages';
import 'angular-animate';
import 'angular-touch';
import uiRouter from 'angular-ui-router';
import Common from './common/';
import Components from './components/';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';


const requires = [
  'ngTouch',
  'ngMessages',
  'ngAnimate',
  toastr,
  uiRouter,
  Common,
  Components
];

angular.module('app', requires)
  .component('app', AppComponent)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);
