class SignupController {
  constructor() {
    this.name = 'signup';
    this.data ={
      firstName:'',
        lastName:'',
      username:'',
    password:''
  };
  }

  signup(){
    console.log('sign up with data @'+ this.data);
  }
}

export default SignupController;
