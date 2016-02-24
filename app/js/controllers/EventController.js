'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">hi there! </span>';
        $scope.boolValue = true;
        $scope.maoStyle = {color:'red'};
        $scope.maoClass = 'maomao';
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        $scope.event = {
            name:'Angular for MaoMao',
            catname: 'Mister Mao',
            age: ' Ray said she is 8',
            date: 1332313200000,
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
                    energySpend: 1,
                    abstract:'she just sleep in the morning',
                    upVotecount :0

                },
                {
                    name:'Lunch',
                    doing:'poo',
                    level:'advance',
                    energySpend: 2,
                    abstract:'she poo at outside of box',
                    upVotecount :0
                },
                {
                    name:'Dinner',
                    doing:'chasin coocoo',
                    level:'Introductory',
                    energySpend: 3,
                    abstract:'she just pet coco hand and tell coco he is stupid',
                    upVotecount :0
                },
                {
                    name:'late nite',
                    doing:'abuse me',
                    level:'Crazy',
                    energySpend: 4,
                    abstract:'she just step over my chest and sleep on my head',
                    upVotecount :0
                }
            ]

        };

        $scope.limitNumber = $scope.event.sessions.length;

        //ng directive
        $scope.upVotesession = function (session){
            session.upVotecount ++ ;
        }
        $scope.downVotesession = function (session){
            session.upVotecount -- ;
        }
    }

);

