/// <reference types="Cypress" />
describe('My first test suite', function () {
  it('My first test case', function () {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function () //pretraga proizvoda po indexu
    {
      console.log("test") //log u konzoli, nije cypress komanda, pa mora then pre toga
    })

    cy.get('.products').find('.product').each(($el, index, $list) => { // pretraga proizvoda po nazivu

      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')) {
        $el.find('button').click()
      }
    })
    cy.get('.brand').should('have.text', 'GREENKART')//provera da li je tekst tacan

    //log u cypressu
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text())
    })
    //const logo=cy.get('.brand')
  })
}) 