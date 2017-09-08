import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import commonSevices from '../../common/services/';
import postsComponent from './posts.component';
import postDetailComponent from './post-detail.component';
import postDetailCardComponent from './post-detail-card.component';
import postCommentListComponent from './post-comment-list.component';
import postCommentListItemComponent from './post-comment-list-item.component';
import postCommentFormComponent from './post-comment-form.component';
import newPostComponent from './new-post.component';
import editPostComponent from './edit-post.component';

let postsModule = angular.module('posts', [commonSevices, uiRouter])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('app.posts', {
        url: '/posts',
        component: 'posts',
        data: {
          requiresAuth: false
        }
      })
      .state('app.view-post', {
        url: '/post-detail/:id',
        component: 'postDetail',
        data: {
          requiresAuth: false
        }
      })
      .state('app.edit-post', {
        url: '/edit-post/:id',
        component: 'editPost'
      })
      .state('app.new-post', {
        url: '/new-post',
        component: 'newPost'
      });
  })
  .component('posts', postsComponent)
  .component('postDetail', postDetailComponent)
  .component('postDetailCard', postDetailCardComponent)
  .component('postCommentList', postCommentListComponent)
  .component('postCommentListItem', postCommentListItemComponent)
  .component('postCommentForm', postCommentFormComponent)
  .component('newPost', newPostComponent)
  .component('editPost', editPostComponent)
  .name;

export default postsModule;
