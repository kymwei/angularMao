'use strict';

eventsApp.filter('energy', function(){
    return function(energySpend){
        switch(energySpend){
            case 1:
                return "no energy spend";
            case 2:
                return "burn 100 cal";
            case 3:
                return "burn 500 cal";
            case 4:
                return "super tired!!! out of energy";

        }

    }
});