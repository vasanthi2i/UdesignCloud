import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";
const { chromium } = require('playwright');


export class PatientOverviewPage{
    page: Page;
    editButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editButton= page.getByRole('button', { name: 'Edit' });
    }

    async clickEditButton(): Promise <void>
    {
        await this.editButton.click();
    }

    
}