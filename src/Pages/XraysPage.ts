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
    scansValidationMessage: Locator;
    photoValidationMessage: Locator;
    panoValidationMessage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.uploadPanoImage = page.getByTestId('pano');
        this.uploadCephImage = page.getByTestId('ceph');
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.scansValidationMessage = page.getByText('One scan is required');
        this.photoValidationMessage = page.getByText('One photograph is required');
        this.panoValidationMessage = page.getByText('Pano is required');
    }

    //Uploading Pano image
    async uploadPanoImageFile(): Promise<void> {
        await Utils.uploadSingleFile(this.uploadPanoImage, 'src/resources/Xrays/pano.png');
        console.log('Uploaded Panographic image');
    }

    //Uploading ceph image
    async uploadCephImageFile(): Promise<void> {
        await Utils.uploadSingleFile(this.uploadCephImage, 'src/resources/Xrays/ceph.png');
    }

    // Clicking Next button 
    // async clickNextButtonOnXraysPage(): Promise<void> {
    //     await Utils.clickNextButton(this.nextButton);
    // }

    // Clicking Close button
    async clickCloseButtonOnXraysPage(): Promise<void> {
        await Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnXraysPage(): Promise<void> {
        await Utils.clickBackButton(this.backButton);
    }

    async returnScansValidationMessage(): Promise<string> {
        const validateMessage = this.scansValidationMessage.innerText();
        return validateMessage;
    }

    async returnPhotographValidationMessage(): Promise<string> {
        const validateMessage = this.photoValidationMessage.innerText();
        return validateMessage;
    }

    async returnPanoValidationMessage(): Promise<string> {
        const validateMessage = this.panoValidationMessage.innerText();
        return validateMessage;
    }



}