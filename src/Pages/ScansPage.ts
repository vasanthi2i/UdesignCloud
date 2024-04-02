import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Scans page updated
export class ScansPage{
    page: Page;
    uploadUpperStl: Locator;
    uploadLowerStl: Locator;


    constructor(page: Page)
    {
         this.page= page;
         this.uploadUpperStl=page.getByTestId('Upper');
         this.uploadLowerStl=page.getByTestId('Lower');
    }


    async uploadSingleStlFile(page: Page, isUpperStl: boolean)
    {
        if(isUpperStl=true)
        {
            Utils.uploadSingleFile(this.uploadUpperStl,'src\resources\Stls\MC269_lprofile_occlusion_u.stl');
        //this.uploadUpperStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_u.stl'));
        }
        else
        {
            Utils.uploadSingleFile(this.uploadLowerStl,'src\resources\Stls\MC269_lprofile_occlusion_l.stl');
            //this.uploadLowerStl.setInputFiles(path.join('E:/Downloads/UD cloud demo/UD cloud demo/stls/MC269_lprofile_occlusion_l.stl'))
        }
    }

}