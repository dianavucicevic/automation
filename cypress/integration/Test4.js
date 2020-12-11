/// <reference types="Cypress" />
describe('My Fourth Test Suite', function() 
{
 
it('My Fourth Test Case',function() {
 
//alert windows
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window:alert  
cy.on('window:alert', (str) => 
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//window:confirm
cy.on('window:confirm', (str) => 
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//attribute removal or child tab
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include', 'rahulshetty')  //.be or not.be-behaviour, .have-property
cy.go('back') //cy.go('forward')


}  )
}  )
