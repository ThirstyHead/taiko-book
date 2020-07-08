const { openBrowser, goto, click, highlight, screenshot, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://thirstyhead.com/conferenceworks/speakers/');
        await click('Dr. Rebecca Parsons');
        await highlight('About');
        await highlight('Talks');
        await screenshot({path:'speakerListTest-screenshot.png'});
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
