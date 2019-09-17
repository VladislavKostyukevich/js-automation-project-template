var assert = require('assert');
var getDriver = require('../framework/browser');
describe('Test Google 1', () => {
    let driver;

    beforeEach('start driver', () => {
        driver = getDriver();
    })

    it('Open Google', async () => {
        try {
            await driver.navigate().to('https://www.google.com');
        } catch (error){
            console.log(error)
            throw new Error('Cannot Navigate')
        }
        const title = await driver.getTitle();
        return assert.equal(title, 'Google', 'Wrong Page')
    })

    it('Open Google 2', async () => {
        try {
            await driver.navigate().to('https://www.google.com');
        } catch (error){
            console.log(error)
            throw new Error('Cannot Navigate')
        }
        const title = await driver.getTitle();
        return assert.equal(title, 'Google', 'Wrong Page')
    })

    it('Open Google 3', async () => {
        try {
            await driver.navigate().to('https://www.google.com');
        } catch (error){
            console.log(error)
            throw new Error('Cannot Navigate')
        }
        const title = await driver.getTitle();
        return assert.equal(title, 'Google', 'Wrong Page')
    })

    afterEach('Kill Driver', () => {
        driver.quit();
    })
});