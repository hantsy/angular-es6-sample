import { NavbarDirective } from './navbar/navbar.directive';
import { MalarkeyDirective } from './malarkey/malarkey.directive';

let componentsModule = angular.module('app.components', []);

componentsModule.directive('acmeNavbar', NavbarDirective);
componentsModule.directive('acmeMalarkey', MalarkeyDirective);

export default componentsModule;
