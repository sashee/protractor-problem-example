describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('/check_login.html');

        expect(element(by.id('status')).getText()).toEqual("You are NOT logged in");

        browser.get('/login.html');

        element(by.css('button')).click();

        // Uncomment this and the spec passes every time
        //browser.waitForAngular();

        browser.get('/check_login.html');

        expect(element(by.id('status')).getText()).toEqual("You are logged in");
    });
});