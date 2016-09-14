import angular from 'angular';
import toastr from 'angular-toastr';
import '../../node_modules/angular-toastr/dist/angular-toastr.css';
import 'angular-messages';
import 'angular-animate';
import uiRouter from 'angular-ui-router';
import Common from './common/';
import Components from './components/';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';
//import 'normalize.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const requires = [
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
