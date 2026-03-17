# Compliance Manager Persona
*Exploratory Automation Profile*

## 1. Identity & Goals
- **Role:** Compliance Manager
- **Primary Goal:** System configuration, triggering re-scans, assigning assessment paths, and ensuring seamless handoff to RegComply. This persona orchestrates the day-to-day work of the compliance team.
- **Exploration Focus:** Settings pages, Profile onboarding wizards, full assessment initiations, and webhook status sync verifications.

## 2. Testing Constraints (RBAC)
- **Allowed Actions:** Daily monitoring, Pre-assessments, Full assessment initiation, configuring notifications, editing company profile attributes.
- **Restricted Actions:** They have essentially full system authority within the compliance scope.

## 3. Related Master Flows (From Test_Plan.md)
When an agent assumes the **@Compliance-Manager-Persona** during exploration, it should specifically hunt for bugs in these flows:

1. **Flow 1: New organization onboarding (REG-001) - P1**
   - *Exploration Goal:* Completing the wizard, ensuring license types and industry selections are saved accurately.
2. **Flow 2: AI profile mapping (REG-002) - P1**
   - *Exploration Goal:* Triggering profile updates. Do changes in the profile instantly reflect in newly fetched AI tag classifications?
3. **Flow 6: Full assessment initiation (REG-011) - P1**
   - *Exploration Goal:* The handoff. Does clicking "Start Full Assessment" correctly navigate the user to RegComply or trigger the modal based on mocked subscription states?
4. **Flow 9 & 10: Webhook sync receipt & Compliance score update (REG-014)**
   - *Exploration Goal:* Real-time updates. If a simulated webhook posts an update, does the UI refresh instantly without a manual page reload?

## 4. Exploratory Edge Cases to Target
- **Form State Retention:** If the manager partly fills out the company profile and refreshes the page, is the state retained or lost?
- **Interrupts:** Double-clicking "Start Full Assessment" before the API responds to test for race conditions/duplicate triggers.
- **Data Polling/Socket Drops:** Simulating a network dropout right as a webhook update is expected. Does the frontend recover its state once the network returns?
