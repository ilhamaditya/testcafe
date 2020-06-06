import { Selector, t } from 'testcafe'
import XPathSelector from './xpath-selector'
import mailinatorPage from '../page-object/mailinator-page'


fixture('activate dummy email merchant portal').page('https://www.mailinator.com/v3/#/#inboxpane')
    // const searchBoxInput = Selector('.form-control')
    // const goBtn = Selector('#go_inbox')
    // const checkEmailVerification = Selector(XPathSelector("//td[contains(text(),'noreply@dana.id')]"))
    // const activateLink = Selector('[title="Activation"]')
   

test('coba klik email verification', async t => {

    // await t.typeText(searchBoxInput,'bombong', { paste:true, speed: 0.1 })
    // await t.click(goBtn)
    // await t.click(checkEmailVerification, { speed: 0.2 })
    
    // await t.switchToIframe(Selector('#msg_body'))
    // await t.click(activateLink)

    await mailinatorPage.activationLinkMP('nicola')
   
    await t.wait(5000)

    
})
