class SigninController {
  constructor(Auth, $state, toastr) {
    'ngInject';

    this._Auth = Auth;
    this._$state = $state;
    this._toastr = toastr;
    this.name = 'signin';
    this.data = { username: '', password: '' };
  }

  signin() {
    console.log("signin with credentials:" + this.data);
    this._Auth.attempAuth('signin', this.data)
      .then((res) => {
        this._toastr.success('Welcome back,' + this.data.username);
        this._$state.go('app.posts');
      });
  }
}

export default SigninController;
