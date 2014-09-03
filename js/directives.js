/*global angular, $*/

(function () {
    'use strict';

    angular.module('menu').directive('menuItems', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu/items.html',
            controller: 'menuController'
        };
    });

    angular.module('menu').directive('menuBreadcrumb', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu/breadcrumb.html',
            controller: 'menuController'
        };
    });

    angular.module('menu').directive('tabFooter', function () {
        return {
            restrict: 'E',
            scope: {
                author: '=author'
            },
            templateUrl: 'templates/footer.html'
        };
    });
}());