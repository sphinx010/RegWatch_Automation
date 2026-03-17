## [BDD_BUG_001] Signup Hard Failure - 500 Internal Server Error (Blocker)

**Flow_ID:** FLOW-01
**RTM_Code:** REG-001
**Module:** Onboarding / Auth
**Priority:** Blocker
**Risk_Level:** Critical

**Scenario:** Successful new organization signup

**Expected_Result:**
The system should accept a valid email and redirect the user to the organization profile wizard.

**Actual_Result:**
- **Retry 1 (Generic Domain):** Returned 400 Bad Request ("Generic email providers not allowed").
- **Retry 2 (Corporate Domain: @opexconsult.co.uk):** Bypassed domain validation but returned a **500 Internal Server Error** with the UI message: `"Failed to create user"`.

**Evidence:**
* **URL:** `https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io/signup`
* **Error Message:** "Failed to create user" (UI Banner)
* **Screenshot:** [signup_failure_500_error_1773708076493.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/signup_failure_500_error_1773708076493.png)
* **API Details:** `POST /api/auth/create` -> HTTP 500

---

## [BDD_BUG_002] Infinite Reassessment Loading & Data Population Blocker (Blocker)

**Flow_ID:** FLOW-02, FLOW-05, FLOW-06, FLOW-07, FLOW-08, FLOW-09
**RTM_Code:** REG-002, REG-004
**Module:** Sidebar / Regulations
**Priority:** Blocker
**Risk_Level:** Critical

**Scenario:** User triggers AI profile reassessment from the dashboard

**Expected_Result:**
The system should initiate the AI profile mapping scan, the button should show "Reassessing...", and the dashboard/regulations list should eventually refresh with updated insights.

**Actual_Result:**
The "Reassess" button remains in a disabled "Reassessing..." state indefinitely. Even after manual refreshes, the Regulations list remains empty ("No regulations found matching your filters") with no active search or filters. This prevents interaction with any assessment or status-sync flows.

**Evidence:**
* **URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/regulations-page`
* **Observation:** Sidebar button stuck at "Reassessing...". Regulations table empty.
* **Screenshot:** [regulations_infinite_loading_1773706313101.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/regulations_infinite_loading_1773706313101.png)

---

## [BDD_BUG_003] Empty AI Co-Pilot Response (Major)

**Flow_ID:** FLOW-10
**RTM_Code:** REG-022
**Module:** AI Co-Pilot
**Priority:** Major
**Risk_Level:** High

**Scenario:** User asks a compliance question in the chat interface

**Expected_Result:**
The system should display an AI-generated response container and the response should contain relevant guidance based on the PRD context.

**Actual_Result:**
The system generates a chat bubble for the user message and triggers a response container (highlighted bar), but the container is empty. No text is rendered even after extended wait times.

**Evidence:**
* **URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/chatbot-ai`
* **Observation:** User message visible, AI response bubble/container is present but contains no text content.
* **Screenshot:** [regwatch_ai_empty_response_1773706464306.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/regwatch_ai_empty_response_1773706464306.png)

---

## [BDD_BUG_004] Missing Executive Report Export Control (Specification Mismatch)

**Flow_ID:** FLOW-11
**RTM_Code:** REG-015
**Module:** Dashboard / Reporting
**Priority:** Major
**Risk_Level:** Medium

**Scenario:** User exports a PDF compliance report (Expected)

**Expected_Result:**
The system should display an "Export Report" button or download icon on the dashboard cards or profile menu to trigger PDF generation.

**Actual_Result:**
No export buttons, download icons, or report links found across the Dashboard, Profile menu, or Settings tabs. The feature is defined in the BDD scenarios but is not present in the current UI build.

**Evidence:**
* **URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Observation:** Verified static state of compliance cards and profile dropdown. No export triggers identified.
* **Screenshot:** [dashboard_missing_export_final_1773706712223.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/dashboard_missing_export_final_1773706712223.png)

---

## [BDD_BUG_005] Recent Activity Logging Failure (Major)

**Flow_ID:** FLOW-12
**RTM_Code:** REG-024
**Module:** Dashboard / Audit Logs
**Priority:** Major
**Risk_Level:** Medium

**Scenario:** Auditor reviews system activity logs on the dashboard

**Expected_Result:**
The 'Recent Activity' card should display a chronological list of actions (e.g., "Verification logged in", "AI assessment initiated").

**Actual_Result:**
The card remains in an empty state ("No recent activity") even after significant user interactions including authentication and AI chatbot queries. This prevents audit traceability.

**Evidence:**
* **URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/dashboard`
* **Observation:** Performed Login and AI Co-Pilot query; Dashboard card still shows "No recent activity".
* **Screenshot:** [recent_activity_empty_state_1773706814432.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/recent_activity_empty_state_1773706814432.png)

---

## [BDD_BUG_006] Notification UI & Feedback Issues (Minor/Major)

**Flow_ID:** FLOW-13
**RTM_Code:** REG-025, REG-026
**Module:** Settings / Notifications
**Priority:** Major
**Risk_Level:** Low

**Scenario:** User manages notification preferences in Settings

**Expected_Result:**
1. All toggles (Email, Push, Dashboard) should have clear labels.
2. Clicking 'Save Changes' should show a success toast message.

**Actual_Result:**
1. The 'Push notifications' toggle label is missing from the UI.
2. No success toast message is displayed upon saving, although the settings do persist after a page refresh.

**Evidence:**
* **URL:** `https://reg-watch-client-qa.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/settings`
* **Observation:** Verified persistence after refresh (PASS), but UI feedback and labeling are missing (FAIL).
* **Screenshot:** [notification_settings_modified_1773707175432.png](file:///C:/Users/Ayooluwa/.gemini/antigravity/brain/2d3c1c80-c92b-4255-8715-63c0bb7d6608/notification_settings_modified_1773707175432.png)

---





