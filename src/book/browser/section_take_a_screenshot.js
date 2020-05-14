const { openBrowser, goto, click, screenshot, write, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({args:['--window-size=1024,768']});
        await goto('https://thirstyhead.com/conferenceworks/');
        await click('Register');
        await screenshot({path:'form-before-entry.png'});
        await click('First Name');
        await write('Suzi');
        await click('Last Name');
        await write('Q');
        await click('Email');
        await write('suzi@q.org');
        await click('Phone');
        await write('3035551212');
        await screenshot({path:'form-after-entry.png'});
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
