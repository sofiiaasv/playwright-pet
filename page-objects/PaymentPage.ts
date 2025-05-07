import {expect, Locator, Page} from '@playwright/test'

export class PaymentPage{
    readonly page: Page
    readonly payeeSelectBox: Locator
    readonly getPayeeDetailsButton: Locator
    

}