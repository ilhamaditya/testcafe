import { Selector, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'

class LoginPage {
    constructor () {
        this.emailInput = Selector ('#loginEmailInput')
        this.passwordInput = Selector ('#loginPasswordInput')
        this.loginBtn = Selector (xPathToCss("//button[@class='ant-btn menu-login-button registration-login-button ant-btn-primary']"))
        
    }

    async clickLogin (email, password) {
        await t.typeText(this.emailInput, email)
        await t.typeText(this.passwordInput, password)
        await t.click(this.loginBtn)
    }
}

export default new LoginPage()