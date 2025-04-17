import {test, expect} from '@playwright/test'


test.describe("Search results", () => {
    test("Should find search results", async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.fill('#searchTerm', 'bank')
        await page.keyboard.press('Enter')

        const numberOflinks = await page.locator('li > a')

        await expect(numberOflinks).toHaveCount(2)

})

})