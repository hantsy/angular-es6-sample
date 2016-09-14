class PostsController {
  constructor() {
    this.name = 'posts';
    this.q = "";
    this.posts = [];
  }

  $onInit() {
    console.log("initializing Posts...");
    this.posts = [
      { id: 1, title: 'My first Post', content: 'Content of my first Post', createdAt: '2016-9-14' },
      { id: 2, title: 'My second Post', content: 'Content of my second Post', createdAt: '2016-9-14' },
      { id: 3, title: 'My third Post', content: 'Content of my third Post', createdAt: '2016-9-14' },
    ]
  }

  $onDestroy() {
    console.log("destroying Posts...");
  }

  search() {
    console.log("query posts by keyword" + this.q);
    this.posts.find(p => p.id == this.q);
  }
}

export default PostsController;
