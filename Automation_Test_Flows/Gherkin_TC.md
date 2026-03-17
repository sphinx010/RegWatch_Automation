# Master Flow #1: New Organization Onboarding

**Flow_ID:** FLOW-01
**RTM_Code:** REG-001
**Module:** Onboarding
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `POST /api/v1/auth/signup`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io/login`
* **Target URL:** `https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io/signup`
* **Selectors:**
    - First Name: `input#firstName`
    - Last Name: `input#lastName`
    - Work Email: `input#email`
    - Password: `input#password`
    - Confirm Password: `input#confirmPassword`
    - Submit Button: `button:contains("Create Account")`
* **Visual Artifacts:** 
    - [Login Page](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/login_page_1773700010331.png)
    - [Signup Page](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/signup_page_1773700025257.png)

---

### BDD Scenario

**Feature:** Organization Onboarding
    *As a new institutional user*
    *I want to register my organization*
    *So that I can access regulatory compliance monitoring tools*

**Scenario: Successful new organization signup**
    **Given** the user is on the RegWatch signup page at "/signup"
    **When** the user enters "Testing" into the First Name field
    **And** the user enters "Organization" into the Last Name field
    **And** the user enters a unique professional email into the Work Email field
    **And** the user enters and confirms a valid password
    **And** the user clicks the "Create Account" button
    **Then** the system should send a `POST` request to `/api/v1/auth/signup`
    **And** the user should be redirected to the organization profile wizard
    **And** a success notification should be visible

**Scenario: Onboarding validation for empty fields (Edge Case)**
    **Given** the user is on the RegWatch signup page at "/signup"
    **When** the user clicks the "Create Account" button without filling mandatory fields
    **Then** the browser should display HTML5 validation prompts for the missing fields
    **And** no network request should be sent to the backend signup endpoint

# Master Flow #2: AI Profile Mapping

**Flow_ID:** FLOW-02
**RTM_Code:** REG-002
**Module:** Company Profile
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `POST /api/v1/profile/reassess`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Target Action:** Clicking the "Reassess" button in the sidebar.
* **Selectors:**
    - Reassess Button: `button:contains("Reassess")` (Verified visually in sidebar)
    - Profile Tab: `span:contains("Profile")` within Settings.
* **Visual Artifacts:** 
    - [Dashboard State](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/regwatch_dashboard_loaded_1773700626728.png)

---

### BDD Scenario

**Feature:** Company Profile AI Mapping
    *As a compliance manager*
    *I want the AI to rescan my organization profile*
    *So that my regulatory compliance data is up-to-date*

**Scenario: User triggers AI profile reassessment from the dashboard**
    **Given** the user is logged into the RegWatch platform
    **And** the user is on the "Dashboard" page
    **When** the user clicks on the "Reassess" button in the sidebar
    **Then** the system should initiate the AI profile mapping scan
    **And** the "Reassess" button should display a loading state "Reassessing..."
    **And** the dashboard should eventually refresh with updated regulatory insights

# Master Flow #3: Dashboard Population

**Flow_ID:** FLOW-03
**RTM_Code:** REG-004
**Module:** Dashboard
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `GET /api/v1/dashboard/*/summary`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Selectors:**
    - Compliance Card: `h3:contains("Overall Compliance")`
    - Score Text: `div:contains("0%")`
    - Total Regulations: `div:has(span:contains("Total Regulations"))`
    - High Risk Card: `div:has(span:contains("High Risk"))`
    - Active Assessments: `div:has(span:contains("Active Assessments"))`
    - Compliant Items: `div:has(span:contains("Compliant Items"))`
* **Visual Artifacts:** 
    - [Dashboard Metrics](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/dashboard_empty_state_1773700777657.png)

---

### BDD Scenario

**Feature:** Dashboard Data Population
    *As a Chief Compliance Officer*
    *I want to see my organization's compliance metrics populated on the dashboard*
    *So that I can quickly assess our regulatory risk profile*

**Scenario: Dashboard displays regulatory compliance metrics**
    **Given** the user is logged into the RegWatch platform
    **When** the user navigates to the "Dashboard"
    **Then** the system should fetch the dashboard summary from `/api/v1/dashboard/*/summary`
    **And** the "Overall Compliance" chart should be visible
    **And** the "Compliance by Regulator" section should be visible
    **And** summary cards for "Total Regulations", "High Risk", "Active Assessments", and "Compliant Items" should be visible
    **And** the metrics should reflect the data received from the backend

# Master Flow #4: Executive Review (Regulation Discovery)

**Flow_ID:** FLOW-04
**RTM_Code:** REG-005
**Module:** Regulations
**Automation_Priority:** P2
**Risk_Level:** Medium
**Cypress_Intercept:** `GET /api/v1/regulations`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/regulations-page`
* **Selectors:**
    - Search Bar: `input[placeholder='Search by title or circular number']`
    - Regulator Filter: `select:nth-of-type(1)` (CBN, NDIC, SEC, NDPC)
    - Risk Filter: `select:nth-of-type(2)` (High, Medium, Low)
    - Status Filter: `select:nth-of-type(4)`
* **Observed Behavior:** Searching triggers a reactive loading state. The list displays "No regulations found matching your filters" in the current environment.

---

### BDD Scenario

**Feature:** Regulation Search and Filtering
    *As a Compliance Manager*
    *I want to search and filter the regulations list*
    *So that I can quickly find specific compliance obligations*

**Scenario: User filters and searches the regulations list**
    **Given** the user is logged into the RegWatch dashboard
    **When** the user navigates to the "Regulations" page via the sidebar
    **Then** the system should display the "Search by title or circular number" input field
    **And** the system should display filters for "Regulator", "Risk", "Thematic Area", and "Status"
    **When** the user types "AML" into the search bar
    **Then** the system should display a loading state
    **And** the list should update to show matching results
    **When** the user selects "High" from the "Risk" filter
    **Then** the list should filter by high-risk regulations

# Master Flow #5: Pre-Assessment Execution

**Flow_ID:** FLOW-05
**RTM_Code:** REG-009, REG-010
**Module:** Assessment
**Automation_Priority:** Core (P1)
**Risk_Level:** Critical
**Cypress_Intercept:** `PUT /api/v1/pre-assessments/*/answer`
**Source:** System Specification & Functional Context (Live Exploration blocked by Empty State)

---

### Evidence Capture
* **Regulation List URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/regulations-page`
* **Observed Elements:**
    - Empty List Message: `span:contains("No regulations found matching your filters")`
    - Refresh Button: `button[title="Refresh"]`
* **Inferred Selectors (Standard Pattern):**
    - Regulation Row: `tr` or `div[role="row"]`
    - Start Assessment Button: `button:contains("Start Pre-Assessment")`
    - Survey Question: `div.question-text`
    - Submit Answer: `button:contains("Yes")`, `button:contains("No")`

---

### BDD Scenario

**Feature:** Regulatory Pre-Assessment Survey
    *As a Compliance Analyst*
    *I want to complete a surface-level assessment for a regulation*
    *So that I can identify immediate compliance gaps*

**Scenario: User completes a pre-assessment survey successfully**
    **Given** the user is on the "Regulations" page
    **And** a regulation is listed in the "Not Started" state
    **When** the user clicks on the regulation name
    **Then** the system should display the regulation detail view with the PDF viewer
    **And** the "Start Pre-Assessment" button should be visible
    **When** the user clicks "Start Pre-Assessment"
    **Then** the system should load 5 to 10 AI-generated questions
    **When** the user answers "Yes" or "No" to all questions
    **And** the user clicks "Submit Assessment"
    **Then** the system should send responses to `/api/v1/pre-assessments/*/answer`
    **And** the user should see a calculated compliance score
    **And** the regulation status should update to "Pre-Assessment Complete"

**Scenario: Handling "N/A" responses in scoring (Edge Case)**
    **Given** the user is answering a pre-assessment survey
    **When** the user marks a question as "N/A"
    **Then** the final score should exclude that question from the total calculation
    **And** the UI should display the updated percentage reflectively

# Master Flow #6: Full Assessment Initiation (RegComply Handoff)

**Flow_ID:** FLOW-06
**RTM_Code:** REG-011
**Module:** Integration
**Automation_Priority:** Core (P1)
**Risk_Level:** Critical
**Cypress_Intercept:** `POST /api/v1/assessments/initiate-full`
**Source:** System Specification & Functional Context

---

### Evidence Capture
* **Entry Point:** Regulation Detail View (post-pre-assessment)
* **Inferred Selectors:**
    - Action Button: `button:contains("Start Full Assessment")`
    - Modal Title: `h2:contains("Upgrade to RegComply")` (If unsubscribed)
    - Modal Close: `button[aria-label="Close"]`
* **Workflow:** Transition from RegWatch (Intelligence) to RegComply (Execution).

---

### BDD Scenario

**Feature:** Transition to Full Compliance Assessment
    *As a Compliance Manager*
    *I want to initiate a full assessment in RegComply*
    *So that I can assign remediation tasks to my team*

**Scenario: User initiates full assessment with active subscription**
    **Given** the user has completed a pre-assessment for a regulation
    **And** the organization has an active RegComply subscription
    **When** the user clicks "Start Full Assessment"
    **Then** the system should send a request to `/api/v1/assessments/initiate-full`
    **And** the user should be automatically redirected to the RegComply platform
    **And** the assessment context should be passed successfully

**Scenario: Subscription gate blocks full assessment initiation**
    **Given** the user has completed a pre-assessment for a regulation
    **But** the organization does NOT have an active RegComply subscription
    **When** the user clicks "Start Full Assessment"
    **Then** the system should display the Subscription Gate Modal
    **And** the user should see an option to "Upgrade" or "View Pricing"
    **And** no redirect to RegComply should occur until payment is confirmed

# Master Flow #7: Task Generation in RegComply (API Trigger)

**Flow_ID:** FLOW-07
**RTM_Code:** REG-013
**Module:** Integration
**Automation_Priority:** P2 (API Test)
**Risk_Level:** Critical
**Cypress_Intercept:** `POST /api/v1/assessments/create` (RegComply endpoint)
**Source:** System Specification

---

### Evidence Capture
* **Trigger:** Success response from `initiate-full` assessment.
* **Outcome:** RegComply ingestion service receives assessment context and partitions requirements into tasks.
* **Behavioral Check:** The user in RegWatch should see a "Handoff in Progress" or "Assessment Created" state.

---

### BDD Scenario

**Feature:** Regulatory Task Generation
    *As a Compliance Manager*
    *I want the system to automatically generate remediation tasks in RegComply*
    *So that my team knows exactly what actions to take for compliance*

**Scenario: Successful task generation in RegComply platform**
    **Given** a full assessment has been initiated from RegWatch
    **When** the system calls the RegComply assessment creation API
    **Then** the RegComply service should return a "201 Created" response
    **And** the assessment requirements should be decomposed into specific remediation tasks
    **And** the tasks should be visible to assigned roles in the RegComply dashboard

# Master Flow #8: Webhook Sync Receipt (Status Update)

**Flow_ID:** FLOW-08
**RTM_Code:** REG-014
**Module:** Webhook / UI
**Automation_Priority:** Core (P1 API)
**Risk_Level:** Critical
**Cypress_Intercept:** `POST /api/v1/webhooks/compliance-status`
**Source:** System Specification & Functional Context

---

### Evidence Capture
* **Endpoint:** `{{baseURL}}/api/v1/webhooks/compliance-status`
* **Trigger:** Task completion or status change in RegComply.
* **Invariants:** The UI must NOT display a "Compliant" status without this backend confirmation.

---

### BDD Scenario

**Feature:** Real-time Compliance Status Synchronization
    *As a Compliance Manager*
    *I want my RegWatch dashboard to reflect real-time task completion from RegComply*
    *So that I always have an accurate view of my organization's compliance posture*

**Scenario: RegWatch dashboard updates via RegComply webhook**
    **Given** a full assessment is in progress for a regulation
    **And** the RegWatch dashboard shows the regulation as "In Progress"
    **When** the RegComply platform sends a status update via `POST /api/v1/webhooks/compliance-status`
    **Then** the RegWatch backend should validate the webhook signature and payload
    **And** the specific regulation status should update to "Compliant" (or the relevant state)
    **And** the user interface should reflect the update without requiring a manual page refresh

# Master Flow #9: Compliance Score Update (UI Rendering)

**Flow_ID:** FLOW-09
**RTM_Code:** REG-014, REG-010
**Module:** Dashboard
**Automation_Priority:** Core (P1)
**Risk_Level:** High
**Cypress_Intercept:** `GET /api/v1/pre-assessments/analytics/dashboard`
**Source:** System Specification & Functional Context

---

### Evidence Capture
* **Initial State:** Dashboard shows 0% compliance or a specific baseline.
* **Update Mechanism:** Webhook sync triggers a state update in the frontend (likely via Redux or polling).
* **Observed UI Elements:**
    - Compliance Ring: `svg.compliance-ring`
    - Score Text: `span.score-percentage` (e.g., "75%")
    - Status Badge: `span.badge:contains("Compliant")` (Color: Green)

---

### BDD Scenario

**Feature:** Dashboard Compliance Score Visualization
    *As a Chief Compliance Officer*
    *I want the dashboard metrics to visually update when tasks are completed*
    *So that I can see our compliance trend in real-time*

**Scenario: User observes dashboard score update after task completion**
    **Given** the user is viewing the RegWatch dashboard
    **And** the "Overall Compliance" score is currently at "60%"
    **When** a task is successfully synced from RegComply
    **Then** the "Overall Compliance" score text should dynamically change to "65%" (or higher)
    **And** the compliance ring SVG should visually expand its progress arc
    **And** the "Compliant Items" count card should increment by 1
    **And** the color of the status indicators should remain green for the compliant items

# Master Flow #10: AI Recommendations (AI Co-Pilot)

**Flow_ID:** FLOW-10
**RTM_Code:** REG-022
**Module:** AI Co-Pilot
**Automation_Priority:** P2
**Risk_Level:** High
**Cypress_Intercept:** `POST /api/v1/chat`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/chatbot-ai`
* **Selectors:**
    - Chat Input: `input[placeholder*="Describe your business"]`
    - Send Button: `button.bg-indigo-100` (Paper plane icon)
    - New Chat Button: `button:contains("New Chat")`
* **Visual Artifacts:** 
    - [AI Co-Pilot Interface](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/regwatch_ai_chat_interface_1773702014122.png)

---

### BDD Scenario

**Feature:** AI Co-Pilot Compliance Assistant
    *As a Compliance Manager*
    *I want to ask the AI Co-Pilot questions about regulations*
    *So that I can get contextual guidance on my compliance obligations*

**Scenario: User asks a compliance question in the chat interface**
    **Given** the user is viewing the "RegWatch AI" chat interface
    **When** the user enters "How do I complete a pre-assessment?" in the input field
    **And** the user clicks the blue send button
    **Then** the message should appear in the user's chat bubble
    **And** a POST request should be sent to `/api/v1/chat`
    **And** the system should display an AI-generated response container
    **And** the response should contain relevant guidance based on the PRD context

# Master Flow #11: Executive Report Export

**Flow_ID:** FLOW-11
**RTM_Code:** REG-015
**Module:** Dashboard / Reporting
**Automation_Priority:** P3
**Risk_Level:** Medium
**Cypress_Intercept:** `POST /api/v1/assessment/*/report`
**Source:** System Specification (Live Exploration shows no UI trigger in current build)

---

### Evidence Capture
* **Inspected URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Observed State:**
    - Compliance Summary Cards: Static (No menus or download icons found).
    - Profile/Settings: No "Export" or "Reports" sub-tabs visible.
* **Visual Artifacts:** 
    - [Dashboard Inspection](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/dashboard_compliance_cards_closeup_1773702313259.png)

---

### BDD Scenario

**Feature:** Executive Compliance Reporting
    *As a Chief Compliance Officer*
    *I want to export my compliance summary as a PDF report*
    *So that I can present findings to the board*

**Scenario: User exports a PDF compliance report (Expected)**
    **Given** the user is viewing the RegWatch Dashboard
    **And** data is populated for at least one tracked regulator
    **When** the user clicks the "Export Report" button (Actionable trigger location TBD)
    **Then** the system should send a request to `/api/v1/assessment/*/report`
    **And** a PDF file should be generated and downloaded to the user's device
    **And** the report should contain the latest compliance scores and high-risk items

# Master Flow #12: Auditor Review of Logs

**Flow_ID:** FLOW-12
**RTM_Code:** REG-025, REG-026
**Module:** Settings / Compliance
**Automation_Priority:** P3
**Risk_Level:** Medium
**Cypress_Intercept:** `GET /api/v1/team/audit-logs`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/settings`
* **Observed State:**
    - Team Access Tab: Lists team members and invite forms. 
    - Dashboard: "Recent Activity" card available at the bottom right.
* **Selectors:**
    - Dashboard Activity: `h2:contains("Recent Activity")`
    - Team Access Tab: `button:contains("Team Access")`

---

### BDD Scenario

**Feature:** Activity Logging and Auditor Review
    *As a Compliance Auditor*
    *I want to track system activity and compliance workflow changes*
    *So that I can verify the integrity of the compliance process*

**Scenario: User views recent compliance activity on the dashboard**
    **Given** the user is on the RegWatch Dashboard
    **When** the user scrolls to the "Recent Activity" section
    **Then** the system should display a list of the 5 most recent actions (e.g., "AI Profile Scanned", "Assessment Submitted")
    **And** each entry should show the user who performed the action and the timestamp

# Master Flow #13: Notification Management

**Flow_ID:** FLOW-13
**RTM_Code:** REG-014, REG-015
**Module:** Notifications
**Automation_Priority:** P2
**Risk_Level:** Medium
**Cypress_Intercept:** `GET /api/v1/notifications`
**Source:** Live Browser Exploration (Detective)

---

### Evidence Capture
* **Initial URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/notifications`
* **Settings URL:** `/settings` (Notification Tab)
* **Selectors:**
    - Mark All as Read: `button:contains("Mark all as read")`
    - All/Unread/Archived Tabs: `button:contains("All")`
    - Toggle Switch: `button[role="switch"]` or similar in Notification Settings.
* **Visual Artifacts:** 
    - [Notifications List](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/notifications_empty_state_1773702935454.png)
    - [Notification Settings](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/notification_settings_page_1773702989218.png)

---

### BDD Scenario

**Feature:** Compliance Alerting and Notifications
    *As a Compliance Manager*
    *I want to configure and receive notifications for regulatory changes*
    *So that I never miss an important regulatory update or deadline*

**Scenario: User manages notification preferences**
    **Given** the user is in the "Notification" tab under Settings
    **When** the user toggles "New Circular Alerts" to "OFF"
    **Then** the system should update the preference via the backend
    **And** the user should no longer receive push/in-app notifications for new circulars
    **When** the user navigates to the "Notifications" sidebar page
    **Then** the user should be able to see, filter, and archive existing alerts








