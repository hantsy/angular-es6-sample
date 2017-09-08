//import uiRouter from '@uirouter/angularjs';

class NavbarController {
  constructor($scope) {
    'ngInject';
    this._$scope = $scope;
    this.name = 'navbar';
  }

  $onInit() {
    console.log("initializing NavbarController...");
  }

  $onDestroy() {
    console.log("destroying NavbarController...");
  }
  onSignin() {
    console.log("on signin...");
    this._$scope.$emit("event:signinRequest");
  }

  onLogout() {
    console.log("on logout...");
    this._$scope.$emit("event:logoutRequest");
  }
}

export default NavbarController;
