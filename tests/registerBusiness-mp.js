import RegisterPage from '../page-object/register-page'
import loginPage from '../page-object/login-page'
import registerPage from '../page-object/register-page'

fixture('MP-CMS-Test2').page('http://52.221.252.110:50000/app/dashboard/home')

var faker = require('faker')
const randomText1 = String(faker.name.firstName())
const randombusinessName= String("business "+randomText1)
const randomText2 = String(faker.company.companySuffix())
const randombrandName = String("brand "+randomText2)
const randomNumber = String(faker.random.number( { minimum: 10, maximum: 14 }))

test('click register business mp', async t => {
    await t.debug()
    await loginPage.clickLogin('breana@mailinator.com','Dana1234')
    await RegisterPage.clickRegisterBusiness()
    await RegisterPage.fillFormBusinessProfile1(randombusinessName,randombrandName)
    console.log(randombusinessName+" xxxx "+randombrandName)
    await RegisterPage.fillFormBusinessProfile2(['/Users/muksidin/Downloads/download\(1\).png'])
    await RegisterPage.fillFormBusinessProfile3(randomText1,'11408004500000',randomText1,'85677598801','breana@mailinator.com')
    await RegisterPage.fillOfficeAddress('Jln.Pahlawan','12345')
    await RegisterPage.fillContactInfo(randomText1,'85677598801','85677598801','breana@mailinator.com')
    
    await RegisterPage.fillSettleAccountInfo(randomText1,randomNumber,randomText1)
    
    await t.wait(5000)
    


})