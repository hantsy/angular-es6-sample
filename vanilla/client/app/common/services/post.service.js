class Post {

  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  // Creates or updates an post
  save(post) {

    let request = {};

    // If there's a id, perform an update via PUT w/ post's id
    if (post.id) {
      request.url = `${this._AppConstants.api}/posts/${post.id}`;
      request.method = 'PUT';
      // Delete the id from the post to ensure the server updates the id,
      // which happens if the title of the post changed.
      delete post.id;

      // Otherwise, this is a new post POST request
    } else {
      request.url = `${this._AppConstants.api}/posts`;
      request.method = 'POST';
    }

    // Set the post data in the data attribute of our request
    request.data = post;

    return this._$http(request);

  }

  // Creates or updates an post
  saveComment(postId, comment) {

    let request = {};

    // If there's a id, perform an update via PUT w/ post's id
    if (comment.id) {
      request.url = `${this._AppConstants.api}/posts/${postId}/comments/${comment.id}`;
      request.method = 'PUT';
      // Delete the id from the post to ensure the server updates the id,
      // which happens if the title of the post changed.
      delete comment.id;

      // Otherwise, this is a new post POST request
    } else {
      request.url = `${this._AppConstants.api}/posts/${postId}/comments`;
      request.method = 'POST';
    }

    // Set the post data in the data attribute of our request
    request.data = comment;

    return this._$http(request);

  }

  get(id) {

    let deferred = this._$q.defer();

    if (!id.replace(" ", "")) {
      deferred.reject("post id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/posts/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getCommentsByPost(id) {

    let deferred = this._$q.defer();

    if (!id.replace(" ", "")) {
      deferred.reject("post id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/posts/' + id + '/comments',
      method: 'GET'
    })
    .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
    );
    return deferred.promise;
  }

  getWithComments(id) {
    let deferred = this._$q.defer();
    this._$q.all([
      this.get(id),
      this.getCommentsByPost(id)
    ])
    .then(
      (res) => {
        deferred.resolve({ post: res[0], comments: res[1] })
      }
    );

    return deferred.promise;
  }

  // Delete an post
  destroy(id) {
    return this._$http({
      url: this._AppConstants.api + '/posts/' + id,
      method: 'DELETE'
    });
  }

  // // Favorite an post
  // favorite(id) {
  //   return this._$http({
  //     url: this._AppConstants.api + '/posts/' + id + '/favorite',
  //     method: 'POST'
  //   });
  // }

  // // Unfavorite an post
  // unfavorite(id) {
  //   return this._$http({
  //     url: this._AppConstants.api + '/posts/' + id + '/favorite',
  //     method: 'DELETE'
  //   });
  // }


  query(keyword) {
    let deferred = this._$q.defer();
    // Create the $http object for this request
    let request = {
      url: this._AppConstants.api + '/posts',
      method: 'GET',
      params: !!keyword ? { 'q': keyword } : null
    };

    this._$http(request)
      .then(
        (res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );

    return deferred.promise;
  }
}

export default Post;
