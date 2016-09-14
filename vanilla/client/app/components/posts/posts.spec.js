import PostsModule from './posts'
import PostsController from './posts.controller';
import PostsComponent from './posts.component';
import PostsTemplate from './posts.html';

describe('Posts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PostsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PostsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PostsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PostsController);
      });
  });
});
