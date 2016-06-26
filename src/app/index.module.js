/* global malarkey:false, moment:false */

import { AppConfig } from './config/app.config';
import { AppConstants } from './config/app.constants';
import { AppRun } from './config/app.run';

import './service';
import './layout';
import './components';
import './main';

const requires = [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr',
  'app.service',
  'app.layout',
  'app.components',
  'app.main'
];

window.app = angular.module('app', requires)
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

