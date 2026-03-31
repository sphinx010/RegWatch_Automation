// ***********************************************
// Custom Commands for RegWatch Automation
// ***********************************************

Cypress.Commands.add('loginByApi', (email, password) => {
    // Priority: Command arguments > Environment Variables > Default Constants
    const userEmail = email || Cypress.env('REGWATCH_EMAIL') || 'automation123@tester.co.uk';
    const userPassword = password || Cypress.env('REGWATCH_PASSWORD') || 'REDACTED_PASSWORD';

    const ecosystemUrl = 'https://regtech365-ecosystem-fe-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io';
    cy.visit(ecosystemUrl + '/sign-in');
    
    // Robust selector handling for Auth inputs
    cy.get('input#email, input[placeholder="Enter your email"], input[type="email"]').should('be.visible').clear().type(userEmail);
    cy.get('input#password, input[placeholder="Enter your password"], input[type="password"]').clear().type(userPassword);
    cy.get('button').contains('Log In').click();
    
    // Safely wait for Ecosystem authentication resolution
    cy.wait(3000);
    
    // Dynamic interrupt for Industry Profile Modal
    cy.get('body').then(($body) => {
        if ($body.text().includes('Update Your Industry Profile') || $body.find('button:contains("Remind me later")').length > 0) {
            cy.wrap($body).find('button:contains("Remind me later")').click({force: true});
        }
    });
    
    // Ensure we are viewing the core Ecosystem App Matrix
    cy.contains('RegWatch', { matchCase: false, timeout: 15000 }).should('be.visible');
    
    // Explicitly target the RegWatch application's discrete 'Get Started' button
    cy.contains('RegWatch', { matchCase: false })
      .parents()
      .filter(':has(button:contains("Get Started"))')
      .first()
      .contains('button', 'Get Started')
      .click({ force: true });
    
    // This assertion halts the command queue until the physical cross-origin redirect token validation sequence is complete natively
    cy.url({ timeout: 25000 }).should('include', 'reg-watch-client');
});
