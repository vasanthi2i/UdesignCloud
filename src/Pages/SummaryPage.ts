import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


//Summary Page
export class SummaryPage {

    page: Page;
    backButton: Locator;
    closeButton: Locator;
    saveButton: Locator;
    SubmitToUassistButton: Locator;

    constructor(page: Page) {

        this.page = page;
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.saveButton = page.getByRole('button', { name: 'SAVE' });
        this.SubmitToUassistButton = page.getByRole('button', { name: 'Submit to uAssist' });
    }
     //Clicking Save button
     async clickSave(): Promise <void>
    {
        await this.saveButton.click();
    }
    // Clicking Close button
    async clickCloseButtonOnDentalChartPage(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnDentalChartPage(): Promise<void> {
        Utils.clickBackButton(this.backButton);
    }

    //Clicking Submit to uAssist button
    async clickSubmitButton(): Promise <void>
    {
        console.log('Submitted the summary page')
        await this.SubmitToUassistButton.click();
    }

}