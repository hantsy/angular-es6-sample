/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

import './service';

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
  'app.service'
];

angular.module('app', requires)
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
