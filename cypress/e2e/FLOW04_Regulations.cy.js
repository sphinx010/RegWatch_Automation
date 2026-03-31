describe('Master Flow #4: Regulation Discovery', () => {

    beforeEach(() => {
        // Pre-stage determinism Mocks ahead of the Cross-Origin navigation sequence
        cy.intercept('GET', '**/regulation/search*', (req) => {
            let regulations = [
                { 
                    id: '1',
                    _id: '1', 
                    regulation_id: '1',
                    title: 'AML Baseline Rules Cash', 
                    regulator: { code: 'CBN', name: 'Central Bank of Nigeria' }, 
                    risk_level: 'High', 
                    compliance_status: { status: 'Not Started' },
                    dates: { issued_date: "2025-12-05T00:00:00.000Z" }
                },
                { 
                    id: '2',
                    _id: '2', 
                    regulation_id: '2',
                    title: 'Cash handling guidelines', 
                    regulator: { code: 'NDPC', name: 'National Data Protection Commission' }, 
                    risk_level: 'Medium', 
                    compliance_status: { status: 'In Progress' },
                    dates: { issued_date: "2025-12-05T00:00:00.000Z" }
                }
            ];

            if (req.url.includes('riskLevel=Medium')) {
                regulations = regulations.filter(r => r.risk_level === 'Medium');
            }

            req.reply({
                statusCode: 200,
                body: {
                    success: true,
                    message: "Regulations retrieved successfully",
                    data: regulations
                }
            });
        }).as('getRegulations');

        // Mock the individual regulation fetch when the user clicks 'View'
        cy.intercept('GET', '**/api/v1/regulation/2*', {
            statusCode: 200,
            body: {
                success: true,
                data: {
                    id: '2',
                    _id: '2',
                    regulation_id: '2',
                    title: 'Cash handling guidelines',
                    regulator: { code: 'NDPC', name: 'National Data Protection Commission' },
                    risk_level: 'Medium',
                    compliance_status: { status: 'In Progress' }
                }
            }
        });

        // Execute explicit manual Ecosystem traversal and token routing
        cy.loginByApi();

        cy.fixture('selector_map.json').as('selectors');

        // Navigate internally using UI to prevent cross-origin session drops after token handoff
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]').first().click({ force: true });
    });

    it('Scenario: Compliance Analyst filters regulations by keyword and risk level [REG-005]', function () {
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
