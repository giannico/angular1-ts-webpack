import '../styles/app.css';

import * as angular from 'angular';

// application feature modules
import { blocksModule } from './blocks';
import { commonModule } from './common';
import { componentsModule } from './components';
import { featuresModule } from './features';

// configuration
import { configureApp } from './app.config';

const appModule = angular.module('app', [
    'vendor',

    blocksModule.name,
    commonModule.name,
    componentsModule.name,
    featuresModule.name
]);

configureApp(appModule);

export { appModule };

// import { IUsers } from './common/data/resources';

// export class AppCtrl {
//     users = [];

//     // @ngInject
//     constructor(public Users:IUsers) {}

//     loadUsers():void {
//         this.Users.get('1').
//             then(function(response) {
//                 console.log(response);
//             });
//     }
// }