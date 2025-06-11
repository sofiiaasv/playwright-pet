import {test} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { PaymentPage } from '../../page-objects/PaymentPage'
import { NavBar } from '../../page-objects/components/NavBar'

test.describe("New payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navBar: NavBar

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navBar = new NavBar(page)

     await homePage.visit()
     await homePage.clickOnSignIn()
     await loginPage.login('username', 'password')
    })

    test('Should send new payment', async ({page}) =>{
        navBar.clickOnTab('Pay Bills')
        await paymentPage.createPayment()
        await paymentPage.assertSuccessMessage()

        // await page.selectOption("#sp_payee", "apple")
        // await page.click("#sp_get_payee_details")
        // await page.waitForSelector("#sp_payee_details")
        // await page.selectOption('#sp_account','6')
        // await page.fill('#sp_amount', '5000')
        // await page.fill('#sp_date', '2021-08-09')
        // await page.fill('#sp_description', 'random')
        // await page.click('#pay_saved_payees')

        // const message = await page.locator('#alert_content > span')
        // await expect (message).toBeVisible()
        // await expect(message).toContainText('The payment was successfully submitted')


    })
})