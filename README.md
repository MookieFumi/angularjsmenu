angularjsmenu
=========

Pruebas con las directivas de angular. Es un menú con un breadcrumb funcionando de forma sincronizada. Dos directivas, una para el breadcrumb y otra para el menú.

Puedes verlo funcionar en [en este sitio web de Azure].

El html de nuestro index.html queda muy limpio.
```html
<body ng-controller="menuController">
    <div class="container">
        <menu-breadcrumb></menu-breadcrumb>
        <menu-items></menu-items>
    </div>    
    <div class="container">
        <tab-footer author="author"></tab-footer>
    </div>   
</body>
```
  
Resumen de las directivas en AngularJS.
=========

Son marcadores en un elemento del DOM que le indican un comportamiento específico.

El tipo de marcador se puede definir mediante restrict y pueden combinarse: 

  - A. Por nombre de atributo.
  - E. Por nombre de elemento.
  - C. Por nombre de clase.

<b>A. Atributo</b>
```html
  <div menu-footer></div>
  <script>
    angular.module('menu').directive('menuFooter', function () {
        return {
            restrict: 'A',
            template: '<footer class="row margin-top-30"><div class="panel-footer text-right"><p>Copyright (c) 2014</p></div></footer>'
        };
    });
  </script>
```
<b>E. Nombre del elemento</b>
```html
  <menu-footer></menu-footer>
  <script>
    angular.module('menu').directive('menuFooter', function () {
        return {
            restrict: 'E',
            template: '<footer class="row margin-top-30"><div class="panel-footer text-right"><p>Copyright (c) 2014</p></div></footer>'
        };
    });
  </script>
```
<b>C. Clase de css</b>
```html
  <div class="menu-footer"></div>
  <script>
    angular.module('menu').directive('menuFooter', function () {
        return {
            restrict: 'C',
            template: '<footer class="row margin-top-30"><div class="panel-footer text-right"><p>Copyright (c) 2014</p></div></footer>'
        };
    });
  </script>
```
    


<h2>Aislar el scope.</h2>
```html
<script>   
   angular.controller('menu', function () {
       $scope.author = 'MookieFumi';
   });
   
    angular.module('menu').directive('tabFooter', function () {
        return {
            restrict: 'E',
            template: '<footer class="row margin-top-30"><div class="panel-footer text-right"><p>{{author}} Copyright (c) 2014</p></div></footer>'
        };
    });
</script>
```

En ejemplo anterior sólo podemos usar nuestra directiva dentro de un scope concreto para evitarlo podemos aislar el scope de la siguiente manera.
```html
<tab-footer author="author"></tab-footer>
<script>   
    angular.module('menu').directive('tabFooter', function () {
        return {
            restrict: 'E',
            scope: {
                author: '=author'
            },
            template: '<footer class="row margin-top-30"><div class="panel-footer text-right"><p>{{author}} Copyright (c) 2014</p></div></footer>'
        };
    });
</script>
```

<h2>Separar el Html del archivo js</h2>
En vez de template tenemos que utilizar la opción templateUrl.
```html
<script>   
    angular.module('menu').directive('tabFooter', function () {
        return {
            restrict: 'E',
            scope: {
                author: '=author'
            },
            templateUrl: 'templates/footer.html'
        };
    });
</script>
```

[en este sitio web de Azure]:http://angularjsmenu.azurewebsites.net/

