# IAIA Integrity Council AI Agent

<p align="center">
  <b>A Multi-Agent AI System for Academic Integrity Evaluation</b>
</p>

---

## 📌 Overview

The **IAIA Integrity Council AI Agent** is a multi-agent artificial intelligence system designed to evaluate academic content through the perspective of different specialized AI officers.

Inspired by a C-suite organizational structure, each AI agent acts as an expert officer with a specific responsibility. These independent analyses are then synthesized by a final **Chief Integrity Officer (CEO Agent)**, which provides the overall assessment.

The goal is to demonstrate how multiple AI agents can collaborate to solve complex evaluation tasks.

---

# 🏛️ AI Council Architecture
                User Input
                    |
                    ↓

    ┌─────────────────────────────┐
    │     AI Integrity Council     │
    └─────────────────────────────┘

          ↓        ↓        ↓        ↓

    Citation   Evidence  Plagiarism  Ethics
    Officer    Officer    Officer   Officer

          ↓        ↓        ↓        ↓

          └────────┬─────────┘
                   ↓

          Chief Integrity Officer
                (CEO Agent)

                   ↓

          Final Integrity Report


---

# 🤖 AI Officers

## 📚 Citation Officer

Responsible for:
- Identifying claims requiring citations
- Detecting unsupported statements
- Evaluating citation requirements

---

## 🔍 Evidence Officer

Responsible for:
- Evaluating factual accuracy
- Checking logical consistency
- Identifying unsupported conclusions

---

## 📝 Plagiarism Officer

Responsible for:
- Detecting possible copied content
- Identifying suspicious paraphrasing
- Evaluating originality concerns

---

## ⚖️ Ethics Officer

Responsible for:
- Evaluating academic integrity concerns
- Identifying ethical violations
- Reviewing responsible AI usage

---

## 👑 Chief Integrity Officer (CEO Agent)

Responsible for:
- Reviewing all officer reports
- Synthesizing findings
- Producing the final academic integrity assessment

---

# ⚙️ Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### AI Integration
- Groq API
- OpenAI-compatible API architecture

### Development
- Node.js
- Git & GitHub

---

# 🚀 Features

✅ Multi-agent AI workflow  
✅ Specialized AI officer roles  
✅ CEO-level final synthesis  
✅ Academic integrity evaluation  
✅ Modern animated dashboard UI  
✅ Markdown-based AI responses  
✅ Secure API key handling through environment variables  

---

# 📂 Project Structure
iaia-integrity-council/

├── agents/
│ ├── citation.ts
│ ├── evidence.ts
│ ├── plagiarism.ts
│ ├── ethics.ts
│ └── chief.ts
│
├── lib/
│ ├── groq.ts
│ ├── gemini.ts
│ └── openrouter.ts
│
├── src/
│ └── app/
│ ├── api/
│ │ └── analyze/
│ │ └── route.ts
│ │
│ ├── page.tsx
│ └── layout.tsx
│
├── public/
├── package.json
└── README.md

---

# 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/AbhimanDewangan/iaia-integrity-council.git
