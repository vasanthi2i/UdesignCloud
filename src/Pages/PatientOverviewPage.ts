import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class PatientOverviewPage{
    page: Page;
    addnewpatient: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addnewpatient = page.getByText('Add new patient');
    }

    async clickAddNewPatientButton(): Promise <void>
    {
        await this.addnewpatient.click();
    }

    
}