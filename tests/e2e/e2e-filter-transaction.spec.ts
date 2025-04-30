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
     await loginPage.login('username', 'password')})


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