class SignupController {
  constructor(Auth, $state) {
    'ngInject';

    this._Auth = Auth;
    this._$state = $state;
    this.name = 'signup';
    this.data = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    };
  }

  signup() {
    console.log('sign up with data @' + this.data);
    this._Auth.attempAuth('signup', this.data)
      .then((res) => {
        this._$state.go('app.posts');
      });
  }
}

export default SignupController;
