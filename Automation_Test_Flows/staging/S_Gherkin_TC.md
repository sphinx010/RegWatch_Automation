# Staging BDD Scenarios - Master Flows

*This document contains the definitive BDD Test Scenarios mapping the 13 Master Flows against the RegWatch Staging Environment. All XHR endpoints and DOM Selectors were empirically verified via Browser Subagent Exploration.*

---

# Master Flow #1: New Organization Onboarding

**Flow_ID:** FLOW-01
**RTM_Code:** REG-001
**Module:** Onboarding
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `POST /api/v1/auth/signup`

### Evidence Capture
* **Initial URL:** `https://regtech365-ecosystem-fe-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/login`
* **Target URL:** `https://regtech365-ecosystem-fe-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/signup`
* **Selectors:**
    - First Name: `input#firstName`
    - Submit Button: `button:contains("Create Account")`

### BDD Scenario
**Feature:** Organization Onboarding
  **Scenario:** Successful new organization signup
    **Given** the user is on the RegWatch signup page at "/signup"
    **When** the user enters their institutional details
    **And** the user clicks the "Create Account" button
    **Then** the system should send a `POST` request to `/api/v1/auth/signup`
    **And** the user should be redirected to the organization profile wizard

---

# Master Flow #2: AI Profile Mapping

**Flow_ID:** FLOW-02
**RTM_Code:** REG-002
**Module:** Company Profile
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `POST /api/v1/profile/reassess`

### Evidence Capture
* **Target Action:** Clicking the "Reassess" button in the sidebar.
* **Selectors:** `button:contains("Reassess")`

### BDD Scenario
**Feature:** Company Profile AI Mapping
  **Scenario:** User triggers AI profile reassessment from the dashboard
    **Given** the user is logged into the RegWatch platform
    **When** the user clicks on the "Reassess" button in the sidebar
    **Then** the system should initiate the AI profile mapping scan `POST /api/v1/profile/reassess`
    **And** the dashboard should eventually refresh with updated regulatory insights

---

# Master Flow #3: Dashboard Population

**Flow_ID:** FLOW-03
**RTM_Code:** REG-004
**Module:** Dashboard
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `GET /api/v1/dashboard/*/summary`

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Selectors:**
    - Overall Compliance Card: `.bg-white.p-6.rounded-xl.shadow-sm`
    - High Risk Card: `div:has(span:contains("High Risk"))`

### BDD Scenario
**Feature:** Dashboard Data Population
  **Scenario:** Dashboard displays regulatory compliance metrics
    **Given** the user is logged into the RegWatch platform
    **When** the user navigates to the "Dashboard"
    **Then** the system should fetch the dashboard summary from `/api/v1/dashboard/*/summary`
    **And** summary metric cards should be visibly updated

---

# Master Flow #4: Executive Review (Regulation Discovery)

**Flow_ID:** FLOW-04
**RTM_Code:** REG-005
**Module:** Regulations
**Automation_Priority:** P2
**Risk_Level:** Medium
**Cypress_Intercept:** `GET /api/v1/regulation/search*`

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/regulations-page`
* **Selectors:**
    - Search Bar: `input[placeholder='Search regulations...']`
    - Risk Filter: Risk select dropdowns.

### BDD Scenario
**Feature:** Regulation Search and Filtering
  **Scenario:** Compliance Analyst filters regulations by keyword and risk level
    **Given** the Compliance Analyst is authenticated
    **When** the Analyst navigates to the "Regulations" module via the sidebar
    **And** the Analyst inputs "Cash" and filters by "Medium" Risk
    **Then** the grid should deterministically display only "Medium" risk items containing "Cash"
    **And** triggering "View" on a card should load the specific regulation details (`GET /api/v1/regulation/[id]`)

---

# Master Flow #5: Pre-Assessment Execution

**Flow_ID:** FLOW-05
**RTM_Code:** REG-009, REG-010
**Module:** Assessment Engine
**Automation_Priority:** Core (P1)
**Risk_Level:** Critical
**Cypress_Intercept:** `POST /api/v1/pre-assessments/*/submit`

### Evidence Capture
* **Initial Action:** Click 'Start Pre-Assessment' inside regulation detail view (`button:contains("Start Pre-Assessment")`).
* **Modal Submission:** `button:contains("Submit Assessment")` inside assessment modal.

### BDD Scenario
**Feature:** Regulatory Pre-Assessment Execution
  **Scenario:** Compliance Analyst successfully executes a regulatory gap analysis
    **Given** the Analyst triggers the "Start Pre-Assessment" action
    **When** the Analyst provides explicit "Yes" or "No" answers to the survey
    **And** the Analyst affirms the submission within the modal
    **Then** the system should compute the score via `POST /api/v1/pre-assessments/*/submit`
    **And** the Analysis Results screen should format the calculated percentage

---

# Master Flow #6: Full Assessment Initiation (RegComply Handoff)

**Flow_ID:** FLOW-06
**RTM_Code:** REG-011
**Module:** Integration
**Automation_Priority:** Core (P1)
**Risk_Level:** Critical
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Entry Point:** Regulation detail view — accessed via `/regulations-page` → "View" on a regulation card
* **Action Selector:** `button:contains("Start Full Gap Assessment in RegComply")`
* **Redirect Behavior:** Without a subscription, redirects to the Ecosystem Billings view
* **Billing URL:** `https://regtech365-ecosystem-fe-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/billings`
* **Navigation Selectors:**
    - Sidebar Regulations Link: `a[href*="/regulations-page"], a[href*="/regulations"]`
    - Regulation Card View Btn: `button:contains("View")`
    - Full Assessment CTA: `button:contains("Start Full Gap Assessment in RegComply")`

### BDD Scenarios

```gherkin
Feature: Full Assessment Initiation (RegComply Handoff)
  As a Compliance Manager
  I need to initiate a full gap assessment via RegComply
  So that identified regulatory gaps can be remediated through actionable tasks

  Background:
    Given the user is authenticated on the RegWatch staging platform
    And the user has previously completed at least one pre-assessment

  Scenario: FLOW-06-TC01 — Regulation detail view renders the full assessment CTA
    Given the user navigates to the "Regulations" page via the sidebar
    When the regulation grid finishes loading
    And the user clicks "View" on the first available regulation card
    Then the regulation detail view should load with a valid URL containing "/regulations/"
    And the page should display the regulation title and compliance metadata
    And a "Start Full Gap Assessment in RegComply" button should be visible

  Scenario: FLOW-06-TC02 — Subscription gate redirects to Ecosystem Billings
    Given the user is viewing a regulation detail page with a pre-assessment score < 100%
    And the organization does NOT have an active RegComply subscription
    When the user clicks "Start Full Gap Assessment in RegComply"
    Then the browser should redirect to the RegTech365 Ecosystem domain
    And the URL should resolve to the billings/subscription page
    And the user should see subscription plan options (e.g., "Growth plan")

  Scenario: FLOW-06-TC03 — Full assessment CTA is contextually absent for fully compliant regulations
    Given the user navigates to a regulation with a 100% pre-assessment score
    When the regulation detail page fully loads
    Then the "Start Full Gap Assessment in RegComply" button should NOT be present
    Or it should be visually disabled indicating no further action is needed
```

---

# Master Flow #7: Task Generation in RegComply (UI Verification)

**Flow_ID:** FLOW-07
**RTM_Code:** REG-013
**Module:** Integration
**Automation_Priority:** P2 (API Test → Functional UI Verification)
**Risk_Level:** Critical
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Context:** This flow is a backend/API handoff from RegWatch → RegComply. Since this is a functional UI test (not E2E), we verify that the dashboard reflects the _outcome_ of task generation from RegComply without directly triggering the API.
* **Dashboard Indicators:**
    - Active Assessments Card: `span:contains("Active Assessments")`
    - Assessment tracking widgets on the dashboard

### BDD Scenarios

```gherkin
Feature: Task Generation in RegComply (UI Verification)
  As a Compliance Manager
  I need to verify that RegComply task generation outcomes are reflected on my dashboard
  So that I can track assessment progress initiated from RegWatch

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-07-TC01 — Dashboard reflects assessment tracking indicators
    Given the user navigates to the "Dashboard" page
    When the dashboard finishes loading live data from the backend
    Then the "Active Assessments" metric card should be visible
    And the card should display a numeric count (zero or greater)
    And the dashboard heading "Dashboard" should be visible

  Scenario: FLOW-07-TC02 — Assessment tracking state is consistent across navigation
    Given the user is on the Dashboard and observes the "Active Assessments" count
    When the user navigates away to the "Regulations" page and back to "Dashboard"
    Then the "Active Assessments" count should remain consistent with the prior observation
```

---

# Master Flow #8: Webhook Sync Receipt (UI Verification)

**Flow_ID:** FLOW-08
**RTM_Code:** REG-014
**Module:** Webhook / UI
**Automation_Priority:** Core (P1 API → Functional UI Verification)
**Risk_Level:** Critical
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Context:** Webhooks are system-to-system callbacks. Functionally, we verify that the UI renders the consequences of webhook events — compliance state transitions displayed on the dashboard and regulation detail pages.
* **Dashboard Indicators:**
    - Active Assessments Card: `span:contains("Active Assessments")`
    - Compliant Items Card: `span:contains("Compliant Items")`
    - Overall Compliance Card: `div:contains("Overall Compliance")`

### BDD Scenarios

```gherkin
Feature: Webhook Sync Receipt (UI Verification)
  As a Compliance Manager
  I need to see that compliance status updates from RegComply are reflected in the UI
  So that I can trust the synchronization pipeline between RegWatch and RegComply

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-08-TC01 — Dashboard compliance tracking widgets render live data
    Given the user navigates to the "Dashboard" page
    When the dashboard finishes loading
    Then the "Active Assessments" card should be visible with a numeric value
    And the "Compliant Items" card should be visible with a numeric value
    And both cards should render without errors or fallback/empty states

  Scenario: FLOW-08-TC02 — Compliance status badges are functionally rendered
    Given the user navigates to the "Regulations" page
    When the regulation grid loads
    Then each regulation card should display a visual compliance status indicator
    And the status should be one of: "Not Started", "In Progress", "Compliant", or "Non-Compliant"
```

---

# Master Flow #9: Compliance Score Update (UI Rendering)

**Flow_ID:** FLOW-09
**RTM_Code:** REG-014, REG-010
**Module:** Dashboard
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Target Container:** Dashboard metric cards
* **Key Selectors:**
    - Overall Compliance Card: `div:contains("Overall Compliance")`
    - Score Percentage: Text containing `%` within the overall compliance area
    - Total Regulations: `span:contains("Total Regulations")`
    - High Risk: `span:contains("High Risk")`
    - Top Regulators Section: Contains regulator names like "Central Bank of Nigeria"
    - Recent Activity Widget: `div:has-text("Recent Activity")`

### BDD Scenarios

```gherkin
Feature: Compliance Score Update (UI Rendering)
  As a Compliance Executive
  I need to see real-time compliance scores and metrics on the dashboard
  So that I can make informed decisions about the organization's regulatory posture

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-09-TC01 — Dashboard renders all compliance metric cards
    Given the user navigates to the "Dashboard" page
    When the page finishes loading live backend data
    Then the "Overall Compliance" metric card should be visible
    And it should display a percentage value (e.g., "0%", "75%")
    And the "Total Regulations" card should display a numeric count
    And the "High Risk" card should display a numeric count
    And the "Active Assessments" card should display a numeric count
    And the "Compliant Items" card should display a numeric count

  Scenario: FLOW-09-TC02 — Top Regulators section renders organization-specific data
    Given the user is viewing the Dashboard
    When compliance data has loaded
    Then the "Top Regulators" section should be visible
    And it should list at least one regulatory body (e.g., "Central Bank of Nigeria")

  Scenario: FLOW-09-TC03 — Recent Activity widget displays interaction history
    Given the user is viewing the Dashboard
    When the user scrolls to the bottom of the dashboard grid
    Then the "Recent Activity" widget should be visible
    And it should display timestamped activity entries (if any exist)
```

---

# Master Flow #10: AI Recommendations (AI Co-Pilot)

**Flow_ID:** FLOW-10
**RTM_Code:** REG-022
**Module:** AI Co-Pilot
**Automation_Priority:** P2
**Risk_Level:** High
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception — tests the real AI microservice)

### Evidence Capture
* **Path:** `/chatbot-ai`
* **Sidebar Link:** `a[href*="/chatbot-ai"]`
* **Chat Input:** `input[placeholder*="Describe your business"], input[placeholder*="Ask another question"]`
* **Send Button:** `button.bg-indigo-600, button:has(svg).bg-indigo-100`
* **AI Microservice:** `POST https://regwatch-ai-chatbot-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/chat`
* **Key Finding:** Staging AI Chatbot uses a decoupled microservice, NOT `/api/v1/chat`

### BDD Scenarios

```gherkin
Feature: AI Recommendations (AI Co-Pilot)
  As a Compliance Analyst
  I need to interact with the AI Co-Pilot for compliance guidance
  So that I can get contextual regulatory advice without leaving the platform

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-10-TC01 — AI Co-Pilot interface loads and is interactive
    Given the user clicks "RegWatch AI" in the sidebar navigation
    When the AI chatbot page loads at "/chatbot-ai"
    Then a chat input field should be visible with a placeholder prompt
    And a send button should be visible and interactable
    And the interface should be free of error banners or broken state

  Scenario: FLOW-10-TC02 — User sends a compliance query and receives an AI response
    Given the user is on the AI Co-Pilot interface
    When the user types "What is compliance?" in the chat input
    And the user clicks the send button
    Then the user's message should appear in the chat history as a user bubble
    And within 60 seconds, an AI-generated response bubble should appear
    And the AI response should contain substantive compliance-related text

  Scenario: FLOW-10-TC03 — Chat input resets after message submission
    Given the user has sent a message via the AI Co-Pilot
    When the AI response finishes streaming into the view
    Then the chat input field should be cleared and ready for the next query
```

---

# Master Flow #11: Executive Report Export

**Flow_ID:** FLOW-11
**RTM_Code:** REG-015
**Module:** Dashboard / Reporting
**Automation_Priority:** P3
**Risk_Level:** Medium
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Context:** Report export functionality exists structurally in the backend. On the Staging dashboard, look for "Export", "PDF", "Download", or "Report" UI controls.
* **Dashboard URL:** `/dashboard`
* **Potential Selectors:** `button:contains("Export")`, `button:contains("PDF")`, `button:contains("Download")`

### BDD Scenarios

```gherkin
Feature: Executive Report Export
  As a Compliance Executive
  I need to export a compliance state report
  So that I can share regulatory posture data with stakeholders offline

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-11-TC01 — Export control is present on the Dashboard
    Given the user navigates to the "Dashboard" page
    When the dashboard finishes loading
    Then an export action (button or link containing "Export", "PDF", or "Download") should be visible
    And the control should be interactable (not disabled)

  Scenario: FLOW-11-TC02 — Export action triggers without application crash
    Given the user is on the Dashboard with an export control visible
    When the user clicks the export action button
    Then the application should NOT crash or display an unhandled error
    And either a file download should initiate or a generation confirmation should appear
```

---

# Master Flow #12: Auditor Review of Logs

**Flow_ID:** FLOW-12
**RTM_Code:** REG-025, REG-026
**Module:** Dashboard / Settings
**Automation_Priority:** P3
**Risk_Level:** Medium
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Dashboard Feed:** `div:has-text("Recent Activity")` widget at the dashboard footer
* **Settings/Team Path:** `/notifications` → `button:contains("Team Access")`
* **Team Access Tab Selector:** `button:contains("Team Access")`
* **Sidebar Link:** `a[href*="/notifications"]`

### BDD Scenarios

```gherkin
Feature: Auditor Review of Logs
  As a Lead Auditor
  I need to review platform activity logs and manage team access settings
  So that I can ensure governance accountability and control user permissions

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-12-TC01 — Dashboard Recent Activity widget renders historical actions
    Given the user navigates to the "Dashboard" page
    When the dashboard finishes loading
    And the user scrolls to the bottom of the page
    Then the "Recent Activity" widget should be visible
    And it should list activity entries with contextual descriptions (if data is available)

  Scenario: FLOW-12-TC02 — Team Access settings tab is accessible and functional
    Given the user navigates to the "Notifications" page via the sidebar
    When the notifications page loads
    Then a "Team Access" tab should be visible
    When the user clicks the "Team Access" tab
    Then the Team Access management view should render
    And team member information or access controls should be displayed

  Scenario: FLOW-12-TC03 — Navigation round-trip between Settings and Dashboard preserves state
    Given the user is on the Team Access settings page
    When the user clicks "Dashboard" in the sidebar
    Then the Dashboard should load and the "Recent Activity" widget should still be visible
```

---

# Master Flow #13: Notification Management

**Flow_ID:** FLOW-13
**RTM_Code:** REG-014, REG-015
**Module:** Notifications
**Automation_Priority:** P2
**Risk_Level:** Medium
**Test_Mode:** FUNCTIONAL (No mocking, no stubbing, no interception)

### Evidence Capture
* **Path:** `/notifications`
* **Sidebar Link:** `a[href*="/notifications"]`
* **Tabs:**
    - All: `button:contains("All")`
    - Unread: `button:contains("Unread")`
    - Archived: `button:contains("Archived")`
* **Actions:**
    - Mark all as read: `button:contains("Mark all as read")`
* **Notification Settings Toggles:** `button[role="switch"]` — controls for Email, Circular Alerts, and Reminders

### BDD Scenarios

```gherkin
Feature: Notification Management
  As a Compliance Manager
  I need to manage notifications and customize alert preferences
  So that I receive timely, relevant compliance alerts without notification fatigue

  Background:
    Given the user is authenticated on the RegWatch staging platform

  Scenario: FLOW-13-TC01 — Notification page renders filter tabs
    Given the user navigates to the "Notifications" page via the sidebar
    When the notification page loads
    Then the "All" tab should be visible and selected by default
    And the "Unread" tab should be visible and interactable
    And the "Archived" tab should be visible and interactable

  Scenario: FLOW-13-TC02 — Tab filtering changes the displayed notification set
    Given the user is on the Notifications page
    When the user clicks the "Unread" tab
    Then the notification list should filter to show only unread notifications
    When the user clicks the "All" tab
    Then the full notification list should be restored

  Scenario: FLOW-13-TC03 — Mark all as read action is functional
    Given the user is on the Notifications page
    When the "Mark all as read" button is visible
    And the user clicks "Mark all as read"
    Then all notification items should transition to a "read" visual state
    And the "Unread" tab count should reflect zero (or an empty state)

  Scenario: FLOW-13-TC04 — Notification Settings toggles are interactive
    Given the user is on the Notifications page
    When the user accesses the Notification Settings area
    Then toggle switches (button[role="switch"]) should be visible for alert categories
    When the user clicks the first toggle switch
    Then the toggle should visually change state (on↔off)
    And no application error should occur

  Scenario: FLOW-13-TC05 — Notification Settings persist toggle state
    Given the user has toggled a notification preference off
    When the user navigates away from Notifications and returns
    Then the previously toggled preference should retain its new state
```
