const { openBrowser, openIncognitoWindow, closeBrowser, closeIncognitoWindow } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await openIncognitoWindow(
          'https://thirstyhead.com/conferenceworks/', 
          {name:'New Incognito Window'});
        await closeIncognitoWindow('New Incognito Window');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
