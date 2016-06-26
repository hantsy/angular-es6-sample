import {AppHeader} from './header.component';
import {AppFooter} from './footer.component';
import {AppView} from './app-view.component';

let layoutModule = angular.module('app.layout', []);

layoutModule.component(AppHeader);
layoutModule.component(AppFooter);
layoutModule.component(AppView);

export default layoutModule;
