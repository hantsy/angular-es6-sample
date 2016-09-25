class PostCommentFormController {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;
    this.newComment = {
      content: ''
    };
  }

  saveCommentForm() {
    this.onSaveComment({$event: this.newComment})
      .then(
        (res) => {
          this.newComment = {
            content: ''
          };
          this._$scope.form.$setPristine();
        }
      );
  }
}

export default PostCommentFormController;
