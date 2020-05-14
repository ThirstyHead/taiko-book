const { openBrowser, goto, openTab, closeTab, title, currentURL, switchTo, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://thirstyhead.com/conferenceworks/');
        await openTab();
        await closeTab();
        const cwPageTitle = title();
        cwPageTitle;
        await openTab('https://thirstyhead.com/groceryworks/');
        const gwURL = currentURL();
        gwURL;
        await switchTo(cwPageTitle);
        await closeTab(gwURL);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
