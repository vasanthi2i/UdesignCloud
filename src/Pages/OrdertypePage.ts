import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Ordertype page
export class OrdertypePage{
    page: Page;
    clickAlignerButton: Locator;
    clickAlignerAndRetainerButton: Locator;
    clickRetainerOnlyButton: Locator
   


    constructor(page: Page)
    {
         this.page= page;
         this.clickAlignerButton=page.getByRole('button',{name: 'Aligner'});
         this.clickAlignerAndRetainerButton=page.getByRole('button',{name : 'Aligner and Retainer'});
         this.clickRetainerOnlyButton=page.getByRole('button',{name : 'Retainer Only'});    // ('button', { name: /submit/i })
    }

    // Clicking Aligner button
    async clickAlignerOrderType(): Promise <void>
    {
        await this.clickAlignerButton.click();
    }

    // Clicking Aligner and Retainer button
    async clickAlignerandRetainerOrderType(): Promise <void>
    {
        await this.clickAlignerAndRetainerButton.click();
    }

    // Clicking Retainer only button
    async clickRetainerOnlyOrderType(): Promise <void>
    {
        await this.clickRetainerOnlyButton.click();
    }

}