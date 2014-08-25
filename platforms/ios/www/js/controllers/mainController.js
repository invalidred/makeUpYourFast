angular.module('makeupYourFast.controllers', ['pickadate'])

.controller('mainController', function($scope) {

})

.controller('rulesController', function($scope) {

})

.controller('calculateController', function($scope, $ionicModal) {
  
  $scope.daysToFast = [
    { weekDay: 'Monday', checked: false },
    { weekDay: 'Tuesday', checked: false },
    { weekDay: 'Wednesday', checked: false },
    { weekDay: 'Thursday', checked: false },
    { weekDay: 'Friday', checked: false },
    { weekDay: 'Saturday', checked: false },
    { weekDay: 'Sunday', checked: false },
  ];
  var today = new Date();
  $scope.minDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  var computeSelectedDays = function() {
    var days = '';
    for (var i = 0, len = $scope.daysToFast.length; i < len; ++i) {
      if ($scope.daysToFast[i].checked) {
        days += $scope.daysToFast[i].weekDay + ', ';
      }
    }
    $scope.daysToFastSelected =  days === '' ? undefined : days.substring(0, days.length - 2);
  };

  $ionicModal.fromTemplateUrl('templates/datemodal.html', 
    function(modal) {
        $scope.datemodal = modal;
    },
    { 
      scope: $scope, 
      animation: 'slide-in-up'
    }
  );

  $scope.opendateModal = function() {
    $scope.datemodal.show();
  };
  $scope.closedateModal = function(modal) {
    $scope.datemodal.hide();
    $scope.startDate = modal;
  };

  $ionicModal.fromTemplateUrl('templates/calculateTemplates/daysToFastModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.daysToFastModal = modal;
  });

  $scope.openDaysToFastModal = function() {
    $scope.daysToFastModal.show();
  };

  $scope.closeDaysToFastModal = function() {
    $scope.daysToFastModal.hide();
    computeSelectedDays();
  };

  $scope.$on('$destroy', function() {
    $scope.daysToFastModal.remove();
    $scope.datemodal.remove();
  });

})

.controller('progressController', function($scope) {

})

.controller('settingsController', function($scope) {
  
});
