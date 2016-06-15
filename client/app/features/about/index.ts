import * as angular from 'angular';
import { aboutComponent } from './about.view.ts';

const aboutModule = angular.module('about', []);

aboutModule.component('about', aboutComponent);

/*@ngInject*/
aboutModule.config(function($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state({
        name: 'about',
        url: '/about',
        template: '<about></about>'
    });
});

export { aboutModule };