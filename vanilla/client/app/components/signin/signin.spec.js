import SigninModule from './signin'
import SigninController from './signin.controller';
import SigninComponent from './signin.component';
import SigninTemplate from './signin.html';

describe('Signin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SigninModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SigninController();
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
      expect(SigninTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SigninComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SigninTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SigninController);
      });
  });
});
