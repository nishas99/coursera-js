(function () {
    'use strict';
    var buy = [
        {
          name: "Coke", quantity: "2"
        },
        {
          name: "Donuts", quantity: "20"
        },
        {
          name: "Cookies", quantity: "30"
        },
        {
          name: "Chocolate",quantity: "5"
        },
        {
            name: "Cakes", quantity: "5"
        }
      ];
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var list1 = this;
        list1.items = ShoppingListCheckOffService.getBuy();

        list1.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list2 = this;
        list2.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var service =this;
        var items = [];
        var bought = [];

        var items = buy;

        service.getBought = function (Bought) {
            return bought;
          };
        service.getBuy = function () {
            return buy;
        };
        service.removeItem = function (itemIndex) {
            var removeitems = items.splice(itemIndex, 1);
            bought.push(removeitems[0]);
          };
        
    }

})();


