import { Locator, Page } from "playwright-core";
import { Utils } from "./Utils";

export class ElementUtil
{
    page:Page;
    nextButton: Locator;
    
    constructor(page: Page)
    {
        this.page=page;
        this.nextButton = page.getByTestId('ChevronRightIcon');
    }

    async clickNextButtonOnXraysPage(): Promise<void> {
        await Utils.clickNextButton(this.nextButton);
    }
}

export async function clickNextButton(page: Page) {
    const nextButton = page.getByTestId('ChevronRightIcon');
    if (nextButton) {
        await nextButton.click();
        console.log('Clicked on the "Next" button.');
    } else {
        console.log('Could not find the "Next" button.');
    }
}

export async function clickBackButton(page: Page) {
    const backButton = page.getByTestId('ChevronLeftIcon');
    if (backButton) {
        await backButton.click();
        console.log('Clicked on the "Next" button.');
    } else {
        console.log('Could not find the "Next" button.');
    }
}
