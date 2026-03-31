# RegWatch Secrets Management

This document outlines the protocol for handling sensitive credentials (passwords, API tokens) within the automated testing framework.

---

## 1. Local Development (`cypress.env.json`)

To run tests locally with your personal or automation credentials, create a `cypress.env.json` file in the project root:

```json
{
  "email": "your-email@tester.co.uk",
  "password": "your-password-here"
}
```

> [!CAUTION]
> This file is listed in `.gitignore` and must never be committed to version control.

---

## 2. CI/CD Integration (GitHub Secrets)

The regression pipeline pulls credentials from **GitHub Repository Secrets**. Ensure the following secrets are configured in the repository settings (`Settings > Secrets and variables > Actions`):

| Secret Name | Description |
| :--- | :--- |
| `REGWATCH_EMAIL` | The automation account email (e.g. `automation123@tester.co.uk`) |
| `REGWATCH_PASSWORD` | The corresponding account password |
| `HUGGINGFACE_API_TOKEN` | Required by the `testaignite-reporter` for AI failure analysis |

---

## 3. Implementation in Tests

Credentials are never hardcoded in `.cy.js` files. They are accessed via the `Cypress.env()` API.

**In `commands.js`**:
```javascript
const userEmail = email || Cypress.env('email') || 'fallback@email.com';
const userPassword = password || Cypress.env('password') || 'fallback_pw';
```

**In spec files**:
```javascript
beforeEach(() => {
    cy.loginByApi(); // Dynamically resolves credentials from environment
});
```

---

## 4. Environment Priority

Cypress resolves environment variables in the following order of priority:
1. Arguments passed to `cy.loginByApi(manually_passed_email, manually_passed_pw)`
2. `CYPRESS_` prefixed environment variables (CI pipeline)
3. `cypress.env.json` (Local development)
4. Default constant fallbacks (Hardcoded in `commands.js` for zero-config local runs)
