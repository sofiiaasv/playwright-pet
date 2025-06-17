import {test, expect} from '@playwright/test'

test.describe.parallel('API testing', () =>{
const baseUrl = 'https://reqres.in/api'

    test('Simple API test - Assert responce status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
    })

    test('Simple API test - assert Invalid responce', async ({request}) => {
        const response = await request.get(`${baseUrl}/users/23`)
        expect(response.status()).toBe(401)
    })

    test.only('Simple API test - GET user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        const responseBody = JSON.parse(await response.text())
        
        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')
        expect(responseBody.data.email).toBeTruthy()
    


    })
})
