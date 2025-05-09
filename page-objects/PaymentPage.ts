import {expect, Locator, Page} from '@playwright/test'

export class PaymentPage{
    readonly page: Page
    readonly payeeSelectBox: Locator
    readonly getPayeeDetailsButton: Locator
    readonly payeeDetails: Locator
    readonly accountSelectBox: Locator
    readonly amountInput: Locator
    readonly dateSelectBox: Locator
    readonly descriptionInput: Locator
    readonly submitPayment: Locator
    readonly successfullMessage: Locator


constructor(page:Page){
    this.page = page
    this.payeeSelectBox = page.locator('#sp_payee')
    this.getPayeeDetailsButton = page.locator('#sp_get_payee_details')
    this.payeeDetails = page.locator('#sp_payee_details')
    this.accountSelectBox = page.locator('#sp_account')
    this.amountInput = page.locator('#sp_amount')
    this.dateSelectBox = page.locator('#sp_date')
    this.descriptionInput = page.locator('#sp_description')
    this.submitPayment = page.locator('#pay_saved_payees')
    this.successfullMessage = page.locator('#alert_content > span')
}
async createPayment(){
    
}

}
