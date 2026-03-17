// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Example of API JWT injection for E2E speed:
Cypress.Commands.add('loginByApi', (email, password) => {
    cy.request('POST', '/api/v1/auth/login', {
        email,
        password,
    }).then((response) => {
        window.localStorage.setItem('jwt', response.body.token);
    });
});

declare global {
    namespace Cypress {
        interface Chainable {
            loginByApi(email: string, password: string): Chainable<Element>;
        }
    }
}
export { };