import {expect, Locator, Page} from '@playwright/test'

export class PaymentPage {
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


    constructor(page: Page) {
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
    async createPayment() {
        await this.payeeSelectBox.selectOption('apple')
        await this.getPayeeDetailsButton.click()
    
        await expect(this.payeeDetails).toBeVisible()
        await this.accountSelectBox.selectOption('6')
        await this.amountInput.fill('5000')
        await this.dateSelectBox.fill('2021-08-09')
        await this.descriptionInput.fill('random')
        await this.submitPayment.click()
    }
    
    async assertSuccessMessage() {
        await expect(this.successfullMessage).toBeVisible()
        await expect(this.successfullMessage).toContainText(
            'The payment was successfully submitted')
    }

}
