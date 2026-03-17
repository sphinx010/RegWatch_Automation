# RegWatch: Agent Onboarding Context & System Specification

## 1. System Identity & Purpose
You are assisting with **RegWatch**, an AI-driven regulatory intelligence and compliance monitoring platform for Nigerian financial institutions.
- **Core Goal**: Automate discovery, classification, and monitoring of compliance obligations.
- **Ecosystem**: Part of the RegTech365 suite. Heavily integrates with **RegComply** for task execution and **RegPort** for submissions.
- **Value Proposition**: 80% reduction in regulation identification time; >90% accuracy in regulatory classification.

## 2. Technical Stack & Architecture
- **Frontend**: React.js, TypeScript, Redux Toolkit, Material-UI/Ant Design.
- **Backend**: Node.js or Python (FastAPI).
- **Database**: PostgreSQL (relational), Pinecone/pgvector (vector embeddings), S3/Blob (documents), Redis (caching).
- **AI Integration**: OpenAI/Anthropic APIs for classification; LangChain/LlamaIndex for agentic workflows (RAG, mapping, scoring).
- **Microservices Architecture**: API Gateway routing to specialized bounded contexts (Auth, Teams, Industry, Assessment, Companies/Regulations).

## 3. Core Workflows (Agentic Action Pathways)
1. **Onboarding & Scanning**:
   - **Input**: Company profile attributes (industry, licenses, jurisdictions).
   - **Agent Action**: Map profile to relevant regulators (e.g., CBN, SEC, NDPC, NAICOM).
   - **Classification**: Tag regulations with thematic areas (AML, Data Privacy) and assign risk levels (High/Medium/Low).
2. **Pre-Assessment Execution**:
   - **Agent Action**: Dynamically generate 5-10 Yes/No AI questions per regulation to evaluate surface compliance.
   - **Scoring**: Automatically calculate compliance percentages based on user responses and identify critical gaps.
3. **RegComply Handoff**:
   - **Trigger**: "Start Full Assessment" via UI.
   - **Action**: Validate subscription via ecosystem billing service. Call `POST /api/v1/assessments/initiate-full` to pass context to RegComply.
   - **Task Distribution**: AI breaks down regulation requirements into specific remediation tasks and distributes to distinct roles (Risk Manager, Auditor, etc.).
   - **Sync**: Webhook listens for RegComply task completion `POST /api/v1/webhooks/compliance-status` to update the RegWatch dashboard.
4. **AI Co-Pilot**:
   - **Input**: User natural language query via a persistent chat interface.
   - **Action**: RAG over vector DB for contextual regulatory answers based on the user's customized company profile and compliance assessment history.

## 4. API Ecosystem & Integration Rules
All endpoints run via `{{baseURL}}` and require `Authorization: Bearer <token>` (except public Auth routes).

### 4.1 Specialized Collections
- **[Auth]**: `/auth/*` - Handles Login, SSO, OTP creation, session limits.
- **[Team]**: `/team/*` - Manages team member invitations, role hierarchies, and activity auditing.
- **[Industry]**: `/industry/*` - Taxonomy mapping and organizational categorization logic (e.g., matching a 'Fintech' profile to 'CBN' regulations).
- **[PreAssessment]**: `/assessment/*` - CRUD for intelligent pre-assessment questionnaires, scoring analytics, and exported reports.
- **[Companies/Regulations]**: Core tracking hub bridging everything together.
   - `/company/*` - Profile sync.
   - `/regulation/*` - Search, fetch risk levels, metadata, obligations.
   - `/dashboard/*` - Aggregate states for C-Suite summaries.
   - `/notification/*` - Configurable alerting (push, email, SMS) tied to specific regulation changes.

### 4.2 Error Handling Expected State
- `400` Bad Request (missing/invalid schema)
- `401` Unauthorized (missing token)
- `403` Forbidden (requires specific RBAC level, e.g., only CCO can delete)
- `404` Not Found (resource ID not tracked)
- `409` Conflict (duplicate registration or duplicate monitoring rule)

## 5. Security & Constraints
- **Data Privacy**: Strict adherence to NDPR/GDPR. Handle PII with encryption (AES-256 / TLS 1.3). Store passwords hashed.
- **RBAC Enforcement**: Validate permissions before allowing writes or assessment submissions:
   - *Levels:* `owner` (full system right), `admin` (config), `senior_compliance_officer` (approve), `compliance_officer` (submit), `viewer` (read-only).
- **Performance Thresholds**:
   - Dashboard loads within `3s`.
   - AI Profile rescan within `30s` with a max bounds of `60s`.

## 6. Agent Prompting & Code Gen Guidelines
When interacting with or generating code for the RegWatch system:
1. **Prioritize Modularization**: Keep frontend components decoupled; delegate remote state fetching to React Query, isolating global UI states to Redux.
2. **Ensure Interface Safety**: Always use TypeScript interfaces matching the core entities (Organization, Regulator, Regulation, PreAssessment). Do not assume loose types.
3. **Data Fetching Constraints**: Always implement pagination params (`page`, `limit`) and sensible sorting config (`sortBy`, `order`) for any array-returning endpoint (e.g., companies, regulations, team members).
4. **Security Isolation**: Assume all data inputs are malicious. Do not log sensitive user payloads or tokens. Ensure routes are guarded by token validation middleware.
5. **UI Aesthetics**: Default to the RegTech365 Design System. Use `Primary: Professional Blue (#1976D2)` and color-coded status badges (`Red=High Risk/Error`, `Amber=Medium Risk/Warning`, `Green=Low Risk/Compliant`).
