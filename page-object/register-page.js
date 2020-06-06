import { Selector, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'


class RegisterPage {
    constructor () {
        this.registerOrLoginBtn = Selector(xPathToCss("//button[@class='ant-btn menu-login-button ant-btn-primary']"))
        this.BusinessBrandInput = Selector('#businessBrandInput')
        this.OwnerNameInput = Selector('#ownerNameInput')
        this.SelectProvince = Selector('#provinceInput')
        this.SelectProvince2 = Selector('.ant-select-dropdown-menu-item').withText('JAWA BARAT')
        this.BusinessCategory = Selector('#businessCategoryInput')
        this.BusinessCategory2 = Selector('.ant-select-dropdown-menu-item').withText('Entertainment')
        this.EmaillAddress = Selector('#emailInput')
        this.passInput = Selector('#passwordInput')
        this.passConfirm = Selector('#confirmInput')
        
        this.BusinessChannel = Selector('#portal-site > div > div.auth-register-container > div > div > div > form > div > div:nth-child(10) > div > div > div.ant-form-item-control-wrapper > div > span > div > label:nth-child(1) > span.ant-checkbox > input')
        this.usingDanaNo = Selector('#knowDanaProductInput > label:nth-child(2) > span.ant-radio > span') //default no
        this.usingDanaYes = Selector('#knowDanaProductInput > label:nth-child(1) > span:nth-child(2)') //yes
        this.continueBtn = Selector(xPathToCss("//button[@class='ant-btn registration-submit-button ant-btn-primary']"))
        

        this.registerBusinessBtn = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div.on-boarding-check-point > div.check-point-todo > div.action > a > button')
        this.businessNameInput = Selector('#businessNameInput')
        this.brandNameInput = Selector('#brandNameInput')
        this.BusinessTypes = Selector('#businessTypeInput')
        this.BusinessTypes2 = Selector('.ant-select-dropdown-menu-item').withText('INDIVIDU') //bad request
        this.BusinessTypes2 = Selector('.ant-select-dropdown-menu-item').withText('PT')
        this.BusinessSizeTypes = Selector('#businessSizeInput')
        this.BusinessSizeTypes2 = Selector('.ant-select-dropdown-menu-item').withText('Usaha Kecil')
        this.BusinessCategoryLogin = Selector('#mccInput')
        this.BusinessCategoryLogin2 = Selector('.ant-select-dropdown-menu-item').withText('SCHOOLS & EDUCATIONAL SERVICES (NOT ELSEWHERE CLASSIFIED)')
        // this.chooseFile = Selector('input').withAttribute('type','file'),['/Users/muksidin/Downloads/download\(1\).png']
        this.chooseFile = Selector('input').withAttribute('type','file')
        this.chooseFileBtn = Selector('.ant-btn')
        this.OwnerName = Selector('#ownerNameInput')
        this.OwnerKTPNumber = Selector('#ownerKtpNumberInput')
        this.FinanceName = Selector('#financeNameInput')
        this.FinancePhoneNumber = Selector('#financePhoneNumberInput')
        this.FinanceEmail = Selector('#financeEmailInput')
        this.continueBPbtn = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > div > div.form-container > div > form > div.ant-row > div > div > div > div > button')
        
        this.ProvinceOA = Selector('#registeredProvinceInput')
        this.ProvinceOA2 = Selector('.ant-select-dropdown-menu-item').withText('DKI JAKARTA')
        this.CityOA = Selector('#registeredCityInput')
        this.CityOA2 = Selector('.ant-select-dropdown-menu-item').withText('KOTA JAKARTA SELATAN')
        this.Area = Selector('#registeredAreaInput')
        this.Area2 = Selector('.ant-select-dropdown-menu-item').withText('PANCORAN')
        this.Address = Selector('#registeredAddressInput')
        this.PostCode = Selector('#registeredPostCodeInput')
        this.continueOAbtn = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > div > div.form-container > div > form > div.ant-row > div > div > div > div > button.ant-btn.ant-btn-primary.ant-btn-lg')

        this.ContactName = Selector('#contactOfficialNameInput')
        this.ContactMobileNumber = Selector('#contactMobilePhoneInput')
        this.ContactTelephone = Selector('#contactTelephoneInput')
        this.ContactEmailAddress = Selector('#contactEmailInput')
        this.continueCIbtn = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > div > div.form-container > div > form > div.ant-row > div > div > div > div > button.ant-btn.ant-btn-primary.ant-btn-lg')

        this.BankName = Selector('#bankNameInput')
        this.BankName2 = Selector('.ant-select-dropdown-menu-item').withText('BANK ARTOS INDONESIA')
        this.SubsidiaryBankName = Selector('#subsidiaryBankNameInput')
        this.AccountNumber = Selector('#accountNumberInput')
        this.CardholderName = Selector('#cardholderNameInput')
        this.SUBMITbtn = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > div > div.form-container > div > form > div.ant-row > div > div > div > div > button.ant-btn.ant-btn-primary.ant-btn-lg')
  
        this.goToLegalDocsPage = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div.on-boarding-check-point > div.check-point-todo > div.action > a > button')
        this.AktaAnggaranDasar = Selector('input').nth(0).withAttribute('type','file')
        this.SIUP = Selector('input').nth(1).withAttribute('type','file')
        this.NPWP = Selector('input').nth(2).withAttribute('type','file')
        this.FotoBukuTabungan = Selector('input').nth(3).withAttribute('type','file')
        this.KTP = Selector('input').nth(4).withAttribute('type','file')
        this.checklistAggree = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > form > div > div.merchant-on-boarding__box > div.merchant-on-boarding-box__tnc-wrapper > label > span.ant-checkbox > input')
        this.tapOK = Selector('span').withText("OK")
        this.tapSubmit = Selector('#portal > div > div.app-layout-content.ant-layout-content > div > div > form > div > div:nth-child(2) > div > button')
    }

    async clickRegister () {
        await t.click(this.registerOrLoginBtn)
    }
    
    async fillFormRegister (valueBusinessBrand,valueOwnerName) {
        await t.typeText(this.BusinessBrandInput, valueBusinessBrand)//, { speed: 0.2 }).wait(10000)
        await t.typeText(this.OwnerNameInput, valueOwnerName)//, { speed: 0.2, visibilityCheck: true}).wait(10000) //fails to fill text
        
      
        //const nameInputElement = await nameInput.with({ visibilityCheck: true })()
    }

    async selectProvince(){
        await t.click(this.SelectProvince)
        await t.click(this.SelectProvince2)
    }

    async selectBusinessCategory(){
        await t.click(this.BusinessCategory)
        await t.click(this.BusinessCategory2)
    }

    async fillFormRegister2(valueEmail,valuePass,valueConfirmPass){
        await t.typeText(this.EmaillAddress,valueEmail, { paste: true, replace: true })
        await t.typeText(this.passInput,valuePass)//, { paste: true, replace: true })
        await t.typeText(this.passConfirm,valueConfirmPass)//, { paste: true, replace: true })
    }

    async tickChecklist(){//still error
        await t.click(this.BusinessChannel)
        await t.click(this.usingDanaYes)
        await t.click(this.usingDanaNo)
        await t.click(this.continueBtn)
    }

    async clickRegisterBusiness(){
        await t.click(this.registerBusinessBtn)
    }

    async fillFormBusinessProfile1(valueBusinessName,valueBrandName){
        await t.typeText(this.businessNameInput,valueBusinessName)
        await t.typeText(this.brandNameInput,valueBrandName)
    }

    async fillFormBusinessProfile2(filePath){
        await t.click(this.BusinessTypes)
        await t.click(this.BusinessTypes2)
        await t.click(this.BusinessSizeTypes)
        await t.click(this.BusinessSizeTypes2)
        await t.click(this.BusinessCategoryLogin)
        await t.click(this.BusinessCategoryLogin2)
        // await t.click(this.chooseFileBtn)
        await t.setFilesToUpload(this.chooseFile,filePath)
    }

    async fillFormBusinessProfile3(valueOwnerName,valueOwnerKTPNumber,valueFinanceName,valueFinancePhoneNumber,valueFinanceEmail){
        await t.typeText(this.OwnerName,valueOwnerName)
        await t.typeText(this.OwnerKTPNumber,valueOwnerKTPNumber)
        await t.typeText(this.FinanceName,valueFinanceName)
        await t.typeText(this.FinancePhoneNumber,valueFinancePhoneNumber)
        await t.typeText(this.FinanceEmail,valueFinanceEmail)
        await t.click(this.continueBPbtn)

    }

    async fillOfficeAddress(valueAddress,valuePostCode){
        await t.click(this.ProvinceOA)
        await t.click(this.ProvinceOA2)
        await t.click(this.CityOA)
        await t.click(this.CityOA2)
        await t.click(this.Area)
        await t.click(this.Area2)
        await t.typeText(this.Address,valueAddress)
        await t.typeText(this.PostCode,valuePostCode)
        await t.click(this.continueOAbtn)
    }

    async fillContactInfo(valueContactName,valueContactMobileNumber,valueContactTelephone,valueContactEmailAddress){
        await t.typeText(this.ContactName,valueContactName)
        await t.typeText(this.ContactMobileNumber,valueContactMobileNumber)
        await t.typeText(this.ContactTelephone,valueContactTelephone)
        await t.typeText(this.ContactEmailAddress,valueContactEmailAddress)
        await t.click(this.continueCIbtn)
    }

    async fillSettleAccountInfo(valueSubsidiaryBankName,valueAccountNumber,valueCardholderName){
        await t.click(this.BankName)
        await t.click(this.BankName2)
        await t.typeText(this.SubsidiaryBankName,valueSubsidiaryBankName)
        await t.typeText(this.AccountNumber,valueAccountNumber)
        await t.typeText(this.CardholderName,valueCardholderName)
        await t.click(this.SUBMITbtn)
    }

    async uploadDocLegal(fileAktaAnggaranDasar,fileSIUP,fileNPWP,fileFotoBukuTabungan,fileKTP){
        await t.click(this.goToLegalDocsPage)
        await t.setFilesToUpload(this.AktaAnggaranDasar,fileAktaAnggaranDasar)
        await t.setFilesToUpload(this.SIUP,fileSIUP)
        await t.setFilesToUpload(this.NPWP,fileNPWP)
        await t.setFilesToUpload(this.FotoBukuTabungan,fileFotoBukuTabungan)
        await t.setFilesToUpload(this.KTP,fileKTP)
        await t.click(this.checklistAggree)
        await t.click(this.tapOK)
        await t.click(this.tapSubmit)
    }

}

export default new RegisterPage()