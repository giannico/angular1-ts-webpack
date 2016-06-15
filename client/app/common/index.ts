// This module contains common code that's likely to be injected/shared throughout many feature modules of the
// application. These services can also be used by "components".
import * as angular from 'angular';

const commonModule = angular.module('common', []);

export { commonModule }