import mailinatorPage from '../page-object/mailinator-page'
var faker = require('faker')

//var let const
const randomText = String(faker.name.firstName().toLowerCase())
const dummyEmail =  String(randomText+"@mailinator.com")

fixture('Create Dummy Email via Mailinator').page('https://www.mailinator.com/v3/#/#inboxpane')
    
test('input dummy email name', async t => {
    await mailinatorPage.inputSearch(randomText, { speed: 0.01 })
    //await t.wait(10000)
    await t.takeScreenshot({ fullPage: true })

    // console.log('test console : '+randomText+"@mailinator.com")
    // const dummyEmail = String(randomText+"@mailinator.com")
    console.log('test console2 : '+dummyEmail)
})
