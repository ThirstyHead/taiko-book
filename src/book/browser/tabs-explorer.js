const { openBrowser, goto, openTab, switchTo, closeTab, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('wikipedia.org');
        await openTab('martinfowler.com');
        await switchTo('Wikipedia');
        await closeTab();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
