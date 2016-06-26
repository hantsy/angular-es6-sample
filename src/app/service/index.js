let serviceModule = angular.module('app.service', []);

import { GithubContributorService } from './githubContributor.service';
serviceModule.service('githubContributor', GithubContributorService);

import { WebDevTecService } from './webDevTec.service';
serviceModule.service('webDevTec', WebDevTecService);

import {JWTService} from './jwt.service';
serviceModule.service('JWT', JWTService);

import {PostsService} from './posts.service';
serviceModule.service('Posts', PostsService);

import {CommentsService} from './comments.service';
serviceModule.service('Comments', CommentsService);

import {AuthService} from './auth.service';
serviceModule.service('Auth', AuthService);

import {UsersService} from './users.service';
serviceModule.service('Users', UsersService);

import {ProfileService} from './profile.service';
serviceModule.service('Profile', ProfileService);

export default serviceModule;
