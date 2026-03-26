# RegWatch: Agentic Regulatory Intelligence & Compliance Assurance Framework

RegWatch is an industry-grade, AI-driven regulatory intelligence platform designed to automate the discovery, classification, and monitoring of compliance obligations within the Nigerian financial ecosystem. 

---

## 1. Architectural Philosophy: "Behavior-First, Automation-Safe"

RegWatch employs a rigorous 4-phase lifecycle to bridge the gap between intuitive user behavior and hardened automation. This methodology ensures that every automated test is grounded in empirical reality rather than theoretical assumptions.

1.  **Exploratory Mapping**: Physical browser exploration to capture raw DOM layouts and intuitive user journeys.
2.  **BDD Translation**: Rapid conversion of explorations into strict Gherkin (Given/When/Then) syntax.
3.  **Pre-Automation Verification**: Systematic replay of BDD scenarios against the live application to secure assurance on user-centric flows before committing to code. This layer eliminates wasted effort on broken or unstable features.
4.  **Deterministic Automation**: High-fidelity Cypress implementation utilizing extensive API interception and state-injection.

### Gherkin-Centric Transparency
The framework utilizes **Gherkin Syntax** as its primary behavioral source of truth. This provides:
- **Universal Readability**: Clear understanding for both technical engineers and business stakeholders.
- **Rapid Insight**: Immediate transparency into automation design and functional coverage.
-  **Deterministic Mapping**: 1-to-1 alignment between behavioral requirements and automated assertions.

---

## 2. Risk-Based Orchestration (RTM Alignment)

Functional prioritization is driven by a deep-level **Business-Classed Risk Matrix**, ensuring that engineering efforts match organizational impact.

### Functional Tiering
-   **Tier 1 (Core - P1)**: Business-critical flows (e.g., Onboarding, AI Mapping, Webhook Sync). These must pass in CI/CD before any merge.
-   **Tier 2 (High Usage - P2)**: High-impact features (e.g., AI Co-Pilot, Search Filters).
-   **Tier 3 (Operational - P3)**: Supporting flows (e.g., Activity Logs, Reporting).

All tests are mapped directly to the **Requirement Traceability Matrix (RTM)** using unique `REG-XXX` identifiers, providing a continuous audit trail from requirement to verification.

---

## 4. Engineering Determinism & Pipeline Stability

To handle the inherent non-determinism of LLM-backed services and third-party webhooks, RegWatch employs several advanced engineering patterns:

-   **Deep API Interception**: Every external AI request and webhook trigger is intercepted and replaced with high-fidelity static JSON fixtures.
-   **JWT State Injection**: To optimize execution time, the framework bypasses UI-based login overhead by injecting JWT tokens directly into local storage via `cy.request()` hooks.
-   **Empirical Selector Governance**: Selectors are never hallucinated. All locators are extracted from live browser sessions, backed by visual evidence, and stored in a centralized `selector_map.json`.
-   **Deterministic Mock Synchronization**: Real-time UI updates (WebSockets/Polling) are validated by programmatically triggering mock webhook payloads during local E2E runs.

---

## 5. testAignite: AI-Driven Analytics & RCA

The framework integrates **testAignite** for advanced, quantitative throughput analysis and failure remediation.

### Core Analytics Features
-   **AI-Enhanced Root Cause Analysis (RCA)**: Automatically maps failure logs, investigates the technical cause, and classifies the business risk.
-   **Automated Fix Proposals**: Generates predictive remediation suggestions for failed test schemas and DOM selectors.
-   **Quantitative Dashboard**: A centralized portal displaying test metadata against strict performance thresholds:
    -   **Success Rate**: >90% target for E2E suites.
    -   **Categorization Accuracy**: >90% mapping precision.
    -   **Fidelity Score**: Quantitative measure of mock-to-reality alignment.

### Operations SLOs
-   **Dashboard Load Performance**: Core metrics must render in < 3 seconds.
-   **AI Inference Latency**: Profile rescan and mapping must conclude within 30-60 seconds.

---

## 6. Ecosystem Integration

RegWatch serves as the intelligence layer within the **RegTech365 Ecosystem**:
1.  **Ingestion**: RegWatch identifies and classifies regulatory circulars.
2.  **Assessment**: Users execute intelligent pre-assessments to identify gaps.
3.  **Handoff**: Critical gaps are funneled to **RegComply** for task distribution and remediation.
4.  **Sync**: A robust webhook infrastructure ensures that task completion in RegComply is reflected instantly in the RegWatch high-level executive dashboard.
