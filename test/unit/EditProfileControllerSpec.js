'use strict';

describe('EditProfileControllerSpec', function() {

    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module('eventsApp'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function(){}});
    }));

    it('should build the gravatar with the given email address', function(){

        $controllerConstructor('EditProfileController', {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});

        var email = "foo@foo.com";

        spyOn(mockGravatarUrlBuilder, 'buildGravatarUrl');
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl).toHaveBeenCalledWith(email);
        // OR
        //scope.getGravatarUrl(email);
        // expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBeTruthy();
    })

});