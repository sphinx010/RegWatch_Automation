// =============================================================================
// FLOW-07: Task Generation in RegComply (UI Verification)
// RTM: REG-013 | Priority: P2 | Risk: Critical
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #7: Task Generation in RegComply (UI Verification)', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-07-TC01: Dashboard reflects assessment tracking indicators [REG-013]', () => {
        // Given — Navigate to the Dashboard page
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The dashboard finishes loading live data from the backend
        cy.url().should('include', '/dashboard');

        // Then — The "Active Assessments" metric card should be visible
        cy.get(selectors.Dashboard.activeAssessmentsCard, { timeout: 20000 })
          .should('be.visible');

        // And — The card should display a numeric count (zero or greater)
        cy.get(selectors.Dashboard.activeAssessmentsCard)
          .parent()
          .invoke('text')
          .should('match', /\d+/);

        // And — The dashboard heading should be visible
        cy.contains(/Dashboard/i, { timeout: 10000 }).should('be.visible');
    });

    it('FLOW-07-TC02: Assessment tracking state is consistent across navigation [REG-013]', () => {
        let initialCount;

        // Given — User is on the Dashboard and observes the "Active Assessments" count
        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.get(selectors.Dashboard.activeAssessmentsCard, { timeout: 20000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .then((text) => {
              initialCount = text.trim();
          });

        // When — The user navigates away to "Regulations" and back to "Dashboard"
        cy.get('a[href*="/regulations-page"], a[href*="/regulations"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/regulations');

        cy.get('a[href*="/dashboard"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // Then — The "Active Assessments" count should remain consistent
        cy.get(selectors.Dashboard.activeAssessmentsCard, { timeout: 20000 })
          .should('be.visible')
          .parent()
          .invoke('text')
          .then((text) => {
              expect(text.trim()).to.eq(initialCount);
          });
    });
});
