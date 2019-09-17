const webdriver = require('selenium-webdriver');
const getDriver = () => new webdriver.Builder()
.forBrowser('firefox')
.usingServer(`http://localhost:4444/wd/hub`)
.build();

module.exports = getDriver;