angular.module('makeupYourFast.controllers')
.controller('calculateController', function($scope, $ionicModal) {
  
  $scope.daysToFast = [
    { id: 0, weekDay: 'Sunday', checked: false },
    { id: 1, weekDay: 'Monday', checked: false },
    { id: 2, weekDay: 'Tuesday', checked: false },
    { id: 3, weekDay: 'Wednesday', checked: false },
    { id: 4, weekDay: 'Thursday', checked: false },
    { id: 5, weekDay: 'Friday', checked: false },
    { id: 6, weekDay: 'Saturday', checked: false }
  ];

  var today = new Date(),
      selectedDaysToFast = [],
  $scope.showCalculation = false;
  $scope.minDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  
  var computeSelectedDays = function() {
    var days = '';
    for (var i = 0, len = $scope.daysToFast.length; i < len; ++i) {
      if ($scope.daysToFast[i].checked) {
        selectedDaysToFast.push($scop.daysToFast[i].id);
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

  $scope.buttonText = "Calculate";
  $scope.calculateDateOfCompletion = function() {
    var currentDay = today,
        currentDayOfWeek = currentDay.getDay(),
        numberOfDaysToFast = $scope.daysToFast,
        weekDaysToFast = selectedDaysToFast;

  };
});

