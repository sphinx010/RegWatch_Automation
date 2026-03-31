describe('Master Flows #2 and #3: AI Profile Mapping and Dashboard', () => {

    beforeEach(() => {
        // Mock specific interceptions to ensure deterministic behavior BEFORE the test fires login logic
        // Consolidate dashboard intercepts with the EXACT structure found in Chrome DevTools
        cy.intercept('GET', '**/dashboard/*/summary*', {
            statusCode: 200,
            body: {
                success: true,
                message: "Dashboard summary retrieved successfully",
                data: {
                    overallCompliance: 75,
                    totalRegulations: 100,
                    highRiskCount: 10, // Aligned to real API field name
                    activeAssessments: 5,
                    compliantItems: 85,
                    topRegulators: [
                        { regulator: "Central Bank of Nigeria", complianceRate: 40 }
                    ],
                    recentRegulations: [],
                    upcomingDeadlines: [],
                    recentActivity: [],
                    byThematicArea: []
                }
            }
        }).as('dashboardData');

        cy.intercept('POST', '**/dashboard/reassess/*', {
            statusCode: 200,
            body: { message: 'Profile Reassessing', status: 'In Progress' }
        }).as('reassessProfile');

        // Authenticate manually. This command explicitly travels from the Ecosystem portal, 
        // routes cross-domain, and lands precisely on the RegWatch Dashboard.
        cy.loginByApi();
        
        cy.fixture('selector_map.json').as('selectors');
        
        // CRITICAL DELETION: Removed double `cy.visit('/dashboard')` resolving the token erasure bug!
    });

    it('Scenario: Compliance Executive validates organizational risk metrics on the dashboard [REG-004]', function() {
        const locators = this.selectors.Dashboard;

        // Ensure we explicitly validate arriving on target
        cy.url().should('include', '/dashboard');

        // When the system finishes aggregating the dynamic compliance telemetry
        cy.wait('@dashboardData');

        // System assertions
        cy.get(locators.overallComplianceCard).should('be.visible');
        // And the "Regulations" count should reflect the systemic profile obligation inventory 
        cy.get(locators.totalRegulationsCard).should('be.visible').parent().should('contain', '100'); 
        cy.get(locators.highRiskCard).should('be.visible').parent().should('contain', '10'); 
        cy.contains('Central Bank of Nigeria').should('be.visible');
        cy.get(locators.reassessBtn).should('be.visible').and('not.be.disabled');
    });

    it('Scenario: User triggers AI profile reassessment from the dashboard [REG-002]', function() {
        const locators = this.selectors.Dashboard;

        cy.get(locators.reassessBtn).should('exist');
        cy.contains('Reassess').first().click();

        cy.contains('Reassessing...').should('exist');
        cy.wait('@reassessProfile', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
    });

});
