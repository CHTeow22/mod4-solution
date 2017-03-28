(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categoriesList', {
    templateUrl: 'src/menuList/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });
})();
