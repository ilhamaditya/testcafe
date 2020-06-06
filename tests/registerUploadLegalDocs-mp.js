import { Selector, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'
import XPathSelector from './xpath-selector'

import RegisterPage from '../page-object/register-page'
import LoginPage from '../page-object/login-page'

fixture('test upload legal docs').page('http://52.221.252.110:50000/app')
    // const goToLegalDocsPage = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div.on-boarding-check-point > div.check-point-todo > div.action > a > button')
    // const AktaAnggaranDasar = Selector('input').nth(0).withAttribute('type','file')
    // const SIUP = Selector('input').nth(1).withAttribute('type','file')
    // const NPWP = Selector('input').nth(2).withAttribute('type','file')
    // const FotoBukuTabungan = Selector('input').nth(3).withAttribute('type','file')
    // const KTP = Selector('input').nth(4).withAttribute('type','file')
    // const checklistAggree = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > form > div > div.merchant-on-boarding__box > div.merchant-on-boarding-box__tnc-wrapper > label > span.ant-checkbox > input')
    // const tapOK = Selector('span').withText("OK")
    // const tapSubmit = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > form > div > div:nth-child(2) > div > button')
   

test.only('coba klik email verification', async t => {
    // await t.debug()
    await LoginPage.clickLogin('nils@mailinator.com','Dana1234')
    // await t.click(goToLegalDocsPage)
    // await t.setFilesToUpload(AktaAnggaranDasar,['/Users/muksidin/Downloads/Test001.pdf'])
    // await t.setFilesToUpload(SIUP,['/Users/muksidin/Downloads/Test002.pdf'])
    // await t.setFilesToUpload(NPWP,['/Users/muksidin/Downloads/Test003.pdf'])
    // await t.setFilesToUpload(FotoBukuTabungan,['/Users/muksidin/Downloads/Test004.pdf'])
    // await t.setFilesToUpload(KTP,['/Users/muksidin/Downloads/Test005.pdf'])
    // await t.click(checklistAggree)
    // await t.click(tapOK)
    // await t.click(tapSubmit)
    await RegisterPage.uploadDocLegal(['/Users/muksidin/Downloads/Test001.pdf'],['/Users/muksidin/Downloads/Test002.pdf'],['/Users/muksidin/Downloads/Test003.pdf'],['/Users/muksidin/Downloads/Test004.pdf'],['/Users/muksidin/Downloads/Test005.pdf'])

    await t.wait(5000)

    
})