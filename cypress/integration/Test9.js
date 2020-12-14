/// <reference types="Cypress" />
import HomePage from './pageObjects/HomePage'
import Products from './pageObjects/Products'

describe('My ninth test suite', function () {
    before(function () {
        //runs once before all the tests in the block
        cy.fixture('testdata').then(function (data) { //how to use fixtures file

            this.data = data //this keyword refers to the object it belongs to

        })
    })
    it('My ninth test case', function () {
        const homePage = new HomePage()
        const products = new Products()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        homePage.getEditBox().type(this.data.name)
        //cy.get('select').select(this.data.gender)
        homePage.getGender().select(this.data.gender)

        //two way data binding example

        //cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        //checking the minimal character requirement, prop() can also be used

        //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        homePage.getEditBox().should('have.attr', 'minlength', '2')

        //checking if the element is disabled

        //cy.get('#inlineRadio3').should('be.disabled')
        homePage.getEntrepeneaur().should('be.disabled')

        cy.pause()

        //adding commands

        cy.get(':nth-child(2) > .nav-link').click().debug()
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')

        //test data if there are more products

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        products.checkOutButton().click()




    })
})