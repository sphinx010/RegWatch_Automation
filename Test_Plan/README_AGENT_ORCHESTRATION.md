# RegWatch QA Agent Orchestration Guide

This document explains how to effectively orchestrate the AI Agent "QA Swarm" for the RegWatch project. The testing framework is designed to validate deterministic, highly reliable end-to-end user flows while heavily mocking unpredictable elements like Agentic AI APIs and live Webhooks.

---

## 1. The QA Agent Roster

The RegWatch QA framework relies on four distinct AI agent personas, each defined by a strict machine-readable specification document.

### A. `@QA-Detective` (The BDD Explorer & Test Planner)
*   **File:** `Test_Plan\Agent_QA_Detective.md`
*   **Role:** Behavioral Driven Development Explorer
*   **Capabilities:** Full system UI exploration via deterministic live browser interaction. Captures explicit evidence (DOM, URLs, screenshots) and translates raw user journeys into structured Gherkin syntax mapped with tracking metadata (`Flow_ID`, `Suite`).
*   **Use Case:** Invoke this agent upstream of automation to document edge-cases and exactly *how* a user physically behaves on the site before writing automation assertions. Outputs heavily structured behavioral specs to `Automation_Test_Flows/Gherkin_TC.md`.

### B. `@QA-Lead` (The Omnibus Architect)
*   **File:** `skill/QUALITY & OPTIMIZATION/QA_Engineer.md`
*   **Role:** Principal Test Engineer
*   **Capabilities:** Full system authority. Cleared to bypass certification protocols. Understands the broader business Risk Matrix and `Functional_Context.md`.
*   **Use Case:** Invoke this agent to architect the base Cypress framework, set up complex global API interceptions, debug multi-flow failures, and review the work of junior agents.

### C. `@QA-Automation-Agent` (The Core Implementer)
*   **File:** `Test_Plan\Agent_QA_Automation.md`
*   **Role:** Specialized E2E Developer
*   **Capabilities:** Goal-based test writer restricted by the `P-QA-CERTIFY-SUBMIT` firewall.
*   **Use Case:** Invoke this agent for mass-producing the individual `.cy.ts` test files based on the RTM mappings. Must be certified by the Grader before touching the codebase.

### D. `@QA-Grader` (The Compliance Firewall)
*   **File:** `Test_Plan\Agent_QA_Grader.md`
*   **Role:** Onboarding & Certification Evaluator
*   **Capabilities:** Utility-based evaluator utilizing Chain-of-Thought reasoning to score submissions strictly out of 8 points.
*   **Use Case:** Invoke this agent whenever a new `@QA-Automation-Agent` or junior developer submits a `QA_Agent_Submission.md` to ensure they understand the project's invariants (e.g., No typing into UI logins).

---

## 2. Orchestration Workflows

### The "New Agent" Onboarding Loop
If deploying a new `@QA-Automation-Agent`:
1.  **Prompt the Trainee:** `"You are the @QA-Automation-Agent. Read QA_Agent_Onboarding_Test.md and write your answers to QA_Agent_Submission.md."`
2.  **Prompt the Grader:** `"You are the @QA-Grader. Evaluate QA_Agent_Submission.md against your rubric in Agent_QA_Grader.md and output the final QA_Certification_Result.md."`
3.  *Iterate until the Grader outputs 8/8.*

### The "Omnibus Lead" Quick-Start
If you need immediate automation architecture, bypass the onboarding loop entirely by invoking the Staff Engineer:
*   **Prompt:** `"You are the @QA-Lead acting as the Omnibus Architect. Read the advanced Test Plan and initialize the base Cypress configuration, injecting JWT authentication into the global hooks to bypass UI login overhead."`

---

## 3. High-Leverage Prompt Snippets for the 13 E2E Master Flows

The following prompts are optimized for the `@QA-Lead` or a certified `@QA-Automation-Agent`. They explicitly enforce the deterministic, API-intercepted nature of the RegWatch testing strategy.

### Priority 1 (Core Path) Automation

**1. New Organization Onboarding (REG-001)**
> "Write the Cypress E2E test for the 'New Organization Onboarding' flow. You must intercept `POST /api/v1/auth/signup`. Ensure the wizard completion logic asserts the final success screen without attempting to resolve a real confirmation email."

**2. AI Profile Mapping (REG-002)**
> "Implement the 'AI Profile Mapping' test. Because the backend relies on non-deterministic LLMs to categorize the organization relative to Nigerian regulators (CBN, SEC), you MUST intercept the backend mapping response and inject a static JSON fixture containing predictable thematic areas and risk levels. Assert that the UI renders these mock categories precisely."

**3. Dashboard Population (REG-004)**
> "Draft the 'Dashboard Population' test. Intercept `GET /api/v1/dashboard/*/summary`. Supply a deeply nested static JSON fixture representing high, medium, and low-risk aggregated metrics. Assert that the Recharts/UI components calculate and display these specific numbers correctly."

**5 & 6. Pre-Assessment Execution & Full Assessment Handoff (REG-009, REG-011)**
> "Write the test for executing a Pre-Assessment and initiating the Full Assessment. Intercept the questionnaire API to return exactly 3 predefined Yes/No questions. Answer them programmatically, assert the score calculation, and verify that clicking 'Start Full Assessment' triggers the correct `POST` request to the RegTech365 ecosystem without testing the real downstream RegComply application."

**9 & 10. Webhook Sync Receipt & Compliance Score Update (REG-014)**
> "Create the 'Webhook Synchronization' E2E test. Instead of waiting for an external system, use `cy.request()` to programmatically fire a mock webhook payload containing a 'Compliant' status to our local `POST /api/v1/webhooks/compliance-status` endpoint. Assert that the frontend dashboard updates immediately via WebSockets or polling."

### Priority 2 & 3 Automation

**4. Executive Review (REG-005)**
> "Write the 'Executive Review' role-based test. Log in using a mock JWT assigned the 'CCO' role. Assert that granular configuration tabs are hidden and that the executive-level high-risk alerts render based on a static intercepted fixture."

**7. Task Generation in RegComply (REG-013) - *API TEST ONLY***
> "Implement a backend API integration test (not a UI test) for 'Task Generation'. Mock the RegComply upstream endpoint and assert that our server correctly transforms a completed assessment payload into the required task distribution schema."

**11. AI Recommendations / Co-Pilot (REG-022)**
> "Draft the 'AI Co-Pilot' UI test. Intercept `POST /api/v1/chat` and immediately stream a static mocked text response. We are testing the UI chat widget's rendering logic, scrolling behavior, and loading states, NOT the actual LLM's semantic accuracy."

**12. Executive Report Export (REG-015)**
> "Write the 'Executive Report Export' test. Intercept the report generation endpoint. Assert that clicking the download button triggers the correct network request and that the UI gracefully handles the loading state (e.g., spinner) while the mock response is generated."

**13. Auditor Review of Logs (REG-025)**
> "Create the 'Auditor Review' test. Inject a JWT for an 'Auditor' role. Intercept the audit log API with a paginated fixture of 50 mocked events. Assert the tabular rendering and pagination controls function correctly."

---
*Note: Flows 8 (Task Completion) is purely a manual RegComply platform flow and is out of scope for RegWatch repository Cypress testing.*
