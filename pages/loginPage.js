const { expect } = require('@playwright/test');

exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page
        this.logo = page.getByAltText('company-branding')
        this.usernameInput = '//input[@name="username"]'
        this.passwordInput = '//input[@name="password"]'
        this.loginButton = '//button[normalize-space()="Login"]'
    }

    async goToLoginPage() {

        await this.page.goto('https://opensource-demo.orangehrmlive.com');
        await expect(this.logo).toBeVisible()

    }

    async login(username, password) {
        const usernameVisibility = await this.page.locator(this.usernameInput)
        await expect(usernameVisibility).toBeVisible()
        await this.page.locator(this.usernameInput).fill(username)

        const passwordVisibility = await this.page.locator(this.passwordInput)
        await expect(passwordVisibility).toBeVisible()
        await this.page.locator(this.passwordInput).fill(password)

        await this.page.locator(this.loginButton).click()
    }

}

