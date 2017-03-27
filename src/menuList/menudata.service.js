(function () {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q', '$timeout']
  function MenuDataService($q, $timeout) {
    var service = this;
    
  }
})();
