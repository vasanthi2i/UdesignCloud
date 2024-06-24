import{expect, test } from "@playwright/test";
import{ LoginPage } from "../src/Pages/LoginPage";
import { Utils } from "../src/Utils/Utils";
import { PatientListPage } from "../src/Pages/PatientListPage";
import{ PatientOverviewPage } from "../src/Pages/PatientOverviewPage";
import { PatientEditPage } from "../src/Pages/PatientEditPage";

test ("Verify doctor is able to archive existing patient", async ({page}) => {
    test.setTimeout(200000);
    const pages:any [] = [];
    pages.push(new LoginPage(page), new PatientListPage(page), new PatientOverviewPage(page),
     new PatientEditPage(page));
    const[login_page,patientList_page,patientoverview_page,patientedit_page] = pages;

    await Utils.launchURL(process.env.BASE, page);
    await login_page.login(process.env.Email,process.env.Password);
    await patientList_page.selectingPatient("Test");
    await patientoverview_page.clickEditButton();
    await patientedit_page.clickArchiveButton();
    
    const toaster_message = await patientedit_page.archiveConfirmationText();
    await expect(toaster_message).toBe('Patient Archived successfully');
    console.log('Confirmation message: ' +toaster_message);
})