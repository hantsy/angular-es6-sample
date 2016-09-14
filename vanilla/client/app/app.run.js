function AppRun($rootScope, $state, $trace) {
  "ngInject";

  $trace.enable('TRANSITION');

  $rootScope.$on("event:signinRequest", function (event, data) {
    console.log("receviced:signinRequest");
    $state.go('signin');
  });

  $rootScope.$on("event:logoutRequest", function (event, data) {
    console.log("receviced:logoutRequest");
    $state.go('signin');
  });

};

export default AppRun;
