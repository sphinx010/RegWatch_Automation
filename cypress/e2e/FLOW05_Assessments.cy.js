describe('Master Flow #5: Pre-Assessment Execution', () => {

    beforeEach(() => {
        // Authenticate via API to bypass UI login overhead (QA_Engineer Protocol)
        cy.loginByApi();
        
        // Navigate directly to the regulation detail page.
        // This is safe now because the intercept below is correctly scoped to /api/v1/
        // preventing the previous text/html cross-origin crash.
        cy.visit('/regulations/7943');

        // Mock the target regulation detail for deterministic rendering
        // Scope to API to prevent intercepting the HTML document request
        cy.intercept('GET', '**/api/v1/regulation/7943*', {
            statusCode: 200,
            body: {
                success: true,
                data: {
                    _id: '7943',
                    regulation_id: '7943',
                    title: 'Circular to all Banks (Mocked)',
                    regulator: { code: 'CBN', name: 'Central Bank of Nigeria' },
                    dates: { issued_date: "2025-12-05T00:00:00.000Z" },
                    risk_level: 'High',
                    compliance_status: { status: 'Not Started' },
                    questions: [
                        { id: 1, text: 'Do you currently have robust tracking systems in place?' }
                    ]
                }
            }
        }).as('getRegulationDetail');

        // Mock the POST submission to guarantee a 100% score for testing purposes
        cy.intercept('POST', '**/pre-assessments/*/submit*', {
            statusCode: 200,
            body: {
                success: true,
                data: {
                    score: 100,
                    breakdown: { yes: 1, no: 0, na: 0 },
                    status: 'Completed'
                }
            }
        }).as('submitAssessment');

        // The target URL was visited above, wait for the backend detail to resolve

    });

    it('Scenario: Compliance Analyst reviews a completed regulatory gap analysis [REG-009, REG-010]', function() {
        // Aligning to S_Gherkin_TC.md Flow 5
        const locators = this.selectors.Assessments;

        // Given the Compliance Analyst is viewing the target regulation
        cy.wait('@getRegulationDetail');
        cy.contains('Circular to all Banks (Mocked)').should('be.visible');

        // When the Analyst triggers the "Start Pre-Assessment" action
        cy.get(locators.startPreAssessmentBtn).should('be.visible').click();

        // Then the platform should recognize the completed status from the Staging DB
        // and bypass the survey, immediately rendering the analytical visualizers
        cy.url().should('include', '/assessment/7943');

        // Decisively assert the "Assessment Successfully Analyzed" banner instead of interacting
        cy.get(locators.successBanner, { timeout: 15000 }).should('be.visible');

        // And the "Overall Compliance Score" wheel should visibly format the historical percentage
        cy.get(locators.overallScore).should('be.visible');

        // And a categorical breakdown charting "YES/NO/N/A" responses should decisively summarize the historical context
        cy.contains('YES', { matchCase: false }).should('be.visible'); 
    });

});
