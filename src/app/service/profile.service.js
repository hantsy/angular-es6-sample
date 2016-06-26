export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  // Retrieve a user's profile
  get() {
    return this._$http({
      url: this._AppConstants.api + '/me/',
      method: 'GET'
    })
      .then(
      (res) => res.data.profile
      );
  }

  update(fields) {
    return this._$http({
      url: this._AppConstants.api + '/me/profile',
      method: 'POST',
      data: {
        user: fields
      }
    }).then(
      (res) => {
        this.current = res.data.user;
        return res.data.user;
      });
  }

}
