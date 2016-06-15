import * as angular from 'angular';
import { homeComponent } from './home.view.ts';

const homeModule = angular.module('home', []);

homeModule.component('home', homeComponent);

/*@ngInject*/
homeModule.config(function($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<home></home>'
    });
});

export { homeModule };