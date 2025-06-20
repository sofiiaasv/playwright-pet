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

    test('Simple API test - GET user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        const responseBody = JSON.parse(await response.text())
       
        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')
        expect(responseBody.data.email).toBeTruthy()
    })

    test('POST - Create new user', async ({request}) => {
        const response = await request.post(`${baseUrl}/users`, { headers: {
            'Authorization': 'reqres-free-v1',
            'Content-Type': 'application/json'
          }, 
          data:{
            id: 1001
          }
    })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        //expect (responseBody.id).toBe(1000)
        //expect(responseBody.createdAt).toBeTruthy()

    })
    test.only('POST - Create new user1', async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
          headers: {
            'x-api-key': 'reqres-free-v1' // This depends on whether the API actually expects this format
            
          },
          data: {
            id: 1001
          }
        });
      
        // Assert status code (optional but recommended)
        //expect(response.status()).toBe(201); // Change to 200 if that's what the API returns
      
        // Parse and log the response
        const responseBody = await response.json(); // no need for JSON.parse(await response.text())
        console.log(responseBody);
      });
      
})
