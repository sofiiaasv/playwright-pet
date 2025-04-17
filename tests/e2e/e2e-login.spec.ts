import { test, expect } from '@playwright/test'

test.describe( "Login/ Logout flow", ( )=> {
    //Before Hook 
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')

    })
    test.skip("Negative scenario", async ({page}) => {
        await page.click("#signin_button")
        await page.fill('#user_login', 'invalid user_name')
        await page.fill('#user_password', 'invalid password')
        await page.click("text=Sign in")

        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong')
    })
    //positve scenario + logout 
    test.skip("Positive scenario for login and logout", async ({page}) => {
        await page.click("#signin_button")
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click("text=Sign in")

        await page.goto('https://zero.webappsecurity.com/bank/transfer-funds.html')
    })
})