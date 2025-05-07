import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe( "Login/ Logout flow", ( )=> {
    let loginPage: LoginPage
    let homePage: HomePage

    //Before Hook 
    test.beforeEach(async ({page}) => {
       loginPage = new LoginPage(page)
       homePage = new HomePage (page)

       //Instead of await page.goto('https://zero.webappsecurity.com/bank/transfer-funds.html') used >>
        await homePage.visit()
    })
    test("Negative scenario", async ({page}) => {
        await homePage.clickOnSignIn()
        //await page.click("#signin_button")
    
        await loginPage.login('nvalid user_name', 'invalid password')
        // await page.fill('#user_login', 'invalid user_name')
        // await page.fill('#user_password', 'invalid password')
        // await page.click("text=Sign in")
        
        await loginPage.assertErrorMessage()
        // const errorMessage = await page.locator('.alert-error')
        // await expect(errorMessage).toContainText('Login and/or password are wrong')
    })
    //positve scenario + logout 
    test("Positive scenario for login and logout", async ({page}) => {
        await homePage.clickOnSignIn()
        //await page.click("#signin_button")

        await loginPage.login('username', 'password')
        // await page.fill('#user_login', 'username')
        // await page.fill('#user_password', 'password')
        // await page.click("text=Sign in")

        await page.goto('https://zero.webappsecurity.com/bank/transfer-funds.html')
    })
})