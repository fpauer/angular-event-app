'use strict';

describe('eventThumbnail', function() {
    var el;

    beforeEach(module('eventsApp'));
    beforeEach(module('/templates/directives/eventThumbnail.html'));
    beforeEach(inject(function($compile, $rootScope){
        var scope = $rootScope.$new();
        scope.event = {
            id: 1,
            name: 'Angular expo',
            date:'1/1/2050',
            time: '10:30',
            location: {
                address: '1234 fake st',
                city: 'NY',
                province: 'NY'
            }
        };

        el = angular.element('<event-thumbnail event="event"></event-thumbnail>');
        $compile(el)(scope);
        scope.$digest();
    }));

    it('should bind a data', function() {
        expect(el.text()).toContain('Angular expo');
    });
});