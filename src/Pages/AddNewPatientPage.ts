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
    notes: Locator; 
    addpatientButton: Locator;

    constructor(page: Page)
    {
        this.page = page;       
        this.fname = page.locator('//input[@id="firstName"]');
        this.lname = page.locator('//input[@id="lastName"]');
        this.month = page.locator('//input[@id="month"]');
        this.date = page.locator('//input[@id="day"]');
        this.year = page.locator('//input[@id="year"]');
        this.assignedto = page.locator('//input[@id="doctor"]');
        this.notes = page.locator('//textarea[@id="notes"]');
        this.addpatientButton = page.getByRole('button',{name: 'Add patient'});

    }

    async enterFirstname(firstName: string): Promise <void>
    {
        console.log('hi')
        //this.page.waitForLoadState("domcontentloaded");
        await this.fname.click();
        await this.fname.fill(firstName);
    }

    async enterLastname(lastName: string): Promise <void>
    {
        
        await this.lname.click();
        await this.lname.fill(lastName);
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

    async enteryear(yearY: string): Promise <void>
    {
        await this.year.click();
        await this.year.fill(yearY);
    }

    async enterassignedto(assigned: string): Promise <void>
    {
        await this.assignedto.click();
        await this.assignedto.fill(assigned);
    }

    async clickAddPatient(): Promise <void>
    {
        await this.addpatientButton.click();
    }


    async addPatient(firstName: string,lastName: string,monthM: string,dateD: string,yearY: string,assigned: string ): Promise<void>
    {
        await this.enterFirstname("Test");
        await this.enterLastname('UDC ' + Utils.getCurrentTime());
        await this.enterMonth("09");
        await this.enterDay("03");
        await this.enteryear("1997");
        await this.enterassignedto("US SQA_Ortho");
        await this.clickAddPatient();
    }



}

