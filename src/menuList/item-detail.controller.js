(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['MenuDataService', 'itemsDetail'];
  function ItemDetailController(MenuDataService, itemsDetail) {
    var menuList = this;
    menuList.itemsDetail = itemsDetail.data.menu_items;
    console.log("Controller", menuList);
  }

})();
