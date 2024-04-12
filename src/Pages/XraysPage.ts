import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Xrays page 
export class XraysPage {
    page: Page;
    uploadPanoImage: Locator;
    uploadCephImage: Locator;
    nextButton: Locator;
    backButton: Locator;
    closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadPanoImage = page.getByTestId('pano');
        this.uploadCephImage = page.getByTestId('ceph');
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    //Uploading Pano image
    async uploadPanoImageFile(page: Page): Promise<void> {
        Utils.uploadSingleFile(this.uploadPanoImage, 'UdesignCloud\src\resources\Xrays\pano.png');
    }


    //Uploading ceph image
    async uploadCephImageFile(page: Page): Promise<void> {
        Utils.uploadSingleFile(this.uploadCephImage, 'UdesignCloud\src\resources\Xrays\ceph.png');
    }

    // Clicking Next button 
    async clickNextButtonOnXraysPage(page: Page): Promise<void> {
        Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButtonOnXraysPage(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnXraysPage(): Promise<void> {
        Utils.clickBackButton(this.backButton);
    }
}