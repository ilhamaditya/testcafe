import RegisterPage from '../page-object/register-page'
import LoginPage from '../page-object/login-page'
import logoutPage from '../page-object/logout-page'
import { ClientFunction } from 'testcafe'

fixture('MP-CMS-Test2').page('http://52.221.252.110:50000/app')

const getLocation = ClientFunction(() => document.location.href)

test('go to login page by tapping logout button', async t => {
    await RegisterPage.clickRegister()
    await LoginPage.clickLogin('admin@dana.id','!Password01')
    await logoutPage.clickLogout()
    await t.expect(getLocation()).contains('http://52.221.252.110:50000/app/register')
    await t.wait(5000)

})