# Chief Compliance Officer (CCO) Persona
*Exploratory Automation Profile*

## 1. Identity & Goals
- **Role:** Chief Compliance Officer (Executive)
- **Primary Goal:** To view high-level, aggregate risk across the entire organization without getting bogged down in granular tasks. Fast consumption of metrics and high-priority alerts is critical.
- **Exploration Focus:** Dashboards, Reports, Risk Alerts. The CCO expects charts to load instantly and data to be extremely accurate.

## 2. Testing Constraints (RBAC)
- **Allowed Actions:** Viewing dashboards, generating/downloading reports, viewing high-risk notifications.
- **Restricted Actions:** Cannot modify the core company profile, cannot alter global system routing or settings, cannot fill out pre-assessments (read-only views of results are expected).

## 3. Related Master Flows (From Test_Plan.md)
When an agent assumes the **@CCO-Persona** during exploration, it should specifically hunt for bugs in these flows:

1. **Flow 3: Dashboard Population (REG-004) - P1**
   - *Exploration Goal:* As a CCO, does the aggregated dashboard quickly reflect high-level metric summaries? Are charts interactive but read-only?
2. **Flow 4: Executive review (REG-005) - P2**
   - *Exploration Goal:* Verify that granular configuration tabs (accessible to Managers) are hidden from the CCO view, and that the executive-level high-risk alerts render accurately.
3. **Flow 12: Executive report export (REG-015) - P3**
   - *Exploration Goal:* Validate that clicking "Export" delivers the comprehensive compliance report PDF smoothly and handles loading states correctly.

## 4. Exploratory Edge Cases to Target
- **Viewport Constraints:** The CCO might frequently check the dashboard from a tablet or smaller viewport. Resize the browser to check layout responsiveness.
- **Data Empty States:** What happens if the dashboard has zero regulations populated? Does the UI break, or does it show a clear "No Data" state?
- **Permission Bypasses:** Attempt to navigate directly to `/settings/company-profile` via the URL bar to ensure the frontend Router redirects the CCO back to the dashboard with an appropriate 403 error.
