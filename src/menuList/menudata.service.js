(function () {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$timeout']
  function MenuDataService($http, $timeout) {
    var service = this;

    service.getAllCategories = function() {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
      // console.log(response);
      return response;
    };

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=",
        params: {
          category: categoryShortName
        }
      });
      return response;
    }
  }
})();
