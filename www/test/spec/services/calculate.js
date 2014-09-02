describe('Unit: CalculateServices', function() {
  beforeEach(module('makeUpYourFast.services'));

  var calculateService,
      model;
  //inject the calculate service
  beforeEach(function() {
    inject(function(_calculate_) {
      calculateService = _calculate_;
      model = calculateService.dayOfWeekModel;
    });
  });

  it('when 1 is selected, dayOfWeekSelected() should print "Monday"', function() {
    model[1].checked = true;
    expect(calculateService.dayOfWeekSelected()).toBe('Monday');
  });

  it('when 1, 3 is selected, dayOfWeekSelected() should print "Monday, Wednesday"', function() {
    model[1].checked = true;
    model[3].checked = true;
    expect(calculateService.dayOfWeekSelected()).toBe('Monday, Wednesday');
  });

  it('getTodayAsString should format date in YYYY-MM-DD format', function() {
    expect(calculateService.getTodayAsString()).toMatch(new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}'));
  });
})