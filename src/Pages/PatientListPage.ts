import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class PatientListPage{
    page: Page;
    addnewpatient: Locator;
    searchField: Locator;
    patientFirstName: Locator;
    filterListIcon: Locator;
    statusDropdown: Locator;
    fillOutRxForm: Locator;
    filterButton: Locator;
    menu: Locator;
    filterLabelFillOutRxForm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addnewpatient = page.getByText('Add new patient');
        this.searchField= page.locator("//input[@id='search']");
        this.patientFirstName= page.locator("//table//td//span");
        this.filterListIcon= page.getByTestId('FilterListIcon');
        this.statusDropdown= page.locator("//ul[@role='menu']//div//span[text()='Status']/../../following-sibling::div");
        this.fillOutRxForm= page.locator("//li[@data-value='FILL_OUT_RX_FORM']");
        this.filterButton= page.getByRole('button',{name: 'FILTER'});
        this.menu= page.locator("//div[@id='menu-']");
        this.filterLabelFillOutRxForm= page.locator("//span[text()='Fill Out Rx Form']");
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

    async filterByStatus(): Promise<void> {
        await this.filterListIcon.click();
        await Utils.selectDropdownValue(this.statusDropdown,this.fillOutRxForm);
        await this.menu.click();
        await this.filterButton.click();
       
        console.log("Fillout Rx form filter was selected");
    }

    async filterLabelConfirmation(): Promise<string> {
        const status_label = await this.filterLabelFillOutRxForm.innerText();
        return status_label;
    }
    
}