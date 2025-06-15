import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'


test.describe("Login page visual test", () => {
    let homepage: HomePage
    let loginpage: LoginPage

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        loginpage = new LoginPage(page)

        await homepage.visit()
        await homepage.clickOnSignIn()
    })

    test('Login form snapshot', async ({ page }) => {
        await loginpage.snapshotLoginForm()
    })

    test('Login error message snapshot', async ({ page }) => {
        await loginpage.login('invalid user', 'pasword')
        await loginpage.snapshotErrorMessage()
    })
})
