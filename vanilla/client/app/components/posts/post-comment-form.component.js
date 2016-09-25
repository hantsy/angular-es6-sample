import template from './post-comment-form.html';
import controller from './post-comment-form.controller.js';

let postCommentFormComponent = {
  restrict: 'E',
  bindings: {
    onSaveComment: '&'
  },
  template,
  controller
};

export default postCommentFormComponent;
