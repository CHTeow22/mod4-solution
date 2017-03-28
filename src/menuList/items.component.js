(function () {
  'use strict';

  angular.module('MenuApp')
  .component('itemDetail', {
    templateUrl: 'src/menuList/templates/items.template.html',
    bindings: {
      menuDetail: '<'
    }
  });
})();
