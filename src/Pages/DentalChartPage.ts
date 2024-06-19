import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Dental chart page 
export class DentalChartPage {
    nextButton: Locator;
    backButton: Locator;
    closeButton: Locator;


    constructor(page: Page) {
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }


    //Clicking next button
    async clickNextButtonOnDentalChartPage(): Promise<void> {
        await Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButtonOnDentalChartPage(): Promise<void> {
        await Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnDentalChartPage(): Promise<void> {
        await Utils.clickBackButton(this.backButton);
    }

}