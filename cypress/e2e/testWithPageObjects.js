import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage"

describe("Test with Pag Objects", () => {

beforeEach('open applicatoin', ()  => {
    cy.visit('/')
})

it.only('verify navigation between pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
    navigateTo.toasterPage()
})
    
})