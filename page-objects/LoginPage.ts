import { expect, Locator, Page } from '@playwright/test'
import { AbstracPage } from './AbstractPage'

export class LoginPage extends AbstracPage{
    //Define selectors
    
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly loginForm: Locator


//Init selectors using constructor
constructor(page:Page){
    super(page)
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.loginForm = page.locator('#login_form')
}
//Define login page methods 

async login(username: string, password:string)
    {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }
    
async assertErrorMessage(){
    await expect(this.errorMessage).toContainText(
        'Login and/or password are wrong'
    )
}
    async snapshotLoginForm() {
    expect( await this.loginForm.screenshot()).toMatchSnapshot('Login_form.png')
    
}
    async snapshotErrorMessage() {
        expect (await this.errorMessage.screenshot()).toMatchSnapshot('Login_Error_message.png')
    }
    

}

