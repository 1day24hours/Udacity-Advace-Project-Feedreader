/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Feeds URL are defined and not empty',function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined;
                expect(feed.url).not.toEqual('');
                //var regularExpressionUrl = _^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$_iuS;
                //expect(feed.url).toMatch(regularExpressionUrl);
            })
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feeds have name defined and not empty',function () {
            allFeeds.forEach(function (feed) {
                // expect(feed.name).toBeDefined;
                // expect(feed.name).not.toEqual('');
                expect(feed.name).toBeTruthy();//toBeTruthy() equals '!!' turn it into boolean value
            })
        })
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function () {

            /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('The slide menu is hidden by default',function () {
          //select the 'menu-hidden' class by jQuery '$' seletor
          expect($('.menu-hidden').length).not.toEqual(0); //or toBe(1);
        })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('The menu display or hidden by click',function () {
            //this is an event, click and show the menu,but didn't select anything
            $('.icon-list').click();
            // expect($('.menu-hidden').length).toBe(0);
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.icon-list').click();
            //click menu bar again,should be clicked something
            // expect($('.menu-hidden').length).toBe(1);
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    })
    

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries',function () {

         /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        })

        it('Load did happen',function () {
            expect($('.feed .entry').length).not.toBe(0);
        })

    })
   

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function () {

         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feedZero = '';
        beforeEach(function (done) {
            //function is a callback function
            loadFeed(0, function () {
                feedZero = $('.feed').text();
                loadFeed(1, function () {
                    done();
                });
            });
        }, 10*1000);
        it('Feed will be changed when loading different feeds', function () {
            expect($('.feed').text() != feedZero).toBe(true);
        })
    })
}());
