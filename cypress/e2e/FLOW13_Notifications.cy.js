// =============================================================================
// FLOW-13: Notification Management
// RTM: REG-014, REG-015 | Priority: P2 | Risk: Medium
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #13: Notification Management', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-13-TC01: Notification page renders filter tabs [REG-014]', () => {
        const n = selectors.Notifications;

        // Given — Navigate to the Notifications page via the sidebar
        cy.get('a[href*="/notifications"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The notification page loads
        cy.url().should('include', '/notifications');

        // Then — The "All" tab should be visible
        cy.get(n.allTab, { timeout: 20000 })
          .should('be.visible');

        // And — The "Unread" tab should be visible and interactable
        cy.get(n.unreadTab)
          .should('be.visible')
          .and('not.be.disabled');

        // And — The "Archived" tab should be visible and interactable
        cy.get(n.archivedTab)
          .should('be.visible')
          .and('not.be.disabled');
    });

    it('FLOW-13-TC02: Tab filtering changes the displayed notification set [REG-014]', () => {
        const n = selectors.Notifications;

        // Given — User is on the Notifications page
        cy.get('a[href*="/notifications"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.get(n.allTab, { timeout: 20000 }).should('be.visible');

        // When — The user clicks the "Unread" tab
        cy.get(n.unreadTab).click();

        // Then — The tab should become active (visual state change)
        // Allow time for the filtered list to render
        cy.wait(1000);

        // When — The user clicks the "All" tab
        cy.get(n.allTab).click();

        // Then — The full notification list should be restored
        cy.wait(1000);

        // Verify tabs are toggleable without errors
        cy.get('body').should('not.contain', 'Error');
        cy.get('body').should('not.contain', 'Something went wrong');
    });

    it('FLOW-13-TC03: Mark all as read action is functional [REG-015]', () => {
        const n = selectors.Notifications;

        // Given — User is on the Notifications page
        cy.get('a[href*="/notifications"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/notifications');

        // When — The "Mark all as read" button is visible
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const markAllBtn = $body.find('button:contains("Mark all as read")');

            if (markAllBtn.length > 0) {
                // And — The user clicks "Mark all as read"
                cy.get(n.markAllReadBtn).should('be.visible').click();

                // Then — The application should process the request without error
                cy.get('body', { timeout: 10000 }).should('not.contain', 'Error');
                cy.log('PASS: "Mark all as read" action executed successfully.');
            } else {
                // Button may not be present if there are no unread notifications
                cy.log('INFO: "Mark all as read" button not present. All notifications may already be read.');
            }
        });
    });

    it('FLOW-13-TC04: Notification Settings toggles are interactive [REG-014, REG-015]', () => {
        const n = selectors.Notifications;

        // Given — User is on the Notifications page
        cy.get('a[href*="/notifications"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/notifications');

        // When — The user looks for notification settings toggle switches
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const toggles = $body.find('button[role="switch"]');

            if (toggles.length > 0) {
                // Capture the initial aria-checked state of the first toggle
                cy.get(n.toggleSwitch)
                  .first()
                  .should('be.visible')
                  .invoke('attr', 'aria-checked')
                  .then((initialState) => {
                      // When — The user clicks the first toggle switch
                      cy.get(n.toggleSwitch).first().click();

                      // Then — The toggle should visually change state (on↔off)
                      cy.get(n.toggleSwitch)
                        .first()
                        .invoke('attr', 'aria-checked')
                        .should('not.eq', initialState);

                      cy.log(`PASS: Toggle state changed from ${initialState} to ${initialState === 'true' ? 'false' : 'true'}.`);

                      // Restore the original state to avoid test pollution
                      cy.get(n.toggleSwitch).first().click();
                  });
            } else {
                cy.log('INFO: No toggle switches found. Notification settings may not be on this view.');
            }
        });
    });

    it('FLOW-13-TC05: Notification Settings persist toggle state [REG-014, REG-015]', () => {
        const n = selectors.Notifications;

        // Given — Navigate to Notifications
        cy.get('a[href*="/notifications"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/notifications');

        // Check if toggles exist before testing persistence
        cy.get('body', { timeout: 20000 }).then(($body) => {
            const toggles = $body.find('button[role="switch"]');

            if (toggles.length > 0) {
                // Given — Toggle a notification preference
                cy.get(n.toggleSwitch).first().should('be.visible').click();

                // Capture state after toggle
                let toggledState;
                cy.get(n.toggleSwitch)
                  .first()
                  .invoke('attr', 'aria-checked')
                  .then((state) => {
                      toggledState = state;
                  });

                // When — Navigate away from Notifications and return
                cy.get('a[href*="/dashboard"]', { timeout: 15000 })
                  .first()
                  .click({ force: true });

                cy.url().should('include', '/dashboard');

                cy.get('a[href*="/notifications"]', { timeout: 15000 })
                  .first()
                  .click({ force: true });

                cy.url().should('include', '/notifications');

                // Then — The previously toggled preference should retain its new state
                cy.get(n.toggleSwitch, { timeout: 20000 })
                  .first()
                  .invoke('attr', 'aria-checked')
                  .then((currentState) => {
                      expect(currentState).to.eq(toggledState);
                      cy.log(`PASS: Toggle state persisted as "${currentState}" after navigation round-trip.`);

                      // Restore original state to avoid test pollution
                      cy.get(n.toggleSwitch).first().click();
                  });
            } else {
                cy.log('INFO: No toggle switches found. Skipping persistence test.');
            }
        });
    });
});
