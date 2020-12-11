/// <reference types="Cypress" />

describe('My ninth test suite', function () {
    before(function () {
        //runs once before all the tests in the block
        cy.fixture('testdata').then(function (data) { //how to use fixtures file

            this.data = data //this keyword refers to the object it belongs to

        })
    })
    it('My ninth test case', function () {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //two way data binding example
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        //checking the minimal character requirement, prop() can also be used
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        //checking if the element is disabled
        cy.get('#inlineRadio3').should('be.disabled')

        //adding commands
        cy.get(':nth-child(2) > .nav-link').click()

        cy.selectProduct('Blackberry')

    })
})