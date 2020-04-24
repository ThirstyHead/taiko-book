const { openBrowser, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        // await openBrowser({args:['--window-size=1024,768']});
        // await screenshot({path : 'opening_and_closing_a_browser.png'})
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
