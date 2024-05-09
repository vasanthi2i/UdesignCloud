import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";
import { Console } from "console";



//Aligner Prescription page
export class PhotographsPage {
    page: Page;
    nextButton: Locator;
    backButton: Locator;
    closeButton: Locator;
    estimatedTreatmentTime: Locator;
    upperCheckBox: Locator;
    lowerCheckBox: Locator;
    upperDropdown: Locator;
    lowerDropdown: Locator;
    alignerOption: Locator;
    retainerOnlyOption: Locator;
    bracketRemovalCheckBoxUpper: Locator;
    coverLingualBarCheckBoxUpper: Locator;
    removeLingualBarCheckBoxUpper: Locator;
    bracketRemovalCheckBoxLower: Locator;
    coverLingualBarCheckBoxLower: Locator;
    removeLingualBarCheckBoxLower: Locator;
    seletedTeeth_3to3: Locator;
    seletedTeeth_5to5: Locator;
    seletedTeeth_6to6: Locator;
    seletedTeeth_7to7: Locator;
    maintain_ClassCorrection: Locator;
    correct_ClassCorrection: Locator;
    acceptBestFit_ClassCorrection: Locator;
    maintain_MidlineCorrection: Locator;
    moveUpperToLower_MidlineCorrection: Locator;
    moveLowerToUpper_MidlineCorrection: Locator;
    moveBoth_MidlineCorrection: Locator;
    notApplicable_CrossbiteCorrection: Locator;
    maintain_CrossbiteCorrection: Locator;
    correct_CrossbiteCorrection: Locator;
    yes_PlanningForRestoration: Locator;
    planForRestorationTextField: Locator;
    no_PlanningForRestoration: Locator;
    smartRxTemplate_Dropdown: Locator;
    crowding_FormTemplate: Locator;
    openBite_FormTemplate: Locator;
    deepBite_FormTemplate: Locator;
    limitedTreatment_FormTemplate: Locator;
    spacing_FormTemplate: Locator;
    caseSpecific_Instructions: Locator;
    crowding_Instructions: Locator;
    openBite_Instructions: Locator;
    deepBite_Instructions: Locator;
    limitedTreatment_Instructions: Locator;
    spacing_Instructions: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nextButton = page.getByTestId('ChevronRightIcon');
        this.backButton = page.getByTestId('ChevronLeftIcon');
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.estimatedTreatmentTime = page.locator("//input[@id='Estimated Treatment Time']");
        this.upperCheckBox = page.getByLabel('Upper', { exact: true });
        this.lowerCheckBox = page.getByLabel('Lower', { exact: true });
        this.upperDropdown = page.getByRole('group').locator('div').filter({ hasText: 'UpperAlignerBracket' }).getByLabel('Aligner');
        this.lowerDropdown = page.getByRole('group').locator('div').filter({ hasText: 'LowerAlignerBracket' }).getByLabel('Aligner');
        this.alignerOption = page.getByRole('option', { name: 'Aligner' });
        this.retainerOnlyOption = page.getByRole('option', { name: 'Retainer Only' });
        this.bracketRemovalCheckBoxUpper = page.locator("//span[contains(text(),'Upper')]/../../following-sibling::div//input[@type='checkbox'and@name='bracket_removal']");
        this.coverLingualBarCheckBoxUpper = page.locator("//span[contains(text(),'Upper')]/../../following-sibling::div//input[@type='checkbox'and@name='cover_lingual_bar']");
        this.removeLingualBarCheckBoxUpper = page.locator("//span[contains(text(),'Upper')]/../../following-sibling::div//input[@type='checkbox'and@name='remove_lingual_bar']");
        this.bracketRemovalCheckBoxLower = page.locator("//span[contains(text(),'Lower')]/../../following-sibling::div//input[@type='checkbox'and@name='bracket_removal']");
        this.coverLingualBarCheckBoxLower = page.locator("//span[contains(text(),'Lower')]/../../following-sibling::div//input[@type='checkbox'and@name='cover_lingual_bar']");
        this.removeLingualBarCheckBoxLower = page.locator("//span[contains(text(),'Lower')]/../../following-sibling::div//input[@type='checkbox'and@name='remove_lingual_bar']");
        this.seletedTeeth_3to3 = page.locator("//input[@value='3-3']");
        this.seletedTeeth_5to5 = page.locator("//input[@value='5-5']");
        this.seletedTeeth_6to6 = page.locator("//input[@value='6-6']");
        this.seletedTeeth_7to7 = page.locator("//input[@value='7-7']");
        this.maintain_ClassCorrection = page.locator("//span[contains(text(),'Class Correction')]/..//input[@value='Maintain']");
        this.correct_ClassCorrection = page.locator("//span[contains(text(),'Class Correction')]/..//input[@value='Correct']");
        this.acceptBestFit_ClassCorrection = page.locator("//span[contains(text(),'Class Correction')]/..//input[@value='Accept best fit']");
        this.maintain_MidlineCorrection = page.locator("//span[contains(text(),'Midline Correction')]/..//input[@value='Maintain']");
        this.moveUpperToLower_MidlineCorrection = page.locator("//span[contains(text(),'Midline Correction')]/..//input[@value='Move upper to lower']");
        this.moveLowerToUpper_MidlineCorrection = page.locator("//span[contains(text(),'Midline Correction')]/..//input[@value='Move lower to upper']");
        this.moveBoth_MidlineCorrection = page.locator("//span[contains(text(),'Midline Correction')]/..//input[@value='Move both']");
        this.notApplicable_CrossbiteCorrection = page.locator("//span[contains(text(),'Crossbite Correction')]/..//input[@value='Not applicable']");
        this.maintain_CrossbiteCorrection = page.locator("//span[contains(text(),'Crossbite Correction')]/..//input[@value='Maintain']");
        this.correct_CrossbiteCorrection = page.locator("//span[contains(text(),'Crossbite Correction')]/..//input[@value='Correct']");
        this.yes_PlanningForRestoration = page.locator("//span[contains(text(),'Planning for Restoration, Pontic or Eruption Dome?')]/..//input[@value='Yes']");
        this.planForRestorationTextField = page.locator("//textarea[@id='Planning for Restoration, Pontic or Eruption Dome?']");
        this.no_PlanningForRestoration = page.locator("//span[contains(text(),'Planning for Restoration, Pontic or Eruption Dome?')]/..//input[@value='No']");
        this.smartRxTemplate_Dropdown = page.locator("//div[@id='smart_rx_template-select}']");
        this.crowding_FormTemplate = page.locator("//ul[@role='listbox']//li[@data-value='Crowding']");
        this.openBite_FormTemplate = page.locator("//ul[@role='listbox']//li[@data-value='Open Bite']");
        this.deepBite_FormTemplate = page.locator("//ul[@role='listbox']//li[@data-value='Deep Bite']");
        this.limitedTreatment_FormTemplate = page.locator("//ul[@role='listbox']//li[@data-value='Limited Treatment']");
        this.spacing_FormTemplate = page.locator("//ul[@role='listbox']//li[@data-value='Spacing']");
        this.caseSpecific_Instructions = page.locator("//textarea[@id='Case Specific Instructions']");
        this.crowding_Instructions = page.locator("//textarea[@id='Crowding Template Instructions']");
        this.openBite_Instructions = page.locator("//textarea[@id='Open Bite Template Instructions']");
        this.deepBite_Instructions = page.locator("//textarea[@id='Deep Bite Template Instructions']");
        this.limitedTreatment_Instructions = page.locator("//textarea[@id='Limited Treatment Template Instructions']");
        this.spacing_Instructions = page.locator("//textarea[@id='Spacing Template Instructions']");




    }

    //Entering Estimated Treatment Time
    async enterEstimatedTreatmentTime(treatmentTime: string): Promise<void> {
        await this.estimatedTreatmentTime.click();
        await this.estimatedTreatmentTime.fill(treatmentTime);
        console.log('Estimated treatment time were filled out')
    }

    //Selecting arches to treat 
    //Sample Input await selectTreatmentArch("Lower", "BracketRemoval, CoverLingualBar");
    async selectTreatmentArch(arch: string, options: string, type?: string): Promise<void> {
        const optionsArray = options.split(',');

        switch (arch) {
            case "Upper":
                await this.upperCheckBox.check();
                if (type == "RetainerOnly") {
                    await this.upperDropdown.click();
                    await this.retainerOnlyOption.click();
                }
                for (const option of optionsArray) {
                    switch (option.trim()) {
                        case "BracketRemoval":
                            await this.bracketRemovalCheckBoxUpper.check();
                            break;
                        case "CoverLingualBar":
                            await this.coverLingualBarCheckBoxUpper.check();
                            break;
                        case "RemoveLingualBar":
                            await this.removeLingualBarCheckBoxUpper.check();
                            break;
                        default:
                            console.error('Checkbox for option  not found. Check your input data.');
                    }
                }
                break;
            case "Lower":
                await this.lowerCheckBox.check();
                if (type == "RetainerOnly") {
                    await this.lowerDropdown.click();
                    await this.retainerOnlyOption.click();
                }
                for (const option of optionsArray) {
                    switch (option.trim()) {
                        case "BracketRemoval":
                            await this.bracketRemovalCheckBoxLower.check();
                            break;
                        case "CoverLingualBar":
                            await this.coverLingualBarCheckBoxLower.check();
                            break;
                        case "RemoveLingualBar":
                            await this.removeLingualBarCheckBoxLower.check();
                            break;
                        default:
                            console.error('Checkbox for option  not found. Check your input data.');
                    }
                }
                break;
            case "BothArches":
                await this.upperCheckBox.check();
                await this.lowerCheckBox.check();
                if (type == "RetainerOnly") {
                    await this.upperDropdown.click();
                    await this.retainerOnlyOption.click();
                    await this.lowerDropdown.click();
                    await this.retainerOnlyOption.click();
                }
                for (const option of optionsArray) {
                    switch (option.trim()) {
                        case "BracketRemoval":
                            await this.bracketRemovalCheckBoxUpper.check();
                            await this.bracketRemovalCheckBoxLower.check();
                            break;
                        case "CoverLingualBar":
                            await this.coverLingualBarCheckBoxUpper.check();
                            await this.coverLingualBarCheckBoxLower.check();
                            break;
                        case "RemoveLingualBar":
                            await this.removeLingualBarCheckBoxUpper.check();
                            await this.removeLingualBarCheckBoxLower.check();
                            break;
                        default:
                            console.error('Checkbox for option  not found. Check your input data.');
                    }
                }
                break;
            default:
                console.error('Invalid arch. Please select either "Upper" or "Lower".');
        }
    }

    //Selecting Teeth to Treat
    async selectTeethToTreat(teeth: string): Promise<void> {
        switch (teeth) {
            case "3-3":
                await this.seletedTeeth_3to3.check();
                console.log('3-3 teeth option selected to treat.');
                break;
            case "5-5":
                await this.seletedTeeth_5to5.check();
                console.log('5-5 teeth option selected to treat.');
                break;
            case "6-6":
                await this.seletedTeeth_6to6.check();
                console.log('6-6 teeth option selected to treat.');
                break;
            case "7-7":
                await this.seletedTeeth_7to7.check();
                console.log('7-7 teeth option selected to treat.');
                break;
            default:
                console.error('Option not found.Check your input data');
                break;
        }

    }

    //Selecting Class Correction
    async selectClassCorrection(classCorrectionOption: string): Promise<void> {
        switch (classCorrectionOption) {
            case "Maintain":
                await this.maintain_ClassCorrection.check();
                console.log('Maintain class correction is selected.');
                break;
            case "Correct":
                await this.maintain_ClassCorrection.check();
                console.log('Maintain class correction is selected.');
                break;
            case "AcceptBestFit":
                await this.acceptBestFit_ClassCorrection.check();
                console.log('Accept best fit class correction is selected.');
                break;
            default:
                console.error('Option not found.Check your input data');
                break;
        }
    }

    //Selecting Midline Correction
    async selectMidlineCorrection(midlineCorrectionOption: string): Promise<void> {
        switch (midlineCorrectionOption) {
            case "Maintain":
                await this.maintain_MidlineCorrection.check();
                console.log('Maintain midline correction is selected.');
                break;
            case "MoveUppertoLower":
                await this.moveUpperToLower_MidlineCorrection.check();
                console.log('Move upper to lower midline correction is selected.');
                break;
            case "MoveLowertoUpper":
                await this.moveLowerToUpper_MidlineCorrection.check();
                console.log('Move lower to upper midline correction is selected.');
                break;
            case "MoveBoth":
                await this.moveBoth_MidlineCorrection.check();
                console.log('Move both midline correction is selected.');
                break;
            default:
                console.error('Option not found.Check your input data');
                break;
        }
    }

    //Selecting cross bite correction Correction
    async selectCrossbiteCorrection(crossbiteCorrectionOption: string): Promise<void> {
        switch (crossbiteCorrectionOption) {
            case "NotApplicable":
                await this.notApplicable_CrossbiteCorrection.check();
                console.log('Not applicble cross bite correction is selected.');
                break;
            case "Maintain":
                await this.maintain_CrossbiteCorrection.check();
                console.log('Maintain cross bite correction is selected.');
                break;
            case "Correct":
                await this.correct_CrossbiteCorrection.check();
                console.log('Correct cross bite correction is selected.');
                break;
            default:
                console.error('Option not found.Check your input data');
                break;
        }
    }

    //Selecting planning for restoration
    async selectPlanforRestoration(planforRestoreOption: string, text?: string): Promise<void> {
        if (planforRestoreOption === "Yes") {
            await this.yes_PlanningForRestoration.check();
            console.log('Yes, Planning for Restoration, Pontic or Eruption Dome.');
            await this.planForRestorationTextField.click();
            text && await this.planForRestorationTextField.fill(text);
        } else {
            await this.no_PlanningForRestoration.check();
        }
    }

    //Selecting SmartRx Template
    async selectSmartRxTemplate(templateOption: string, templateInstruction: string): Promise<void> {
        await this.smartRxTemplate_Dropdown.click();
        switch (templateOption) {
            case "Crowding":
                await this.crowding_FormTemplate.click();
                await this.crowding_Instructions.click();
                await this.crowding_Instructions.fill(templateInstruction);
                console.log('Crowding SmartRx template is selected');
                break;
            case "OpenBite":
                await this.openBite_FormTemplate.click();
                await this.openBite_Instructions.click();
                await this.openBite_Instructions.fill(templateInstruction);
                console.log('Open bite SmartRx template is selected');
                break;
            case "LimitedTreatment":
                await this.limitedTreatment_FormTemplate.click();
                await this.limitedTreatment_Instructions.click();
                await this.limitedTreatment_Instructions.fill(templateInstruction);
                console.log('Limited treatment SmartRx template is selcted');
                break;
            case "DeepBite":
                await this.deepBite_FormTemplate.click();
                await this.deepBite_Instructions.click();
                await this.deepBite_Instructions.fill(templateInstruction);
                console.log('Deep bite SmartRx template is selected');
                break;
            case "Spacing":
                await this.spacing_FormTemplate.click();
                await this.spacing_Instructions.click();
                await this.spacing_Instructions.fill(templateInstruction);
                console.log('Spacing SmartRx template is selected');
                break;
            default:
                console.error('Option not found.Check your input data');
                break;
        }

    }

    //Entering Case Specific Instructions
    async enterCaseSpecificInstruction(instructions: string): Promise<void> {
        await this.caseSpecific_Instructions.click();
        await this.caseSpecific_Instructions.fill(instructions);
        console.log('Case specific instructions were filled out');
    }

    //Clicking Next Button
    async clickNextButton(): Promise<void> {
        Utils.clickNextButton(this.nextButton);
    }

    // Clicking Close button
    async clickCloseButton(): Promise<void> {
        Utils.clickCloseButton(this.closeButton);
    }

    // Clicking Back button
    async clickBackButton(): Promise<void> {
        Utils.clickBackButton(this.backButton);
    }

}