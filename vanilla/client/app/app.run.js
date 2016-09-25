import * as vis from 'ui-router-visualizer';

function AppRun(Auth, $rootScope, $state, $trace, $uiRouter, $transitions) {
  "ngInject";

  $rootScope.$on("event:signinRequest", function (event, data) {
    console.log("receviced:signinRequest");
    $state.go('app.signin');
  });

  $rootScope.$on("event:logoutRequest", function (event, data) {
    console.log("receviced:logoutRequest");
    Auth.logout();
    $state.go('app.signin');
  });

  $trace.enable('TRANSITION');

  //var vis = window['ui-router-visualizer'];
  vis.visualizer($uiRouter);

  //processing auth redirecting
  $transitions.onStart({
    to: (state) => {
      return !!state.data.requiresAuth;
    }
  }, function (trans) {
    var $state = trans.router.stateService;
    var _Auth = trans.injector().get('Auth');

    _Auth.ensureAuthIs(true);

  });

};

export default AppRun;
