import{expect, test } from "@playwright/test";
import { LoginPage } from "../src/Pages/LoginPage";
import { ScansPage } from "../src/Pages/ScansPage";
import { Utils } from "../src/Utils/Utils";
import { AddNewPatient } from "../src/Pages/AddNewPatientPage";
import { PatientOverviewPage } from "../src/Pages/PatientOverviewPage";
import { PhotographsPage } from "../src/Pages/PhotographPage";
import { XraysPage } from "../src/Pages/XraysPage";
import { DentalChartPage } from "../src/Pages/DentalChartPage";
import { OrdertypePage } from "../src/Pages/OrdertypePage";
import { Prescriptionpage } from "../src/Pages/Prescriptionpage";
import {SummaryPage} from "../src/Pages/SummaryPage";
import { UassistOrderConfirmationPage } from "../src/Pages/UassistOrderConfirmationPage";
import { TemplatePage } from "../src/Pages/TemplatePage";



test("Verify uassist case can be created for a new case", async ({page, request}) => {

    //test.slow();
    test.setTimeout(200000);
    const pages:any [] = [];
    pages.push(new LoginPage(page), new ScansPage(page), new AddNewPatient(page), 
    new PatientOverviewPage(page), new PhotographsPage(page), new XraysPage(page),
    new DentalChartPage(page), new OrdertypePage(page), new Prescriptionpage(page),
    new SummaryPage(page), new UassistOrderConfirmationPage(page), new TemplatePage(page));
    const[login_page,scans_page,addnewpatient_page,patientoverview_page,photographs_page,xrays_page,
        dentalchart_page,ordertype_page,prescription_page,summary_page,uassist_order_page,
        template_page] = pages;

    await Utils.launchURL(process.env.BASE, page);
    await login_page.login(process.env.Email,process.env.Password);
    await page.waitForTimeout(7000);
    await patientoverview_page.clickAddNewPatientButton();
    await addnewpatient_page.addPatient("test","123","11","12","1988","US SQA_Ortho","test",);
    await page.waitForTimeout(12000);
    await page.waitForLoadState();
    await scans_page.uploadUpperStlFile();
    await page.waitForLoadState();
    //await page.waitForTimeout(12000);
    await scans_page.uploadLowerStlFile();
    await page.waitForLoadState();
    await page.waitForTimeout(5000);
    await scans_page.clickNextButtonOnScansPage(page);
    await page.waitForTimeout(5000);
    await photographs_page.uploadCompositeImageFile();
    await page.waitForTimeout(5000);
    await photographs_page.clickNextButtonOnPhotographsPage();
    await page.waitForTimeout(5000);
    await xrays_page.uploadPanoImageFile();
    await page.waitForTimeout(5000);
    await xrays_page.clickNextButtonOnXraysPage();
    await page.waitForTimeout(3000);
    await dentalchart_page.clickNextButtonOnDentalChartPage();
    await page.waitForTimeout(2000);
    await ordertype_page.clickAlignerandRetainerOrderType();
    await page.waitForTimeout(3000);
    await prescription_page.fillEstimatedTreatmentTime("3");
    await prescription_page.selectUpperArch();
    //this.selectLowerArch();
    //this.selectBracketRemovalUpper();
    await prescription_page.select5to5TeethtoTreat();
    await prescription_page.selectCorrectClassCorection();
    await prescription_page.selectMaintainMidlineCorrection();
    await prescription_page.selectNotApplicableCrossbiteCorrection();
    await prescription_page.noPlanforRestoration();
    await prescription_page.selectCrowdingTemplate();
    await page.waitForTimeout(5000);
    await prescription_page.clickEditTemplateButton();
    await page.waitForTimeout(5000);
    await template_page.clickSaveForThisCase();
    await page.waitForTimeout(5000);
    await prescription_page.fillCaseSpecificInstructions("test123");
    await page.waitForTimeout(5000);
    await prescription_page.fillTemplateInstructions("test123");
    await prescription_page.clickNextButton();
    await page.waitForTimeout(5000);
    await summary_page.clickSubmitButton();
    await page.waitForTimeout(8000);

    const submit_message = await uassist_order_page.uassistOrderConfirmationText();
    await expect(submit_message).toBe('Thank you for submitting your case to uAssist');
    console.log('Confirmation message: ' +submit_message);

})