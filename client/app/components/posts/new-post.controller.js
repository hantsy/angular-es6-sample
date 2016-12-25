class NewPostController {
  constructor(Post, $state) {
    'ngInject';

    this._Post = Post;
    this._$state = $state;
    this.data = { title: '', content: '' };
  }

  $onInit() {
    console.log("initializing NewPost...");
  }

  $onDestroy() {
    console.log("destroying NewPost...");
  }

  save() {
    console.log("saving data @" + this.data);
    this._Post.save(this.data)
      .then((res) => {
        this._$state.go('app.posts');
      })
  }

}

export default NewPostController;
