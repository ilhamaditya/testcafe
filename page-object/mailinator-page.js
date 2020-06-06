import { Selector, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'
// var faker = require('faker')
import XPathSelector from '../tests/xpath-selector'

class mailinatorPage {
    constructor () {
        this.searchBoxInput = Selector('#inbox_field')
        // this.searchBoxInput = Selector(xPathToCss("//input[@id='inbox_field']"))
        this.goBtn = Selector('#go_inbox')

        this.searchBoxInput = Selector('.form-control')
        this.goBtn = Selector('#go_inbox')
        this.checkEmailVerification = Selector(XPathSelector("//td[contains(text(),'noreply@dana.id')]"))
        this.bodyEmail = Selector('#msg_body')
        this.activateLink = Selector('[title="Activation"]')
    }

    async inputSearch (randomText) {
        await t.typeText(this.searchBoxInput,randomText,{ speed: 0.2 })
        await t.click(this.goBtn,{ speed: 0.2 })
    }

    async activationLinkMP(userEmail){
        await t.typeText(this.searchBoxInput,userEmail, { paste:true, speed: 0.1 })
        await t.click(this.goBtn)
        await t.click(this.checkEmailVerification, { speed: 0.2 })
    
        await t.switchToIframe(this.bodyEmail)
        await t.click(this.activateLink)
        
    }
}

export default new mailinatorPage()