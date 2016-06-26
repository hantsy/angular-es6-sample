export default class Auth {
    constructor(JWT, AppConstants, $http, $state, $q) {
        'ngInject';

        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$state = $state;
        this._$q = $q;
        this.current = null;
    }

    attemptAuth(type, credentials) {
        let route = (type === 'login') ? '/login' : '';
        return this._$http({
            url: this._AppConstants.api + '/users' + route,
            method: 'POST',
            data: {
                user: credentials
            }
        }).then(
            (res) => {
                this._JWT.save(res.data.user.token);
                this.current = res.data.user;

                return res;
            }
        );
    }

    ensureAuthIs(bool) {
        let deferred = this._$q.defer();

        this.verifyAuth().then((authValid) => {
            // if it's the opposite, redirect home
            if (authValid !== bool) {
                this._$state.go('app.home');
                deferred.resolve(false);
            } else {
                deferred.resolve(true);
            }
        })

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
                url: this._AppConstants.api + '/user',
                method: 'POST'
                // headers: {
                //     Authorization: 'Token ' + this._JWT.get()
                // }
            }).then(
                (res) => {
                    this.current = res.data.user;
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
        this._$state.go(this._$state.$current, null, {
            refresh: true
        });
    }

    update(fields) {
        return this._$http({
            url: this._AppConstants.api + '/user',
            method: 'POST',
            data: {
                user: fields
            }
        }).then(
            (res) => {
                this.current = res.data.user;
                return res.data.user;
            }
        );
    }

}
