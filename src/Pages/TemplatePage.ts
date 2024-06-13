import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class TemplatePage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async clickSaveForThisCase(): Promise<void>
    {
        this.page.waitForTimeout(5000);
        const saveForThisCaseButton = this.page.getByRole('button',{name: 'Save For This Case'});
        saveForThisCaseButton.click();
    }
    
    }