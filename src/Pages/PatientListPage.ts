import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class PatientListPage{
    page: Page;
    addnewpatient: Locator;
    searchField: Locator;
    patientFirstName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addnewpatient = page.getByText('Add new patient');
        this.searchField= page.locator("//input[@id='search']");
        this.patientFirstName= page.locator("//table//td//span");
    }

    async clickAddNewPatientButton(): Promise <void>
    {
        await this.addnewpatient.click();
    }
    async selectingPatient(patientName :string): Promise <void>
    {
        await this.searchField.click();
        await this.searchField.fill(patientName);
        await this.patientFirstName.first().click();
        console.log("Patient "+ patientName + " was selected to archive");
    }
    
}