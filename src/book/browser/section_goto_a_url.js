const { openBrowser, goto, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://thirstyhead.com/conferenceworks/');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
