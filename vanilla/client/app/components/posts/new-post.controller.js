class NewPostController {
  constructor() {
    'ngInject';
    this.data = {title:'', content:''};
  }

  $onInit() {
    console.log("initializing Post...");
  }

  $onDestroy() {
    console.log("destroying Post...");
  }

  save(){
    console.log("saving data @"+ this.data);
  }

}

export default NewPostController;
