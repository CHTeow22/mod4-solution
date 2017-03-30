(function () {
  'use strict';

  angular.module('MenuApp')
  .component('menuList', {
    templateUrl: 'src/menuList/templates/items.template.html',
    bindings: {
      itemsDetail: '<'
    }

    ,
    controller: function () {
      this.$onInit = function(){
        console.log(this);
      }
    }
  });
})();
