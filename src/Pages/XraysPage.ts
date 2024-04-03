import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Xrays page 
export class XraysPage{
    page: Page;
    uploadPanoImage: Locator;
    uploadCephImage: Locator;

    constructor(page: Page)
    {
         this.page= page;
         this.uploadPanoImage=page.getByTestId('pano');
         this.uploadCephImage=page.getByTestId('ceph');
    }

    //Uploading Pano image
    async uploadPanoImageFile(page: Page): Promise <void>
    {
        Utils.uploadSingleFile(this.uploadPanoImage,'UdesignCloud\src\resources\Xrays\pano.png');
    }


    //Uploading ceph image
    async uploadCephImageFile(page: Page): Promise <void>
    {
        Utils.uploadSingleFile(this.uploadCephImage,'UdesignCloud\src\resources\Xrays\ceph.png');
    }
}