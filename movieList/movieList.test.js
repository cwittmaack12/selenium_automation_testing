const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require ('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://localhost:5500/Week6/Day2/Lab/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Does it add a movie', async () => {
    let addMovie = await driver.findElement(By.xpath('//form/input'))
    await addMovie.sendKeys('Boondock Saints\n')

    await driver.sleep(7000)
})

test('Does cross off work', async () => {
    let crossOff = await driver.findElement(By.xpath('//li/span'))

    await crossOff.click()

    await driver.sleep(5000)
})

test('Does delete button work', async () => {
    let deleteMovie = await driver.findElement(By.xpath('//li/button'))

    await deleteMovie.click()

    await driver.sleep(5000)
})

test('Does the delete message show up', async () => {

    let message = await driver.findElement(By.id('message'))

    await message.isDisplayed()

    await driver.sleep(5000)
})























