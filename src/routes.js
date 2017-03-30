(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuList/templates/home.template.html'
    })

    .state('categoriesList', {
      url: '/categories',
      templateUrl: 'src/menuList/templates/main-categories.template.html',
      controller: 'MainMenuListController as mainList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('itemDetail', {
      url: '/item-detail/{shortname}',
      templateUrl: 'src/menuList/templates/main-items.template.html',
      controller: "ItemDetailController as menuDetail",
      resolve: {
        itemsDetail: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          //console.log(MenuDataService.getItemsForCategory($stateParams.shortname));
          return MenuDataService.getItemsForCategory($stateParams.shortname);
        }]
      }
    });
  }
})();
