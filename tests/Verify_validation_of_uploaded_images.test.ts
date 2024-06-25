import{expect, test } from "@playwright/test";
import { LoginPage } from "../src/Pages/LoginPage";
import { AddNewPatient } from "../src/Pages/AddNewPatientPage";
import { PhotographsPage } from "../src/Pages/PhotographPage";
import { ScansPage } from "../src/Pages/ScansPage";
import { XraysPage } from "../src/Pages/XraysPage";
import { PatientListPage } from "../src/Pages/PatientListPage";
import { Utils } from "../src/Utils/Utils";
import {clickBackButton, clickNextButton } from "../src/Utils/ElementUtil";


test("Validate alert message without uploadeding images/scans for patient creation", async ({page}) => {
    test.slow();
    //test.setTimeout(200000);
    const pages:any [] = [];
    pages.push(new LoginPage(page), new ScansPage(page), new AddNewPatient(page), 
    new PatientListPage(page), new PhotographsPage(page), new XraysPage(page));
    const[login_page,scans_page,addnewpatient_page,patientlist_page,photographs_page,xrays_page] = pages;


    await Utils.launchURL(process.env.BASE, page);
    await login_page.login(process.env.Email,process.env.Password);
    await patientlist_page.clickAddNewPatientButton();
    await addnewpatient_page.addPatient("test","123","11","12","1988","US SQA_Ortho","test",);
    await clickNextButton(page);
    await clickNextButton(page);
    await clickNextButton(page);
    const scanerrorMessage = await xrays_page.returnScansValidationMessage();
    await expect.soft(scanerrorMessage).toBe('One scan is required');
    const photoerrorMessage = await xrays_page.returnPhotographValidationMessage();
    await expect.soft(photoerrorMessage).toBe('One photograph is required');
    const panoerrorMessage = await xrays_page.returnPanoValidationMessage();
    await expect.soft(panoerrorMessage).toBe('Pano is required');
    await clickBackButton(page);
    await clickBackButton(page);
    await scans_page.uploadUpperStlFile();
    await page.waitForLoadState();
    await page.waitForTimeout(12000);
    await scans_page.uploadLowerStlFile();
    await page.waitForLoadState();
    await page.waitForTimeout(5000);
    await clickNextButton(page);
    await clickNextButton(page);
    await clickNextButton(page);
    //await expect.soft(await xrays_page.returnScansValidationMessage()).toBe('One scan is required');
    await expect.soft(await xrays_page.returnPhotographValidationMessage()).toBe('One photograph is required');
    await expect.soft(await xrays_page.returnPanoValidationMessage()).toBe('Pano is required');
    await clickBackButton(page);
    await photographs_page.uploadCompositeImageFile();
    await clickNextButton(page);
    await clickNextButton(page);
    await expect.soft(await xrays_page.returnPanoValidationMessage()).toBe('Pano is required');
    page.close();
    })