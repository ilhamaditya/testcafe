import { Selector, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'
import XPathSelector from './xpath-selector'

import RegisterPage from '../page-object/register-page'
import loginPage from '../page-object/login-page'



// fixture('test coba2 1').page('http://52.221.252.110:50000/app/register')

// test('coba klik checkbox', async t => {
//     await t.click(Selector('#portal-site > div.app-layout-content.ant-layout-content > div > div > form > div > div:nth-child(10) > div > div > div.ant-form-item-control-wrapper > div > span > div > label:nth-child(1) > span.ant-checkbox > span'))
//     await t.click(Selector('#knowDanaProductInput > label.ant-radio-wrapper.ant-radio-wrapper-checked > span.ant-radio.ant-radio-checked > input'))
//     await t.click(Selector('#portal-site > div.app-layout-content.ant-layout-content > div > div > form > div > div.ant-row.registration-login-form > div > button')).wait(10000)
// })

fixture('test coba2 2').page('https://www.mailinator.com/v3/#/#inboxpane')
    const searchBoxInput = Selector('.form-control')
    const goBtn = Selector('#go_inbox')
    const checkEmailVerification = Selector(XPathSelector("//td[contains(text(),'noreply@dana.id')]"))
    const activateLink = Selector('[title="Activation"]')
   

test.only('coba klik email verification', async t => {

    await t.typeText(searchBoxInput,'bombong', { paste:true, speed: 0.1 })
    await t.click(goBtn)
    await t.click(checkEmailVerification, { speed: 0.2 })
    // await t.maximizeWindow()
    await t.switchToIframe(Selector('#msg_body'))
    await t.click(activateLink)
   
    await t.wait(5000)

    
})

// fixture('test coba upload').page('http://52.221.252.110:50000/app/register')

// test('coba upload coba', async t => {
//     await loginPage.clickLogin('nils@mailinator.com','Dana1234')
//     await RegisterPage.clickRegisterBusiness()
//     // await t.setFilesToUpload(Selector('input'), './icon.png') 
//     // await t.setFilesToUpload(Selector('#button'), ['/Users/muksidin/Downloads/download\(1\).png']).click(Selector('.ant-btn'))
//     await t.setFilesToUpload(Selector('input').withAttribute('type','file'),['/Users/muksidin/Downloads/download\(1\).png']).click(Selector('.ant-btn'))
//     await t.wait(5000)
    
// })
