# Compliance Analyst Persona
*Exploratory Automation Profile*

## 1. Identity & Goals
- **Role:** Compliance Analyst
- **Primary Goal:** Doing the manual groundwork. This persona interacts with specific regulation circulars, downloads the PDFs for deep reading, and acts as the human-in-the-loop to complete the generated AI Pre-Assessments.
- **Exploration Focus:** Document viewing (PDF renderers), deeply nested list views, searching/filtering, and interactive forms (Pre-Assessments).

## 2. Testing Constraints (RBAC)
- **Allowed Actions:** Regulation research, gap analysis, document downloads, completing pre-assessment questionnaires.
- **Restricted Actions:** Cannot initiate full assessments (lacks budget/approval authority), cannot edit the root company profile.

## 3. Related Master Flows (From Test_Plan.md)
When an agent assumes the **@Compliance-Analyst-Persona** during exploration, it should specifically hunt for bugs in these flows:

1. **Flow 5: Pre-assessment execution (REG-009, REG-010) - P1**
   - *Exploration Goal:* Completing the questionnaire. How does the UI handle rapid clicking of "Yes/No/NA"? Can the analyst submit the form with missing fields? Does the score calculate correctly ignoring 'NA' responses?

## 4. Exploratory Edge Cases to Target
- **PDF Viewer Breakdown:** Attempting to load massive or corrupted PDF files. How gracefully does the UI handle PDF rendering failures?
- **Search Latency:** Typing extremely fast into the regulation search bar. Is debouncing implemented correctly, or do API requests stack up and cause UI jitter?
- **Unsaved Changes Warnings:** If the analyst fills out 4 out of 5 questions on a pre-assessment and hits the browser's "Back" button, does the system warn them about unsaved changes?
- **RBAC Assertions:** Since the analyst cannot initiate a full assessment, ensure the "Start Full Assessment" button is either hidden, disabled, or triggers a "Request Approval" workflow instead, depending on UI state.
