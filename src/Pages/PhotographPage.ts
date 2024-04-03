import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



//Photographs page
export class PhotographsPage{
    page: Page;
    uploadCompositeImage: Locator;
   


    constructor(page: Page)
    {
         this.page= page;
         this.uploadCompositeImage=page.getByTestId('composite');
    }

    // Uploading Composite Image
    async uploadCompositeImageFile(page: Page): Promise <void>
    {
        Utils.uploadSingleFile(this.uploadCompositeImage,'UdesignCloud\src\resources\Photographs\smile.png');
    }

}