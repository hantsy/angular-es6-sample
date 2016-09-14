import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsComponent from './posts.component';
import postDetailComponent from './post-detail.component';
import newPostComponent from './new-post.component';
import editPostComponent from './edit-post.component';

let postsModule = angular.module('posts', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('posts', {
        url: '/posts',
        component: 'posts'
      })
      .state('view-post', {
        url: '/post-detail/:id',
        component: 'postDetail'
      })
      .state('edit-post', {
        url: '/edit-post/:id',
        component: 'editPost'
      })
      .state('new-post', {
        url: '/new-post',
        component: 'newPost'
      });
  })
  .component('posts', postsComponent)
  .component('postDetail', postDetailComponent)
  .component('newPost', newPostComponent)
  .component('editPost', editPostComponent)
  .name;

export default postsModule;
