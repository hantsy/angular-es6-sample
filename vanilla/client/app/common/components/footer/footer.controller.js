class FooterController {
  constructor($scope, $translate) {
    'ngInject';
    this._$scope = $scope;
    this._$translate = $translate;
    this.name = 'footer';
  }

  $onInit() {
    console.log("initializing FooterController...");
  }

  $onDestroy() {
    console.log("destroying FooterController...");
  }

  setLanguage(key) {
    this._$translate.use(key);
  }

  isLanguage(key) {
    return key===this._$translate.use();
  }
}

export default FooterController;
