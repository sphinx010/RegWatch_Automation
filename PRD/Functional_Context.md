# Core Functional Context & Business Purpose: RegWatch

## 1. Core Purpose & Value Proposition
RegWatch exists to bridge the gap between complex regulatory environments and actionable enterprise compliance. Financial institutions struggle to manually track and understand the massive volume of changing regulatory circulars (from CBN, NDPC, SEC, etc.). RegWatch automates this discovery phase using Agentic AI to ingest requirements, parse obligations, evaluate risk levels, and categorize them by relevance (e.g., AML/CFT, Data Privacy, Cyber). By acting as the "intelligence layer" of the **RegTech365 Ecosystem**, it seamlessly funnels these insights into the **RegComply** platform to convert regulatory awareness into trackable execution tasks.

---

## 2. Core Actors and Power Model (Stakeholders)
WHO USES IT? (TARGET USERS)

### Chief Compliance Officer (CCO)
Looks at the high-level dashboard to understand overall risk and compliance trajectory.
- **Capabilities:** Executive oversight, Dashboard viewing, Report generation, Viewing high-risk alerts.
- **Restricted Actions:** Cannot edit granular company profile data, cannot modify system-level settings.
- **Dependencies:** Depends on Compliance Managers and Analysts to execute assessments.

### Compliance Manager
Monitors day-to-day changes, runs pre-assessments, and assigns tasks.
- **Capabilities:** Daily monitoring, Pre-assessments, Full assessment initiation, Configure notifications, Edit company profile.
- **Restricted Actions:** None within the compliance scope (Full systemic authority).
- **Dependencies:** Depends on CCO for strategic direction; depends on Analysts for research execution.

### Risk Manager
Evaluates the impact of certain regulations and tracks mitigation.
- **Capabilities:** Risk assessment, Regulatory impact analysis, Monitoring watchlists.
- **Restricted Actions:** Cannot configure global system settings.
- **Dependencies:** Depends on Analysts for data gathering.

### Compliance Analyst
Does the groundwork: searches for specific rules, downloads PDFs, and analyzes the fine print.
- **Capabilities:** Regulation research, Gap analysis, Documentation downloads, Complete pre-assessments.
- **Restricted Actions:** Cannot initiate full assessments without approval or subscription; cannot edit the company profile.
- **Dependencies:** Depends on Managers for task assignments.

---

## 3. Actor Risk Matrix
| Role | Critical Function | Failure Impact | Likelihood | Risk Score | Automation Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CCO** | Executive dashboard and high-risk alerts | High | Low | **High** | Tier 1 – Business Critical |
| **Compliance Manager** | Profile synchronization and re-scanning | High | Medium | **High** | Tier 1 – Business Critical |
| **Compliance Manager** | Full assessment setup & webhook sync | Critical | Low | **Critical**| Tier 1 – Business Critical |
| **Risk Manager** | AI Co-pilot and regulatory classification | Medium | Medium | **Medium**| Tier 2 – High Usage |
| **Compliance Analyst** | Search, filter, and PDF rendering | Low | High | **Medium**| Tier 2 – High Usage |

---

## 4. Core User Journeys

### Journey 1: Intelligent Onboarding and Profile Scanning
- **Entry Point:** First login or welcome screen
- **Primary Intent:** Set up organization profile to receive relevant regulations
- **State Transitions:** Profile Wizard → Processing State → Populated Dashboard
- **Backend Interactions:** `POST /api/v1/organizations/onboard` → Agentic API profile analysis
- **Expected Success Signals:** Dashboard populates within 30 seconds; Correct regulators mapped; Correct risk levels assigned.
- **Failure Signals/Edge Cases:** Timeout, empty dashboard, incorrect mapping, or invalid license data blocking onboarding.

### Journey 2: Regulation Discovery and Pre-Assessment
- **Entry Point:** Dashboard regulation list
- **Primary Intent:** Understand a regulation and evaluate surface-level compliance
- **State Transitions:** List View → Detail View (PDF) → Survey View → Results Dashboard
- **Backend Interactions:** `GET /api/v1/regulations/{id}` → `POST /api/v1/assessments/pre`
- **Expected Success Signals:** PDF renders; 5 to 10 AI questions load; Score is calculated accurately (excluding N/A responses).
- **Failure Signals/Edge Cases:** PDF fails to load, survey submission fails validation. Saving partial progress or answering all questions as "N/A" must be handled safely.

### Journey 3: RegComply Subscription Handoff
- **Entry Point:** "Start Full Assessment" button
- **Primary Intent:** Transition to RegComply for detailed task management
- **State Transitions:** Regulation Detail → Subscription Gate Modal (unsubscribed) OR Redirect to RegComply (subscribed)
- **Backend Interactions:** RegTech365 Subscription API check → `POST /api/v1/assessments/initiate-full`
- **Expected Success Signals:** Modal appears for non-subscribers; Automatic redirect and task creation for subscribers.
- **Failure Signals/Edge Cases:** Subscription check fails, API timeout, Modal fails to render.

### Journey 4: Cross-Platform Status Synchronization
- **Entry Point:** Task completion in RegComply
- **Primary Intent:** Reflect compliance status accurately in RegWatch
- **State Transitions:** Stale Status → Real-time Status Update → UI Refresh and Alert
- **Backend Interactions:** `POST /api/v1/webhooks/compliance-status`
- **Expected Success Signals:** Dashboard indicators update (Red, Yellow, Green); Audit log captures change; Notification sent.
- **Failure Signals/Edge Cases:** Webhook payload validation fails, UI does not update. Must rely on exponential backoff retries (up to 3 times) for failed deliveries.

---

## 5. System Integrity Contracts (Invariants)
1. **Data Isolation (Multi-tenant)**
   - An organization must never be able to view another organization’s profile, assessments, or regulatory filtering data.
2. **Access Control (RBAC)**
   - Only authorized roles (Compliance Manager or Admin) can update the company profile and trigger a system-wide re-scan.
3. **Assessment Integrity**
   - The UI must not display a "Compliant" status without a confirmed backend webhook response from RegComply.
4. **Resilience**
   - If the AI Co-pilot or Agentic AI service is unavailable, core functionalities such as search, viewing PDFs, and manual filtering must gracefully degrade and remain operational.

---

## 6. General Functional Risks & Mitigations
| Functional Risk | Impact | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **AI Mapping Hallucinations** | High. Incorrect risk levels could lead to massive fines. | Medium | Implement human-in-the-loop review phases; fine-tune LLM prompts with strict RAG grounding; run confidence score thresholds. |
| **Ecosystem Integration Failure** | High. Handoff to RegComply value prop fails. | Medium | Utilize robust asynchronous task queues (RabbitMQ/Kafka) and implement Webhook retry policies for status syncs. |
| **Regulatory Data Lag** | Medium. Delays in system awareness of new circulars. | High | Build automated scraping/RSS/Atom ingestion pipelines hitting regulatory domains daily; fallback manual upload interfaces. |

## 7. Platform Success Criteria
- **Time Savings**: 80% reduction in the manual hours an analyst spends identifying if a new circular applies to them.
- **Accuracy**: 90% AI success rate in categorizing risk and thematic areas.
- **Conversion**: 40% of all executed pre-assessments transition gracefully into full RegComply task workflows.
- **System Resilience**: Dashboard load times strictly under 3 seconds, with automated profile re-scans concluding in under 60 seconds.
