angular.module('demoApp', [])
    .controller('LoginController', function($timeout) {
        var login = this;

        login.login = function(){
            $timeout(function(){
                localStorage.setItem('loggedin', 'true');
            },500)
        };
    });