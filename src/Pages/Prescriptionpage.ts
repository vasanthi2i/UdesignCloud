import { Locator, Page } from "@playwright/test";
import path from "path";
import { Utils } from "../Utils/Utils";



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
    async fillEstimatedTreatmentTime(treatmentTime: any): Promise<void> {
        await this.estimatedTreatmentTime.click();
        await this.estimatedTreatmentTime.fill(treatmentTime);
        console.log('Estimated treatment time was filled out')
    }

    //Selecting Upper Arch check box 
    async selectUpperArch(): Promise<void> {
        Utils.selectCheckBox(this.upperCheckBox);
    }

    //Selecting Lower Arch check box
    async selectLowerArch(): Promise<void> {
        Utils.selectCheckBox(this.lowerCheckBox);
    }

    //Selecting Retainer Only value from Dropdown
    async selectUpperRetainer(): Promise<void> {
        Utils.selectDropdownValue(this.upperDropdown, this.retainerOnlyOption);
    }
    async selectLowerRetainer(): Promise<void> {
        Utils.selectDropdownValue(this.lowerDropdown, this.retainerOnlyOption);
    }

    //Selecting Bracket Removal option
    async selectBracketRemovalUpper(): Promise<void> {
        Utils.selectCheckBox(this.bracketRemovalCheckBoxUpper);
    }

    //Selecting Cover Lingual Bar option 
    async selectCoverLingualBar(): Promise<void> {
        Utils.selectCheckBox(this.coverLingualBarCheckBoxLower);
    }

    // Selecting 5-5 Teeth to Treat
    async select5to5TeethtoTreat(): Promise<void> {
        Utils.selectRadioButton(this.seletedTeeth_5to5);
    }

    // Selecting Correct Class correction option
    async selectCorrectClassCorection(): Promise<void> {
        Utils.selectRadioButton(this.correct_ClassCorrection);
    }

    // Selecting Maintain Midline correction option
    async selectMaintainMidlineCorrection(): Promise<void> {
        Utils.selectRadioButton(this.maintain_MidlineCorrection);
    }

    // Selecting Not Applicable Crosbite correction option
    async selectNotApplicableCrossbiteCorrection(): Promise<void> {
        Utils.selectRadioButton(this.notApplicable_CrossbiteCorrection);
    }


    //Selecting planning for restoration
    async selectPlanforRestoration(text: string): Promise<void> {
        Utils.selectRadioButton(this.yes_PlanningForRestoration);
        await this.planForRestorationTextField.fill(text);
    }
    async noPlanforRestoration(): Promise<void> {
        Utils.selectRadioButton(this.no_PlanningForRestoration);
    }


    //Selecting Crowding SmartRx Template
    async selectCrowdingTemplate(): Promise<void> {
        Utils.selectDropdownValue(this.smartRxTemplate_Dropdown, this.crowding_FormTemplate);
    }

    //Entering Template Instructions
    async fillTemplateInstructions(templateInstructions: string): Promise<void> {
        await this.crowding_Instructions.click();
        await this.crowding_Instructions.fill(templateInstructions);
    }

    //Entering Case Specific Instructions
    async fillCaseSpecificInstructions(instructions: string): Promise<void> {
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