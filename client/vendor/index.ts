// vendor js libraries
import * as angular from 'angular';
import 'lodash';
import 'angular-ui-router';

// vendor css
import 'bootstrap/dist/css/bootstrap.css';

var vendorModule = angular.module('vendor', ['ui.router']);

export { vendorModule };