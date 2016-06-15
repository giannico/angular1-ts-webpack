// This module contains application-specific features. Each feature is expected to be contained within its own
// folder/sub-module.
import * as angular from 'angular';

// application feature modules
import { homeModule } from './home';
import { aboutModule } from './about';

const featuresModule = angular.module('features', [
    aboutModule.name,
    homeModule.name
]);

export { featuresModule };
