class SigninController {
  constructor() {
    'ngInject';
    this.name = 'signin';
    this.data={username:'', password:''};
  }

  signin(){
    console.log("signin with credentials:"+ this.data);
  }
}

export default SigninController;
