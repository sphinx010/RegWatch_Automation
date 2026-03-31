describe('Debug Dashboard API', () => {
    it('Logs the real dashboard summary response', () => {
        cy.loginByApi();
        cy.visit('/dashboard');
        cy.intercept('GET', '**/dashboard/summary*').as('realSummary');
        cy.wait('@realSummary', { timeout: 30000 }).then((interception) => {
            cy.log('REAL SUMMARY RESPONSE:', JSON.stringify(interception.response.body));
            console.log('REAL SUMMARY RESPONSE:', interception.response.body);
        });
    });
});
