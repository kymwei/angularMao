'use strict';

eventsApp.controller('EditEventController',
    function($scope){
        $scope.saveEvent = function(event, newEventForm){
            window.alert('event ' + event.name + ' saved!');
        }

        $scope.cancelEdit = function(){
            window.location = '/EventDetails.html';
        }
    }

);