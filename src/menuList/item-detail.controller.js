(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['MenuDataService', 'itemDetail'];
  function ItemDetailController(MenuDataService, itemDetail) {
    var itemMenuDetail = this;
    itemMenuDetail.itemDetail = itemDetail;
  }

})();
