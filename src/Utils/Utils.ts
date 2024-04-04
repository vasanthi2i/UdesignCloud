import { Locator, Page } from "@playwright/test"
import { error } from "console";
import path from "path";


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

    /*
    Upload a single file in a file path
    */
    static async uploadSingleFile(file: Locator, filePath: string): Promise<void>
    {
        if(path!=undefined)
        {
        file.setInputFiles(path.join(filePath));
        }
        else
        {
            throw new Error('Please send a valid path to upload file');
        }
    }

    /*
    Upload multiple files in a file path
    */
    static async uploadMultipleFiles(file: Locator, filePath1: string, filePath2: string): Promise<void>
    {
        if(path!=undefined)
        {
        file.setInputFiles([path.join(filePath1),path.join(filePath2)]);
        }
        else
        {
            throw new Error('Please send a valid path to upload file');
        }
    }

    static async getCurrentTime(): Promise<number>
    {
        const timestamp = new Date().getSeconds();
        return timestamp;
    }

    // Clicking Next button on any page
    static async clickNextButton(page: Page): Promise <void> {
        
            const nextButton = await page.getByTestId('ChevronRightIcon');
        //     We can also use the below locator
        //  const nextButton = await page.getByRole('button',{name : 'Next'});
            if (nextButton) {
                await nextButton.click();
                console.log('Clicked on the "Next" button.');
            } else {
                console.log('Could not find the "Next" button.');
            }

    }

        // Clicking Close button on any page
        static async clickCloseButton(page: Page): Promise <void> {
        
            const closeButton = await page.getByRole('button',{name : 'Close'});
            if (closeButton) {
                await closeButton.click();
                console.log('Clicked on the "Close" button.');
            } else {
                console.log('Could not find the "Close" button.');
            }

    }

        // Clicking Back button on any page
        static async clickBackButton(page: Page): Promise <void> {
        
            const backButton = await page.getByTestId('ChevronLeftIcon');
            if (backButton) {
                await backButton.click();
                console.log('Clicked on the "Back" button.');
            } else {
                console.log('Could not find the "Back" button.');
            }

    }

            // Clicking Submit to uassist button on any page
            static async clickSumbitToUassistButton(page: Page): Promise <void> {
        
                const submitToUassistButton = await page.getByTestId('ChevronRightIcon');
            //     We can also use the below loactor
        //  const nextButton = await page.getByRole('button',{name : 'Submit to uAssist'});
                if (submitToUassistButton) {
                    await submitToUassistButton.click();
                    console.log('Clicked on the "Submit to uassist" button.');
                } else {
                    console.log('Could not find the "Submit to uassist" button.');
                }
    
        }
    
}