import { Page } from "@playwright/test"
import { error } from "console";


export class Utils{

    
    //Returns the title of current page
    static async getTitle(page: Page): Promise <string>
    {
        return page.title();
    }

    //Launch the given url in the browser page
    static async launchURL(url:string | undefined, page: Page): Promise <void>
    {
        if(url!=undefined)
        {
        await page.goto(url);
        }
        else
        {
            throw new Error('Please enter valid URL to launch')
        }
    }

    //returns the current page url
    static async getPageUrl(page: Page): Promise<string> 
    {
        //page.waitForTimeout(3000);
        const currentPageURL = page.url();
        return currentPageURL;
    }

}