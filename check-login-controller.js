angular.module('demoApp', [])
    .controller('checkLoginController', function() {
        var checkLogin = this;
        checkLogin.checkLogin = localStorage.getItem('loggedin') == "true";
    });