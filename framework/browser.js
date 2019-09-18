const webdriver = require('selenium-webdriver');
const publicURL = 'localhost'
const getDriver = () => new webdriver.Builder()
.forBrowser('firefox')
.usingServer(`https://${publicURL}:4444/wd/hub`)
.build();

module.exports = getDriver;