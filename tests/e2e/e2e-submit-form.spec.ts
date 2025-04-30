import {test, expect} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { FeedbackPage } from "../../page-objects/FeedbackPage"

test.describe('Feedback form', () => {
    let homePage : HomePage
    let feedbackPage: FeedbackPage
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        await homePage.visit()
        await homePage.clickOnFeedback()
        // await page.goto("http://zero.webappsecurity.com/index.html")
        // await page.click('#feedback')
    })
    test('Reset feedback form', async ({page}) => {
        await feedbackPage.fillForm(
        'name', 
        'email@mail.com', 
        'subject', 
        'comment')
        await feedbackPage.resertForm()
        await feedbackPage.assertReset()


        // await page.fill('#name', 'some name')
        // await page.fill('#email', 'some email@email.com')
        // await page.fill('#subject', 'some subject')
        // await page.fill('#comment', 'some text')
        // await page.click('input[name="clear"]')

        // const nameInput = await page.locator('#name')
        // const commentInput = await page.locator('#comment')
       
        // await expect (nameInput).toBeEmpty()
        // await expect (commentInput).toBeEmpty()
    })


    test('Submit feedback form', async ({page}) => {
        await feedbackPage.fillForm(
            'name', 
            'email@mail.com', 
            'subject', 
            'comment'
        )
        await feedbackPage.submitForm()
        await feedbackPage.feedBackFormSent()

        // // await page.fill('#name', 'some name')
        // // await page.fill('#email', 'some email@email.com')
        // // await page.fill('#subject', 'some subject')
        // // await page.fill('#comment', 'some text')
        // await page.click('input[name="submit"]')
        // await page.waitForSelector('#feedback-title')

    })
    

})