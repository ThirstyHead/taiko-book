const { openBrowser, openIncognitoWindow, closeIncognitoWindow, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({args:['--window-size=1024,768']});
	const windowName = 'Private Window';
	const windowURL = 'https://thirstyhead.com/conferenceworks/';
        await openIncognitoWindow(windowURL, {name:windowName});
        await closeIncognitoWindow(windowName);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
