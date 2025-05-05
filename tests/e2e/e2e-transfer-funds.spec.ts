import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.only('Transfer Funds and make payments', () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
    loginPage = new LoginPage(page)

     await homePage.visit()
     await homePage.clickOnSignIn()
     await loginPage.login('username', 'password')
    })

test("Transfer funds", async ({page}) => {
    await page.click("#transfer_funds_tab")
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.fill('#tf_amount', '500')
    await page.fill('#tf_description', 'test_message')
    await page.click('#btn_submit')

    const boardHeader = await page.locator('h2.board-header')
    await expect (boardHeader).toHaveText('Transfer Money & Make Payments - Verify')

    await page.click('#btn_submit')

    const successMessage = await page.locator('.alert-success')
    await expect (successMessage).toContainText('You successfully submitted your transaction.')

})
})