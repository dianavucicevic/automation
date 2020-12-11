/// <reference types="Cypress" />
describe('My Sixth Test Suite', function () {

  it('My sixth test case', function () {


      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
      //cy.get('div.mouse-over-content').invoke('show')
      cy.contains('Top').click({force: true})
      cy.url().should('include','top')

      
  })
})
