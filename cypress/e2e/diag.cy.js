describe('Diagnostic Test', () => {
    it('Should log a message', () => {
        cy.log('Cypress is running');
        cy.visit('https://example.com');
        cy.contains('Example Domain').should('be.visible');
    });
});
