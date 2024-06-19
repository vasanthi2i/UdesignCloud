import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Photographs page
export class PhotographsPage {
    page: Page;
    uploadCompositeImage: Locator;
    nextButton: Locator;
    backButton: Locator;
    closeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.uploadCompositeImage = page.getByTestId('composite');
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    // Uploading Composite Image
    async uploadCompositeImageFile(): Promise<void> {
        await Utils.uploadSingleFile(this.uploadCompositeImage, 'src/resources/Photographs/smile.png');
        console.log('Uploaded Composite image');

    }
    //src\resources\Photographs\smile.png

    //Clicking Next Button
    async clickNextButtonOnPhotographsPage(): Promise<void> {
        await Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButtonOnPhotographsPage(): Promise<void> {
        await Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnPhotographsPage(): Promise<void> {
        await Utils.clickBackButton(this.backButton);
    }

}