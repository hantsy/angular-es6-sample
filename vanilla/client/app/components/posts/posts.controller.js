class PostsController {
  constructor(Post) {
    'ngInject';

    this._Post = Post;
    this.name = 'posts';
    this.q = "";
    this.posts = [];
  }

  $onInit() {
    console.log("initializing Posts...");
    // this.posts = [
    //   { id: 1, title: 'My first Post', content: 'Content of my first Post', createdAt: '2016-9-14' },
    //   { id: 2, title: 'My second Post', content: 'Content of my second Post', createdAt: '2016-9-14' },
    //   { id: 3, title: 'My third Post', content: 'Content of my third Post', createdAt: '2016-9-14' },
    // ]
    this.doSearch();
  }

  doSearch() {
    this._Post
      .query(this.q)
      .then(
      (res) => this.posts = res
      );
  }

  $onDestroy() {
    console.log("destroying Posts...");
  }

  search() {
    console.log("query posts by keyword" + this.q);
    this.doSearch();
  }
}

export default PostsController;
