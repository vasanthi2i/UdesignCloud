import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";


export class PatientEditPage{
    page: Page;
    archiveButton: Locator;
    archiveConfirmation: Locator;
    archiveConfirmationToaster: Locator;

    constructor(page: Page) {
        this.page = page;
        this.archiveButton = page.getByRole('button', { name: 'Archive' });
        this.archiveConfirmation = page.getByRole('button', { name: 'Archive' });
        this.archiveConfirmationToaster = page.getByText('Patient Archived successfully');
    }

    async clickArchiveButton() : Promise<void>{
        await this.archiveButton.click();
        await this.archiveConfirmation.click();
    }

    async archiveConfirmationText(): Promise<string>{
        const text = await this.archiveConfirmationToaster.innerText();
        return text;
    }

}