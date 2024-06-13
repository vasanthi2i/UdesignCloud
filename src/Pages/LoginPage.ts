import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../Utils/ElementUtil";



export class LoginPage {
    page: Page;
    email: Locator;
    password: Locator;
    loginButton: Locator; 

    constructor(page: Page)
    {
        this.page = page;       
        this.email = page.locator('//input[@name="username"]');
        this.password = page.locator('//input[@name="password"]');
        this.loginButton = page.getByRole('button',{name: 'Login'});

    }

    async enterEmail(emailId: string): Promise <void>
    {
        //this.page.waitForLoadState("domcontentloaded");
        await this.email.click();
        await this.email.fill(emailId);
        console.log('Entered email');
    }

    async enterPassword(password: string): Promise <void>
    {
        await this.password.click();
        await this.password.fill(password);
        console.log('Entered password');
    }

    async clickLogin(): Promise <void>
    {
        await this.loginButton.click();
    }

    async login(emailId: string,password: string): Promise<void>
    {
        await this.enterEmail(emailId);
        await this.enterPassword(password);
        await this.clickLogin();
        console.log('Clicked on Login button');
    }

    


}

