import {test, expect} from '@playwright/test'


test.describe('Transfer Funds and make payments', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click("text=Sign in")
    })
test ('Filter transactions', async ({page}) => {
    await page.click('#account_activity_tab')
    //Check the count of records for Checking
    await page.selectOption('#aa_accountId', '2')
    
    const recordsForChecking = await page.locator('#all_transactions_for_account tbody tr')
    await expect(recordsForChecking).toHaveCount(3)
    
    //Check the count of records for Checking
    await page.selectOption("#aa_accountId", "4")
    
    const recordsForLoan = await page.locator('#all_transactions_for_account tbody tr')
    await expect(recordsForChecking).toHaveCount(2)

    //Check the count of records for Brokerage 
    await page.selectOption("#aa_accountId", "6")

    const noResult = await page.locator('.well')
    await expect (noResult).toBeVisible

    














})
})