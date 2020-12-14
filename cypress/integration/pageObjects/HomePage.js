class HomePage {
    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('select')
    }

    getEntrepeneaur() {
        return cy.get('#inlineRadio3')
    }
}
export default HomePage;