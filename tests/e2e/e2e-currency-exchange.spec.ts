import { test, expect } from '@playwright/test'

test.describe.only('Currency exchange', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click("text=Sign in")
    })

    test('Currency exchange', async ({ page }) => {
        await page.click('#pay_bills_tab')
        await page.click('text=Purchase Foreign Currency')
        await page.selectOption('#pc_currency', 'AUD')
        
        const sellRate = await page.locator('#sp_sell_rate')
        await expect(sellRate).toContainText('1 dollar (AUD)')

        await page.fill('#pc_amount', '600')
        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')

        const conversationAmount = await page.locator('#pc_conversion_amount')
        await expect(conversationAmount).toContainText('600.00 U.S. dollar (USD)')
    

        await page.click('#purchase_cash')

        const successMessage = await page.locator('#alert_content')
        await expect (successMessage).toBeVisible()
        await expect (successMessage).toHaveText('Foreign currency cash was successfully purchased.')




    })
})