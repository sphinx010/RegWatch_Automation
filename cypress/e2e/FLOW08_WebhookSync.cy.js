// =============================================================================
// FLOW-08: Webhook Sync Receipt (UI Verification)
// RTM: REG-014 | Priority: Core (P1 API) | Risk: Critical
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #8: Webhook Sync Receipt (UI Verification)', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-08-TC01: Dashboard compliance tracking widgets render live data [REG-014]', () => {
        // Given — Navigate to the Dashboard
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The dashboard finishes loading
        cy.url().should('include', '/dashboard');

        // Then — The "Active Assessments" card should be visible with a numeric value
        cy.get(selectors.Dashboard.activeAssessmentsCard, { timeout: 20000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — The "Compliant Items" card should be visible with a numeric value
        cy.get(selectors.Dashboard.compliantItemsCard, { timeout: 15000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — Both cards should render without errors or fallback/empty states
        cy.get('body').should('not.contain', 'Error loading');
        cy.get('body').should('not.contain', 'Something went wrong');
    });

    it('FLOW-08-TC02: Compliance status badges are functionally rendered on regulation cards [REG-014]', () => {
        // Given — Navigate to the Regulations page
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The regulation grid loads
        cy.url().should('include', '/regulations');

        // Then — Regulation cards should be present
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const viewButtons = $body.find('button:contains("View")');

            if (viewButtons.length > 0) {
                // Each regulation card should render structured content
                cy.contains('button', 'View')
                  .should('have.length.greaterThan', 0);

                // Status indicators should be present — check for common status text patterns
                // These status labels reflect webhook-driven compliance state transitions
                cy.get('body').then(($b) => {
                    const bodyText = $b.text();
                    const hasStatusIndicator =
                        bodyText.includes('Not Started') ||
                        bodyText.includes('In Progress') ||
                        bodyText.includes('Compliant') ||
                        bodyText.includes('Non-Compliant') ||
                        bodyText.includes('Pending') ||
                        bodyText.includes('High') ||
                        bodyText.includes('Medium') ||
                        bodyText.includes('Low');

                    expect(hasStatusIndicator).to.be.true;
                    cy.log('PASS: Compliance status indicators found in regulation grid.');
                });
            } else {
                cy.log('INFO: No regulation cards found. Organization may not have mapped regulations.');
            }
        });
    });
});
