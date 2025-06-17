import {test, expect} from '@playwright/test'
import { request } from 'http'

test.describe.parallel('API testing', () =>{
const baseUrl = 'https://reqres.in/api'

    test('Simple API test - Assert responce status', async ({request}) => {
        const responce = await request.get(`${baseUrl}/users/2`)
        expect(responce.status()).toBe(200)
    })

    test('Simple API test - assert Invalid responce', async ({request}) => {
        const response = await request.get(`${baseUrl}/users/23`)
        expect(response.status()).toBe(404)
    })
})
