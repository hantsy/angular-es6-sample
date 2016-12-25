class SigninController {
  constructor(Auth, $state, toastr, $translate) {
    'ngInject';

    this._Auth = Auth;
    this._$state = $state;
    this._toastr = toastr;
    this._$translate = $translate;
    this.name = 'signin';
    this.data = {
      username: '',
      password: ''
    };
  }

  signin() {
    console.log("signin with credentials:" + this.data);
    this._Auth.attempAuth('signin', this.data)
      .then((res) => {
        this._toastr.success(this._$translate.instant('welcome-back', {
          name: this.data.username
        }));
        this._$state.go('app.posts');
      });
  }
}

export default SigninController;
