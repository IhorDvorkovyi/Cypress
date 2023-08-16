// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addToCart', (article, item, product) => {
    cy.get('.top-menu > :nth-child(1) > a')
    cy.contains(article).click()
    if (item != 'skip') {
        cy.wait(2000)
        cy.contains(item).click({ force: true })
    }
    cy.contains(product).click({ force: true })
    cy.get('.overview input[value="Add to cart"]').click();
    cy.clickElement('.header-logo > a > img')

})

Cypress.Commands.add('clickElement', (selectors) => {
    cy.get(selectors).click()
})