class PostCommentListController {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;
  }

  $onChanges(changes) {
    console.log('changes of comment list:' + changes);
  }
}

export default PostCommentListController;
