import angular from 'angular';
import Home from './home/';
import About from './about/';
import Posts from './posts/';
import Signin from './signin/';
import Signup from './signup/';
import Profile from './profile/';

let componentsModule = angular.module('app.components', [
  Home,
  About,
  Posts,
  Signin,
  Signup,
  Profile
])
.name;

export default componentsModule;
