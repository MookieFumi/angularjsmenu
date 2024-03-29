/*global angular, $*/

(function () {
    'use strict';
    var menuController = function ($scope) {
        $scope.author = {
            name: 'MookieFumi',
            url: 'http://www.mookiefumi.com'
        };
        $scope.selected = {};
        $scope.previousSelected = false;        
        
        $scope.navigation = {
            hasBack: function () {
                if ($scope.previousSelected !== false && $scope.previousSelected !== undefined) {
                    return true;
                }
                return false;
            },
            toBack: function () {
                if ($scope.previousSelected.menu) {
                    var tmp = $.extend({}, $scope.previousSelected);
                    $scope.previousSelected = $.extend({}, $scope.selected);
                    $scope.selected = $.extend({}, tmp);
                } else {
                    $scope.navigation.toHome();
                }
            },
            toHome: function () {
                $scope.previousSelected = $.extend({}, $scope.selected);
                $scope.selected = {};
            },
            toMenu: function (menu) {
                $scope.previousSelected = $.extend({}, $scope.selected);
                $scope.selected.menu = menu;
                $scope.selected.subMenu = undefined;
                $scope.selected.item = undefined;
            },
            toSubMenu: function (subMenu) {
                $scope.previousSelected = $.extend({}, $scope.selected);
                $scope.selected.subMenu = subMenu;
                $scope.selected.item = undefined;
            },
            toItem: function (item) {
                $scope.previousSelected = $.extend({}, $scope.selected);
                $scope.selected.item = item;
            }
        };
        $scope.config = {};
        $scope.config.items = [
            {
                name: "Matenimientos",
                description: "Mantenimientos básicos de la app.",
                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-48.png",
                submenus: [
                    {
                        name: "Configuración",
                        description: "Módulo inicial de configuración",
                        imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-48.png",
                        items: [
                            {
                                name: "Cargos",
                                description: "Mantenimiento de los cargos",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                            },
                            {
                                name: "Directivos",
                                description: "Mantenimiento de los directivos",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                            },
                            {
                                name: "Canales",
                                description: "Mantenimiento de los canales",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Tipos de tienda",
                                description: "Mantenimiento de los tipos de tienda",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Tiendas",
                                description: "Mantenimiento de los tiendas",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    }
                    ]
                }
                ]
            },
            {
                name: "Ventas",
                description: "Módulo de ventas",
                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/box-48.png",
                submenus: [
                    {
                        name: "Mantenimientos",
                        description: "Datos de configuración",
                        imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-48.png",
                        items: [
                            {
                                name: "Ejercicios",
                                description: "Mantenimiento de los ejercicios",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Niveles vendedores",
                                description: "Mantenimiento de los niveles de vendedores",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Objetivos cualitativos",
                                description: "Mantenimiento de los obj. cualitativos",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Canales",
                                description: "Mantenimiento de los canales",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Tiendas",
                                description: "Mantenimiento de las tiendas",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Empleados",
                                description: "Mantenimiento de los empleados",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    }
                    ]
                },
                    {
                        name: "Presupuestos",
                        description: "Presupuestos del módulo de ventas",
                        imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/box-48.png",
                        items: [
                            {
                                name: "Asistente canales",
                                description: "Presupuestos para los canales",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    },
                            {
                                name: "Asistente tiendas",
                                description: "Presupuestos para las tiendas",
                                imageUrl: "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/laptop-48.png"
                    }
                    ]
                }
                ]
            }
            ];
    };

    menuController.$inject = ['$scope'];
    angular.module('menu').controller("menuController", menuController);
}());