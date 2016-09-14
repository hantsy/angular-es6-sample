class PostDetailController {
  constructor($stateParams) {
    'ngInject';
    this._params=$stateParams;
    this.post = {};
    this.comments=[];
  }

  $onInit() {
    console.log("initializing Post...");
    this.post =
      { id: 1, title: 'My first Post', content: 'Content of my first Post', createdAt: '2016-9-14' };

    this.comments =[
 { id: 1, content: 'comment 1 of my first Post', createdAt: '2016-9-14' },
 { id: 2, content: 'comment 2 of my first Post', createdAt: '2016-9-14' }
    ];

  }

  $onDestroy() {
    console.log("destroying Post...");
  }

}

export default PostDetailController;
