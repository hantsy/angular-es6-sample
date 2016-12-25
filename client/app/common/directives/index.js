import angular from 'angular';
import ShowAuthed from './show-authed.directive';

let directivesModule = angular.module('app.common.directives', [])

.directive('showAuthed', ShowAuthed)

.name;

export default directivesModule;
