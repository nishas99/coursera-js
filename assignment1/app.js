(function  (){
    'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController' , function ($scope){
        $scope.names = "";
        $scope.message = "";

        $scope.displaymessage = function(){
            if( $scope.names == ""){
                $scope.message = "Please enter data first";
            }
            else {
            $scope.message = messages($scope.names);
            }
        }

        function messages(string){
            const words = string.split(',');
            if (words.length < 4){
                return "Enjoy!";
                }

            else {
                return "Too much !";
                }
                
            }
    

    });


})();