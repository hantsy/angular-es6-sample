class PostDetailController {
  constructor(Post, $stateParams, toastr, $q) {
    'ngInject';

    this._Post = Post;
    this._toastr = toastr;
    this._$q = $q;
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

  saveComment(event) {
    console.log("saving comment...@");
    let deferred = this._$q.defer();

    this._Post.saveComment(this.id, event)
      .then((res) => {
        //refresh comments by post.
        console.log('saved comment.');
        this._Post.getCommentsByPost(this.id)
          .then((res) => {
            console.log('refresh comments list...');
            this.comments = res;
            this._toastr.success('Comment was added!');
            deferred.resolve(res);
          });
      });

    return deferred.promise;
  }

}

export default PostDetailController;
