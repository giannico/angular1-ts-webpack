// This module contains components that are generic and can be dropped into any application. They contain no
// application-specific functionality, and can only rely on other components.
import * as angular from 'angular';

const blocksModule = angular.module('blocks', []);

export { blocksModule }