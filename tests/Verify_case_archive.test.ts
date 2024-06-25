import test from "playwright/test";
import { AddNewPatient } from "../src/Pages/AddNewPatientPage";
import { LoginPage } from "../src/Pages/LoginPage";
import { PatientListPage } from "../src/Pages/PatientListPage";
import { PhotographsPage } from "../src/Pages/PhotographPage";
import { ScansPage } from "../src/Pages/ScansPage";
import { XraysPage } from "../src/Pages/XraysPage";
import { Utils } from "../src/Utils/Utils";

test ("Verify archive a case", async ({page}) => {
    test.slow();
    //test.setTimeout(200000);
    const pages:any [] = [];
    pages.push(new LoginPage(page),new PatientListPage(page));
    const[login_page,patientList_page,] = pages;
    
    await Utils.launchURL(process.env.BASE, page);
    await login_page.login(process.env.Email,process.env.Password);
    await patientList_page.selectingPatient("589105");
    await patientList_page.clickCaseMenuOptionsIcon(589105);
    await patientList_page.clickCaseArchiveButton();
    await patientList_page.clickArchiveCaseButton();
})
