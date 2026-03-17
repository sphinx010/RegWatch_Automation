# Advanced Test Plan & Automation Strategy: RegWatch
**Platform:** RegTech365
**Version:** 2.0 (Agent-Optimized)

## 1. Agent Context & Objectives
This Test Plan is designed to guide QA automation agents in building scalable, robust, and deterministic tests for the **RegWatch** platform. RegWatch is an AI-driven regulatory intelligence platform that integrates extensively with RegComply.

Our primary testing goals are:
- Validating deterministic UI behavior despite AI-driven backend processes.
- Ensuring complete coverage of the 13 core End-to-End (E2E) Master Flows.
- Establishing robust interception strategies (`cy.intercept()`) to isolate UI components from third-party ecosystems (e.g., RegComply, Stripe, LLMs).

## 2. Automation Strategy (Cypress)
To maintain stable and fast execution, automation scripts should follow these principles:
- **API Interceptions & Stubbing:** UI tests should intercept critical API calls (especially AI generation and external webhooks) and supply deterministic fixtures. This prevents flaky tests caused by AI hallucinations or ecosystem latency.
- **State Management:** Avoid UI logins for every test. Use `cy.request()` to authenticate and inject the JWT token directly into local storage/cookies.
- **Data Isolation:** Tests must use unique identifiers (e.g., timestamped company names) to avoid cross-tenant pollution, or rely strictly on mocked API responses for read-only dashboards.

### Anticipated Interception Endpoints (Fixtures Required)
For robust component validation without backend dependencies, agents should anticipate mocking:
- **Auth:** `POST /api/v1/auth/login` -> Returns JWT token.
- **Dashboard Data:** `GET /api/v1/dashboard/*/summary` -> Returns static compliance scores.
- **AI Classification:** `POST /api/v1/organizations/onboard` -> Returns mocked regulatory mapping (e.g., CBN, SEC).
- **Pre-Assessment Questions:** `POST /api/v1/pre-assessments/start` -> Returns fixed 5 questions for deterministic answering.
- **AI Co-Pilot:** `POST /api/v1/chat` -> Returns static RAG responses to prevent LLM latency/variability.

## 3. The 13 End-to-End Master Flows (Automation Priority)
The following master flows define the complete user journey. They have been evaluated for automation suitability, risk, and mapped to the PRD Requirement Traceability Matrix (RTM).

| Step | Flow Description | RTM Code | Automation Priority | Interception Endpoint (Cypress) | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **New organization onboarding** | REG-001 | **Core (P1)** | `POST /api/v1/auth/signup` | High |
| **2** | **AI profile mapping** | REG-002 | **Core (P1)** | `PATCH /api/v1/company/` | Critical |
| **3** | **Dashboard population** | REG-004 | **Core (P1)** | `GET /api/v1/dashboard/*/summary` | High |
| **4** | Executive review | REG-005 | P2 | `GET /api/v1/dashboard/*` | Medium |
| **5** | **Pre-assessment execution** | REG-009, REG-010 | **Core (P1)** | `PUT /api/v1/pre-assessments/*/answer` | Critical |
| **6** | **Full assessment initiation** | REG-011 | **Core (P1)** | `POST /api/v1/assessments/initiate-full` | Critical |
| **7** | Task generation in RegComply | REG-013 | P2 (API Test) | `POST /api/v1/assessments/create` (RegComply) | Critical |
| **8** | **Webhook sync receipt** | REG-014 | **Core (P1 API)** | `POST /api/v1/webhooks/compliance-status` | Critical |
| **9**| **Compliance score update (UI)**| REG-014, REG-010 | **Core (P1)** | `GET /api/v1/pre-assessments/analytics/dashboard` | High |
| **10**| AI recommendations | REG-022 | P2 | `POST /api/v1/chat` | High |
| **11**| Executive report export | REG-015 | P3 | `POST /api/v1/assessment/*/report` | Medium |
| **12**| Auditor review of logs | REG-025, REG-026 | P3 | `GET /api/v1/team/audit-logs` | Medium |

***Note:** Steps marked as **Core (P1)** form the critical "Happy Path" automation suite. They must run in CI/CD pipelines on every merge.*

## 4. Test Coverage by Module (Functional & Risk Mapping)

### 4.1 Onboarding & Profile Scanning
- **Validation**: Wizard completion, AI profile-to-regulator mapping precision.
- **Risk**: *Critical*. If mapping fails, the company doesn't see their regulations.
- **Automation Focus**: Mock the AI mapping response to ensure the UI renders the correct categories (e.g., Financial Services -> CBN) regardless of backend LLM availability.

### 4.2 Dashboards & Reporting
- **Validation**: Role-based rendering, trend aggregation, multi-select filtering.
- **Risk**: *High*. Miscalculated metrics impact C-suite decisions.
- **Automation Focus**: Supply heavily nested JSON fixture data via Cypress intercepts to validate calculation logic in the frontend charting libraries.

### 4.3 Pre-Assessment Engine
- **Validation**: Questionnaire retrieval, mandatory completion, score calculation (ignoring N/A).
- **Risk**: *Critical*. Core value proposition of RegWatch.
- **Automation Focus**: E2E Cypress test answering a 5-question mock survey and validating the resulting score block text via DOM assertions.

### 4.4 RegComply Integration & Webhooks
- **Validation**: "Start Full Assessment" button triggers webhook; UI updates when RegComply finishes.
- **Risk**: *Critical*. Broken handoff breaks the entire ecosystem flow.
- **Automation Focus**: Use `cy.request()` to trigger the webhook endpoint programmatically during an E2E test to verify real-time UI updates via websockets/polling.

### 4.5 AI Co-Pilot & Knowledge Base
- **Validation**: Chatbot availability, contextual responses, prompt injection resistance.
- **Risk**: *Critical*. AI hallucinations could give illegal compliance advice.
- **Automation Focus**: Intercept `/api/v1/chat` to ensure the chat window renders user and bot messages correctly, leaving actual LLM semantic validation to Python/backend integration tests.

## 5. Requirement Traceability Matrix (RTM)
https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io
| Req ID | Title | Module coverage | Interception Strategy | Auth Priority | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REG-001** | User Onboarding Flow | Onboarding | Intercept `/auth/signup` | P1 | High |
| **REG-002** | Agentic Profile Analysis | Core AI | Intercept mapping endpoint | P1 | Critical |
| **REG-003** | Regulatory Classification | Core DB | Mock DB regulation list | P1 | High |
| **REG-004** | Dashboard Population | Dashboard | Mock `/dashboard/summary` | P1 | High |
| **REG-009** | Pre-Assessment Survey | Assessment | Mock survey questions JSON | P1 | High |
| **REG-010** | Pre-Assessment Scoring | Assessment | Validate UI calculations | P1 | Critical |
| **REG-011** | Full Assess. Initiation | Integration | Stub `initiate-full` | P1 | Critical |
| **REG-014** | Status Synchronization | Webhook / UI | Trigger via `cy.request()` | P1 | Critical |
| **REG-021** | Contextual AI Assistant | AI Chatbot | Stub `/chat` streamed response| P2 | Critical |

## 6. Environments & Credentials

| Environment | Purpose | Core APIs & Endpoints | Test Accounts |
| :--- | :--- | :--- | :--- |
| **QA & Automation** | Stable automation testing target | Frontend: `https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io/login` | `Email: fairtrust@mailinator.com` <br> PW: `AlphaSecure!789` |
| **Staging** | Pre-production validation | Frontend: `https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io/login` | `Email: fairtrust@mailinator.com` <br> PW: `AlphaSecure!789` |