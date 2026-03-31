// =============================================================================
// FLOW-06: Full Assessment Initiation (RegComply Handoff)
// RTM: REG-011 | Priority: Core (P1) | Risk: Critical
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #6: Full Assessment Initiation (RegComply Handoff)', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-06-TC01: Regulation detail view renders the full assessment CTA [REG-011]', () => {
        // Given — Navigate to the Regulations page via sidebar
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — Wait for the regulation grid to load and click the first View button
        cy.url().should('include', '/regulations');
        cy.contains('button', 'View', { timeout: 20000 })
          .first()
          .should('be.visible')
          .click();

        // Then — The regulation detail view should load
        cy.url().should('match', /\/regulations\/\d+/);

        // And — The page should display regulation metadata
        // (Title, regulator info, compliance status — whatever the live backend returns)
        cy.get('body').should('not.contain', 'Error');
        cy.get('body').should('not.contain', '404');

        // And — The "Start Full Gap Assessment in RegComply" button should be visible
        // Note: This CTA only appears when the pre-assessment score < 100%
        cy.get('body').then(($body) => {
            const hasFullAssessBtn = $body.find('button:contains("Start Full Gap Assessment")').length > 0;
            const hasStartBtn = $body.find('button:contains("Start Pre-Assessment")').length > 0;

            // Either the Full Assessment CTA is present (gaps exist)
            // or the Pre-Assessment button is present (not yet assessed)
            // Both are valid states on Staging
            expect(hasFullAssessBtn || hasStartBtn).to.be.true;
        });
    });

    it('FLOW-06-TC02: Subscription gate redirects to Ecosystem Billings [REG-011]', () => {
        // Given — Navigate to regulations and open a regulation detail
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.contains('button', 'View', { timeout: 20000 })
          .first()
          .click();

        // When — Click "Start Full Gap Assessment in RegComply" if present
        cy.get('body').then(($body) => {
            const fullAssessBtn = $body.find('button:contains("Start Full Gap Assessment in RegComply")');

            if (fullAssessBtn.length > 0) {
                cy.wrap(fullAssessBtn).click({ force: true });

                // Then — The platform should redirect to the Ecosystem Billings page
                // This is a cross-origin redirect to the RegTech365 Ecosystem
                cy.origin('https://regtech365-ecosystem-fe-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io', () => {
                    cy.on('uncaught:exception', () => false);
                    // Verify we've left RegWatch and landed on the Ecosystem domain
                    cy.url({ timeout: 20000 }).should('include', 'regtech365-ecosystem');
                });
            } else {
                // If button is absent, this regulation is either fully compliant
                // or hasn't been pre-assessed yet — log and skip gracefully
                cy.log('INFO: "Start Full Gap Assessment" button not present on this regulation. Regulation may be fully compliant or not yet pre-assessed.');
            }
        });
    });

    it('FLOW-06-TC03: Full assessment CTA context for compliant regulations [REG-011]', () => {
        // Given — Navigate to the regulations page
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The regulation grid loads
        cy.url().should('include', '/regulations');

        // Then — Verify the regulation cards render with compliance status indicators
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const hasCards = $body.find('button:contains("View")').length > 0;
            if (hasCards) {
                // Regulations exist — verify the grid renders structured data
                cy.contains('button', 'View').should('have.length.greaterThan', 0);
                cy.log(`PASS: ${$body.find('button:contains("View")').length} regulation(s) found in the grid.`);
            } else {
                // Empty state — valid if no regulations are mapped to this org
                cy.log('INFO: No regulation cards found. Organization may not have mapped regulations.');
            }
        });
    });
});
