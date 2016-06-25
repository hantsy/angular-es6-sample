import { GithubContributorService } from './githubContributor.service';
import { WebDevTecService } from './webDevTec.service';

let serviceModule = angular.module('app.service', []);

serviceModule.service('githubContributor', GithubContributorService);
serviceModule.service('webDevTec', WebDevTecService);

export default serviceModule;
