const { openBrowser, closeBrowser, goto } = require('taiko');
(async () => {                    
    try {                       
        await openBrowser();
        await goto('https://thirstyhead.com/conferenceworks/');
        screenshot()
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

