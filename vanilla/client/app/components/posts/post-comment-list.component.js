import template from './post-comment-list.html';
import controller from './post-comment-list.controller.js';

let postCommentListComponent = {
  restrict: 'E',
  bindings: {
    comments: '<'
  },
  template,
  controller
};

export default postCommentListComponent;
