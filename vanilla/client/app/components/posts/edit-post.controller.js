class EditPostController {
  constructor($stateParams) {
    'ngInject';
    this._params=$stateParams;
    this.data = {};
  }

  $onInit() {
    console.log("initializing Post...");
    this.id=this._params.id;
    this.data=  {id:1, title:'post title', content:'post content', createdAt:'2016-9-12'};
  }

  $onDestroy() {
    console.log("destroying Post...");
  }

  save(){
    console.log("saving data @"+ this.data);
  }

}

export default EditPostController;
