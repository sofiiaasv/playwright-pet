import { test, expect } from '@playwright/test'

test.describe.only("Visual regression testing", () => {
    test('Full page snapshot', async ({ page }) => {
        await page.goto('https://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot('homePage.png')
    })

    test('Single element screenshot', async ({ page }) => {
        await page.goto('https://www.example.com')
        const pageElement = await page.$('h1')
        expect ( await pageElement!.screenshot()).toMatchSnapshot('h1 element.png')
})
})