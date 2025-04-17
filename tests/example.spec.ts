import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from '../helper'

test('Simple test', async ({page}) =>{
    await page.goto("https://www.example.com")
    const pageTitle = await page.locator("h1")
    await expect(pageTitle).toContainText("Example Domain")

})


test ('Clicking on elements', async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.click("text=Sign in")

    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")

} )



test ('Working with inputs', async ({page}) =>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    await page.fill('#user_login', 'someyyt')
    await page.fill ('#user_password', '1234')

    await page.click('text=Sign in')

    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")

})

test ('Assertions', async ({page}) => {
    await page.goto("https://www.example.com")
    await expect(page).toHaveURL('https://www.example.com')
    await expect(page).toHaveTitle('Example Domain')

    const element = await page.locator('h1')
    await expect(element).toBeVisible
    await expect(element).toHaveText('Example Domain')
    await expect(element).toHaveCount(1)

    const nonExistingElement = await page.locator('h5')
    await expect(nonExistingElement).not.toBeVisible()

})

test ('Screenshots', async ({page}) => {
    await page.goto("https://www.example.com")
    await page.screenshot({ path: "screenshot.png", fullPage: true })
})

test('Single element screenshot', async ({page}) => {
    await page.goto('https://www.example.com')
    const element = await page.$('h1')
    await page.locator('h5').screenshot({path: 'single_element.png'})
})

test.only('Custom helpers', async({page}) => {
    await loadHomePage(page)
    await assertTitle(page)
})


