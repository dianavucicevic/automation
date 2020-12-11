/// <reference types="Cypress" />
describe('My Fifth Test Suite', function () {

  it('My fifth test case', function () {


      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
      
      cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

          const text = $e1.text()

          if (text.includes("Python")) {
              cy.get('tr td:nth-child(2)')
                  .eq(index)
                  .next() //next moze samo ako je get pre toga
                  //.contains('25')
                  //.should('contain', '25')
                  //.should('have.text'.'25')
                  //.then(function(price)
                       //{
                       // const priceText= price.text()
                       // expect(priceText).to.equal('26')
                       // })
                  .then(function (price) //eq(index), da ne bi pisali broj indexa, izvlaci se index na osnovu toga gde se nalazi text python
                  {
                     const priceText = price.text()
                     expect(priceText).to.equal('25')
                  })
          }
      })


  })
})
