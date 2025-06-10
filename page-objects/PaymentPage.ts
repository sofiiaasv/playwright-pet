import {expect, Locator, Page} from '@playwright/test'

export class PaymentPage{
    readonly page: Page
    readonly payeeSelectBox: Locator
    readonly getPayeeDetailsButton: Locator
    readonly accountSelectBox: Locator
    readonly amountSelectBox: Locator
    readonly dateSelectBox: Locator
    readonly descriptionInput: Locator
    readonly payButton: Locator
    readonly successfulScreen: Locator

    
}