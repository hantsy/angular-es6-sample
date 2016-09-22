class FooterController {
  constructor($scope) {
    'ngInject';
    this._$scope = $scope;
    this.name = 'footer';
  }

  $onInit() {
    console.log("initializing FooterController...");
  }

  $onDestroy() {
    console.log("destroying FooterController...");
  }

}

export default FooterController;
