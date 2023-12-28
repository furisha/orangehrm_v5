const { test, expect } = require('@playwright/test')
const { loginPage } = require('../pages/loginPage')

test('loginTest', async ({page}) =>{

    const login = new loginPage(page)
    
    await login.goToLoginPage()
    await login.login('Admin', 'admin123')
    await page.waitForTimeout(3000)

})