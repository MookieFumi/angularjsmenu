/*global angular, $*/

(function () {
    'use strict';

    angular.module('menu').directive('menuItems', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu/items.html',
            scope: {
                menus: '=',
                selected: '=',
                previousSelected: '='
            },
            link: function (scope, element, attrs) {
                scope.selectMenu = function (menu) {
                    scope.previousSelected = $.extend({}, scope.selected);
                    scope.selected.menu = menu;
                };

                scope.selectSubMenu = function (subMenu) {
                    scope.previousSelected = $.extend({}, scope.selected);
                    scope.selected.subMenu = subMenu;
                };

                scope.selectItem = function (item) {
                    scope.previousSelected = $.extend({}, scope.selected);
                    scope.selected.item = item;
                };
            }
        };
    });

    angular.module('menu').directive('menuBreadcrumb', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu/breadcrumb.html',
            controller: 'menuController',
            link: function (scope, element, attrs) {

                scope.hasBack = function () {
                    if (scope.previousSelected !== false) {
                        return true;
                    }
                    return false;
                };
                scope.navigation = {};

                scope.navigation.toHome = function () {
                    scope.previousSelected = $.extend({}, scope.selected);
                    scope.selected = {};
                };

                scope.navigation.toMenu = function () {
                    scope.previousSelected = $.extend({}, scope.selected);

                    scope.selected.subMenu = undefined;
                    scope.selected.item = undefined;

                };

                scope.navigation.toSubMenu = function () {
                    scope.previousSelected = $.extend({}, scope.selected);

                    scope.selected.item = undefined;

                };

                scope.navigation.toBack = function () {
                    if (scope.previousSelected.menu) {
                        var tmp = $.extend({}, scope.previousSelected);
                        scope.previousSelected = $.extend({}, scope.selected);
                        scope.selected = $.extend({}, tmp);

                    } else {
                        scope.navigation.toHome();
                    }
                };
            }
        };
    });

    angular.module('menu').directive('footer', function () {
        return {
            restrict: 'E',
            scope: {
                authorInfo: '=author'
            },
            templateUrl: 'templates/footer.html'
        };
    });

}());