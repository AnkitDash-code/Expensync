# Expensync

## Problem Statement

Expensync is a decentralized, tamper-proof expense tracking platform designed for individuals and contributors such as freelancers, DAO members, and remote employees. Users can submit expense receipts, which are hashed and time-stamped on-chain to ensure transparency, authenticity, and auditability—eliminating the need to trust a centralized authority.

## Solution

Expensync leverages blockchain technology to create a travel expense tracker that generates detailed reports and delivers them directly to the accounts team. Each expense document is tracked using cryptographic transactions, ensuring authenticity by maintaining virtual records in a non-fungible storage system. This approach streamlines the submission and verification process for both workers and the accounts team, facilitating efficient reimbursements.

### Key Features

- **Decentralized Receipt Submission:** Users submit receipts (images, PDFs) via mobile or web interfaces. Every submission is securely stored and hashed on-chain.
- **On-chain Verification:** Each document is time-stamped and hashed on a blockchain network, providing a tamper-proof record.
- **File Storage:** Documents are stored on IPFS, ensuring durability and verifiability.
- **User-Friendly Interfaces:** 
  - **Mobile App:** Simplified receipt submission and budget tracking for workers.
  - **Web Dashboard:** Analytics and document management for the accounts team.
- **Budget Tracking:** Users always know their current budget. Budgets can be set manually by the accounts team or via uploaded spreadsheets.
- **AI-Powered Assistance:**
  - **Chatbot:** In-app chatbot provides instant answers and can escalate queries to the accounts team.
  - **Mobile OCR:** Extracts data from receipts for easier entry (library TBD).
  - **Fraud Detection AI:** Analyzes submitted documents for patterns matching known fraud (model TBD).
  - **Analytics AI:** Automated analysis and visualization of spending, comparisons with budget, and detection of anomalies.
- **Seamless Workflow:** Clean UI/UX for both submission and review, tailored for worker efficiency and streamlined accounting.

> **Note:** If you make any changes to features, please inform the project maintainers.

---

## Tech Stack

**Frontend**
- **Mobile:** Flutter
- **Web:** ReactJS + Next.js

**Backend**
- **Blockchain Network:** Custom solution (Avalanche, Quorum)
- **File Storage:** IPFS (exploring local or best free-tier providers)
- **Authentication & DB:** Supabase

**AI**
- **Mobile OCR:** Flutter library (TBD)
- **AI Chatbot:** Basic RAG (Retrieval Augmented Generation) using LangChain and a small LLM/BERT
- **Fraud Detection:** ML/LLM with RAG, referencing a large variety of fraud documents (TBD)
- **Analytics:** Visualized with shadcn or alternative UI libraries; LLM-based analysis for insights
- **Budget AI:** Same as AI Chatbot

---

## Implementation Details

### i. Frontend

- **Web (`/web/`):** Built using ReactJS and Next.js. Provides a dashboard for the accounts team with access to all documents, analytics, and tools for budget management and verification.
  - Components for document display, analytics charts, user management, and budget setting.
  - Connects to backend APIs for document retrieval, budget information, and analytics data.
- **Mobile (`/mobile/`):** Developed in Flutter, focusing on ease of receipt submission, real-time budget tracking, and AI chatbot integration for user support.
  - Features include camera/upload for receipt submission, chatbot interface, and budget overview.
  - Interfaces with backend for document upload, chatbot queries, and budget updates.

### ii. Backend

- **Blockchain (`/blockchain/`):** Handles transaction logging for document submission, hashing, and time-stamping. Ensures receipts are auditable and tamper-proof.
  - Includes smart contracts (Solidity or custom solution) for managing document hashes and time-stamps.
  - Interfaces with Avalanche or Quorum networks.
- **File Storage (`/storage/`):** Documents are uploaded and pinned to IPFS, providing decentralized and reliable access.
  - Integration scripts for IPFS pinning/unpinning.
  - Metadata linking receipts to transaction hashes.
- **Authentication (`/auth/`):** Managed through Supabase, offering secure user management and session tracking.
  - Provides JWT-based authentication for web and mobile clients.

### iii. AI Components

- **Mobile OCR (`/mobile/ocr/`):** Automatically extracts key data from receipts to minimize manual entry (implementation pending).
- **AI Chatbot (`/ai/chatbot/`):** Available in both mobile and web, leveraging LangChain and a lightweight LLM/BERT for contextual responses and budget queries.
- **Fraud Detection (`/ai/fraud_detection/`):** Monitors each document upload, comparing with historical fraud patterns for early detection (model/approach TBD).
- **Analytics AI (`/ai/analytics/`):** Processes spending data to generate graphs, budget comparisons, and actionable insights using LLMs.

### iv. API Call Formats & Handling

- **Backend APIs (`/api/`):** 
  - RESTful endpoints for user authentication, document upload, budget management, analytics retrieval, and blockchain operations.
  - API documentation (to be provided upon finalization).

### v. Overall Design

- **UI/UX:** 
  - Mobile app: Prioritizes fast receipt capture, clear budget visibility, and easy interaction with the chatbot.
  - Web dashboard: Optimized for data review, document verification, analytics, and streamlined workflow for the accounts team.

### vi. Minimum Requirements

All contributors must maintain the required set of software and environments until the end of the hackathon. Details to be specified by the team leads.

---

## Directory Structure

```
/
├── web/                 # Web frontend (ReactJS + Next.js)
├── mobile/              # Mobile app (Flutter)
│    └── ocr/            # OCR module for receipt extraction (TBD)
├── blockchain/          # Smart contracts and blockchain integration
├── storage/             # IPFS integration and file handling logic
├── auth/                # Authentication and Supabase management
├── ai/                  # AI modules (chatbot, fraud detection, analytics)
│    ├── chatbot/
│    ├── fraud_detection/
│    └── analytics/
├── api/                 # Backend API definitions and handlers
├── docs/                # Documentation and API specs
└── README.md            # Project overview (this file)
```

---

## Code Overview

- **web/**: Contains all the React/Next.js components, pages, and API integration for the accounts team's dashboard.
- **mobile/**: Flutter codebase for the worker-facing app, including UI, business logic, and integration for OCR and chatbot.
- **blockchain/**: Smart contract source code (e.g., Solidity), deployment scripts, and blockchain interaction modules.
- **storage/**: Scripts and utilities for integrating with IPFS, handling document uploads, and managing file hashes.
- **auth/**: Supabase configuration, user management scripts, and authentication middleware.
- **ai/**: 
  - **chatbot/**: Code for the AI assistant, RAG logic, and integration with LangChain/LLM.
  - **fraud_detection/**: ML/LLM models and scripts for document analysis.
  - **analytics/**: Data aggregation and visualization logic, including AI-driven insights.
- **api/**: REST API implementation, routing, and controller logic for all app features.
- **docs/**: Contains setup instructions, architecture diagrams, and API docs.

---

## Contributing

- Please raise an issue or pull request for any proposed changes.
- For significant feature modifications, notify the maintainers in advance.

## License

[Specify license here]

## Contact

For queries, contact the project maintainers or open an issue in the repository.

---
