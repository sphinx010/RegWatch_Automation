describe('Master Flow #4: Regulation Discovery', () => {

    beforeEach(() => {
        // Pre-stage determinism Mocks ahead of the Cross-Origin navigation sequence
        cy.intercept('GET', '**/regulations*', {
            statusCode: 200,
            body: [
                { id: 1, title: 'AML Baseline Rules Cash', regulator: 'CBN', risk: 'High', status: 'Not Started' },
                { id: 2, title: 'Cash handling guidelines', regulator: 'NDPC', risk: 'Medium', status: 'In Progress' }
            ]
        }).as('getRegulations');

        // Execute explicit manual Ecosystem traversal and token routing
        cy.loginByApi('automation123@tester.co.uk', '08057606@26');
        
        cy.fixture('selector_map.json').as('selectors');
        
        // Safely navigate internally now that cookies are resolved and secured in the client domain!
        cy.visit('/regulations-page'); 
    });

    it('Scenario: Compliance Analyst filters regulations by keyword and risk level [REG-005]', function() {
        const locators = this.selectors.Regulations;

        cy.url().should('include', '/regulations-page');
        cy.wait('@getRegulations'); // Initial load buffer

        cy.get(locators.searchBar).should('be.visible').type('Cash');
        cy.wait('@getRegulations'); 

        cy.get(locators.riskFilter).should('be.visible').select('Medium');
        cy.wait('@getRegulations');

        cy.get(locators.regulationCard).should('have.length.greaterThan', 0);
        cy.get(locators.regulationCard).first().should('contain', 'Medium').and('contain', 'Cash handling');

        cy.contains('Medium', { matchCase: false }).should('be.visible');

        cy.contains('button', 'View').first().click();

        cy.url().should('include', '/regulations/');
        cy.contains('Cash handling guidelines').should('be.visible');
    });

});
