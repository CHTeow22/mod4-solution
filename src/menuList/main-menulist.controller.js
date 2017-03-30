(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainMenuListController', MainMenuListController);

  MainMenuListController.$inject = ['MenuDataService' ,'items'];
  function MainMenuListController(MenuDataService, items) {
    var categoriesList = this;
    categoriesList.items = items.data;
  }
})();
