(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['MenuDataService', 'itemsDetail'];
  function ItemDetailController(MenuDataService, itemsDetail) {
    var itemMenuDetail = this;
    itemMenuDetail.itemsDetail = itemsDetail;
  }

})();
