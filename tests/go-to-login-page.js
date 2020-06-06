import RegisterPage from '../page-object/register-page'
import { ClientFunction } from 'testcafe'

fixture('MP-CMS-Test2').page('http://52.221.252.110:50000/app')

const getLocation = ClientFunction(() => document.location.href)

test('go to login page by tapping register button', async t => {
    await RegisterPage.clickRegister({ speed: 0.01 })
    // await t.expect(getLocation()).eql('http://52.221.252.110:50000/app/register', {timeout: 5000})
    await t.expect(getLocation()).contains('http://52.221.252.110:50000/app/register')
})