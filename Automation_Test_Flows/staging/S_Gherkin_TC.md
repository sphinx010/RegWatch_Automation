# Staging Gherkin Scenarios - Master Flows

```gherkin
Flow_ID: FLOW-03
RTM_Code: REG-004
Module: Dashboard
Automation_Priority: Core (P1)
Risk_Level: High
Cypress_Intercept: GET /api/v1/dashboard/*/summary

Feature: Dashboard Population

  Scenario: Compliance Executive validates organizational risk metrics on the dashboard
    Given the Chief Compliance Officer (CCO) is authenticated within the RegWatch ecosystem
    And the CCO is positioned on the high-level executive dashboard page
    When the system finishes aggregating the dynamic compliance telemetry
    Then the system should definitively display the "Overall Compliance" score 
    And the "Regulations" count should reflect the systemic profile obligation inventory 
    And the specific "High Risk" regulations integer count should be visibly prioritized 
    And the "Compliance by Regulator" risk visualization should explicitly map "Central Bank of Nigeria"
    And the "Reassess" trigger should be interactive in the command sidebar for tactical profile resets
```

---

```gherkin
Flow_ID: FLOW-04
RTM_Code: REG-004
Module: Regulations
Automation_Priority: Core (P1)
Risk_Level: High
Cypress_Intercept: GET /api/v1/regulation/monitored

Feature: Regulation Discovery and Filtering

  As a Compliance Analyst
  I want to search and filter the regulation matrix
  So that I can identify specific compliance requirements relevant to my organization

  Scenario: Compliance Analyst filters regulations by keyword and risk level
    Given the Compliance Analyst is authenticated within the RegWatch dashboard
    And the Analyst navigates to the "Regulations" module via the sidebar
    When the Analyst inputs "Cash" into the central search bar
    And the Analyst selects "Medium" from the primary Risk filter dropdown
    Then the regulations grid should deterministically update to display only "Medium" risk items containing "Cash"
    And a clearable filter chip for "Medium" should mount visibility beneath the filter bar
    When the Analyst triggers the "View" action on a targeted regulation card
    Then the UI should effortlessly transition to the dedicated regulation detail page
    And the detail page title and reference identifier must correspond to the selected item
```

---

```gherkin
Flow_ID: FLOW-05
RTM_Code: REG-009, REG-010
Module: Assessment Engine
Automation_Priority: Core (P1)
Risk_Level: Critical
Cypress_Intercept: POST /api/v1/pre-assessments/*/answer

Feature: Regulatory Pre-Assessment Execution

  As a Compliance Analyst
  I want to complete a dynamic AI-generated pre-assessment questionnaire
  So that I can determine my organization's compliance baseline for a specific regulation

  Scenario: Compliance Analyst successfully executes a regulatory gap analysis
    Given the Compliance Analyst is viewing a "Not Started" regulation detail page
    When the Analyst triggers the "Start Pre-Assessment" action
    Then the platform should mount the dynamic questionnaire interface
    When the Analyst provides explicit "Yes" or "No" answers to all generated questions
    And the Analyst successfully engages the "Submit Assessment" button
    Then a confirmation modal should intercept the flow for submission validation
    When the Analyst affirms the submission within the modal
    Then the system should compute and transition to the Assessment Complete dashboard
    And a definitive "Assessment Successfully Analyzed" banner should be visible
    And the "Overall Compliance Score" wheel should visibly format the calculated percentage
    And a categorical breakdown charting "YES/NO/N/A" responses should definitively summarize the input context
```
