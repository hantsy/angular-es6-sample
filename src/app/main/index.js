let mainModule = angular.module('app.main', []);

import mainConfig  from './main.config';
mainModule.config(mainConfig);

import { MainController } from './main.controller';
mainModule.controller('MainController', MainController);

export default mainModule;
