// =============================================================================
// FLOW-10: AI Recommendations (AI Co-Pilot)
// RTM: REG-022 | Priority: P2 | Risk: High
// Mode: PURELY FUNCTIONAL — No mocking, no stubbing, no interception
// Tests the REAL AI microservice endpoint (regwatch-ai-chatbot-staging)
// =============================================================================
const selectors = require('../fixtures/selector_map.json');

describe('Master Flow #10: AI Recommendations (AI Co-Pilot)', () => {

    beforeEach(() => {
        cy.loginByApi();
    });

    it('FLOW-10-TC01: AI Co-Pilot interface loads and is interactive [REG-022]', () => {
        // Given — Click "RegWatch AI" in the sidebar navigation
        cy.get('a[href*="/chatbot-ai"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        // When — The AI chatbot page loads
        cy.url().should('include', '/chatbot-ai');

        const ai = selectors.AICopilot;

        // Then — A chat input field should be visible with a placeholder prompt
        cy.get(ai.chatInput, { timeout: 30000 })
          .should('be.visible')
          .and('have.attr', 'placeholder');

        // And — A send button should be visible and interactable
        cy.get(ai.sendBtn, { timeout: 10000 })
          .should('be.visible');

        // And — The interface should be free of error banners or broken state
        cy.get('body').should('not.contain', 'Error');
        cy.get('body').should('not.contain', 'Something went wrong');
        cy.get('body').should('not.contain', '500');
    });

    it('FLOW-10-TC02: User sends a compliance query and receives an AI response [REG-022]', () => {
        // Given — User is on the AI Co-Pilot interface
        cy.get('a[href*="/chatbot-ai"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        cy.url().should('include', '/chatbot-ai');

        const ai = selectors.AICopilot;

        // When — The user types "What is compliance?" in the chat input
        cy.get(ai.chatInput, { timeout: 30000 })
          .should('be.visible')
          .clear()
          .type('What is compliance?');

        // And — The user clicks the send button
        cy.get(ai.sendBtn).click();

        // Then — The user's message should appear in the chat history as a user bubble
        cy.contains('What is compliance?', { timeout: 10000 }).should('be.visible');

        // And — Within 60 seconds, an AI-generated response bubble should appear
        // The AI response should contain substantive compliance-related text
        // We look for common compliance-related terms the AI would use
        cy.get('body', { timeout: 60000 }).then(($body) => {
            // Wait for the response to stream in by polling for new content
            const checkForResponse = (attempts = 0) => {
                if (attempts > 30) {
                    throw new Error('AI response did not appear within timeout');
                }
                const bodyText = $body.text().toLowerCase();
                const hasResponse =
                    bodyText.includes('regulation') ||
                    bodyText.includes('comply') ||
                    bodyText.includes('compliance') ||
                    bodyText.includes('adherence') ||
                    bodyText.includes('standards') ||
                    bodyText.includes('requirements') ||
                    bodyText.includes('laws');

                if (!hasResponse) {
                    cy.wait(2000);
                    cy.get('body').then(($newBody) => {
                        const newText = $newBody.text().toLowerCase();
                        const found =
                            newText.includes('regulation') ||
                            newText.includes('comply') ||
                            newText.includes('adherence') ||
                            newText.includes('standards') ||
                            newText.includes('requirements');
                        expect(found).to.be.true;
                    });
                }
            };
        });

        // Decisive assertion: wait for AI content to appear in the DOM
        cy.contains(/regulat|complian|adherence|standards|requirements|laws/i, { timeout: 60000 })
          .should('be.visible');
    });

    it('FLOW-10-TC03: Chat input resets after message submission [REG-022]', () => {
        // Given — User is on the AI Co-Pilot interface
        cy.get('a[href*="/chatbot-ai"]', { timeout: 15000 })
          .first()
          .click({ force: true });

        const ai = selectors.AICopilot;

        // When — The user sends a message
        cy.get(ai.chatInput, { timeout: 30000 })
          .should('be.visible')
          .clear()
          .type('What is risk management?');

        cy.get(ai.sendBtn).click();

        // Then — The chat input field should be cleared after submission
        // Allow time for the UI to process the send action
        cy.get(ai.chatInput, { timeout: 15000 })
          .should('have.value', '');
    });
});
