import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";

export class LoginPage {
    page: Page;
    selectArchesUpper: Locator;
    selectArchesLower: Locator;
    bracketRemoval: Locator;
    removeScannedAttachment: Locator;
    removeScannedAttachmentBoth: Locator;
    removeScannedAttachmentUpper: Locator;
    removeScannedAttachmentLower: Locator;
    coverLingualBar: Locator;
    coverLingualBarBoth: Locator;
    coverLingualBarUpper: Locator;
    coverLingualBarLower: Locator;
    removeLingualBar: Locator;
    removeLingualBarBoth: Locator;
    removeLingualBarUpper: Locator;
    removeLingualBarLower: Locator;
    addBitRamp: Locator;
    addBitRampR1: Locator;
    addBitRampR2: Locator;
    addBitRampR3: Locator;
    pontics: Locator;
    ponticsText: Locator;
    additionalInstructions: Locator;
    submitTouAssist: Locator;
    backButton: Locator;
    closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectArchesUpper = page.getByRole('checkbox', { name: 'upper' });
        this.selectArchesLower = page.getByRole('checkbox', { name: 'lower' });
        this.bracketRemoval = page.locator('fieldset', { hasText: 'Bracket RemovalYes' }).getByLabel('Yes');
        this.removeScannedAttachment = page.locator('fieldset', { hasText: 'Remove Scanned Attachments /' }).getByLabel('Yes');
        this.removeScannedAttachmentBoth = page.getByRole('radio', { name: 'Both' });
        this.removeScannedAttachmentUpper = page.getByRole('radio', { name: 'Upper' });
        this.removeScannedAttachmentLower = page.getByRole('radio', { name: 'Lower' });
        this.coverLingualBar = page.locator('fieldset', { hasText: 'Cover Lingual BarYes' }).getByLabel('Yes');
        this.coverLingualBarBoth = page.locator('fieldset', { hasText: 'Cover Lingual' }).getByLabel('Both');
        this.coverLingualBarUpper = page.locator('fieldset', { hasText: 'Cover Lingual' }).getByLabel('Upper');
        this.coverLingualBarLower = page.locator('fieldset', { hasText: 'Cover Lingual' }).getByLabel('Lower');
        this.removeLingualBar = page.locator('fieldset', { hasText: 'Remove Lingual BarYes' }).getByLabel('Yes');
        this.removeLingualBarBoth = page.locator('fieldset', { hasText: 'Remove Lingual Bar' }).getByLabel('Both');
        this.removeLingualBarUpper = page.locator('fieldset', { hasText: 'Remove Lingual Bar' }).getByLabel('Upper');
        this.removeLingualBarLower = page.locator('fieldset', { hasText: 'Remove Lingual Bar' }).getByLabel('Lower');
        this.addBitRamp = page.locator('input[name="Yes"]');
        this.addBitRampR1 = page.locator('input[name="R1"]');
        this.addBitRampR2 = page.locator('input[name="R2"]');
        this.addBitRampR3 = page.locator('input[name="R3"]');
        this.pontics = page.locator('fieldset', { hasText: 'PonticsYes' }).getByLabel('Yes');
        this.ponticsText = page.getByPlaceholder('Identify Which teeth');
        this.additionalInstructions = page.getByPlaceholder('Please enter notes here');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.submitTouAssist = page.getByRole('button', { name: 'Submit to uAssist' });
    }

    async checkSelectArchesUpper(): Promise<void> {
        await this.selectArchesUpper.check();
    }

    async checkSelectArchesLower(): Promise<void> {
        await this.selectArchesLower.check();
    }

    async checkBracketRemoval(): Promise<void> {
        await this.bracketRemoval.check();
    }

    async checkRemoveScannedAttachments(input: string): Promise<void> {
        await this.removeScannedAttachment.check();

        switch (input.toLowerCase()) {
            case 'both':
                console.log('User selected Both');
                await this.removeScannedAttachmentBoth.check();
                break;
            case 'upper':
                console.log('User selected Upper');
                await this.removeScannedAttachmentUpper.check();
                break;
            case 'lower':
                console.log('User selected Lower');
                await this.removeScannedAttachmentLower.check();
                break;
            default:
                console.log('Invalid input. Please select "Upper", "Lower", or "Both"');
        }
    }

    async checkCoverLingualBar(input: string): Promise<void> {
        await this.coverLingualBar.check();

        switch (input.toLowerCase()) {
            case 'both':
                console.log('User selected Both');
                await this.coverLingualBarBoth.check();
                break;
            case 'upper':
                console.log('User selected Upper');
                await this.coverLingualBarUpper.check();
                break;
            case 'lower':
                console.log('User selected Lower');
                await this.coverLingualBarLower.check();
                break;
            default:
                console.log('Invalid input. Please select "Upper", "Lower", or "Both"');
        }
    }

    async checkRemoveLingualBar(input: string): Promise<void> {
        await this.removeLingualBar.check();

        switch (input.toLowerCase()) {
            case 'both':
                console.log('User selected Both');
                await this.removeLingualBarBoth.check();
                break;
            case 'upper':
                console.log('User selected Upper');
                await this.removeLingualBarUpper.check();
                break;
            case 'lower':
                console.log('User selected Lower');
                await this.removeLingualBarLower.check();
                break;
            default:
                console.log('Invalid input. Please select "Upper", "Lower", or "Both"');
        }
    }

    async checkAddBiteRamp(inputs: string[]): Promise<void> {
        if (!(await this.addBitRamp.isChecked())) {
            await this.addBitRamp.check();
        }

        for (const input of inputs) {
            switch (input.toLowerCase()) {
                case 'r1':
                    console.log('User selected R1');
                    if (!(await this.addBitRampR1.isChecked())) {
                        await this.addBitRampR1.check();
                    }
                    break;
                case 'r2':
                    console.log('User selected R2');
                    if (!(await this.addBitRampR2.isChecked())) {
                        await this.addBitRampR2.check();
                    }
                    break;
                case 'r3':
                    console.log('User selected R3');
                    if (!(await this.addBitRampR3.isChecked())) {
                        await this.addBitRampR3.check();
                    }
                    break;
                default:
                    console.log(`Invalid input: ${input}. Please select "R1", "R2", or "R3"`);
            }
        }
    }

    async checkPontics(): Promise<void> {
        await this.pontics.check();
    }

    async enterPonticsText(ponticS: string): Promise<void> {
        await this.ponticsText.click();
        await this.ponticsText.fill(ponticS);
    }

    async enterAdditionalInstructions(additionalInstructionS: string): Promise<void> {
        await this.additionalInstructions.click();
        await this.additionalInstructions.fill(additionalInstructionS);
    }

    // Clicking Close button
    async clickCloseButtonOnPhotographsPage(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButtonOnPhotographsPage(): Promise<void> {
        Utils.clickBackButton(this.backButton);
    }

    // Clicking Submit to uAssist
    async clickSubmitTouAssist(): Promise <void>
    {
        await this.submitTouAssist.click();
    }


    
}