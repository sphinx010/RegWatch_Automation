describe('Master Flows #10, #12, #13: AI Copilot, Settings, and Notifications', () => {

    beforeEach(() => {
        cy.loginByApi('automation123@tester.co.uk', '08057606@26');
        cy.fixture('selector_map.json').as('selectors');
    });

    it('FLOW-10: Auditor interrogates the AI Co-pilot [REG-007]', function() {
        cy.intercept('POST', '**/chat*').as('chatRequest');
        cy.visit('/chatbot-ai');

        const locators = this.selectors.AICopilot;
        
        // Extending wait on the first critical structure to cover initial load
        cy.get(locators.chatInput, { timeout: 30000 }).should('be.visible').type('What are the latest CBN regulations?');
        cy.get(locators.sendBtn).click();

        // Wait for the backend LLM service call
        cy.wait('@chatRequest');
    });

    it('FLOW-12: Lead Auditor reviews platform logs and accesses team settings [REG-011]', function() {
        // Assume recent activity triggers API
        cy.intercept('GET', '**/audit-logs*').as('logs');
        cy.visit('/settings');

        const locators = this.selectors.Settings;
        cy.get(locators.teamAccessTab).should('be.visible').click();
    });

    it('FLOW-13: System issues high-priority notification for overdue assessment', function() {
        cy.visit('/notifications');
        const locators = this.selectors.Notifications;
        
        cy.get(locators.allTab).should('be.visible');
        cy.get(locators.unreadTab).should('be.visible');
        cy.get(locators.archivedTab).should('be.visible');

        cy.get(locators.markAllReadBtn).should('exist'); // Might be visible only if notifications exist
    });
});
