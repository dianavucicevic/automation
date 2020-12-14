/// <reference types="Cypress" />
///<reference types="cypress-iframe" /> 

//ovo se mora ubaciti kad se radi sa frameovima

describe('My eighth test suite', function () {
    it('My eighth test case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //frames
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})