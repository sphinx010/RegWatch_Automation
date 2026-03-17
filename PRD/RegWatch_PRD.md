Tab 1
PRODUCT REQUIREMENTS DOCUMENT
RegWatch
Regulatory Intelligence & Compliance Monitoring Platform
Document Version 1.0
Date January 30, 2026
Product RegWatch (RegTech365 Suite)
Target Industry Financial Services (Phase 1)
Author VP of Product, RegTech365
Table of Contents
1. Executive Summary
2. Product Overview
3. Core Features & Functional Requirements
4. Technical Architecture
5. Data Security & Privacy
6. Integration Specifications
7. User Experience & Interface Design
8. Performance Requirements
9. Quality Assurance & Testing
10. Implementation Roadmap
11. Success Metrics & KPIs
12. Risk Analysis & Mitigation
13. Assumptions & Dependencies
14. Glossary
15. Appendices
1. Executive Summary
RegWatch is a comprehensive regulatory intelligence and compliance monitoring
platform designed for financial institutions operating within regulated environments. As a
core component of the RegTech365 ecosystem, RegWatch provides real-time regulatory
scanning, intelligent classification, risk assessment, and compliance tracking capabilities.
The platform leverages agentic AI workflows to automatically identify applicable
regulations based on organizational profiles, classify regulatory requirements by
thematic areas and risk levels, and provide actionable compliance insights through an
AI-powered co-pilot. RegWatch seamlessly integrates with RegComply to enable
end-to-end compliance management from regulation discovery to full assessment and
remediation.
1.1 Key Objectives
● Automate the discovery and monitoring of applicable regulations for financial
institutions
● Provide intelligent classification and risk-based prioritization of regulatory
requirements
● Enable real-time compliance status visibility for executives and compliance teams
● Streamline the transition from regulation awareness to compliance assessment and
action
● Deliver contextual AI assistance for compliance-related queries and decision-making
1.2 Success Metrics
● Reduction in time to identify applicable regulations by 80%
● 90% accuracy in regulatory classification and risk assignment
● Real-time compliance dashboard availability with load times under 5 seconds
● 70% adoption rate among compliance teams within 6 months of launch
● Seamless integration with RegComply achieving 95% workflow completion rate
2. Product Overview
2.1 Product Vision
RegWatch aims to transform how financial institutions discover, understand, and
respond to regulatory changes. By combining intelligent automation with human
expertise, RegWatch eliminates the manual burden of regulatory monitoring while
ensuring organizations maintain comprehensive visibility into their compliance
obligations.
2.2 Product Positioning
RegWatch is positioned as the regulatory intelligence layer within the RegTech365 suite,
serving as the entry point for compliance workflows. It bridges the gap between
regulatory awareness and compliance action by:
● Automatically identifying all regulations applicable to an organization based on their
operational profile
● Providing context-aware classification and risk assessment of regulatory
requirements
● Enabling seamless handoff to RegComply for detailed compliance assessment and
remediation
● Offering executive-level visibility into organizational compliance posture
2.3 Target Users
User Role Primary Needs Key Features
Chief Compliance Officer Executive oversight, risk
visibility, strategic
compliance planning
Executive dashboard,
compliance reports,
high-risk alerts
Compliance Manager Daily monitoring, regulation
analysis, compliance
coordination
Detailed regulation views,
pre-assessments,
notifications, AI co-pilot
Risk Manager Risk assessment,
regulatory impact analysis,
mitigation tracking
Risk-based filtering, impact
assessments, regulatory
monitoring
Compliance Analyst Regulation research, gap
analysis, documentation
Search capabilities,
regulation details,
pre-assessments, report
downloads
2.4 RegTech365 Ecosystem Context
RegWatch operates as part of the RegTech365 ecosystem, which provides a
comprehensive suite of regulatory technology solutions for the financial services
industry. The ecosystem includes:
● RegWatch: Regulatory intelligence and monitoring platform
● RegComply: Compliance assessment and task management system
● RegPort: Regulatory reporting and submission portal
● RegGuard: Risk and control framework management
● RegLearn: Compliance training and certification platform
The RegTech365 ecosystem provides shared services including user authentication,
authorization, role-based access control (RBAC), subscription management, notification
delivery, and cross-platform data synchronization. This centralized approach ensures
consistent user experiences, data integrity, and simplified administration across all
products.
3. Core Features & Functional Requirements
3.1 Intelligent Onboarding & Profile Scanning
3.1.1 User Onboarding Flow
Requirement ID: REG-001
The system shall provide a guided onboarding experience that collects essential
organizational profile information to enable intelligent regulation mapping.
Acceptance Criteria:
● Onboarding form captures company name, industry sector, license type, operational
jurisdictions, and business activities
● Form includes validation for required fields and data format compliance
● User receives real-time feedback on data completeness
● System supports multi-step wizard interface with progress indication
● Onboarding data is securely stored and encrypted at rest
3.1.2 Agentic Profile Analysis
Requirement ID: REG-002
The Agentic API shall analyze company profile data to automatically identify all
applicable regulatory bodies and their associated regulations.
Acceptance Criteria:
● AI agent processes company profile attributes including industry, license type, and
business activities
● System identifies all relevant regulators from a pre-configured regulator database
including CBN, NDPC, NDIC, SEC, NAICOM, and others
● Agent retrieves all regulations and circulars from identified regulators that have been
ingested into the database
● Profile analysis completes within 30 seconds for standard organizational profiles
● System logs all regulatory mapping decisions for audit trail purposes
3.1.3 Regulatory Classification Engine
Requirement ID: REG-003
The system shall classify regulations by thematic areas and assign risk levels to enable
prioritization and targeted compliance efforts.
Acceptance Criteria:
● Regulations are categorized into thematic areas such as AML/CFT, Cybersecurity
Framework, Capital Adequacy, Consumer Protection, Data Privacy, Corporate
Governance, etc.
● Each circular/regulation is assigned a risk level of High, Medium, or Low based on
predefined criteria
● Thematic area classifications are stored in the database and associated with specific
regulators
● Risk level assignment logic is configurable by administrators
● Classification metadata is indexed for fast filtering and search operations
3.1.4 Dashboard Population
Requirement ID: REG-004
Following profile analysis and classification, the system shall populate role-based
dashboards with relevant filtered regulatory data.
Acceptance Criteria:
● Dashboard displays regulations filtered based on the organization's profile
● Data is organized by regulator, thematic area, and risk level
● Initial dashboard load time does not exceed 5 seconds
● Dashboard widgets are configurable based on user role and preferences
● System provides visual indicators for compliance status across different regulatory
areas
3.2 Compliance Dashboard & Reporting
3.2.1 Executive Dashboard
Requirement ID: REG-005
The system shall provide C-suite executives with a high-level overview of organizational
compliance status with configurable time periods.
Acceptance Criteria:
● Dashboard displays compliance metrics aggregated by day, week, and month
● Visual indicators show percentage of regulations in compliant, non-compliant, and
in-progress states
● High-risk regulations are prominently displayed with alert indicators
● Trend charts illustrate compliance trajectory over selected time periods
● Dashboard supports drill-down capabilities to view underlying regulation details
● Executive summary reports can be exported in PDF format
3.2.2 Compliance Manager Dashboard
Requirement ID: REG-006
The system shall provide compliance managers with detailed operational views of
regulatory requirements and compliance activities.
Acceptance Criteria:
● Dashboard displays all regulations with their current compliance status
● Regulations can be filtered by regulator, thematic area, risk level, and compliance
status
● Dashboard shows recently published regulations and upcoming compliance
deadlines
● Compliance managers can view pre-assessment results and full assessment status
for each regulation
● Interface provides quick access to initiate pre-assessments and full assessments
● Activity feed displays recent actions and updates across all monitored regulations
3.2.3 Search & Filter Capabilities
Requirement ID: REG-007
The system shall provide comprehensive search and filtering capabilities to enable users
to quickly locate specific regulations and circulars.
Acceptance Criteria:
● Full-text search across regulation titles, circular numbers, and content
● Advanced filtering by regulator, thematic area, risk level, industry, publication date,
and compliance status
● Multi-select filter options with AND/OR logic support
● Search results display with relevance ranking and highlighting of matched terms
● Filter states persist across user sessions
● Search and filter operations return results within 2 seconds for databases containing
up to 10,000 regulations
3.3 Regulation Details & Pre-Assessment
3.3.1 Regulation Detail View
Requirement ID: REG-008
When a user clicks on a regulation from the regulations page, the system shall display a
detailed view including the full regulatory document and associated metadata.
Acceptance Criteria:
● Detail page displays regulation title, circular number, issuing regulator, publication
date, effective date, and thematic area
● PDF viewer renders the full regulatory circular/document with zoom, scroll, and
download capabilities
● Risk level badge is prominently displayed with color coding (High: Red, Medium:
Yellow, Low: Green)
● Compliance status indicator shows current state: Not Started, Pre-Assessment
Complete, Full Assessment In Progress, or Compliant
● Related regulations and dependencies are listed if applicable
● Start Gap Assessment button is visible and enabled for users with appropriate
permissions
3.3.2 Pre-Assessment Survey
Requirement ID: REG-009
The system shall present users with a standardized pre-assessment questionnaire
consisting of 5-10 AI-generated questions to evaluate surface compliance for each
regulation.
Acceptance Criteria:
● Pre-assessment questions are retrieved from the database (pre-generated and
stored per regulation)
● Each question provides three response options: Yes, No, Not Applicable
● Survey interface displays progress indicator and allows navigation between
questions
● Users can save partial progress and resume later
● Optional comment field is available for each question to capture additional context
● All questions must be answered before submission is allowed
3.3.3 Pre-Assessment Scoring & Results
Requirement ID: REG-010
The system shall automatically score pre-assessment responses and generate a
compliance score with visual representation of results.
Acceptance Criteria:
● Scoring algorithm calculates compliance percentage based on Yes/No responses
(Not Applicable responses excluded from denominator)
● Results page displays overall compliance score, number of compliant items,
non-compliant items, and not applicable items
● Visual dashboard shows breakdown of responses with charts and graphs
● Summary highlights critical gaps where No responses were provided
● Pre-assessment status is updated in the regulation's compliance record
● Results can be downloaded as a PDF report
● User receives clear call-to-action to proceed with full assessment in RegComply
3.4 RegComply Integration
3.4.1 Full Assessment Initiation
Requirement ID: REG-011
The system shall provide a seamless pathway for users to initiate full compliance
assessments in RegComply following pre-assessment completion.
Acceptance Criteria:
● Start Full Assessment in RegComply button is displayed on regulation detail page
and pre-assessment results page
● Button click triggers subscription verification check via API call to RegTech365
subscription service
● System verifies user's active RegComply subscription status
● For subscribed users, system initiates Agentic API call to generate and distribute
role-based tasks
● User is automatically redirected to RegComply Task Management tab upon
successful task creation
● Context data including regulation ID, pre-assessment results, and company profile is
passed to RegComply
3.4.2 Subscription Gate
Requirement ID: REG-012
For users without active RegComply subscriptions, the system shall present subscription
options and alternative actions.
Acceptance Criteria:
● Modal dialog displays when non-subscribed user attempts to start full assessment
● Modal presents available RegComply subscription plans with pricing and features
● User can select a plan and proceed to checkout flow managed by RegTech365
subscription service
● Alternative option to download pre-assessment report as PDF is clearly presented
● Modal can be dismissed, returning user to regulation detail page
● Subscription selection and payment flows integrate with RegTech365 billing system
3.4.3 Task Distribution
Requirement ID: REG-013
The Agentic API shall generate role-specific compliance tasks based on regulatory
requirements and distribute them to appropriate user dashboards in RegComply.
Acceptance Criteria:
● AI agent analyzes regulation requirements and generates specific, actionable tasks
● Tasks are assigned to roles including Compliance Manager, Compliance Officer,
Auditor, Risk Manager, IT Security Officer, etc.
● Each task includes title, description, assigned role, due date, priority level, and
associated regulation reference
● Task types vary based on regulatory requirements: document uploads, policy
implementation, training completion, officer appointments, report generation, system
configuration, etc.
● Tasks are created in RegComply database with appropriate status tracking
● Role-based dashboard filtering ensures users only see tasks assigned to their role
3.4.4 Compliance Status Synchronization
Requirement ID: REG-014
Upon task completion in RegComply, the system shall receive webhook notifications to
update regulation compliance status in RegWatch.
Acceptance Criteria:
● RegWatch exposes a webhook endpoint to receive compliance status updates from
RegComply
● Webhook payload includes regulation ID, completion status, completion date, and
compliance score
● RegWatch validates webhook signature to ensure authenticity
● Compliance status is updated in real-time across all relevant dashboards and views
● Status change triggers notification to relevant stakeholders
● Audit log captures all status updates with timestamp and source
● Failed webhook deliveries are retried with exponential backoff up to 3 attempts
3.4.5 Compliance Report Generation
Requirement ID: REG-015
After full assessment completion, the system shall enable users to view and download
comprehensive compliance reports.
Acceptance Criteria:
● Compliance report aggregates data from pre-assessment and full assessment
activities
● Report includes regulation details, compliance score, identified gaps, remediation
actions taken, evidence references, and compliance status
● Reports can be generated for individual regulations or aggregated across multiple
regulations
● PDF export functionality with professional formatting and company branding
● Report access is controlled based on user permissions
● Historical versions of reports are maintained for audit purposes
3.5 Notification & Monitoring System
3.5.1 General Notifications
Requirement ID: REG-016
The system shall deliver timely notifications for new and updated regulations relevant to
the user's organization.
Acceptance Criteria:
● In-app notifications alert users when new regulations matching their profile are
published
● Push notifications are sent to mobile app users for high-priority regulatory updates
● Email notifications include regulation summary, risk level, and direct link to regulation
detail page
● Notification frequency and channels are configurable per user in settings
● Users can mark notifications as read and archive old notifications
● Notification center maintains history of all notifications for audit purposes
3.5.2 Specific Regulation Monitoring
Requirement ID: REG-017
Users shall be able to monitor specific regulations of interest and receive targeted
notifications when changes occur.
Acceptance Criteria:
● Users can add regulations to a monitoring watchlist from the regulation detail page
● Watchlist is accessible from user dashboard for easy management
● System detects amendments, updates, or withdrawals of monitored regulations
● Immediate notifications are sent when changes to monitored regulations are
detected
● Change notifications include summary of modifications and impact assessment
● Users can configure notification preferences independently for monitored regulations
versus general updates
3.5.3 News & Industry Updates
Requirement ID: REG-018
The system shall provide curated news and industry updates relevant to regulatory
compliance in the financial sector.
Acceptance Criteria:
● News feed displays regulatory announcements, enforcement actions, and
compliance trends
● Content is sourced from official regulator websites and reputable industry
publications
● AI-powered content curation prioritizes news items relevant to user's industry and
regulatory profile
● Users can save articles for later reading and share content with team members
● News notifications can be configured separately from regulation notifications
3.6 Profile Re-assessment System
3.6.1 Profile Update Detection
Requirement ID: REG-019
The system shall detect when users update their company profile information and trigger
re-assessment workflows.
Acceptance Criteria:
● System monitors changes to critical profile fields including industry sector, license
type, operational jurisdictions, and business activities
● Users receive confirmation dialog before submitting profile changes that impact
regulatory scope
● Change detection logic identifies material changes that require regulatory re-scan
● Audit trail captures all profile modifications with timestamp and user identification
3.6.2 Automated Re-scanning
Requirement ID: REG-020
Following profile updates, the Agentic API shall automatically re-scan the updated profile
to identify newly applicable or no-longer-applicable regulations.
Acceptance Criteria:
● Re-scan process initiates immediately upon profile update confirmation
● AI agent re-evaluates regulatory applicability based on updated profile attributes
● System identifies newly applicable regulations and adds them to the user's regulatory
inventory
● Regulations that are no longer applicable are flagged and moved to archived status
● Dashboard is automatically refreshed with updated regulatory landscape
● User receives summary notification of changes including number of regulations
added and removed
● Re-scan completes within 60 seconds for standard profile updates
3.7 AI Co-pilot
3.7.1 Contextual AI Assistant
Requirement ID: REG-021
The system shall provide an AI-powered chatbot that offers contextual assistance with
company-specific compliance questions and regulatory guidance.
Acceptance Criteria:
● AI Co-pilot is accessible via persistent chat interface on all platform pages
● Chatbot has access to company profile data, applicable regulations, compliance
status, and assessment history
● Natural language processing enables users to ask questions in conversational format
● AI provides specific answers referencing relevant regulations and citing sources
● Responses include direct links to referenced regulations and related resources
● Chat history is preserved and searchable within user sessions
3.7.2 Compliance Intelligence
Requirement ID: REG-022
The AI Co-pilot shall provide proactive insights and recommendations based on analysis
of the organization's compliance data.
Acceptance Criteria:
● AI analyzes compliance patterns and identifies potential risk areas
● Proactive recommendations are surfaced for regulations with approaching deadlines
● Co-pilot suggests related regulations that may require attention based on completed
assessments
● Best practice guidance is provided for common compliance scenarios
● Insights dashboard displays AI-generated compliance optimization recommendations
3.7.3 Regulatory Knowledge Base
Requirement ID: REG-023
The AI Co-pilot shall have access to a comprehensive knowledge base of regulatory
information and compliance best practices.
Acceptance Criteria:
● Knowledge base includes full text of all regulations in the system database
● Regulatory interpretations and guidance documents from official sources are indexed
● Industry-specific compliance frameworks and standards are integrated
● Vector database enables semantic search across regulatory content
● Knowledge base is continuously updated as new regulations are ingested
● Response accuracy is maintained above 90% based on user feedback ratings
3.8 Settings & Configuration
3.8.1 Notification Preferences
Requirement ID: REG-024
Users shall have granular control over notification preferences including channels,
frequency, and content types.
Acceptance Criteria:
● Settings interface allows users to enable/disable notifications by channel: in-app,
email, push, SMS
● Notification categories are independently configurable including new regulations,
regulation updates, compliance deadlines, assessment completions, and news
updates
● Frequency options include real-time, daily digest, and weekly digest
● Users can set quiet hours during which non-urgent notifications are suppressed
● Risk-level filtering allows users to receive notifications only for High and Medium risk
regulations
● Preference changes take effect immediately
3.8.2 Role-Based Access Control
Requirement ID: REG-025
The system shall implement comprehensive role-based access control managed through
the RegTech365 ecosystem with RegWatch-specific permission configurations.
Acceptance Criteria:
● RBAC is centrally managed through RegTech365 identity and access management
system
● Standard roles include Executive, Compliance Manager, Risk Manager, Compliance
Analyst, Auditor, and Viewer
● Custom roles can be created with granular permission assignment
● Permissions control access to features including view regulations, conduct
assessments, download reports, configure settings, manage users, and access AI
Co-pilot
● User management interface allows administrators to assign and revoke roles
● Permission changes are enforced immediately without requiring user logout
● All permission checks are logged for security auditing
3.8.3 Company Profile Management
Requirement ID: REG-026
Authorized users shall be able to view and update company profile information through
the settings interface.
Acceptance Criteria:
● Profile editing restricted to users with Company Administrator or Compliance
Manager roles
● Editable fields include company name, industry sector, license types, operational
jurisdictions, business activities, company size, and contact information
● Form validation ensures data integrity and completeness
● Changes requiring regulatory re-scan are clearly flagged with impact warnings
● Profile change history is maintained with audit trail
● Profile updates trigger re-assessment workflow as defined in REG-019 and REG-020
4. Technical Architecture
4.1 System Architecture Overview
RegWatch is architected as a microservices-based application within the RegTech365
ecosystem. The platform leverages shared services for authentication, authorization,
subscription management, and notification delivery while maintaining its own dedicated
services for regulatory intelligence and compliance tracking.
4.2 Core Components
4.2.1 Frontend Application
● Technology Stack: React.js with TypeScript
● State Management: Redux Toolkit for global state, React Query for server state
● UI Framework: Material-UI or Ant Design for consistent component library
● Responsive Design: Mobile-first approach with breakpoints for tablet and desktop
● PDF Rendering: React-PDF or PDF.js for document viewing
4.2.2 Backend Services
API Gateway
Single entry point for all client requests with request routing, authentication, rate limiting,
and API versioning. Technology: Kong, AWS API Gateway, or Azure API Management
Regulatory Intelligence Service
Core business logic for regulation classification, risk assessment, and applicability
determination. Technology: Node.js or Python with FastAPI
Agentic AI Service
Profile analysis, regulatory mapping, pre-assessment question generation, and task
distribution. Integration with LLM providers (OpenAI, Anthropic, or Azure OpenAI).
Technology: Python with LangChain or LlamaIndex framework
Assessment Service
Manages pre-assessment workflows, scoring, and results. Technology: Node.js or Java
Spring Boot
Notification Service
Shared service across RegTech365 ecosystem with multi-channel delivery (in-app,
email, push, SMS). Integration with SendGrid, Twilio, and Firebase Cloud Messaging
Report Generation Service
Generates PDF reports from assessment data. Technology: Puppeteer or WeasyPrint
4.2.3 Data Layer
Primary Database
PostgreSQL for structured data including regulations, user profiles, assessments, and
compliance records. Multi-tenant architecture with schema-per-tenant or row-level
security
Document Storage
Amazon S3, Azure Blob Storage, or Google Cloud Storage for regulatory PDF
documents with CDN integration for optimized delivery
Vector Database
Pinecone, Weaviate, or pgvector for semantic search and AI Co-pilot knowledge base.
Embeddings generated from regulation content for similarity search
Cache Layer
Redis for session management, frequently accessed data, and rate limiting
4.2.4 Integration Layer
● Message Queue: RabbitMQ or Apache Kafka for asynchronous processing and
inter-service communication
● Webhook Handler: Service to receive and process callbacks from RegComply
● RegTech365 Service Mesh: Integration with ecosystem services for authentication,
authorization, subscription management, and user management
4.3 Data Models
4.3.1 Core Entities
Entity Key Attributes
Organization organization_id, name, industry,
license_types, jurisdictions,
business_activities, created_at,
updated_at
Regulator regulator_id, name, abbreviation, country,
website, description, is_active
Regulation regulation_id, regulator_id, title,
circular_number, thematic_area,
risk_level, publication_date,
effective_date, document_url, status
ThematicArea thematic_area_id, regulator_id, name,
description, category
OrganizationRegulation organization_id, regulation_id,
applicability_score, compliance_status,
last_assessed_date, is_monitored
PreAssessment assessment_id, organization_id,
regulation_id, questions, responses,
score, completed_date, completed_by
ComplianceReport report_id, organization_id, regulation_id,
report_type, generated_date,
compliance_score, document_path
5. Data Security & Privacy
5.1 Security Requirements
5.1.1 Authentication & Authorization
● OAuth 2.0 / OpenID Connect for user authentication
● JWT (JSON Web Tokens) for session management
● Multi-factor authentication (MFA) support for all user accounts
● Single Sign-On (SSO) integration with enterprise identity providers (Azure AD, Okta)
● Role-based access control enforced at API and database levels
● Principle of least privilege applied to all user roles and service accounts
5.1.2 Data Encryption
● TLS 1.3 for all data in transit
● AES-256 encryption for data at rest in databases and storage
● Encryption key management using AWS KMS, Azure Key Vault, or similar
● Database-level encryption for sensitive fields (PII, financial data)
● Encrypted backups with separate encryption keys
5.1.3 Security Monitoring & Logging
● Centralized logging of all security events and access attempts
● Real-time security monitoring and anomaly detection
● Automated alerting for suspicious activities
● Audit trails for all data access, modifications, and deletions
● Integration with SIEM (Security Information and Event Management) systems
● Regular security vulnerability scanning and penetration testing
5.2 Privacy & Compliance
5.2.1 Data Privacy Regulations
RegWatch shall comply with applicable data privacy regulations including NDPR (Nigeria
Data Protection Regulation), GDPR (where applicable), and other regional data
protection laws.
● Data minimization: Collection only of necessary information
● Purpose limitation: Data used only for stated compliance purposes
● Data retention policies with automated deletion of expired data
● Right to access: Users can request copies of their data
● Right to erasure: Ability to delete user data upon request (subject to legal retention
requirements)
● Data portability: Export functionality for user and organizational data
5.2.2 Regulatory Compliance
As a platform serving financial institutions, RegWatch shall maintain compliance with
relevant financial services regulations and standards:
● ISO 27001 certification for information security management
● SOC 2 Type II compliance for service organization controls
● PCI DSS compliance for payment processing (if applicable)
● Regular third-party security audits and assessments
● Business continuity and disaster recovery planning
● Incident response procedures and breach notification protocols
6. Integration Specifications
6.1 RegTech365 Ecosystem Integration
6.1.1 Authentication & User Management
RegWatch integrates with the centralized RegTech365 authentication service for unified
user identity across all products.
● API Endpoint: /api/v1/auth (OAuth 2.0 authorization code flow)
● User Profile Sync: Real-time synchronization of user attributes
● Session Management: Shared session tokens across RegTech365 products
● Permission Management: Integration with central RBAC service
6.1.2 Subscription Management
Subscription status verification and management through RegTech365 billing service.
● API Endpoint: /api/v1/subscriptions/verify
● Real-time subscription status checks before feature access
● Webhook notifications for subscription changes (upgrades, downgrades,
cancellations)
● Usage metering for consumption-based pricing tiers
6.1.3 Notification Delivery
Centralized notification service handles multi-channel delivery across RegTech365
products.
● API Endpoint: /api/v1/notifications/send
● Support for in-app, email, SMS, and push notification channels
● Template management for consistent notification formatting
● Delivery status tracking and retry logic
6.2 RegComply Integration
6.2.1 Task Creation API
RegWatch initiates full assessments by calling RegComply's task creation API.
● Endpoint: POST /api/v1/assessments/create
● Payload: regulation_id, organization_id, pre_assessment_data, context,
● Response: assessment_id, task_ids[], redirect_url
● Authentication: Service-to-service JWT with appropriate scopes
6.2.2 Compliance Status Webhook
RegComply sends compliance status updates to RegWatch via webhook.
● Endpoint: POST /api/v1/webhooks/compliance-status
● Payload: regulation_id, organization_id, compliance_status, completion_date,
compliance_score, report_url
● Authentication: HMAC signature verification
● Retry Policy: Exponential backoff with maximum 3 attempts
6.3 External Integrations
6.3.1 Regulator Data Feeds
Automated ingestion of regulatory updates from official regulator sources.
● Web scraping for regulators without APIs (CBN, NDPC, NDIC, SEC)
● RSS/Atom feeds where available
● Email parsing for circular notifications
● Scheduled daily scans with change detection
● Manual upload capability for documents not available electronically
6.3.2 AI/LLM Provider Integration
Integration with large language model providers for agentic AI capabilities.
● Primary: OpenAI GPT-4 or Anthropic Claude API
● Fallback: Azure OpenAI Service for enterprise deployments
● Vector embeddings: OpenAI text-embedding-ada-002 or similar
● Rate limiting and cost optimization strategies
● Prompt management and versioning system
7. User Experience & Interface Design
7.1 Design Principles
● Simplicity: Clean, uncluttered interface focusing on essential information
● Clarity: Clear visual hierarchy with consistent use of typography, color, and spacing
● Efficiency: Minimize clicks and navigation required to complete common tasks
● Accessibility: WCAG 2.1 Level AA compliance for users with disabilities
● Responsiveness: Optimal experience across desktop, tablet, and mobile devices
● Consistency: Unified design language across all RegTech365 products
7.2 Key User Flows
7.2.1 Onboarding Flow
● Welcome screen with product overview
● Company profile wizard (3-4 steps)
● Profile processing loading state with progress indication
● Dashboard populated with regulations
● Guided tour highlighting key features
7.2.2 Regulation Discovery & Assessment Flow
● Dashboard view of all applicable regulations
● Filter/search to find specific regulation
● Regulation detail page with PDF viewer
● Initiate pre-assessment (5-10 questions)
● View pre-assessment results
● Proceed to full assessment in RegComply or download report
7.3 Design System Components
Color Palette
● Primary: Professional blue (#1976D2) for primary actions and branding
● Secondary: Accent teal (#00ACC1) for secondary elements
● Success: Green (#4CAF50) for compliant status and positive actions
● Warning: Yellow/Amber (#FFC107) for medium risk and caution states
● Error: Red (#F44336) for high risk, non-compliance, and critical alerts
● Neutral: Grayscale palette for text, borders, and backgrounds
Typography
● Primary Font: Inter or Roboto for clean readability
● Headings: Bold weights (600-700) for hierarchy
● Body Text: Regular weight (400) at 14-16px
● Small Text: 12px for metadata and labels
● Line Height: 1.5 for optimal readability
8. Performance Requirements
8.1 Response Time Requirements
Operation Target Response Time Maximum Acceptable
Dashboard Load < 3 seconds < 5 seconds
Search/Filter Results < 1 second < 2 seconds
Regulation Detail Page < 2 seconds < 3 seconds
Pre-Assessment Submit < 2 seconds < 3 seconds
Profile Re-scan < 30 seconds < 60 seconds
Report Generation < 5 seconds < 10 seconds
8.2 Scalability Requirements
● Support for 10,000+ concurrent users with response time degradation < 20%
● Database capable of storing 100,000+ regulations with efficient querying
● Horizontal scaling capability for all application services
● Auto-scaling based on load (CPU, memory, request rate)
● Support for 1,000+ organizations with multi-tenant data isolation
● Document storage capable of handling 1TB+ of regulatory PDFs
8.3 Availability & Reliability
● System Uptime: 99.9% availability (< 8.76 hours downtime per year)
● Planned Maintenance: Maximum 4 hours per month during off-peak hours
● Database Replication: Multi-region with automatic failover
● Backup Frequency: Daily incremental, weekly full backups
● Recovery Time Objective (RTO): < 4 hours
● Recovery Point Objective (RPO): < 1 hour
● Load Balancing: Geographic distribution for optimal performance
8.4 Performance Monitoring
● Application Performance Monitoring (APM) with New Relic, DataDog, or similar
● Real-time alerting for performance degradation
● Dashboard for key performance indicators (response times, error rates, throughput)
● Database query performance monitoring and optimization
● CDN performance metrics for document delivery
● User experience monitoring with real user monitoring (RUM)
9. Quality Assurance & Testing
9.1 Testing Strategy
9.1.1 Unit Testing
● Test Coverage Target: Minimum 80% code coverage
● Framework: Jest for JavaScript/TypeScript, pytest for Python
● Focus Areas: Business logic, utility functions, data transformations
● Automated execution in CI/CD pipeline before deployment
9.1.2 Integration Testing
● Test API endpoints with various input scenarios
● Validate database interactions and data persistence
● Test integrations with RegTech365 services (auth, subscriptions, notifications)
● Verify webhook delivery and processing from RegComply
● Test AI/LLM API integrations with mock and real responses
9.1.3 End-to-End Testing
● Framework: Cypress or Playwright for UI automation
● Test complete user journeys: onboarding, regulation discovery, pre-assessment, full
assessment initiation
● Cross-browser testing (Chrome, Firefox, Safari, Edge)
● Responsive design testing across device sizes
● Automated smoke tests for critical paths in production
9.1.4 Performance Testing
● Load Testing: Simulate expected user load and verify performance targets
● Stress Testing: Determine system breaking points and failure modes
● Spike Testing: Verify system handles sudden traffic increases
● Endurance Testing: Validate system stability over extended periods
● Tools: JMeter, k6, or Gatling for load generation
9.1.5 Security Testing
● Penetration Testing: Annual third-party security assessments
● Vulnerability Scanning: Weekly automated scans with tools like Qualys or Nessus
● Dependency Scanning: Continuous monitoring for vulnerable libraries
● Static Application Security Testing (SAST): Automated code analysis
● Dynamic Application Security Testing (DAST): Runtime security testing
9.2 User Acceptance Testing (UAT)
● Beta Program: 10-20 pilot organizations for early access
● Feedback Collection: Structured surveys and interviews
● Success Criteria: 80% user satisfaction rating before general release
● Iteration: Address critical feedback before launch
● Documentation: User testing reports and issue tracking
10. Implementation Roadmap
10.1 Phase 1: Foundation (Months 1-3)
10.1.1 Infrastructure Setup
● Cloud infrastructure provisioning (AWS, Azure, or GCP)
● Database setup with replication and backups
● CI/CD pipeline configuration
● Development, staging, and production environments
● Monitoring and logging infrastructure
10.1.2 Core Development
● Authentication integration with RegTech365 ecosystem
● User onboarding flow and profile management
● Regulation database schema and data ingestion pipeline
● Basic dashboard with regulation listing
● Search and filter functionality
10.2 Phase 2: Intelligence & Assessment (Months 4-6)
10.2.1 Agentic AI Implementation
● AI agent development for profile analysis and regulatory mapping
● Regulatory classification engine
● Pre-assessment question generation system
● Vector database setup for semantic search
● AI Co-pilot chatbot development
10.2.2 Assessment Features
● Pre-assessment survey interface
● Scoring and results visualization
● Report generation capability
● RegComply integration for full assessments
● Task distribution API implementation
10.3 Phase 3: Advanced Features (Months 7-9)
10.3.1 Monitoring & Notifications
● Notification system integration
● Regulation monitoring and change detection
● News feed implementation
● Email and push notification delivery
● Custom notification preferences
10.3.2 Reporting & Analytics
● Executive dashboard with compliance metrics
● Compliance report generation
● Trend analysis and visualization
● Export functionality (PDF, Excel)
● Historical data tracking
10.4 Phase 4: Polish & Launch (Months 10-12)
● Beta testing with pilot organizations
● Performance optimization and tuning
● Security audit and penetration testing
● Documentation completion (user guides, API docs)
● Training materials and videos
● Marketing and launch preparation
● General availability release
11. Success Metrics & KPIs
11.1 Product Adoption Metrics
● Active Organizations: Target 100 organizations within 6 months of launch
● User Activation Rate: 70% of registered users complete onboarding
● Monthly Active Users (MAU): 60% of registered users active monthly
● Feature Adoption: 80% of organizations complete at least one pre-assessment
● RegComply Conversion: 40% of pre-assessments lead to full assessment initiation
11.2 Performance Metrics
● Dashboard Load Time: Average < 3 seconds
● Search Response Time: 95th percentile < 1.5 seconds
● System Uptime: > 99.9% availability
● API Error Rate: < 0.1% of all requests
● Page Load Speed: Core Web Vitals in 'Good' range
11.3 Business Impact Metrics
● Time Savings: 80% reduction in time to identify applicable regulations
● Compliance Accuracy: 90% accuracy in regulatory classification
● User Satisfaction: Net Promoter Score (NPS) > 50
● Support Ticket Volume: < 5 support tickets per 100 active users per month
● Revenue Impact: Contribute to 30% of RegTech365 ecosystem revenue within Year
1
11.4 Engagement Metrics
● Average Session Duration: > 15 minutes per session
● Regulations Viewed per User: Average 10+ per month
● AI Co-pilot Usage: 40% of users interact with co-pilot monthly
● Report Downloads: Average 5 reports per organization per month
● Notification Engagement: 30% click-through rate on regulation notifications
12. Risk Analysis & Mitigation
Risk Impact Probability Mitigation Strategy
AI Accuracy Issues High Medium Extensive testing,
human review
process,
continuous model
improvement
RegComply
Integration Delays
High Medium Early integration
planning, dedicated
integration team,
fallback manual
workflows
Data Privacy Breach Critical Low Robust security
measures,
encryption, regular
audits, incident
response plan
Regulator Data
Access Limitations
Medium High Multiple data
sources, manual
upload capability,
partnerships with
regulators
User Adoption
Challenges
Medium Medium Comprehensive
onboarding, training
programs, user
support, feedback
loops
Performance at Scale Medium Low Load testing,
auto-scaling
infrastructure,
performance
monitoring,
optimization
13. Assumptions & Dependencies
13.1 Assumptions
● Financial institutions have reliable internet connectivity for cloud-based access
● Organizations have designated compliance personnel to use the platform
● Regulatory bodies will continue publishing regulations in accessible formats
● Users have basic digital literacy and familiarity with web applications
● Organizations are willing to invest in compliance technology solutions
● Initial focus on Nigerian financial services regulators with expansion potential
13.2 Dependencies
13.2.1 Internal Dependencies
● RegTech365 authentication and authorization service must be operational
● Subscription management service must support RegWatch product
● Notification service must be configured for RegWatch notifications
● RegComply platform must provide task creation and webhook APIs
● Shared UI component library must be available
● DevOps team must provision and maintain infrastructure
13.2.2 External Dependencies
● Cloud infrastructure provider (AWS, Azure, or GCP) availability and performance
● AI/LLM provider (OpenAI, Anthropic) API availability and reliability
● Third-party services: SendGrid (email), Twilio (SMS), Firebase (push notifications)
● Regulator websites remain accessible for data scraping
● Payment gateway integration for subscription management
● SSL certificate providers for secure communications
14. Glossary
Agentic AI: AI systems that can autonomously perform tasks, make decisions, and take
actions to achieve goals
Circular: Official regulatory communication issued by a regulatory body containing
requirements, guidelines, or updates
Compliance Status: The state of an organization's adherence to a specific regulation:
Not Started, In Progress, Compliant, or Non-Compliant
Pre-Assessment: Initial evaluation consisting of 5-10 questions to gauge surface-level
compliance with a regulation
RegComply: Task management and full compliance assessment platform within the
RegTech365 ecosystem
Regulator: Government or authorized body responsible for overseeing and enforcing
regulations (e.g., CBN, NDPC, NDIC)
RegTech: Regulatory Technology - technology solutions designed to help organizations
meet regulatory requirements efficiently
Risk Level: Classification of regulations as High, Medium, or Low based on potential
impact and compliance complexity
Thematic Area: Category or domain of regulatory requirements (e.g., AML/CFT,
Cybersecurity, Capital Adequacy)
Vector Database: Specialized database for storing and searching high-dimensional
vector embeddings used in AI applications
15. Appendices
15.1 Nigerian Financial Services Regulators
Primary regulators for Phase 1 focus:
● CBN (Central Bank of Nigeria): Banking and financial institutions
● NDPC (Nigeria Data Protection Commission): Data privacy and protection
● NDIC (Nigeria Deposit Insurance Corporation): Deposit insurance and bank
resolution
● SEC (Securities and Exchange Commission): Capital markets and securities
● NAICOM (National Insurance Commission): Insurance companies and brokers
● FIRS (Federal Inland Revenue Service): Tax compliance
● PENCOM (National Pension Commission): Pension fund administrators
15.2 Sample Thematic Areas
Common thematic areas for financial services regulations:
● Anti-Money Laundering / Combating Financing of Terrorism (AML/CFT)
● Cybersecurity Framework (CSF)
● Capital Adequacy and Prudential Requirements
● Consumer Protection
● Data Privacy and Protection
● Corporate Governance
● Risk Management
● Financial Reporting and Disclosure
● Licensing and Authorization
● Conduct and Ethics
● Business Continuity Planning
● Third-Party Risk Management
15.3 API Endpoint Summary
Key API endpoints for RegWatch:
Endpoint Method Purpose
/api/v1/organizations/onboa
rd
POST Create organization profile
/api/v1/regulations/search GET Search and filter
regulations
/api/v1/regulations/{id} GET Get regulation details
/api/v1/assessments/pre POST Submit pre-assessment
/api/v1/assessments/initiate
-full
POST Start full assessment in
RegComply
/api/v1/organizations/profil
e
PUT Update organization profile
/api/v1/webhooks/complian
ce-status
POST Receive compliance
updates
/api/v1/copilot/query POST AI Co-pilot question
15.4 Document Revision History
Version Date Author Changes
1.0 January 30, 2026 VP of Product,
RegTech365
Initial version -
comprehensive
PRD for RegWatch
platform
END OF DOCUMENT
_______________________________________________
Tab 2
# RegWatch API Documentation
## Overview
The **RegWatch** workspace provides a comprehensive regulatory compliance
management system with 5 main collections covering authentication, company
management, industry management, compliance assessments, and team collaboration.
The API enables organizations to track regulatory obligations, manage compliance
assessments, monitor regulations, and receive notifications about regulatory changes.
---
## Base Configuration
### Environment Variables
The API uses the following environment variables:
- **`baseURL`**: The base URL for all API endpoints (e.g., `http://localhost:8001/api/v1`)
- **`token`**: Authentication token for authorized requests
### Available Environments
- **local**: Local development environment
- **QA**: Quality assurance environment
- **staging**: Staging environment
- **Prod**: Production environment
---
## Collections
### 1. Auth Collection
**Purpose**: Handles user authentication, registration, password management, and
session control.
#### Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/auth/login` | User Login |
| POST | `{{baseURL}}/auth/login-sso` | SSO Login |
| POST | `{{baseURL}}/auth/signup` | User SignUp |
| POST | `{{baseURL}}/auth/verify-signup` | Verify OTP |
| POST | `{{baseURL}}/auth/resend-verification` | Resend Verification OTP |
| POST | `{{baseURL}}/auth/logout` | User Logout |
| POST | `{{baseURL}}/auth/forgot-password` | Forgot Password |
| POST | `{{baseURL}}/auth/create-password` | Create New Password |
| GET | `{{baseURL}}/auth/me` | Get Current User |
#### Authentication Flow
1. **Sign Up**: Register a new user account
2. **Verify OTP**: Confirm email/phone with verification code
3. **Login**: Authenticate and receive access token
4. **Use Token**: Include token in subsequent requests for authorization
---
### 2. Team Collection
**Purpose**: Manages team member invitations and collaboration features.
#### Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/invite/` | Invite Team Member |
| GET | `{{baseURL}}/invite/validate/:token` | Validate Invite Token |
| POST | `{{baseURL}}/invite/accept` | Accept Invitation |
#### Team Workflow
1. Admin invites team members via email
2. Invitee receives token and validates it
3. Invitee accepts invitation to join the organization
---
### 3. Industry Collection
**Purpose**: Manages industry classifications and categories for regulatory compliance.
#### Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/industry` | Get All Industries |
| GET | `{{baseURL}}/industry/list` | Get Industries List |
| GET | `{{baseURL}}/industry/search/:query` | Search Industry |
| GET | `{{baseURL}}/industry/:industryId` | Get Industry By Id |
| POST | `{{baseURL}}/industry/` | Create Industry |
| PATCH | `{{baseURL}}/industry/:industryId` | Update Industry |
| DELETE | `{{baseURL}}/industry/:industryId` | Delete Industry |
#### Use Cases
- Categorize companies by industry sector
- Filter regulations by applicable industries
- Manage industry-specific compliance requirements
---
### 4. PreAssessment Collection
**Purpose**: Manages compliance assessments, analytics, and tracking of regulatory
obligations.
#### Endpoints
##### Assessment Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/pre-assessments/start` | Start or Create Assessment |
| GET | `{{baseURL}}/pre-assessments/:assessmentId` | Get Assessment by ID |
| GET | `{{baseURL}}/pre-assessments/regulation/:regulationId` | Get Assessment by
Regulation |
| GET | `{{baseURL}}/pre-assessments/my-assessments` | Get User Compliance
Assessment |
| GET | `{{baseURL}}/pre-assessments/company/:companyId` | Get Company
Compliance Assessment |
| PUT | `{{baseURL}}/pre-assessments/:assessmentId/answer` | Pre-assessment Answer
|
| PUT | `{{baseURL}}/pre-assessments/:assessmentId/answer` | Submit Pre-assessment
Answer |
##### Analytics & Reporting
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/pre-assessments/analytics/dashboard` | Get Compliance Analytics
Dashboard |
| GET | `{{baseURL}}/pre-assessments/analytics/overall-compliance` | Get Overall
Compliance |
| GET | `{{baseURL}}/pre-assessments/analytics/month-on-month` | Get Month-on-Month
Compliance Trend |
| GET | `{{baseURL}}/pre-assessments/analytics/by-thematic-area` | Get Compliance by
Thematic Area |
| GET | `{{baseURL}}/pre-assessments/analytics/by-regulator` | Get Compliance by
Regulator |
#### Assessment Workflow
1. **Start Assessment**: Initiate a new compliance assessment
2. **Answer Questions**: Submit responses to compliance questions
3. **Track Progress**: Monitor assessment completion status
4. **View Analytics**: Access compliance metrics and trends
---
### 5. Companies Collection
**Purpose**: Comprehensive company management, regulatory tracking, notifications,
and compliance monitoring.
#### Company Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/company?page=1&limit=20&sortBy=name&order=asc` | Get All
Companies |
| GET | `{{baseURL}}/company/me` | Get Company Profile |
| GET | `{{baseURL}}/company/members` | Get Company Members |
| PATCH | `{{baseURL}}/company/` | Update Company Profile |
| PATCH | `{{baseURL}}/company/:companyId/password` | Change Password |
| DELETE | `{{baseURL}}/company/` | Delete Company |
#### Regulation Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/regulation/search` | Search All Regulations |
| GET | `{{baseURL}}/regulation/recent` | Get All Recent Regulations |
| GET | `{{baseURL}}/regulation/:regulationId` | Get Regulation by Id |
| GET | `{{baseURL}}/regulation/ref/:refNo` | Get Regulations By RefNo |
| GET | `{{baseURL}}/regulation/regulator/:regulator` | Get Regulations by Regulators |
| GET | `{{baseURL}}/regulation/entity/:entity` | Get Regulations by Entity |
| GET | `{{baseURL}}/regulation/area/:area` | Get Regulations by Regulatory Area |
| GET | `{{baseURL}}/regulation/risk/:riskLevel` | Get Regulations By Risk Level |
| GET | `{{baseURL}}/regulation/deadlines` | Get Regulations By Deadline |
| GET | `{{baseURL}}/regulation/stats` | Get Regulation Stats |
| GET | `{{baseURL}}/regulation/monitored` | Monitored Regulation |
| POST | `{{baseURL}}/regulation/categorize` | Categorize Regulations |
| POST | `{{baseURL}}/regulation/calculate-risk` | Calculate Risk |
#### Obligations Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/regulation/:regulationId/obligations` | Get Obligations per
Regulation |
| GET | `{{baseURL}}/regulation/obligations/:obligationId` | Get Obligations by ID |
| GET | `{{baseURL}}/regulation/obligations/standard/:standard` | Get Regulations by
Standards |
#### Monitoring & Alerts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/regulation/:regulationId/monitor` | Monitor Regulation |
| DELETE | `{{baseURL}}/regulation/:regulationId/monitor` | Unmonitor Regulation |
| POST | `{{baseURL}}/monitor/alerts` | Create Monitoring Alerts |
#### Dashboard & Compliance
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `{{baseURL}}/dashboard/:companyId/summary` | Get Dashboard Summary |
| GET | `{{baseURL}}/dashboard/:companyId` | Get Company Compliance Obligations |
| POST | `{{baseURL}}/dashboard/reassess/:companyId` | Reassess Company |
#### Notifications
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/notification` | Send Notification |
| POST | `{{baseURL}}/notification/bulk` | Send Bulk Notifications |
| POST | `{{baseURL}}/notification/test` | Test Notification |
| POST | `{{baseURL}}/notification/notify-new` | Trigger Notification |
| POST | `{{baseURL}}/notification/monitor` | Trigger Monitoring |
| POST | `{{baseURL}}/notification/process-pending` | Process Pending Notifications |
| POST | `{{baseURL}}/notification/deadline-reminders` | Deadline Reminder Notification |
| POST | `{{baseURL}}/notification/weekly-digest` | Weekly Digest |
| POST | `{{baseURL}}/notification/reassess/:companyId` | Reassessment Notification |
| GET | `{{baseURL}}/notification/:companyId` | Get Company Notifications |
| GET | `{{baseURL}}/notification/:notificationId` | Notification Statistics |
| GET | `{{baseURL}}/notification/:companyId/dashboard` | Notification Dashboard |
| PUT | `{{baseURL}}/notification/preferences/:companyId` | Company Notification
Preferences |
#### AI Chat
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `{{baseURL}}/chat` | Chat with AI Assistant |
---
## Authentication Requirements
Most endpoints require authentication using a Bearer token. After logging in, include the
token in the Authorization header:
```
Authorization: Bearer {{token}}
```
### Public Endpoints (No Authentication Required)
- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/login-sso`
- `POST /auth/forgot-password`
- `GET /invite/validate/:token`
### Protected Endpoints
All other endpoints require valid authentication tokens.
---
## Common Use Cases
### 1. User Onboarding
1. Sign up with `POST /auth/signup`
2. Verify OTP with `POST /auth/verify-signup`
3. Login with `POST /auth/login`
4. Get user profile with `GET /auth/me`
### 2. Compliance Assessment
1. Start assessment with `POST /pre-assessments/start`
2. Submit answers with `PUT /pre-assessments/:id/answer`
3. View analytics with `GET /pre-assessments/analytics/dashboard`
4. Track trends with `GET /pre-assessments/analytics/month-on-month`
### 3. Regulation Monitoring
1. Search regulations with `GET /regulation/search`
2. Monitor specific regulation with `POST /regulation/:id/monitor`
3. Create alerts with `POST /monitor/alerts`
4. Receive notifications via configured channels
### 4. Company Management
1. Get company profile with `GET /company/me`
2. View dashboard summary with `GET /dashboard/:companyId/summary`
3. Track compliance obligations with `GET /dashboard/:companyId`
4. Reassess compliance with `POST /dashboard/reassess/:companyId`
---
## Response Formats
All API responses follow a consistent JSON format:
### Success Response
```json
{
"status": "success",
"data": { ... },
"message": "Operation completed successfully"
}
```
### Error Response
```json
{
"status": "error",
"message": "Error description",
"code": "ERROR_CODE"
}
```
---
## Rate Limiting & Best Practices
- Use pagination parameters (`page`, `limit`) for list endpoints
- Cache frequently accessed data (industries, regulation lists)
- Implement retry logic with exponential backoff for failed requests
- Monitor notification preferences to avoid overwhelming users
- Use bulk operations when processing multiple items
---
## Support & Resources
- **Workspace**: [RegWatch](workspace/49844ea4-001e-4972-a760-c0b1d71085e9)
- **Collections**:
- [Auth](collection/25159742-e65551ee-cfa0-424e-8685-c38aece8d849)
- [Team](collection/25159742-2ab8e3a8-f987-481d-b05c-2510c950fc9e)
- [Industry](collection/25159742-36e5afbd-e84c-41d9-ae19-ab88bcab95c4)
- [PreAssessment](collection/25159742-8a328139-cf93-42db-983e-589acaaecd69)
- [Companies](collection/25159742-d875d915-aeef-4b69-9323-73c254eb1c17)
---
## Summary Statistics
- **Total Collections**: 5
- **Total Endpoints**: 74
- Auth: 9 endpoints
- Team: 3 endpoints
- Industry: 7 endpoints
- PreAssessment: 12 endpoints
- Companies: 43 endpoints
- **HTTP Methods**: GET, POST, PUT, PATCH, DELETE
- **Environments**: 4 (local, QA, staging, Prod)
Tab 3
Auth Collection
Overview
The Auth collection provides all authentication and authorization endpoints for the
RegWatch application. It handles user registration, login (including SSO), password
management, OTP verification, and session management.
Base URL
All requests use the http://localhost:8001/api/v1 variable:
● Local: http://localhost:8001/api/v1
● Staging: Configure in staging environment
● Production: Configure in Prod environment
Authentication Flow
Standard Login Flow
1. Sign Up → Create new user account
2. Verify OTP → Confirm email with OTP code
3. Login → Authenticate and receive JWT token
4. Use Token → Include in Authorization header for all subsequent requests
SSO Login Flow
1. SSO Login → Authenticate via Single Sign-On provider
2. Receive Token → Get JWT token from SSO callback
3. Use Token → Include in Authorization header
Endpoints
User Login
POST http://localhost:8001/api/v1/auth/login
None
None
Authenticates a user with email and password credentials.
Request Body:
JSON
{
"email": "user@example.com",
"password": "securePassword123"
}
Success Response (200):
JSON
{
"success": true,
"data": {
"user": {
"id": "user-id",
"email": "user@example.com",
"name": "User Name",
"role": "admin"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
None
None
"refreshToken": "refresh-token-here"
}
}
Error Response (401):
JSON
{
"success": false,
"message": "Invalid credentials"
}
SSO Login
POST http://localhost:8001/api/v1/auth/sso
Initiates Single Sign-On authentication flow.
Request Body:
JSON
{
"provider": "google",
None
None
"token": "sso-provider-token"
}
User SignUp
POST http://localhost:8001/api/v1/auth/signup
Registers a new user account.
Request Body:
JSON
{
"email": "newuser@example.com",
"password": "securePassword123",
"name": "New User",
"companyName": "Company Inc",
"industry": "financial-services"
}
Success Response (201):
JSON
None
{
"success": true,
"message": "Registration successful. Please verify your
email.",
"data": {
"userId": "new-user-id",
"email": "newuser@example.com"
}
}
Verify OTP
POST http://localhost:8001/api/v1/auth/verify-otp
Verifies the OTP code sent to user's email during registration.
Request Body:
JSON
{
"email": "user@example.com",
"otp": "123456"
}
Success Response (200):
None
None
JSON
{
"success": true,
"message": "Email verified successfully",
"data": {
"token": "jwt-token-here"
}
}
Resend Verification OTP
POST http://localhost:8001/api/v1/auth/resend-otp
Resends the OTP verification code to user's email.
Request Body:
JSON
{
"email": "user@example.com"
}
Forgot Password
None
None
POST http://localhost:8001/api/v1/auth/forgot-password
Initiates the password reset process by sending a reset link/OTP.
Request Body:
JSON
{
"email": "user@example.com"
}
Success Response (200):
JSON
{
"success": true,
"message": "Password reset instructions sent to your email"
}
Create New Password
POST http://localhost:8001/api/v1/auth/reset-password
Sets a new password using the reset token.
Request Body:
JSON
None
None
None
{
"email": "user@example.com",
"token": "reset-token",
"newPassword": "newSecurePassword123"
}
Get Current User
GET http://localhost:8001/api/v1/auth/me
Retrieves the currently authenticated user's profile.
Headers:
Plain Text
Authorization: Bearer
Success Response (200):
JSON
{
"success": true,
"data": {
None
"id": "user-id",
"email": "user@example.com",
"name": "User Name",
"role": "admin",
"company": {
"id": "company-id",
"name": "Company Inc"
},
"permissions": ["read", "write", "admin"]
}
}
User Logout
POST http://localhost:8001/api/v1/auth/logout
Logs out the current user and invalidates the session.
Headers:
Plain Text
Authorization: Bearer
Error Handling
Status
Code
Description
400 Bad Request - Invalid input data or missing required fields
401 Unauthorized - Invalid credentials or expired token
403 Forbidden - Account not verified or suspended
404 Not Found - User not found
409 Conflict - Email already registered
429 Too Many Requests - Rate limit exceeded
500 Internal Server Error
Security Best Practices
1. Token Storage: Store JWT tokens securely (httpOnly cookies or secure storage)
2. Token Expiry: Tokens expire after a set period; use refresh tokens for renewal
3. Password Requirements: Minimum 8 characters, mix of letters, numbers, and
symbols
4. OTP Expiry: OTP codes expire after 10 minutes
5. Rate Limiting: Login attempts are rate-limited to prevent brute force attacks
Environment Variables
Variable Description
baseUR
L
API base URL
token JWT authentication token (set after login)
Companies Collection
Overview
The Companies collection is the core of the RegWatch application, providing
comprehensive endpoints for managing companies, regulations, obligations,
notifications, compliance monitoring, and regulatory tracking. This collection enables
organizations to maintain regulatory compliance, track obligations, manage alerts, and
monitor regulatory changes.
Base URL
All requests use the {{baseURL}} variable which should be configured in your active
environment:
● Local: http://localhost:8001/api/v1
● Staging: Configure in staging environment
● Production: Configure in Prod environment
Authentication
All endpoints require Bearer token authentication:
Plain Text
None
Authorization: Bearer {{token}}
Obtain your token from the Auth collection's login endpoints.
Company Management
Get All Companies
GET {{baseURL}}/company?page=1&limit=20&sortBy=name&order=asc
Retrieves a paginated list of all companies with sorting options.
None
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | page |
number | Page number (default: 1) | | limit | number | Results per page (default: 20) | |
sortBy | string | Field to sort by (e.g., name) | | order | string | Sort order: asc or desc |
Get Company Profile
GET {{baseURL}}/company/me
Retrieves the profile of the currently authenticated company.
Update Company Profile
PATCH {{baseURL}}/company/
Updates the company profile information.
Request Body:
JSON
{
"name": "Updated Company Name",
"industry": "financial-services",
"address": "123 Business Street"
}
Delete Company
DELETE {{baseURL}}/company/
Deletes the current company from the system.
Get Company Members
GET {{baseURL}}/company/members
Retrieves all team members associated with the company.
Change Password
PATCH {{baseURL}}/company/{companyId}/password
Changes the password for a company account.
Regulation Management
Get All Recent Regulations
GET {{baseURL}}/regulation/recent
Retrieves recently published or updated regulations.
Get Regulation by Id
GET {{baseURL}}/regulation/{regulationId}
Retrieves detailed information about a specific regulation.
Get Regulations By RefNo
GET {{baseURL}}/regulation/ref/{referenceNumber}
Retrieves a regulation by its reference number.
Get Regulations by Entity
GET {{baseURL}}/regulation/entity/{entityType}
Retrieves regulations applicable to a specific entity type (e.g., Bureaux-de-Change).
Get Regulations by Regulators
GET {{baseURL}}/regulation/regulator/{regulatorCode}
Retrieves regulations from a specific regulator (e.g., CBN).
Get Regulations by Regulatory Area
GET {{baseURL}}/regulation/area/{areaName}
Retrieves regulations by regulatory area classification.
Get Regulations by Standards
GET {{baseURL}}/regulation/obligations/standard/{standardName}
Retrieves regulations associated with specific standards (e.g., ISO 27001).
Get Regulations By Risk Level
GET {{baseURL}}/regulation/risk/{riskLevel}
Retrieves regulations filtered by risk level (High, Medium, Low).
Get Regulations By Deadline
GET {{baseURL}}/regulation/deadlines
Retrieves regulations with upcoming compliance deadlines.
Search All Regulations
GET {{baseURL}}/regulation/search
Searches regulations using keywords and filters.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | q |
string | Search query | | regulator | string | Filter by regulator | | riskLevel | string | Filter by
risk level |
Get Regulation Stats
GET {{baseURL}}/regulation/stats
Retrieves statistical overview of regulations in the system.
Categorize Regulations
POST {{baseURL}}/regulation/categorize
Categorizes regulations based on specified criteria.
Calculate Risk
POST {{baseURL}}/regulation/calculate-risk
Calculates risk scores for regulations.
Monitor Regulation
POST {{baseURL}}/regulation/{regulationId}/monitor
Adds a regulation to the monitoring list.
Unmonitor Regulation
DELETE {{baseURL}}/regulation/{regulationId}/monitor
Removes a regulation from the monitoring list.
Monitored Regulation
GET {{baseURL}}/regulation/monitored
Retrieves all regulations currently being monitored.
Obligations Management
Get Obligations
GET {{baseURL}}/regulation/{regulationId}/obligations
Retrieves all obligations for a specific regulation.
Get Obligations by ID
GET {{baseURL}}/regulation/obligations/{obligationId}
Retrieves details of a specific obligation.
Get Obligations per Regulation
GET {{baseURL}}/regulation/{regulationId}/obligations
Retrieves obligations associated with a regulation.
Notifications & Alerts
None
Send Notification
POST {{baseURL}}/notification
Sends a notification to specified recipients.
Request Body:
JSON
{
"title": "Compliance Alert",
"message": "New regulation published",
"recipients": ["user-id-1", "user-id-2"],
"type": "regulation_update"
}
Send Bulk Notifications
POST {{baseURL}}/notification/bulk
Sends notifications to multiple recipients at once.
Get Company Notifications
GET {{baseURL}}/notification/{companyId}
Retrieves all notifications for a specific company.
Notification Statistics
GET {{baseURL}}/notification/{companyId}
Retrieves notification statistics for a company.
Notification Dashboard
GET {{baseURL}}/notification/{companyId}/dashboard
Retrieves notification dashboard data.
Delete Notification by ID
DELETE {{baseURL}}/notification/{notificationId}
Deletes a specific notification.
Company Notification Preferences
PUT {{baseURL}}/notification/preferences/{companyId}
Updates notification preferences for a company.
Test Notification
POST {{baseURL}}/notification/test
Sends a test notification to verify system functionality.
Reassessment Notification
POST {{baseURL}}/notification/reassess/{companyId}
Triggers reassessment notifications for a company.
Deadline Reminder Notification
POST {{baseURL}}/notification/deadline-reminders
Sends deadline reminder notifications.
Weekly Digest
POST {{baseURL}}/notification/weekly-digest
Generates and sends weekly digest notifications.
Trigger Weekly Digest Cron
POST {{baseURL}}/notification/weekly-digest/cron-trigger
Triggers the weekly digest cron job.
Process Pending Notifications
POST {{baseURL}}/notification/process-pending
Processes all pending notifications in the queue.
Trigger Notification
POST {{baseURL}}/notification/notify-new
Triggers notifications for new regulations.
Trigger Monitoring
POST {{baseURL}}/notification/monitor
Triggers monitoring notifications.
None
Monitoring & Alerts
Create Monitoring Alerts
POST {{baseURL}}/monitor/alerts
Creates monitoring alerts for regulatory changes.
Request Body:
JSON
{
"alertType": "regulation_change",
"conditions": {
"regulatorIds": ["CBN", "SEC"],
"keywords": ["data protection", "AML"]
},
"frequency": "immediate"
}
Dashboard & Compliance
Get Dashboard Summary
GET {{baseURL}}/dashboard/{companyId}/summary
Retrieves compliance dashboard summary for a company.
None
Response:
JSON
{
"success": true,
"data": {
"overallCompliance": 85.5,
"totalObligations": 150,
"completedObligations": 128,
"pendingObligations": 22,
"riskLevel": "medium"
}
}
Get Company Compliance Obligations
GET {{baseURL}}/dashboard/{companyId}
Retrieves all compliance obligations for a company.
Reassess Company
POST {{baseURL}}/dashboard/reassess/{companyId}
Triggers a compliance reassessment for a company.
None
None
AI Chat
Chat
POST {{baseURL}}/chat
Interacts with the AI assistant for regulatory queries.
Request Body:
JSON
{
"message": "What are the latest CBN regulations?",
"context": "compliance"
}
Response Format
Success Response
JSON
{
"success": true,
"data": { },
"meta": {
None
"page": 1,
"limit": 20,
"total": 100
}
}
Error Response
JSON
{
"success": false,
"message": "Error description",
"error": "Detailed error information"
}
Error Codes
Code Description
400 Bad Request - Invalid input data
401 Unauthorized - Invalid or missing token
403 Forbidden - Insufficient permissions
404 Not Found - Resource not found
500 Internal Server Error
Environment Variables
Variable Description
baseUR
L
API base URL
token Authentication token
PreAssessment Collection
Overview
The PreAssessment collection provides endpoints for managing compliance
assessments in the RegWatch application. It enables organizations to conduct
self-assessments, track compliance status, generate reports, and monitor compliance
trends across various regulatory frameworks.
Base URL
All requests use the http://localhost:8001/api/v1 variable:
● Local: http://localhost:8001/api/v1
● Staging: Configure in staging environment
● Production: Configure in Prod environment
Authentication
All endpoints require Bearer token authentication:
Plain Text
None
None
None
Authorization: Bearer
Assessment Management
Start or Create Assessment
POST http://localhost:8001/api/v1/assessment
Initiates a new compliance assessment for the organization.
Request Body:
JSON
{
"regulationId": "7152",
"assessmentType": "self-assessment",
"dueDate": "2024-12-31"
}
Success Response (201):
JSON
{
"success": true,
"data": {
"assessmentId": "assessment-id",
"status": "in_progress",
"createdAt": "2024-01-15T10:00:00Z"
}
}
Get Company Compliance Assessment
GET http://localhost:8001/api/v1/assessment/company/{companyId}
Retrieves all compliance assessments for a specific company.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | status |
string | Filter by status (pending, in_progress, completed) | | page | number | Page
number | | limit | number | Results per page |
Get User Compliance Assessment
GET http://localhost:8001/api/v1/assessment/user/{userId}
Retrieves assessments assigned to or created by a specific user.
Get Assessment By Id
GET http://localhost:8001/api/v1/assessment/{assessmentId}
Retrieves detailed information about a specific assessment.
Success Response (200):
JSON
None
{
"success": true,
"data": {
"id": "assessment-id",
"regulation": {
"id": "7152",
"name": "Data Protection Regulation"
},
"status": "in_progress",
"progress": 65,
"questions": [...],
"responses": [...],
"score": null,
"createdAt": "2024-01-15T10:00:00Z",
"updatedAt": "2024-01-20T14:30:00Z"
}
}
Update Assessment
PATCH http://localhost:8001/api/v1/assessment/{assessmentId}
Updates an existing assessment with new responses.
Request Body:
None
None
JSON
{
"responses": [
{
"questionId": "q1",
"answer": "yes",
"evidence": "Document reference",
"notes": "Implementation completed in Q3"
}
]
}
Submit Assessment
POST
http://localhost:8001/api/v1/assessment/{assessmentId}/submit
Submits a completed assessment for review and scoring.
Success Response (200):
JSON
{
None
"success": true,
"data": {
"assessmentId": "assessment-id",
"status": "submitted",
"score": 85.5,
"complianceLevel": "high",
"submittedAt": "2024-01-25T16:00:00Z"
}
}
Compliance Analytics
Get Compliance Analytics Dashboard
GET http://localhost:8001/api/v1/assessment/analytics/dashboard
Retrieves comprehensive compliance analytics for the dashboard.
Success Response (200):
JSON
{
"success": true,
"data": {
None
"overallScore": 78.5,
"assessmentsCompleted": 45,
"assessmentsPending": 12,
"complianceByRegulator": {...},
"riskDistribution": {...},
"trends": {...}
}
}
Get Overall Compliance
GET http://localhost:8001/api/v1/assessment/compliance/overall
Retrieves the overall compliance score and status.
Success Response (200):
JSON
{
"success": true,
"data": {
"overallScore": 82.3,
"status": "compliant",
"lastUpdated": "2024-01-25T10:00:00Z",
None
"breakdown": {
"high": 15,
"medium": 8,
"low": 3
}
}
}
Get Compliance by Thematic Area
GET http://localhost:8001/api/v1/assessment/compliance/thematic
Retrieves compliance scores grouped by thematic areas.
Success Response (200):
JSON
{
"success": true,
"data": [
{
"area": "Data Protection",
"score": 90,
"status": "compliant"
None
},
{
"area": "AML/CFT",
"score": 75,
"status": "partially_compliant"
}
]
}
Get Compliance by Regulator
GET http://localhost:8001/api/v1/assessment/compliance/regulator
Retrieves compliance scores grouped by regulatory body.
Get Month-on-Month Compliance Trend
GET http://localhost:8001/api/v1/assessment/compliance/trend
Retrieves compliance score trends over time.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | months
| number | Number of months to include (default: 12) |
Success Response (200):
JSON
None
{
"success": true,
"data": {
"trends": [
{"month": "2024-01", "score": 75},
{"month": "2024-02", "score": 78},
{"month": "2024-03", "score": 82}
]
}
}
Reports & Export
Generate Assessment Report
POST
http://localhost:8001/api/v1/assessment/{assessmentId}/report
Generates a detailed compliance report for an assessment.
Request Body:
JSON
{
"format": "pdf",
"includeEvidence": true,
"includeRecommendations": true
}
Get Assessment History
GET http://localhost:8001/api/v1/assessment/history
Retrieves historical assessment records.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
startDate | string | Start date (ISO format) | | endDate | string | End date (ISO format) | |
regulationId | string | Filter by regulation |
Export Compliance Data
GET http://localhost:8001/api/v1/assessment/export
Exports compliance data in various formats.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | format |
string | Export format (csv, xlsx, pdf) | | type | string | Data type to export |
Dashboard
Get Dashboard Summary
GET http://localhost:8001/api/v1/assessment/dashboard/summary
Retrieves a summary of compliance status for the dashboard.
Get Compliance Alerts
None
GET http://localhost:8001/api/v1/assessment/alerts
Retrieves compliance-related alerts and notifications.
Assessment Status Flow
Plain Text
draft → in_progress → submitted → under_review → completed
↓
requires_action
Compliance Scoring
Score
Range
Level Description
90-100 High Fully compliant
70-89 Medium Substantially compliant
50-69 Low Partially compliant
0-49 Critical Non-compliant
Risk Levels
Level Description
High Immediate action required
Medium Action required within 30 days
Low Action required within 90 days
Error Handling
Status
Code
Description
400 Bad Request - Invalid assessment data
401 Unauthorized - Invalid or missing token
403 Forbidden - No permission to access
assessment
404 Not Found - Assessment not found
409 Conflict - Assessment already submitted
500 Internal Server Error
Environment Variables
Variable Description
baseUR
L
API base URL
token Authentication token
Best Practices
1. Regular Assessments: Conduct assessments quarterly or when regulations
change
2. Evidence Documentation: Always attach supporting evidence to responses
3. Review Before Submit: Thoroughly review all responses before submission
4. Track Trends: Monitor compliance trends to identify improvement areas
5. Action Plans: Create action plans for non-compliant areas
Industry Collection
Overview
The Industry collection provides endpoints for managing industry classifications in the
RegWatch application. Industries are used to categorize companies and determine
applicable regulations based on their sector of operation.
Base URL
All requests use the http://localhost:8001/api/v1 variable:
● Local: http://localhost:8001/api/v1
● Staging: Configure in staging environment
● Production: Configure in Prod environment
Authentication
All endpoints require Bearer token authentication:
Plain Text
None
Authorization: Bearer
Endpoints
Get All Industries
GET http://localhost:8001/api/v1/industry
None
Retrieves a complete list of all industries with full details.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | page |
number | Page number (default: 1) | | limit | number | Results per page (default: 50) | |
sortBy | string | Field to sort by | | order | string | Sort order: asc or desc |
Success Response (200):
JSON
{
"success": true,
"data": [
{
"id": "industry-1",
"name": "Financial Services",
"code": "FIN",
"description": "Banking, insurance, and investment
services",
"regulators": ["CBN", "SEC", "NAICOM"],
"createdAt": "2024-01-01T00:00:00Z"
},
{
"id": "industry-2",
"name": "Healthcare",
"code": "HLT",
"description": "Medical and healthcare services",
None
"regulators": ["NAFDAC", "MDCN"],
"createdAt": "2024-01-01T00:00:00Z"
}
],
"meta": {
"total": 25,
"page": 1,
"limit": 50
}
}
Get Industries List
GET http://localhost:8001/api/v1/industry/list
Retrieves a simplified list of industries (id and name only) for dropdowns and selection
interfaces.
Success Response (200):
JSON
{
"success": true,
"data": [
None
None
{"id": "industry-1", "name": "Financial Services"},
{"id": "industry-2", "name": "Healthcare"},
{"id": "industry-3", "name": "Technology"}
]
}
Search Industry
GET http://localhost:8001/api/v1/industry/search
Searches industries by name or code.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | q |
string | Search query | | field | string | Field to search (name, code, description) |
Example:
Plain Text
GET
http://localhost:8001/api/v1/industry/search?q=financial&fie
ld=name
Success Response (200):
JSON
{
"success": true,
None
"data": [
{
"id": "industry-1",
"name": "Financial Services",
"code": "FIN",
"matchScore": 0.95
}
]
}
Get Industry By Id
GET http://localhost:8001/api/v1/industry/{industryId}
Retrieves detailed information about a specific industry.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
industryId | string | The unique industry identifier |
Success Response (200):
JSON
{
"success": true,
"data": {
"id": "industry-1",
"name": "Financial Services",
"code": "FIN",
"description": "Banking, insurance, and investment
services",
"regulators": [
{"id": "CBN", "name": "Central Bank of Nigeria"},
{"id": "SEC", "name": "Securities and Exchange
Commission"}
],
"applicableRegulations": 156,
"companiesCount": 45,
"createdAt": "2024-01-01T00:00:00Z",
"updatedAt": "2024-01-15T10:00:00Z"
}
}
Create Industry
POST http://localhost:8001/api/v1/industry
Creates a new industry classification. Requires admin privileges.
Request Body:
JSON
None
None
{
"name": "Fintech",
"code": "FNT",
"description": "Financial technology companies",
"regulators": ["CBN", "SEC"],
"parentIndustry": "industry-1"
}
Success Response (201):
JSON
{
"success": true,
"message": "Industry created successfully",
"data": {
"id": "new-industry-id",
"name": "Fintech",
"code": "FNT"
}
}
None
None
Update Industry
PATCH http://localhost:8001/api/v1/industry/{industryId}
Updates an existing industry. Requires admin privileges.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
industryId | string | The unique industry identifier |
Request Body:
JSON
{
"name": "Updated Industry Name",
"description": "Updated description",
"regulators": ["CBN", "SEC", "NAICOM"]
}
Success Response (200):
JSON
{
"success": true,
"message": "Industry updated successfully",
"data": {
"id": "industry-id",
None
None
"name": "Updated Industry Name"
}
}
Delete Industry
DELETE http://localhost:8001/api/v1/industry/{industryId}
Deletes an industry classification. Requires admin privileges. Cannot delete industries
with associated companies.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
industryId | string | The unique industry identifier |
Success Response (200):
JSON
{
"success": true,
"message": "Industry deleted successfully"
}
Error Response (409):
JSON
None
{
"success": false,
"message": "Cannot delete industry with associated
companies"
}
Industry Structure
Industries in RegWatch follow a hierarchical structure:
Plain Text
Parent Industry
├── Sub-Industry 1
│ ├── Specialization A
│ └── Specialization B
└── Sub-Industry 2
Common Industries
Code Name Primary Regulators
FIN Financial Services CBN, SEC, NAICOM
HLT Healthcare NAFDAC, MDCN
TEL Telecommunications NCC
ENR Energy NERC, DPR
MFG Manufacturing SON, NAFDAC
Error Handling
Status
Code
Description
400 Bad Request - Invalid industry data
401 Unauthorized - Invalid or missing token
403 Forbidden - Insufficient permissions
404 Not Found - Industry not found
409 Conflict - Industry code already exists or has
dependencies
500 Internal Server Error
Environment Variables
Variable Description
baseUR
L
API base URL
token Authentication token
Use Cases
1. Company Registration: Select industry during company signup
2. Regulation Filtering: Filter regulations by industry
3. Compliance Mapping: Map compliance requirements to industries
4. Reporting: Generate industry-specific compliance reports
Team Collection
Overview
The Team collection provides endpoints for managing team members, roles,
permissions, and invitations within the RegWatch application. It enables organizations to
collaborate on compliance management by inviting team members, assigning roles, and
tracking team activities.
Base URL
All requests use the http://localhost:8001/api/v1 variable:
● Local: http://localhost:8001/api/v1
● Staging: Configure in staging environment
● Production: Configure in Prod environment
Authentication
All endpoints require Bearer token authentication:
Plain Text
None
Authorization: Bearer
Team Member Management
Invite Team Member
None
None
POST http://localhost:8001/api/v1/team/invite
Sends an invitation to a new team member.
Request Body:
JSON
{
"email": "newmember@company.com",
"role": "compliance_officer",
"permissions": ["read", "write", "assess"],
"message": "Welcome to our compliance team!"
}
Success Response (201):
JSON
{
"success": true,
"message": "Invitation sent successfully",
"data": {
"inviteId": "invite-id",
"email": "newmember@company.com",
"status": "pending",
None
"expiresAt": "2024-02-15T10:00:00Z"
}
}
Validate Invite Token
GET http://localhost:8001/api/v1/team/invite/validate/{token}
Validates an invitation token before accepting.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| | token |
string | The invitation token |
Success Response (200):
JSON
{
"success": true,
"data": {
"valid": true,
"email": "newmember@company.com",
"company": "Company Inc",
"role": "compliance_officer",
"expiresAt": "2024-02-15T10:00:00Z"
}
None
None
}
Accept Invitation
POST http://localhost:8001/api/v1/team/invite/accept
Accepts a team invitation and creates the user account.
Request Body:
JSON
{
"token": "invitation-token",
"name": "New Member",
"password": "securePassword123"
}
Success Response (200):
JSON
{
"success": true,
"message": "Invitation accepted successfully",
None
"data": {
"userId": "new-user-id",
"token": "jwt-token"
}
}
Get Company Members
GET http://localhost:8001/api/v1/team/members
Retrieves all team members for the current company.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | role |
string | Filter by role | | status | string | Filter by status (active, inactive) | | page | number |
Page number | | limit | number | Results per page |
Success Response (200):
JSON
{
"success": true,
"data": [
{
"id": "member-1",
"name": "John Doe",
"email": "john@company.com",
"role": "admin",
"status": "active",
"lastActive": "2024-01-25T14:30:00Z"
},
{
"id": "member-2",
"name": "Jane Smith",
"email": "jane@company.com",
"role": "compliance_officer",
"status": "active",
"lastActive": "2024-01-25T10:00:00Z"
}
],
"meta": {
"total": 15,
"page": 1,
"limit": 20
}
}
Get Team Member Details
GET http://localhost:8001/api/v1/team/members/{memberId}
None
Retrieves detailed information about a specific team member.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
memberId | string | The team member's ID |
Success Response (200):
JSON
{
"success": true,
"data": {
"id": "member-1",
"name": "John Doe",
"email": "john@company.com",
"role": "admin",
"permissions": ["read", "write", "admin", "assess"],
"status": "active",
"joinedAt": "2023-06-15T10:00:00Z",
"lastActive": "2024-01-25T14:30:00Z",
"assessmentsCompleted": 25,
"activityLog": [...]
}
}
Update Team Member Role
None
None
PATCH http://localhost:8001/api/v1/team/members/{memberId}/role
Updates a team member's role and permissions.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
memberId | string | The team member's ID |
Request Body:
JSON
{
"role": "senior_compliance_officer",
"permissions": ["read", "write", "assess", "approve"]
}
Success Response (200):
JSON
{
"success": true,
"message": "Role updated successfully",
"data": {
"memberId": "member-1",
"newRole": "senior_compliance_officer"
}
}
None
Deactivate Team Member
POST
http://localhost:8001/api/v1/team/members/{memberId}/deactivate
Deactivates a team member's account (soft delete).
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
memberId | string | The team member's ID |
Success Response (200):
JSON
{
"success": true,
"message": "Team member deactivated successfully"
}
Reactivate Team Member
POST
http://localhost:8001/api/v1/team/members/{memberId}/reactivate
Reactivates a previously deactivated team member.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
memberId | string | The team member's ID |
Delete Team Member
DELETE http://localhost:8001/api/v1/team/members/{memberId}
None
Permanently removes a team member from the organization.
Path Parameters: | Parameter | Type | Description | |-----------|------|-------------| |
memberId | string | The team member's ID |
Audit & Activity
Get Audit Logs
GET http://localhost:8001/api/v1/team/audit-logs
Retrieves audit logs for team activities.
Query Parameters: | Parameter | Type | Description | |-----------|------|-------------| | userId |
string | Filter by user | | action | string | Filter by action type | | startDate | string | Start
date (ISO format) | | endDate | string | End date (ISO format) | | page | number | Page
number | | limit | number | Results per page |
Success Response (200):
JSON
{
"success": true,
"data": [
{
"id": "log-1",
"userId": "member-1",
"userName": "John Doe",
"action": "assessment_submitted",
"details": "Submitted assessment for CBN regulation",
"timestamp": "2024-01-25T14:30:00Z",
"ipAddress": "192.168.1.1"
}
],
"meta": {
"total": 500,
"page": 1,
"limit": 50
}
}
Role Hierarchy
Role Level Description
owner 1 Full access, can delete company
admin 2 Full access except company
deletion
senior_compliance_officer 3 Can approve assessments
compliance_officer 4 Can create and submit
assessments
viewer 5 Read-only access
Permissions Matrix
None
Permissio
n
Description
read View compliance data
write Create and edit assessments
assess Submit assessments
approve Approve submitted
assessments
admin Manage team members
delete Delete records
Invitation Status Flow
Plain Text
pending → accepted
→ expired
→ revoked
Error Handling
Status
Code
Description
400 Bad Request - Invalid input data
401 Unauthorized - Invalid or missing token
403 Forbidden - Insufficient permissions
404 Not Found - Member or invitation not found
409 Conflict - Email already in team
410 Gone - Invitation expired
500 Internal Server Error
Environment Variables
Variable Description
baseURL API base URL
token Authentication
token
Security Considerations
1. Role-Based Access: Users can only perform actions allowed by their role
2. Audit Trail: All team actions are logged for compliance
3. Invitation Expiry: Invitations expire after 7 days
4. Self-Modification: Users cannot modify their own role or delete themselves