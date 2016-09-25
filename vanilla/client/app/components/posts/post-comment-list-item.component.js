import template from './post-comment-list-item.html';

let postCommentListItemComponent = {
  restrict: 'E',
  bindings: {
    comment: '<'
  },
  template
};

export default postCommentListItemComponent;
