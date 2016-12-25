import template from './posts.html';
import controller from './posts.controller';
import './posts.styl';

let postsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default postsComponent;
