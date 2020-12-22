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
        cy.visit(Cypress.env('url')) //+"//AutomationPractice/" 
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

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
            
        }).then(function()
        {
            cy.log(sum)
        })


        cy.get('h3 strong').then(function(element)
        {
           const amount= element.text()
           var res=amount.split(" ")
           var total = res[1].trim()
           expect(Number(total)).to.equal(sum)

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait(8000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox').click()
        cy.get('input[type="submit"]').click()

        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).') - have.text poredi ceo text

        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })




    })
})