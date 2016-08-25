OLMPC.controller('baseController', ['$scope', '$http', '$window', '$filter',  function($scope, $http, $window, $filter){

$scope.idView = 0;
$scope.result = function(){
  console.log('hit result!');
  console.log('id view is ', $scope.idView);
  $scope.idView++;

  var sendRace = {
    raceId: $scope.idView
  };

  $http({
    method: 'POST',
    url: '/raceResult',
    data: sendRace
  }).then(function(response){
    console.log(response.data);
  });


}




;

}]);
