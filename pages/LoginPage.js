/*
----------------------------------------------------
LoginPage.js

Responsibilities:
1. Open Naukri website.
2. Click on Login button.
3. Enter user credentials.
4. Login to Naukri account.
5. Wait until dashboard is loaded.

Page Object Model:
- Encapsulates all login page actions and locators.
----------------------------------------------------
*/

class LoginPage {
    constructor(page) {
        this.page = page;
        
        // Login page locators
        this.loginBtn = '#login_Layer';
        this.email = 'input[type="text"]';
        this.password = 'input[type="password"]';
        this.submit = 'button[type="submit"]';
    }

    async login(email, password) {

          // Open Naukri home page
        await this.page.goto('https://www.naukri.com');
        // Open login popup
        await this.page.click(this.loginBtn);
        // Enter credentials
        await this.page.fill(this.email, email);

        await this.page.fill(this.password, password);
        // Click Login button
        await this.page.click(this.submit);
        // Wait until dashboard loads
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(3000);
    }
}

module.exports = LoginPage;