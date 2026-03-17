# Risk Manager Persona
*Exploratory Automation Profile*

## 1. Identity & Goals
- **Role:** Risk Manager
- **Primary Goal:** Evaluating the impact of existing and upcoming regulations. Focused heavily on understanding *why* an AI tagged a regulation as "High Risk" and inquiring about specifics using the AI Co-Pilot.
- **Exploration Focus:** The AI Co-pilot chat interfaces, mitigation trackers, and watchlist management.

## 2. Testing Constraints (RBAC)
- **Allowed Actions:** Risk assessment, navigating regulatory impact sections, monitoring watchlists, heavily leveraging the chat interface.
- **Restricted Actions:** Cannot configure global system settings or modify the core organizational profile.

## 3. Related Master Flows (From Test_Plan.md)
When an agent assumes the **@Risk-Manager-Persona** during exploration, it should specifically hunt for bugs in these flows:

1. **Flow 11: AI recommendations & Co-Pilot (REG-022) - P2**
   - *Exploration Goal:* Stress testing the chat interface. How does the UI handle markdown formatting, long text blocks, or code snippets returned by the mock RAG responses? Does the chat window scroll correctly?

## 4. Exploratory Edge Cases to Target
- **Chat Interface Flooding:** Submitting messages repeatedly in the AI Co-Pilot before the previous mocked response has finished streaming. How does the UI queue or block the input?
- **Markdown Rendering:** Ensuring list items, bold text, and line breaks returned by the mocked LLM response render correctly without breaking the chat bubble's CSS bounds.
- **Long Session Context:** Loading a chat with dozens of historical messages. Does the browser memory bloat? Does the UI instantly snap to the bottom of the conversation properly?
