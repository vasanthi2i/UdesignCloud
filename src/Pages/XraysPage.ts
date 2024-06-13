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
    async uploadPanoImageFile(): Promise<void> {
        Utils.uploadSingleFile(this.uploadPanoImage, 'src/resources/Xrays/pano.png');
        console.log('Uploaded Panographic image');
    }


    //Uploading ceph image
    async uploadCephImageFile(): Promise<void> {
        Utils.uploadSingleFile(this.uploadCephImage, 'src/resources/Xrays/ceph.png');
    }

    // Clicking Next button 
    async clickNextButtonOnXraysPage(): Promise<void> {
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