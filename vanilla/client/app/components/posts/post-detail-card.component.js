import template from './post-detail-card.html';

let postDetailCardComponent = {
  restrict: 'E',
  bindings: {
    post: '<'
  },
  template
};

export default postDetailCardComponent;
