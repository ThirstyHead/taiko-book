const { openBrowser, closeBrowser } = require('taiko');
(async () => {                    
    try {                       
        await openBrowser()
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

