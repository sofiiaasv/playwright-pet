import {test, expect} from '@playwright/test'

test.describe('Transfer Funds and make payments', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click("text=Sign in")
    })

test("Transfer funds", async ({page}) => {
    await page.click("#transfer_funds_tab")
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.fill('#tf_amount', '')
})
})