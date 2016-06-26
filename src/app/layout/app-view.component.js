class AppViewCtrl {
  constructor(AppConstants) {
    'ngInject';
    this.appName = AppConstants.appName;

    // Get today's date to generate the year
    this.date = new Date();
  }
}

let AppView = {
  controller: AppViewCtrl,
  templateUrl: 'app/layout/app-view.html'
};

export default AppView;
