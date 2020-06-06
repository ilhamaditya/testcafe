import { Selector, t } from 'testcafe'

class LogoutPage {
    constructor () {
        this.logoutBtn = Selector('span').withText("Log Out") //its work
        this.okBtn = Selector('span').withText("OK")
    
    }

    async clickLogout () {
        await t.click(this.logoutBtn)
        await t.click(this.okBtn)
    }
}

export default new LogoutPage()