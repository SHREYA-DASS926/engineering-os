# Engineering OS Architecture

## High-Level Overview

```text
                Engineering OS
                       │
        ┌──────────────┴──────────────┐
        │                             │
      Pages                     Shared Components
        │                             │
        └──────────────┬──────────────┘
                       │
                  Feature Modules
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      Hooks         Services       Utilities
        │              │              │
        └──────────────┴──────────────┘
                       │
                Local Storage
                       │
                 Supabase (v2)
                       │
                  AI Layer (v2)
```

---

## Folder Structure

```text
src/
│
├── components/
│   └── ui/
│
├── features/
│   ├── dashboard/
│   ├── study/
│   ├── coding/
│   ├── placement/
│   ├── internship/
│   └── expense/
│
├── services/
│
├── hooks/
│
├── pages/
│
├── types/
│
└── utils/
```

---

## Data Flow

```text
User Action

↓

Component

↓

Hook

↓

Service

↓

Storage

↓

UI Refresh
```

---

## Responsibilities

### Pages

Responsible only for layout and composing features.

---

### Components

Reusable UI elements.

Examples:

- Button
- Card
- Badge
- ProgressBar
- Input

---

### Feature Components

Business-specific UI.

Example:

```
StudyTracker

↓

SubjectCard

↓

Attendance Calculator
```

---

### Hooks

Business logic.

Examples:

- useSubjects()
- useCoding()
- useDashboard()

---

### Services

Responsible for data access only.

Examples:

- studyService
- codingService
- internshipService
- expenseService

---

### Utilities

Pure helper functions.

Examples:

- attendance calculations
- placement scoring
- formatting

---

## Future Architecture

```text
React

↓

Feature Hooks

↓

Service Layer

↓

Supabase

↓

Edge Functions

↓

OpenAI

↓

Career Engine

↓

Dashboard
```

---

## Core Principles

- Single Responsibility
- Feature-based organization
- Reusable UI
- Separation of concerns
- Type safety
- Consistent design system