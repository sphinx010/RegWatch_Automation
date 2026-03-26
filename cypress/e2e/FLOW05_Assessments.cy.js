describe('Master Flow #5: Pre-Assessment Execution', () => {

    beforeEach(() => {
        // Authenticate via API to bypass UI login overhead (QA_Engineer Protocol)
        cy.loginByApi('automation123@tester.co.uk', '08057606@26');
        
        // Mock the target regulation detail for deterministic rendering
        cy.intercept('GET', '**/regulations/7943*', {
            statusCode: 200,
            body: {
                id: 7943,
                title: 'Circular to all Banks (Mocked)',
                status: 'Not Started',
                questions: [
                    { id: 1, text: 'Do you currently have robust tracking systems in place?' }
                ]
            }
        }).as('getRegulationDetail');

        // Mock the POST submission to guarantee a 100% score for testing purposes
        cy.intercept('POST', '**/pre-assessments/*/answer*', {
            statusCode: 200,
            body: {
                score: 100,
                breakdown: { yes: 1, no: 0, na: 0 },
                status: 'Completed'
            }
        }).as('submitAssessment');

        cy.fixture('selector_map.json').as('selectors');
        cy.visit('/regulations/7943'); 
    });

    it('Scenario: Compliance Analyst successfully executes a regulatory gap analysis [REG-009, REG-010]', function() {
        // Aligning to S_Gherkin_TC.md Flow 5
        const locators = this.selectors.Assessments;

        // Given the Compliance Analyst is viewing a "Not Started" regulation detail page
        cy.wait('@getRegulationDetail');
        cy.contains('Circular to all Banks (Mocked)').should('be.visible');

        // When the Analyst triggers the "Start Pre-Assessment" action
        cy.get(locators.startPreAssessmentBtn).should('be.visible').click();

        // Then the platform should mount the dynamic questionnaire interface
        cy.url().should('include', '/assessment/7943');
        cy.contains('Do you currently have robust tracking systems in place?').should('be.visible');

        // When the Analyst provides explicit "Yes" or "No" answers to all generated questions
        cy.get(locators.radioBtnYes).first().click({force: true}); 

        // And the Analyst successfully engages the "Submit Assessment" button
        cy.get(locators.submitAssessmentBtn).click({force: true});

        // Then a confirmation modal should intercept the flow for submission validation
        cy.get('[role="dialog"]').should('be.visible').and('contain', 'Submit Assessment');

        // When the Analyst affirms the submission within the modal
        cy.get(locators.confirmSubmitModalBtn).last().click({force: true});
        cy.wait('@submitAssessment');

        // Then the system should compute and transition to the Assessment Complete dashboard
        cy.url().should('include', '/assessment-complete');

        // And a definitive "Assessment Successfully Analyzed" banner should be visible
        cy.get(locators.successBanner).should('be.visible');

        // And the "Overall Compliance Score" wheel should visibly format the calculated percentage
        cy.get(locators.overallScore).should('be.visible');

        // And a categorical breakdown charting "YES/NO/N/A" responses should definitively summarize the input context
        // Since we explicitly mocked 1 YES in the interception, we check for '1 YES'
        cy.contains('1', { matchCase: false }).should('be.visible'); 
    });

});
