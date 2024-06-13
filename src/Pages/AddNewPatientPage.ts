import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../Utils/ElementUtil";
import { Utils } from "../Utils/Utils";



export class AddNewPatient {
    page: Page;
    fname: Locator;
    lname: Locator;
    month: Locator;
    date: Locator;
    year: Locator;
    assignedto: Locator;
    userList: Locator;
    notes: Locator; 
    addPatientButton: Locator;
    cancelAddPatientButton: Locator;

    constructor(page: Page)
    {
        this.page = page;       
        this.fname = page.locator('//input[@id="firstName"]');
        this.lname = page.locator('//input[@id="lastName"]');
        this.month = page.getByPlaceholder('MM');
        this.date = page.getByPlaceholder('DD');
        this.year = page.getByPlaceholder('yyyy');
        this.assignedto = page.getByPlaceholder('Select');
        this.userList = page.locator('//ul[@class="css-13pngn9"]/li');
        this.notes = page.locator('//textarea[@id="notes"]');
        this.addPatientButton = page.getByRole('button',{name: 'Add patient'});
        this.cancelAddPatientButton = page.getByRole('button',{name: 'Cancel'});

    }

    async enterFirstName(firstName: string): Promise <void>
    {
        //console.log('AddNewPatient')
        //this.page.waitForLoadState("domcontentloaded");
        await this.fname.click();
        await this.fname.fill(firstName);
    }

    async enterLastName(lastName: string): Promise <void>
    {
        await this.lname.click();
        await this.lname.fill(lastName + await Utils.getCurrentTime());
    }

    async enterMonth(monthM: string): Promise <void>
    {
        await this.month.click();
        await this.month.fill(monthM);
    }

    async enterDay(dateD: string): Promise <void>
    {
        await this.date.click();
        await this.date.fill(dateD);
    }

    async enterYear(yearY: string): Promise <void>
    {
        await this.year.click();
        await this.year.fill(yearY);
    }

    async enterAssignedTo(assigned: string): Promise <void>
    {
        await this.assignedto.click();
        await this.assignedto.fill(assigned);
        let list = await this.userList.getByText(assigned);
        let text = await list.innerText();
        if(text.includes('US SQA'))
            {
                this.userList.click();
            }
            else
            {
                console.log('Invalid user name');
            }
    }

    async enterNotes(notes: string): Promise <void>
    {
        await this.notes.click();
        await this.notes.fill(notes);
    }

    async clickAddPatient(): Promise <void>
    {
        await this.addPatientButton.click();
    }


    async addPatient(firstName: string,lastName: string,monthM: string,dateD: string,yearY: string,assigned: string,notes: string ): Promise<void>
    {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterMonth(monthM);
        await this.enterDay(dateD);
        await this.enterYear(yearY);
        await this.enterAssignedTo(assigned);
        await this.enterNotes(notes);
        await this.clickAddPatient();
        console.log('New patient added');
    }

    async clickCancel(): Promise <void>
    {
        await this.cancelAddPatientButton.click();
    }

    async cancelAddPatient(firstName: string,lastName: string,monthM: string,dateD: string,yearY: string,assigned: string,notes: string ): Promise<void>
    {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterMonth(monthM);
        await this.enterDay(dateD);
        await this.enterYear(yearY);
        await this.enterAssignedTo(assigned);
        await this.enterNotes(notes);
        await this.clickCancel();
    }

}

