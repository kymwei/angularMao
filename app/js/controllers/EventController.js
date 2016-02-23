'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name:'Angular for MaoMao',
            catname: 'Mister Mao',
            age: ' Ray said she is 8',
            location:{
                add:"96 hanging gdn",
                city:'Irvine',
                province:'CA'

            },
            imgUrl:'img/maomao.jpg',
            sessions:[
                {
                    name:'Morning',
                    doing:'sleep',
                    level:'easy',
                    abstract:'she just sleep in the morning',
                    upVotecount :0

                },
                {
                    name:'Lunch',
                    doing:'poo',
                    level:'advance',
                    abstract:'she poo at outside of box',
                    upVotecount :0
                },
                {
                    name:'Dinner',
                    doing:'chasin coocoo',
                    level:'Introductory',
                    abstract:'she just pet coco hand and tell coco he is stupid',
                    upVotecount :0
                }
            ]

        }

    }

);

