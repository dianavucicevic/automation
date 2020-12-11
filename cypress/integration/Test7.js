/// <reference types="Cypress" />
describe('My Seventh Test Suite', function () {

  it('My seventh test case', function () {


      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#opentab').then(function(el){
          const url = el.prop('href')
          cy.visit(url) // ovaj test nece raditi zato sto url nije rahulshetty.com/something, 
          //mora biti isti domain
          

      })
      
      
  })
})