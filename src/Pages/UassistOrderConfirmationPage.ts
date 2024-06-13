import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class UassistOrderConfirmationPage {
    page: Page;
    confirmationText: Locator;


    constructor(page: Page) {

        this.page = page;
        this.confirmationText = page.getByText('Thank you for submitting your case to uAssist');
    }

    async uassistOrderConfirmationText(): Promise<string>
    {
        //this.confirmationText = this.page.getByText('Thank you for submitting your case to uAssist');
        const message = await this.confirmationText.innerText();
        return message;
    }

}
