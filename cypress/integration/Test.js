/// <reference types="Cypress" />
describe('My Test Suite', function () {
    it('My Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000) //seconds multiply with 1000
        cy.get('.product:visible').should('have.length', 4)

        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()


        //text search 20
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })

        //21
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
        cy.get('.cart-icon > img').click()

        //checkboxes//////////////////////////////////////////////////////////

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])  // vise checkboxova odjednom


        //static dropdown

        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')


        // hidden and visible elements 

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert  
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //attribute removal or child tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshetty')  //.be or not.be-behaviour, .have-property
        cy.go('back') //cy.go('forward')


        //mouse hover


        //cy.get('#mousehover').invoke('show') -  ne radi 
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

    })





})