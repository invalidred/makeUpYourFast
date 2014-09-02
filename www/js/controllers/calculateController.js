angular.module('makeupYourFast.controllers')
.controller('calculateController', function($scope, $ionicModal, calculate) {
  
  $scope.daysToFast = calculate.dayOfWeekModel;
  $scope.minDate = calculate.getTodayAsString();
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
    $scope.daysToFastSelected = calculate.dayOfWeekSelected();
  };

  $scope.$on('$destroy', function() {
    $scope.daysToFastModal.remove();
    $scope.datemodal.remove();
  });

  $scope.buttonText = "Calculate";
  $scope.calculateDateOfCompletion = function() {
    var currentDay = today,
        currentDayOfWeek = currentDay.getDay(),
        numberOfDaysToFast = $scope.daysToFast,
        weekDaysToFast = selectedDaysToFast;

  };
});
