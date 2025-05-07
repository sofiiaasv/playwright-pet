import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { addAbortListener } from 'events'

test.describe("New payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
    loginPage = new LoginPage(page)

     await homePage.visit()
     await homePage.clickOnSignIn()
     await loginPage.login('username', 'password')
        // await page.goto('http://zero.webappsecurity.com/index.html')
        // await page.click('#signin_button')
        // await page.fill('#user_login', 'username')
        // await page.fill('#user_password', 'password')
        // await page.click("text=Sign in")
    })

    test('Should send new payment', async ({page}) =>{
        await page.click('#pay_bills_tab')
        await page.selectOption("#sp_payee", "apple")
        await page.click("#sp_get_payee_details")
        await page.selectOption('#sp_account','6')
        await page.fill('#sp_amount', '5000')
        await page.fill('#sp_date', '2021-08-09')
        await page.fill('#sp_description', 'random')
        await page.click('#pay_saved_payees')

        const message = await page.locator('#alert_content > span')
        await expect (message).toBeVisible()
        

    })
})