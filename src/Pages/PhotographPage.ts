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
    async uploadCompositeImageFile(page: Page): Promise<void> {
        Utils.uploadSingleFile(this.uploadCompositeImage, 'UdesignCloud\src\resources\Photographs\smile.png');
    }

    //Clicking Next Button
    async clickNextButtonOnPhotographsPage(page: Page): Promise<void> {
        Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButtonOnPhotographsPage(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnPhotographsPage(): Promise<void> {
        Utils.clickBackButton(this.backButton);
    }

}