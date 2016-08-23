var ratDash = angular.module('ratDash', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngAria', 'ngMessages', 'ngMaterial'])
    // Set the material design color theme
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('green');
    });


