class Auth {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;
    this.current = null;
  }


  attempAuth(type, credentials) {
    let path = (type == 'signin') ? '/login' : '/signup';

    let request = {
      url: this._AppConstants.api + '/auth' + path,
      method: 'POST',
      data: credentials
    };

    return this._$http(request)
      .then((res) => {

        this._JWT.save(res.data.id_token);
        this.current = res.data.user;
        return res;
      });
  }

  ensureAuthIs(b) {
    let deferred = this._$q.defer();

    this.verifyAuth().then((authValid) => {
      // if it's the opposite, redirect home
      if (authValid !== b) {
        this._$state.go('app.signin');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });

    return deferred.promise;
  }

  verifyAuth() {
    let deferred = this._$q.defer();

    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/me',
        method: 'GET'
      })
        .then(
        (res) => {
          this.current = res.data;
          deferred.resolve(true);
        },
        (err) => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
        );
    }

    return deferred.promise;
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    this._$state.go(this._$state.$current, null, { refresh: true });
  }

  // update(fields) {
  //     return this._$http({
  //         url: this._AppConstants.api + '/me',
  //         method: 'POST',
  //         data: {
  //             user: fields
  //         }
  //     }).then(
  //         (res) => {
  //             this.current = res.data.user;
  //             return res.data.user;
  //         }
  //     );
  // }

}

export default Auth;
