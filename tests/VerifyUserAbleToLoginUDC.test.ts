import{expect, test } from "@playwright/test";
import {Utils} from "../src/Utils/Utils"
import { LoginPage } from "../src/Pages/LoginPage";
import { time } from "console";


test("Verify user is able to login to UDC application", async ({page, request}) => {

    //test.setTimeout(100000);

    const pages: any[] = [];
    pages.push(new LoginPage(page));
    const[login_page] = pages;

    console.log(process.env.BASE);

    await Utils.launchURL(process.env.BASE, page);
    console.log(await Utils.getTitle(page));
    //page.waitForTimeout(10000);

    login_page.login(process.env.Email,process.env.Password);
    await page.waitForTimeout(10000);
    const currentPageURL = await Utils.getPageUrl(page);
    console.log(currentPageURL);
    var timestamp = new Date().getSeconds();
    console.log(timestamp);

    await expect(currentPageURL).toContain("patients");
    
    //await new Promise(() => {});
})

