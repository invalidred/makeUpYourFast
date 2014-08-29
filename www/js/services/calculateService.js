var servicesModule = angular.module('makeUpYouFast.servies', []);

servicesModule.factory('calculate', function(){
  var that = {};
  that.dayOfWeekModel = [
    { id: 0, weekDay: 'Sunday', checked: false },
    { id: 1, weekDay: 'Monday', checked: false },
    { id: 2, weekDay: 'Tuesday', checked: false },
    { id: 3, weekDay: 'Wednesday', checked: false },
    { id: 4, weekDay: 'Thursday', checked: false },
    { id: 5, weekDay: 'Friday', checked: false },
    { id: 6, weekDay: 'Saturday', checked: false }
  ];

  that.dayOfWeekSelected = function() {
    var days = '';
    for (var i = 0, len = that.dayOfWeekModel.length; i < len; ++i) {
      if (that.dayOfWeekModel[i].checked) {
        days += $that.dayOfWeekModel[i].weekDay + ', ';
      }
    }
    return days === '' ? undefined : days.substring(0, days.length - 2);
  };

  return that;
});