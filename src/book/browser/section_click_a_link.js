const { openBrowser, goto, click, goBack, goForward, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://thirstyhead.com/conferenceworks/');
        await click('Register');
        await goBack();
        await goForward();
        await click('Home');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
