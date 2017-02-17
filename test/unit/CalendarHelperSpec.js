'use strict';

describe('calendarHelper', function() {

    beforeEach(module('eventsApp'));

    it('should return January with given zero', inject(function(calendarHelper){
        expect(calendarHelper.getMonthName(0)).toBe('January');
    }));

});