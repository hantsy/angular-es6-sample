class EditPostController {
  constructor(Post, $state, $stateParams) {
    'ngInject';

    this._Post = Post;
    this._$state = $state;
    this.id = $stateParams.id;
    this.data = {};
  }

  $onInit() {
    console.log("initializing Post...");
    //this.data = { id: 1, title: 'post title', content: 'post content', createdAt: '2016-9-12' };
    this._Post.get(this.id).then((res) => this.data = res);
  }

  $onDestroy() {
    console.log("destroying Post...");
  }

  save() {
    console.log("saving data @" + this.data);
    this._Post.save(this.data).then((res) => {
      this._$state.go('app.posts');
    });
  }

}

export default EditPostController;
