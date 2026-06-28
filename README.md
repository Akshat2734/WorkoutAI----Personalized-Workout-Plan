
# 🤖 WorkoutAI - Personalized Voice-Interactive Fitness Planner

WorkoutAI is a next-generation AI-powered fitness platform that combines conversational voice AI with real-time cloud synchronization to generate personalized workout programs. Instead of manually filling forms, users simply speak with an AI coach that understands their goals, available equipment, experience level, and physical constraints before producing a customized training plan.

---

## 🌟 Features

## 🌟 Core Features
* **Voice-Driven AI Generation:** Integrates **Vapi** (Voice AI) to allow users to dynamically converse with an AI coach. The AI gathers physical metrics, goals, and constraints to generate a tailored workout program.
* **Immersive UI/UX:** Features a highly stylized, modern interface utilizing custom `CornerElements` and a dynamic `TerminalOverlay` to visualize the AI's "thought process" and plan generation in real-time.
* **Real-Time Data Sync:** Replaces traditional REST APIs with a **Convex** backend, ensuring that generated fitness plans, exercise galleries, and user profiles synchronize across devices instantaneously.
* **Seamless Authentication:** Offloads complex identity management to **Clerk**, wrapping the application in a `ConvexClerkProvider` to ensure secure, JWT-based communication between the frontend and the database.

---

# 🛠 Technology Stack

| Layer | Technologies |
|--------|--------------|
| Framework | Next.js 15, React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Radix UI |
| Backend | Convex |
| Database | Convex Database |
| Authentication | Clerk |
| AI Voice Engine | Vapi |
| Deployment | Vercel |

---

# 🏗 High-Level Architecture

```mermaid
graph TD

    A([User])

    B[Next.js Frontend]

    C[Vapi Voice AI]

    D[(Convex Database)]

    E[Clerk Authentication]

    F[Convex HTTP Webhook]

    A --> B

    B --> C

    C --> B

    B --> D

    B --> E

    E --> F

    F --> D
```

---

# 🎙 Voice Generation Workflow

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Vapi
participant Convex
participant Clerk

User->>Frontend: Start Voice Session

Frontend->>Vapi: Open WebRTC Connection

Vapi-->>User: Ask Fitness Questions

User->>Vapi: Respond by Voice

Vapi-->>Frontend: Structured JSON Plan

Frontend->>Clerk: Verify User

Frontend->>Convex: Create Workout Plan

Convex-->>Frontend: Plan Saved

Frontend-->>User: Display Workout Program
```

---

# 🔄 Request Lifecycle

```mermaid
flowchart TD

A[User Opens Generate Program]

--> B[Microphone Activated]

--> C[Vapi Voice Session]

--> D[Collect User Information]

--> E[Generate Workout JSON]

--> F[Send Convex Mutation]

--> G[Store Workout Plan]

--> H[Real-Time Sync]

--> I[Profile Updated]
```

---

# 🧠 AI Conversation Flow

```mermaid
graph LR

A[User]

--> B[Vapi AI]

--> C[Extract Fitness Information]

--> D[Generate Structured JSON]

--> E[Workout Generator]

--> F[Convex]

--> G[Workout Dashboard]
```

---

# 🔐 Authentication Flow

```mermaid
flowchart TD

A([User])

--> B[Clerk Login]

--> C[JWT Token]

--> D[Next.js]

--> E[Convex]

--> F[Authenticated Session]
```

---

# ☁ Infrastructure

```mermaid
graph TD

A([Browser])

--> B[Vercel]

--> C[Next.js]

C --> D[(Convex)]

C --> E[Vapi]

C --> F[Clerk]

F --> G[Webhook]

G --> D
```

---

# 📂 Project Structure

```text
WorkoutAI
│
├── app
├── components
├── convex
├── hooks
├── lib
├── providers
├── public
├── styles
├── types
├── utils
└── middleware.ts
```

---

# ⚡ Real-Time Features

- Instant workout synchronization
- Automatic UI refresh
- Serverless backend
- Live database subscriptions
- Optimistic updates
- Cross-device synchronization

---

# 🔒 Security

- Clerk Authentication
- JWT Validation
- Protected Convex Mutations
- Secure WebRTC Communication
- Server-side Authorization
- Schema Validation

---

# 📈 Scalability

WorkoutAI is designed using a modern serverless architecture.

- Stateless Next.js frontend
- Convex real-time database
- Event-driven architecture
- Serverless backend
- Automatic scaling
- Global CDN deployment
- Real-time subscriptions
- Zero REST API maintenance

---

# 🚀 Future Improvements

- AI Nutrition Coach
- Exercise Form Analysis
- Wearable Integration
- Health Analytics Dashboard
- Apple Health Integration
- Google Fit Synchronization
- Social Challenges
- AI Meal Planning
- Progress Prediction
- Multi-language Voice Support

---

# 👨‍💻 Author

**Akshat Midha**

Built with ❤️ using

**Next.js • React • Convex • Clerk • Vapi • Tailwind CSS • Radix UI**

