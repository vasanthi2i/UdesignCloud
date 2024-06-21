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


    // async uploadSingleStlFile(isUpperStl: boolean) {
    //     if (isUpperStl = true) {
    //         Utils.uploadSingleFile(this.uploadUpperStl, 'src/resources/Stls/MC269_lprofile_occlusion_u.stl');
    //         //this.uploadUpperStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_u.stl'));
    //     }
    //     else if(isUpperStl = false){
    //         Utils.uploadSingleFile(this.uploadLowerStl, 'src/resources/Stls/MC269_lprofile_occlusion_l.stl');
    //         //this.uploadLowerStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_l.stl'))
    //     }
    //     else
    //     {
    //         console.log('Invalid path');
    //     }
    // }

    async uploadUpperStlFile() {
        await Utils.uploadSingleFile(this.uploadUpperStl, 'src/resources/Stls/MC269_lprofile_occlusion_u.stl');
            //this.uploadUpperStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_u.stl'));
        }

    async uploadLowerStlFile() {
        await Utils.uploadSingleFile(this.uploadLowerStl, 'src/resources/Stls/MC269_lprofile_occlusion_l.stl');   
            Utils.uploadSingleFile(this.uploadLowerStl, 'src/resources/Stls/MC269_lprofile_occlusion_l.stl'); 
            
    }

    // Click Next button
    async clickNextButtonOnScansPage(): Promise<void> {
        await Utils.clickNextButton(this.nextButton);
    }

    // Click Close button
    async clickCloseButtonOnOrdertypePage(): Promise<void> {
        await Utils.clickCloseButton(this.closeButton);
    }


}