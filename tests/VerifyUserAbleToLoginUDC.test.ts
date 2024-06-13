import{expect, test } from "@playwright/test";
import {Utils} from "../src/Utils/Utils"
import { LoginPage } from "../src/Pages/LoginPage";
import { time } from "console";


test("Verify user is able to login to UDC application", async ({page, request}) => {

    const pages: any[] = [];
    pages.push(new LoginPage(page));
    const[login_page] = pages;
    await Utils.launchURL(process.env.BASE, page);
    console.log('Title of the page: '+ await Utils.getTitle(page));
    await login_page.login(process.env.Email,process.env.Password);
    await page.waitForTimeout(10000);
    const currentPageURL = await Utils.getPageUrl(page);
    console.log(currentPageURL);
    await expect(currentPageURL).toContain("patients");
    
    //await new Promise(() => {});
})

test("Verify user is getting an error message when invalid credentials given", async ({page, request}) => {

    const pages: any[] = [];
    pages.push(new LoginPage(page));
    const[login_page] = pages;
    await Utils.launchURL(process.env.BASE, page);
    console.log('Title of the page: '+ await Utils.getTitle(page));
    login_page.login(process.env.Email,process.env.Invalid_Password);
    await page.waitForTimeout(10000);
    const error_message = page.getByText('Incorrect or password');
    await expect(error_message).toBeVisible();

})