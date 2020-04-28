const { openBrowser, closeBrowser } = require('taiko');
(async () => {                    
    try {                       
        await openBrowser({args:['--window-size=1024,768', '--window-position=2048,0']});
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

