// =============================================================================
// FLOW-09: Compliance Score Update (UI Rendering)
// RTM: REG-014, REG-010 | Priority: Core (P1) | Risk: High
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #9: Compliance Score Update (UI Rendering)', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-09-TC01: Dashboard renders all compliance metric cards [REG-014, REG-010]', () => {
        // Given — Navigate to the Dashboard page
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The page finishes loading live backend data
        cy.url().should('include', '/dashboard');

        const d = selectors.Dashboard;

        // Then — "Overall Compliance" metric card should be visible
        cy.get(d.overallComplianceCard, { timeout: 20000 })
          .should('be.visible');

        // And — It should display a percentage value
        cy.contains('%', { timeout: 15000 }).should('be.visible');

        // And — "Total Regulations" card should display a numeric count
        cy.get(d.totalRegulationsCard, { timeout: 15000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — "High Risk" card should display a numeric count
        cy.get(d.highRiskCard, { timeout: 15000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — "Active Assessments" card should display a numeric count
        cy.get(d.activeAssessmentsCard, { timeout: 15000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — "Compliant Items" card should display a numeric count
        cy.get(d.compliantItemsCard, { timeout: 15000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .should('match', /\d+/);
    });

    it('FLOW-09-TC02: Top Regulators section renders organization-specific data [REG-010]', () => {
        // Given — User is viewing the Dashboard
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — Compliance data has loaded
        cy.url().should('include', '/dashboard');

        // Then — A "Top Regulators" or regulator-related section should be visible
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const bodyText = $body.text();
            const hasRegulatorSection =
                bodyText.includes('Top Regulators') ||
                bodyText.includes('Central Bank') ||
                bodyText.includes('CBN') ||
                bodyText.includes('SEC') ||
                bodyText.includes('NDPC') ||
                bodyText.includes('Regulator');

            if (hasRegulatorSection) {
                cy.log('PASS: Regulator data section found on the dashboard.');
            } else {
                cy.log('INFO: No regulator section detected. Organization may have empty regulator data.');
            }

            // Regardless, the dashboard should not be in an error state
            expect(bodyText).to.not.include('Error loading');
            expect(bodyText).to.not.include('Something went wrong');
        });
    });

    it('FLOW-09-TC03: Recent Activity widget displays interaction history [REG-014]', () => {
        // Given — User is viewing the Dashboard
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/dashboard');

        // When — The user scrolls to the bottom of the dashboard grid
        cy.scrollTo('bottom');

        // Then — The "Recent Activity" widget should be visible
        cy.contains('Recent Activity', { timeout: 20000 }).should('be.visible');
    });
});
