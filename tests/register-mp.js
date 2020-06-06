import RegisterPage from '../page-object/register-page'
var faker = require('faker')

// const dummyEmail = require('./createDummyEmail') //failed passing value from other file .js

const randomText = String(faker.name.firstName().toLowerCase())
const dummyEmail= String(randomText+"@mailinator.com")

fixture('MP-CMS-Test2').page('http://52.221.252.110:50000/app')

// fixture('MP-CMS-Test2').page('http://52.220.244.133:50000/app/')


test('proceed register mp', async t => {
    console.log('checkkkkkssss: '+dummyEmail)
    // await t.setTestSpeed(1)
    await RegisterPage.clickRegister()
    // RegisterPage.fillFormRegister(String(faker.random.number()),'test2')
    await RegisterPage.fillFormRegister(String(faker.name.firstName()),String(faker.name.lastName()))
    await RegisterPage.selectProvince()
    await RegisterPage.selectBusinessCategory()
    await RegisterPage.fillFormRegister2(dummyEmail,'C4shless-50ciety','C4shless-50ciety')
    console.log('checkkkkk: '+dummyEmail)
    await RegisterPage.tickChecklist()
    // await t.takeScreenshot({ fullPage: true })
    await t.wait(5000)
})



