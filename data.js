const portfolioData = {
    "sections": [
        {
            "id": "hero",
            "type": "hero",
            "enabled": true,
            "title": ""
        },
        {
            "id": "about",
            "type": "about",
            "enabled": true,
            "title": "About"
        },
        {
            "id": "skills",
            "type": "skills",
            "enabled": true,
            "title": "Technical Skills"
        },
        {
            "id": "projects",
            "type": "projects",
            "enabled": true,
            "title": "Featured Projects"
        },
        {
            "id": "experience",
            "type": "experience",
            "enabled": true,
            "title": "Experience"
        },
        {
            "id": "education",
            "type": "education",
            "enabled": true,
            "title": "Education"
        },
        {
            "id": "achievements",
            "type": "achievements",
            "enabled": true,
            "title": "Achievements & Certifications"
        },
        {
            "id": "problemSolving",
            "type": "problemSolving",
            "enabled": true,
            "title": "Problem Solving"
        },
        {
            "id": "contact",
            "type": "contact",
            "enabled": true,
            "title": "Get In Touch"
        }
    ],
    "profile": {
        "name": "Nirmal Patel",
        "roles": [
            "AI/ML Engineer"
        ],
        "bio": "AI/ML Engineer specializing in Machine Learning, GenAI systems, Agentic AI, and applied deep learning with hands-on experience deploying production-grade pipelines (FastAPI, Docker) across NLP, computer vision, and agentic workflows. Strong grounding in model evaluation and end-to-end ML system design, from data ingestion to deployment. ",
        "email": "nilupatel02005@gmail.com",
        "phone": "+91-8140637181",
        "location": "Patan, Gujarat, India",
        "profileImage": "PortfolioCurrent.jpeg",
        "resume": "Nirmal_AIML_Latest.pdf",
        "social": {
            "github": "https://github.com/NirmalPatel-02",
            "linkedin": "https://www.linkedin.com/in/nirmal-patel-184500251/",
            "huggingface": "https://huggingface.co/Nirmal-Patel",
            "kaggle": "https://www.kaggle.com/nirmalpatel02",
            "email": "mailto:nilupatel02005@gmail.com"
        }
    },
    "about": {
        "summary": "B.Sc. IT graduate and aspiring AI/ML Engineer with a strong foundation in Python, Machine Learning, and Deep Learning. Skilled in developing intelligent models, data preprocessing, and API integration. Passionate about applying AI to solve real-world problems with clean and efficient code. Currently pursuing M.Sc. (CA & IT) with a focus on advanced AI concepts.",
        "highlights": [
            {
                "label": "Projects Shipped",
                "value": "6+"
            },
            {
                "label": "Problems Solved",
                "value": "120+"
            },
            {
                "label": "CGPA (PG)",
                "value": "8.98"
            }
        ]
    },
    "education": [
        {
            "degree": "M.Sc. (CA & IT)",
            "institution": "Ganpat University",
            "year": "2025 - 2027",
            "score": "Current CGPA: 8.98"
        },
        {
            "degree": "B.Sc. (CA & IT)",
            "institution": "Ganpat University",
            "year": "2022 - 2025",
            "score": "CGPA: 7.97"
        }
    ],
    "problemSolving": [
        {
            "platform": "LeetCode",
            "stats": "120+ Problems Solved",
            "link": "https://leetcode.com/u/nilupatel02005/",
            "icon": "fas fa-code"
        },
        {
            "platform": "HackerRank",
            "stats": "3 Star (Python)",
            "link": "https://www.hackerrank.com/profile/nilupatel02005",
            "icon": "fab fa-hackerrank"
        }
    ],
    "skills": [
        {
            "category": "Languages",
            "items": [
                "Python",
                "PHP",
                "SQL"
            ]
        },
        {
            "category": "Frameworks & Libraries",
            "items": [
                "TensorFlow",
                "Keras",
                "PyTorch",
                "Numpy",
                "Pandas",
                "Scikit-learn"
            ]
        },
        {
            "category": "Machine Learning & Deep Learning Concepts",
            "items": [
                "Data Preprocessing",
                "Model Training & Evaluation",
                "Hyperparameter Tuning",
                "Supervised & Unsupervised Learning",
                "ANN",
                "CNN",
                "RNN",
                "NLP",
                "Transfer Learning",
                "Transformers"
            ]
        },
        {
            "category": "GenAI & Agentic AI",
            "items": [
                "LangChain",
                "LangGraph",
                "RAG Pipelines",
                "Vector Database",
                "Hugging Face",
                "Agentic Workflows"
            ]
        },
        {
            "category": "Database & Deployment",
            "items": [
                "MySQL",
                "Git",
                "FastAPI",
                "Docker",
                "ChromaDB",
                "FAISS",
                "Jupyter Notebook",
                "Postman"
            ]
        }
    ],
    "experience": [
        {
            "role": "Backend Developer Intern",
            "company": "BM Coder",
            "duration": "Jan 2025 - Jun 2025",
            "description": "Designed and developed RESTful APIs using Laravel (MVC architecture), with light exposure to FastAPI. \nOptimized MySQL schemas and query execution, improving response times on high-usage workflows. \nImplemented authentication, request validation, and error handling for secure, production grade CRUD operations. \nDebugged and resolved production-level issues, reducing recurring failures and improving system stability. \nWorked in an Agile environment: code reviews, sprint tasks, testing, and collaboration with senior developers."
        }
    ],
    "projects": [
        {
            "title": "PitchGrill",
            "description": "An agentic AI pitch simulator where realistic investor personas grill your startup idea and fact-check your claims live",
            "notes": "# 🔥 PitchGrill\n\n### An AI Investor Panel That Grills Your Pitch and Fact-Checks You Live\n\n**PitchGrill** is a real-time Agentic AI system that simulates an investor grilling session. You pitch a startup idea, and three different AI investor personas challenge your answers with contextual follow-up questions.\n\nThe system doesn't simply generate a fixed list of questions. Each turn is generated from what the user actually said, potentially fact-checked against live web data, evaluated against a structured rubric, and then used to determine what happens next.\n\n**Live Demo:** https://pitchgrill.netlify.app/\n\n---\n\n## 🎯 Why I Built This\n\nMost AI interview or pitch-practice applications are essentially:\n\n```text\nQuestion → LLM → Answer\n```\n\nI wanted to build something closer to an actual interactive session where the AI has to:\n\n- remember what the user said\n- ask meaningful follow-up questions\n- detect factual claims\n- verify claims when necessary\n- protect the workflow from prompt injection\n- evaluate the quality of the user's answer\n- maintain the session across multiple rounds\n- produce a final panel verdict\n\nThe main goal was not to create as many agents or nodes as possible.\n\nThe goal was to make every step have a clear responsibility.\n\n---\n\n# 🚀 Development Journey\n\n## 1. Starting With the Basic Idea\n\nThe first version started with a simple question:\n\n> How can I make an AI investor that actually reacts to the founder instead of following a predefined interview script?\n\nThis immediately made state and routing important because the next question depends on the previous answer.\n\nThat led to using **LangGraph** instead of building the entire system as a simple sequential LLM chain.\n\n---\n\n## 2. Introducing Multiple Investor Personas\n\nI added three investor personas:\n\n- **Skeptic** - challenges assumptions and looks for weaknesses.\n- **Growth** - focuses on market, traction, scalability, and growth.\n- **Product** - focuses on product decisions, users, differentiation, and execution.\n\nAn important design decision was that the personas should not simply be three different names with slightly different prompts.\n\nEach persona needed a different questioning strategy.\n\n---\n\n## 3. Making Questions Context-Aware\n\nThe next problem was making the grilling feel real.\n\nA static question list would quickly become predictable.\n\nSo each question is generated using the pitch and recent conversation context.\n\nThe system can therefore ask a follow-up based on something the founder **actually said**, rather than randomly selecting the next question.\n\nThis was one of the first points where the project started behaving like an agentic system rather than a chatbot.\n\n---\n\n## 4. Adding Human-in-the-Loop Interaction\n\nA real pitch session cannot continue without waiting for the founder's answer.\n\nI therefore used LangGraph's interrupt/resume capability to pause the workflow while waiting for the user's response.\n\nThe session can then continue from the same point after the user answers.\n\nThis also introduced the need for persistent checkpointing.\n\n---\n\n## 5. Adding Guardrails\n\nWhile testing the system, I realized that user input should not automatically be trusted by every downstream node.\n\nI added a dedicated guardrail step before claim detection, fact-checking, and evaluation.\n\nIts job is to identify things such as:\n\n- prompt injection attempts\n- off-topic abuse\n- malicious instructions\n\nIf the input is blocked, the system does not allow the unsafe content to influence the downstream reasoning process.\n\n---\n\n## 6. Detecting Claims Worth Fact-Checking\n\nNot every answer needs a web search.\n\nFor example:\n\n> \"Our product is easy to use.\"\n\ndoesn't necessarily require external verification.\n\nBut:\n\n> \"The market is worth $50 billion.\"\n\nis a specific factual claim that can potentially be verified.\n\nSo I added a dedicated claim-detection step that decides whether an answer contains a specific, checkable claim.\n\nThis avoids unnecessarily calling the search tool for every response.\n\n---\n\n## 7. Live Fact-Checking\n\nOnce claim detection was added, the next step was verifying those claims against real information.\n\nThe system uses **Tavily web search** when a checkable claim is detected.\n\nThe result is classified as:\n\n- confirmed\n- refuted\n- unverifiable\n\nAn important lesson came from testing this.\n\nAt one point, the system incorrectly treated a claim as false simply because a company performed better than a generic industry benchmark.\n\nThat was logically incorrect.\n\nI changed the fact-checking logic so that a claim is only considered **refuted when there is direct contradictory evidence**.\n\nBeating an average does not prove that another claim is false.\n\n---\n\n## 8. Adding Answer Evaluation\n\nFact-checking and answer quality are different problems.\n\nA statement can be factually correct but still be:\n\n- vague\n- poorly explained\n- unsupported\n- incomplete\n\nSo I added a separate evaluator.\n\nEvery answer is evaluated against a fixed rubric:\n\n- specificity\n- evidence\n- clarity\n\nThis produces structured scores instead of an arbitrary LLM-generated opinion.\n\n---\n\n## 9. Building the Final Panel Verdict\n\nAfter the grilling session finishes, the system generates a final report based on the complete session.\n\nThe report includes:\n\n- overall panel verdict\n- investment decision\n- average specificity\n- average evidence\n- average clarity\n\nThis turns the conversation into something the user can actually learn from instead of ending with the final question.\n\n---\n\n## 10. Making the System Persistent\n\nA live interview becomes frustrating if the user loses their session.\n\nI therefore added:\n\n- user accounts\n- JWT authentication\n- email OTP verification\n- persistent sessions\n- session history\n- LangGraph checkpointing\n\nThe main business data is stored in MySQL/TiDB, while SQLite is used for LangGraph's pause/resume checkpoint state.\n\n---\n\n## 11. Adding Voice Interaction\n\nOnce the core agent was stable, I wanted the experience to feel more like an actual investor meeting.\n\nI added browser-based speech capabilities so users can:\n\n- hear investor questions\n- answer using their microphone\n- continue using text when voice input isn't available\n\nThe implementation uses browser APIs rather than depending on a paid external speech service.\n\n---\n\n## 12. Reliability and Fallbacks\n\nDuring testing, I deliberately considered what happens when an external dependency fails.\n\nStructured LLM calls are wrapped with retry/fallback handling so that a temporary model failure does not immediately destroy an active session.\n\nThis changed my mindset from:\n\n> \"Does the agent work?\"\n\nto:\n\n> \"What happens when one part of the agent doesn't work?\"\n\nThat distinction became an important part of the project.\n\n---\n\n# 📊 Evaluation\n\nI didn't want the project to rely only on an architecture diagram.\n\nThe claim detector was evaluated on a labeled 40-case test set:\n\n| Metric | Result |\n|---|---:|\n| Accuracy | 97.5% |\n| Precision | 95.24% |\n| Recall | 100% |\n| F1 | 97.56% |\n\nThe evaluation script is included in the repository so the result can be reproduced.\n\n---\n\n# ✨ Key Features\n\n- **Three investor personas** with different questioning strategies\n- **Context-aware follow-up questions**\n- **8-node LangGraph agentic workflow**\n- **Human-in-the-loop interaction**\n- **Prompt-injection guardrail**\n- **Automatic claim detection**\n- **Live web fact-checking**\n- **Structured answer evaluation**\n- **Final investor panel verdict**\n- **Persistent sessions**\n- **JWT authentication**\n- **Email OTP verification**\n- **Voice input and output**\n- **Session history**\n- **LangSmith observability**\n- **Retry and fallback handling**\n- **Real-time deployed application**\n\n---\n\n# 🧠 What I Learned\n\nThe biggest lesson from building PitchGrill was that **Agentic AI is not about adding more agents**.\n\nThe useful question is:\n\n> \"Does this component solve a real problem in the workflow?\"\n\nFor example:\n\n- A guardrail exists because user input should not blindly reach every downstream step.\n- Claim detection exists because not every answer needs a web search.\n- Fact-checking exists because external claims need evidence.\n- Evaluation exists because factual correctness and answer quality are different problems.\n- Checkpointing exists because the user needs to pause and resume.\n- Conditional routing exists because the next action depends on the current state.\n\nThis helped me focus on **purposeful orchestration rather than artificial complexity**.\n\n---\n\n# 🛠️ Tech Stack\n\n### AI / Agentic AI\n- Python\n- LangGraph\n- LangChain\n- Groq\n- Structured LLM outputs\n- Pydantic\n\n### Tools & Search\n- Tavily\n- Web Search\n- Claim Detection\n\n### Backend\n- FastAPI\n- SQLAlchemy\n- JWT Authentication\n- Email OTP\n\n### Database & Persistence\n- MySQL / TiDB Cloud\n- SQLite\n- LangGraph Checkpointing\n\n### Frontend\n- React\n- React Router\n- Web Speech API\n- Web Audio API\n\n### Observability\n- LangSmith\n\n### Deployment\n- Docker\n- Hugging Face Spaces\n- Netlify\n\n---\n\n# ⚠️ Known Limitations\n\n- LangGraph session checkpointing currently uses local SQLite, so an in-progress paused session can lose its checkpoint if the Hugging Face backend container restarts.\n- The underlying pitch, transcript, and scoring data remains stored in TiDB.\n- Voice input depends on browser support and currently works best in Chrome.\n- The claim-detection evaluation set currently contains 40 labeled cases and should be expanded for stronger statistical confidence.\n\nI prefer documenting these limitations rather than hiding them because reliability includes knowing where the system can fail.\n\n---\n\n# 🗺️ Future Improvements\n\n- Expand the claim-detection evaluation dataset.\n- Build a dedicated labeled dataset for fact-check verdict evaluation.\n- Measure agreement between human evaluators and the answer-evaluation node.\n- Move to a persistent distributed checkpoint backend.\n- Improve latency and reduce unnecessary LLM calls.\n- Expand session analytics and feedback.\n\n---\n\n# 🚀 Project Status\n\n**Live and deployed.**\n\nThe complete system can be used through the live application rather than being limited to a local demonstration.\n\n---\n\n## 👤 Author\n\n**Nirmal Patel**\n\nGitHub: https://github.com/NirmalPatel-02\n\nLinkedIn: https://www.linkedin.com/in/nirmal-patel-184500251/",
            "tech": [
                "Python",
                "LangGraph",
                "LangChain",
                "Groq",
                "Pydantic",
                "Tavily",
                "FastAPI",
                "React",
                "MySQL",
                "TiDB",
                "SQLite",
                "JWT",
                "LangSmith",
                "Web Speech API",
                "Docker"
            ],
            "links": {
                "demo": "https://pitchgrill.netlify.app",
                "github": "https://github.com/NirmalPatel-02/PitchGrill"
            },
            "video": "",
            "icon": "fas fa-fire"
        },
        {
            "title": "MediScan",
            "description": "AI Medical Report Analyst",
            "notes": "## Overview\njust upload you medical remore and it give detail report on it. i suggest read github read me for more details.\n\n## Highlights\n- OCR pipeline with PaddleOCR\n- RAG-based Q&A with LangChain + ChromaDB\n- Secure auth with JWT\n\n## Stack\n`FastAPI` · `XGBoost` · `MySQL` · `React`",
            "tech": [
                "Python",
                "XGBoost",
                "PaddleOCR",
                "FastAPI",
                "MySQL",
                "React",
                "Groq API",
                "ChromaDB",
                "LangChain",
                "JWT",
                "Tailwind CSS"
            ],
            "links": {
                "demo": "https://mediscan-health.netlify.app/",
                "github": "https://github.com/NirmalPatel-02/MediScan"
            },
            "video": "",
            "icon": "fas fa-diagnoses"
        },
        {
            "title": "VenoMind-AI",
            "description": "A self-correcting, tool-using conversational AI assistant",
            "notes": "# 🧠 VenoMind AI — Development Notes\n\n## Initial Idea\n- Started with the idea of building a conversational AI assistant that does more than simply generate an answer.\n- Main goal: make the system **check its own answer before showing it to the user**.\n- Decided to use LangGraph because the workflow needs conditional routing and iterative execution.\n\n## Basic Agent\n- Created the initial chatbot flow.\n- Tested normal conversation and state handling.\n- Realized that a simple `User → LLM → Response` flow is too limited for questions requiring fresh information.\n\n## Tool Calling\n- Added web search so the agent can retrieve current information instead of relying completely on model knowledge.\n- Added dedicated news search for current events.\n- Added stock-price lookup using `yfinance`.\n- Important design decision: tools should be used when fresh information is actually required, not just because tools are available.\n- Tested tool failures and considered what the user should receive when an external tool is unavailable.\n\n## Self-Evaluation\n- Wanted to solve the problem of the model confidently returning a weak or incomplete first answer.\n- Added a dedicated QA/evaluator node.\n- Evaluator checks the generated answer against the original question.\n- Used structured Pydantic output instead of relying on free-form evaluator text.\n- The evaluator can return:\n  - `approved`\n  - `needs_more_data`\n  - `needs_rewrite`\n\n## Self-Correction\n- Added the first evaluation loop.\n- If more information is required → search again.\n- If information is already sufficient but the answer is poorly written → rewrite without unnecessary searching.\n- Realized that **more search is not always the solution**; sometimes the problem is only answer quality.\n- Added a maximum iteration limit so the agent cannot loop forever.\n\n## Persistence\n- Added LangGraph SQLite checkpointing.\n- Introduced `thread_id` so conversations can be resumed.\n- Tested restarting the application and continuing an existing conversation.\n- This made the chatbot feel more like a real persistent application rather than a temporary demo.\n\n## Context Handling\n- While testing longer conversations, noticed that sending every old tool message back to the model creates unnecessary context.\n- Added filtering for stale tool messages and incomplete tool-call turns.\n- Goal: keep the context relevant instead of blindly passing the entire history.\n\n## Failure Handling\n- Started testing what happens when model/tool calls fail.\n- Added fallback behavior instead of allowing the complete workflow to crash.\n- Added a secondary model fallback for evaluator failures.\n- Important realization: an agent that works only when every dependency succeeds is not enough for a production-style system.\n\n## Observability\n- Added LangSmith tracing.\n- Started checking individual node executions instead of treating the whole agent as a black box.\n- This makes it easier to understand where latency, tool failures, or incorrect routing happen.\n\n## UI\n- Built the Streamlit chat interface.\n- Added live execution status:\n  - 🌐 Searching\n  - ⚡ Synthesizing\n  - 🔍 Evaluating\n  - ✨ Optimized\n- Added automatic conversation titles and recent-chat history.\n- Goal was to make the underlying multi-step workflow understandable to the user without exposing unnecessary implementation details.\n\n## Deployment\n- Deployed the complete application so the workflow can be tested outside the development environment.\n- Tested the actual user journey rather than relying only on local development tests.\n\n## Current Thinking\n- Avoid adding agents, tools, MCP, multi-agent systems, or other technologies just to make the project look more advanced.\n- Every component should solve an actual problem.\n- The main value of VenoMind is the **self-correction + tool use + evaluation + persistence + reliability** combination.\n- Focus on making existing components reliable and measurable before adding more complexity.\n\n## Next Improvements\n- Improve latency and reduce unnecessary model/tool calls.\n- Add better evaluation metrics.\n- Improve streaming.\n- Consider PostgreSQL instead of SQLite when moving toward a larger multi-user deployment.\n- Add authentication if required.\n- Only introduce additional tools or agent capabilities when there is a genuine product requirement.",
            "tech": [
                "Python",
                "LangGraph",
                "LangChain",
                "Pydantic",
                "DuckDuckGo Search",
                "yfinance",
                "Streamlit",
                "SQLite",
                "LangSmith"
            ],
            "links": {
                "demo": "",
                "github": "https://github.com/NirmalPatel-02/VenoMind-AI"
            },
            "video": "",
            "icon": "fas fa-brain"
        },
        {
            "title": "CarDamageAnalysis AI",
            "description": "Multi-Stage Car Damage Assessment System using EfficientNet-B3. Achieved 99.1% accuracy.",
            "notes": "## Overview\nThis system uses **Transfer Learning** with EfficientNet-B3, implemented as a three-stage pipeline:\n\n1. Detect if a car is present\n2. car is damaged or not\n3. Classify the damage type\n\nData augmentation was crucial to prevent overfitting.",
            "tech": [
                "EfficientNet",
                "CNN",
                "Transfer Learning",
                "Tensorflow"
            ],
            "links": {
                "demo": "https://nirmal-patel-car-damage-analysis-ai.hf.space/",
                "github": "https://github.com/NirmalPatel-02/CarDamageDetector"
            },
            "video": "",
            "icon": "fas fa-car-crash"
        },
        {
            "title": "Used Car Value Estimator",
            "description": "Neural Network model to estimate resale value based on age, mileage, and brand.",
            "notes": "## Overview\nBuilt using a deep neural network regression model. Significant time was spent on **Feature Engineering**  specifically encoding categorical variables like Car Brand and Fuel Type.\n\nDeployed on Hugging Face Spaces.",
            "tech": [
                "Python",
                "Tensorflow",
                "Neural Networks",
                "Regression",
                "Hugging Face"
            ],
            "links": {
                "demo": "",
                "github": "https://github.com/NirmalPatel-02/UsedCarPricePredict"
            },
            "video": "",
            "icon": "fas fa-tags"
        },
        {
            "title": "CampusHire Predictor",
            "description": "Classification model predicting student placement probability using academic data.",
            "notes": "## Overview\nA binary classification project using Scikit-learn. Compared multiple algorithms:\n\n- Logistic Regression\n- Random Forest\n- SVM\n\n**Random Forest** gave the best precision-recall trade-off.",
            "tech": [
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "Pandas",
                "Matplotlib",
                "FastAPI"
            ],
            "links": {
                "demo": "",
                "github": "#"
            },
            "video": "",
            "icon": "fas fa-graduation-cap"
        },
        {
            "title": "SwiftETA",
            "description": "Predicts accurate Estimated Delivery Time (ETD) for food delivery apps.",
            "notes": "## Overview\nTrained on real-world Indian delivery datasets. Outliers (e.g. deliveries taking 5 hours) were cleaned out, and a **Neural Network** predicts time based on distance, traffic, and time of day.",
            "tech": [
                "Python",
                "Tensorflow",
                "Scikit-Learn",
                "Neural Network",
                "Pandas",
                "Numpy"
            ],
            "links": {
                "demo": "",
                "github": "https://github.com/NirmalPatel-02/DeliveryETA"
            },
            "video": "",
            "icon": "fas fa-stopwatch"
        }
    ],
    "achievements": [
        {
            "title": "3 Bronze Medals on Kaggle Competition Notebooks",
            "issuer": "Kaggle",
            "date": "2025 - 2026",
            "link": "https://www.kaggle.com/nirmalpatel02/code",
            "image": "https://www.kaggle.com/nirmalpatel02/code",
            "description": "Earned competition medals on Kaggle by publishing top-ranked code notebooks with high community upvotes."
        },
        {
            "title": "Hugging Face Agents Course",
            "issuer": "Hugging Face",
            "date": "2026",
            "link": "https://drive.google.com/file/d/16UzbB8umv3txHQwAyY1cuvXmgTm6AIA5/view?usp=sharing",
            "image": "https://drive.google.com/file/d/16UzbB8umv3txHQwAyY1cuvXmgTm6AIA5/view?usp=sharing",
            "description": "Completed the Hugging Face Agents Course, developing practical knowledge of AI agent architectures, tool use, agent workflows, and building intelligent systems with the Hugging Face ecosystem."
        },
        {
            "title": "Machine Learning for Data Science Projects",
            "issuer": "IBM SkillsBuild",
            "date": "2026",
            "link": "https://drive.google.com/file/d/1jHK7daMvb0b2xtaj9pS9wgpuwefl0Doa/view?usp=sharing",
            "image": "https://drive.google.com/file/d/1jHK7daMvb0b2xtaj9pS9wgpuwefl0Doa/view?usp=sharing",
            "description": "Completed IBM SkillsBuild’s Machine Learning for Data Science Projects program, strengthening practical machine learning knowledge for applying ML techniques to data science projects and real-world datasets."
        },
        {
            "title": "gents and Workflows",
            "issuer": "Open AI",
            "date": "2026",
            "link": "https://drive.google.com/file/d/1XpuV7toCa_gP7QNwkw-DbN8bEWvUDOrn/view?usp=sharing",
            "image": "https://drive.google.com/file/d/1XpuV7toCa_gP7QNwkw-DbN8bEWvUDOrn/view?usp=sharing",
            "description": "Completed OpenAI Academy’s Agents and Workflows course, building knowledge of agent-based architectures, workflow design, and the principles behind developing modern AI-powered systems."
        },
        {
            "title": "Agentic AI Certified Foundations Associate",
            "issuer": "Oracle",
            "date": "2026",
            "link": "https://drive.google.com/file/d/1xqsl338wNhiCp8sQmHU2cjPaMKIKnuwG/view?usp=sharing",
            "image": "https://drive.google.com/file/d/1xqsl338wNhiCp8sQmHU2cjPaMKIKnuwG/view?usp=sharing",
            "description": "Earned Oracle’s Agentic AI Certified Foundations Associate credential, demonstrating foundational knowledge of agentic AI concepts, AI agents, and modern agent-based systems."
        }
    ],
    "customSections": {}
};