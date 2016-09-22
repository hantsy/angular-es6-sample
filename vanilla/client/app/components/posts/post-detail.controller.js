class PostDetailController {
  constructor(Post, $stateParams) {
    'ngInject';

    this._Post = Post;
    this.id = $stateParams.id;
    this.post = {};
    this.comments = [];
    this.newComment = {
      content: ''
    };
  }

  $onInit() {
    console.log("initializing Post Details...");

    this._Post.getWithComments(this.id)
      .then(
      (res) => {
        this.post = res.post;
        this.comments = res.comments
      }
      );
  }

  $onDestroy() {
    console.log("destroying Post...");
  }

  onSaveComment() {
    console.log("saving comment...@");
    this._Post.saveComment(this.id, this.newComment)
      .then((res) => {
        //refresh comments by post.
        console.log('saved comment.');
        this._Post.getCommentsByPost(this.id)
          .then(
          (res) => {
            this.comments = res;
            this.newComment = {
              content: ''
            };
          }
          );
      });
  }

}

export default PostDetailController;
