import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Scans page updated
export class ScansPage {
    page: Page;
    uploadUpperStl: Locator;
    uploadLowerStl: Locator;
    nextButton: Locator;
    closeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.uploadUpperStl = page.getByTestId('Upper');
        this.uploadLowerStl = page.getByTestId('Lower');
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }


    async uploadSingleStlFile(page: Page, isUpperStl: boolean) {
        if (isUpperStl = true) {
            Utils.uploadSingleFile(this.uploadUpperStl, 'src\resources\Stls\MC269_lprofile_occlusion_u.stl');
            //this.uploadUpperStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_u.stl'));
        }
        else {
            Utils.uploadSingleFile(this.uploadLowerStl, 'src\resources\Stls\MC269_lprofile_occlusion_l.stl');
            //this.uploadLowerStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_l.stl'))
        }
    }

    // Clicking next button
    async clickNextButtonOnScansPage(page: Page): Promise<void> {
        Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButtonOnOrdertypePage(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }


}