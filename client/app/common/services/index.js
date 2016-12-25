import angular from 'angular';

import AuthService from './auth.service';
import JwtService from './jwt.service';
import PostService from './post.service';
import UserFactory from './user.factory';

let commonServicesModule = angular.module('app.common.services', [])
  .service('JWT', JwtService)
  .service('Auth', AuthService)
  .service('Post', PostService)
  .factory('User', UserFactory)
  .name;

export default commonServicesModule;
