const { openBrowser, goto, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('wikipedia.org');
        await click('Search');
        await write('User (computing)');
        await press('Enter');
        await click('Terminology');
    } catch (error) {
        console.error(error);
    } finally {
       await closeBrowser();
    }
})();
