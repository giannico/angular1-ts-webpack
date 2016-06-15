const configureApp = function(appMod:angular.IModule):void {

    appMod.config(configRouting);

    /////////////////////////

    /*@ngInject*/
    function configRouting($locationProvider:angular.ILocationProvider,
                $urlRouterProvider:angular.ui.IUrlRouterProvider):void {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('home');
    }

}

export { configureApp }