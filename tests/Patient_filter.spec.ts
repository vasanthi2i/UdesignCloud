import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/Pages/LoginPage";
import { Utils } from "../src/Utils/Utils";
import { PatientListPage } from "../src/Pages/PatientListPage";

test("Verify doctor is able to filter patient list by status", async ({ page }) => {
    test.setTimeout(200000);
    const pages: any[] = [];
    pages.push(new LoginPage(page), new PatientListPage(page));
    const [login_page, patientList_page] = pages;

    await Utils.launchURL(process.env.BASE, page);
    await login_page.login(process.env.Email, process.env.Password);
    await patientList_page.filterByStatus();

    const filter_label = await patientList_page.filterLabelConfirmation();
    await expect(filter_label).toBe('Fill Out Rx Form');
    console.log('Patient List were filtered out with Fillout Rx form : ' + filter_label);
})