import RegisterPage from '../page-object/register-page'
import LoginPage from '../page-object/login-page'
import { ClientFunction } from 'testcafe'

fixture('MP-CMS-Test2').page('http://52.221.252.110:50000/app')

const getLocation = ClientFunction(() => document.location.href)

test('go to home page by tapping login button', async t => {
    await RegisterPage.clickRegister()
    await LoginPage.clickLogin('nicola@mailinator','Dana1234')
    await t.expect(getLocation()).contains('http://52.221.252.110:50000/app/dashboard/home')
    await t.wait(5000)
})