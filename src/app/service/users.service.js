export default class Users {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;
    this.current = null;
  }

  get(id) {
    return this._$http({
      url: this._AppConstants.api + '/users/' + id,
      method: 'GET'
    })
      .then(
      (res) => res.data.profile
      );
  }

  follow(username) {
    return this._$http({
      url: this._AppConstants.api + '/users/' + username + '/follow',
      method: 'POST'
    })
      .then(
      (res) => res.data
      );
  }

  unfollow(username) {
    return this._$http({
      url: this._AppConstants.api + '/users/' + username + '/follow',
      method: 'DELETE'
    })
      .then(
      (res) => res.data
      );
  }

}
