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
            "enabled": false,
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
                "value": "7+"
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
            "title": "VoxTube-Analytics",
            "description": "Advanced RAG-Powered YouTube Content & Audience Intelligence",
            "notes": "# 🎥 VoxTube Analytics\n\n### Advanced RAG-Powered YouTube Content & Audience Intelligence\n\nVoxTube Analytics transforms a YouTube video into an interactive knowledge base.\n\nGive it a YouTube URL and the system:\n\n- extracts the video transcript\n- collects audience comments\n- indexes both sources separately\n- analyzes audience sentiment and feedback\n- builds a retrieval pipeline for the transcript\n- answers questions using retrieved evidence\n- verifies generated answers against the retrieved context\n- supports English, Hindi, and Hinglish queries\n\nThe project was built to explore how a **production-oriented RAG pipeline** should handle retrieval quality, reranking, context compression, token budgets, multilingual data, and answer verification instead of simply embedding documents and calling an LLM.\n\n---\n\n## 🚀 What It Does\n\nVoxTube has two major capabilities.\n\n### 1. Video Intelligence\n\nAfter providing a YouTube URL, the system retrieves the video's transcript and audience comments.\n\nIt then produces an audience intelligence dashboard containing:\n\n- 👍 Positives & praise\n- 👎 Criticisms & complaints\n- 💡 Tactical improvements for the creator\n\nThe analysis is generated from retrieved transcript and comment evidence rather than asking the LLM to guess from the video URL.\n\n### 2. Transcript Intelligence\n\nOnce the transcript is indexed, users can ask questions about the video.\n\nExamples:\n\n```text\nWhat is this video mainly about?\n\nWhat technologies are discussed?\n\nExplain the part where the deployment failed.\n\nWhat does the code shown in the video do?\n\nWhat AWS concepts were discussed?\n\nWhat were the main recommendations?\n```\n\nThe answer goes through the complete retrieval pipeline before reaching the user.\n\n---\n\n# 🧠 Why I Built It\n\nA basic implementation of YouTube Q&A would look like:\n\n```text\nYouTube Transcript\n       ↓\nEmbeddings\n       ↓\nVector Search\n       ↓\nLLM\n       ↓\nAnswer\n```\n\nThat works for simple demonstrations, but retrieval quality becomes a problem when:\n\n- the user uses different wording from the transcript\n- exact technical terms matter\n- relevant information appears far apart\n- semantic search misses keyword-specific matches\n- retrieved chunks contain unnecessary information\n- too much context is sent to the LLM\n- the model produces an answer that is not actually supported by the retrieved context\n\nSo I treated the project as a **retrieval engineering problem**, not just an LLM integration problem.\n\nThe resulting pipeline became:\n\n```text\nUser Query\n    ↓\nQuery Rewriting\n    ↓\n┌─────────────────────────────┐\n│                             │\nVector Retrieval        BM25 Retrieval\n│                             │\n└──────────────┬──────────────┘\n               ↓\n        RRF Rank Fusion\n               ↓\n     Cross-Encoder Reranking\n               ↓\n       Context Compression\n               ↓\n        Token Budgeting\n               ↓\n        LLM Generation\n               ↓\n       Answer Verification\n               ↓\n          Final Answer\n```\n\n---\n\n# 🛠️ Development Journey\n\n## 1. Started With YouTube Data\n\nThe first challenge was getting reliable source material from a YouTube video.\n\nThe system extracts the YouTube video ID and retrieves:\n\n- transcript\n- audience comments\n\nTranscript and comments are stored separately because they represent two fundamentally different information sources.\n\n```text\nTranscript → What the creator said\nComments   → What the audience said\n```\n\n---\n\n## 2. Handling Transcript Size\n\nA complete video transcript can become too large to send directly to an LLM.\n\nI added recursive chunking with overlapping chunks.\n\nCurrent configuration:\n\n```text\nchunk_size   = 1200\nchunk_overlap = 120\n```\n\nEach chunk also stores metadata such as:\n\n```text\nsource\nvideo_id\nchunk_index\n```\n\nThis makes the transcript searchable without loading the entire video into the context window.\n\n---\n\n## 3. Adding Vector Search\n\nThe first retrieval layer uses multilingual Cohere embeddings:\n\n```text\nembed-multilingual-v3.0\n```\n\nThis allows semantically similar questions to retrieve relevant transcript sections even when the user's wording does not exactly match the transcript.\n\nThis is particularly useful for English, Hindi, and Hinglish queries.\n\n---\n\n# 🔀 4. Moving From Vector Search to Hybrid Search\n\nPure vector search has an important weakness.\n\nTechnical questions often contain exact terms that semantic similarity alone may not rank correctly.\n\nFor example:\n\n```text\n\"Explain AWS Lambda\"\n```\n\nA keyword-based system can strongly benefit from the exact appearance of:\n\n```text\nAWS Lambda\n```\n\nSo I added a second retrieval strategy:\n\n**BM25 keyword retrieval**\n\nThe system now retrieves through both:\n\n```text\nVector Search\n+\nBM25 Search\n```\n\n---\n\n# 🧮 5. Reciprocal Rank Fusion\n\nThe two retrieval systems produce different rankings.\n\nInstead of choosing one retrieval method, I implemented **Reciprocal Rank Fusion (RRF)**.\n\nConceptually:\n\n```text\nVector Ranking ──────┐\n                     ├──→ RRF Fusion → Unified Ranking\nBM25 Ranking ────────┘\n```\n\nEach document receives a score based on its position in the two retrieval lists.\n\nThis allows semantic and lexical retrieval signals to complement each other.\n\n---\n\n# 🎯 6. Cross-Encoder Reranking\n\nHybrid retrieval produces a strong candidate set, but retrieval ranking can still be improved.\n\nThe candidate documents are therefore passed through Cohere's multilingual cross-encoder reranker:\n\n```text\nrerank-multilingual-v3.0\n```\n\nThe reranker evaluates the relationship between:\n\n```text\nQuery ↔ Retrieved Document\n```\n\nrather than relying only on embedding similarity.\n\nThe pipeline therefore becomes:\n\n```text\nRetrieve many candidates\n        ↓\nRRF fusion\n        ↓\nCross-encoder reranking\n        ↓\nTop relevant context\n```\n\nThis was one of the key steps that moved the project beyond basic RAG.\n\n---\n\n# 🗜️ 7. Context Compression\n\nEven highly relevant retrieved documents can contain:\n\n- repeated information\n- filler sentences\n- unrelated details\n- unnecessary wording\n\nSending all of that directly to the main LLM wastes context.\n\nI therefore added an asynchronous context-compression stage.\n\nThe compression model is instructed to:\n\n- remove duplication\n- remove irrelevant text\n- preserve important facts\n- preserve technical details\n- preserve important video context\n- avoid answering the question during compression\n\nMultiple batches are processed concurrently before being combined.\n\n---\n\n# 📏 8. Explicit Token Budgeting\n\nContext size should not be left completely to chance.\n\nThe system uses `tiktoken` to measure the retrieved context and applies a token limit before generation.\n\nCurrent configured limit:\n\n```text\n5700 tokens\n```\n\nDocuments are added until the context budget is reached.\n\nThis gives the retrieval pipeline an explicit boundary rather than allowing uncontrolled context growth.\n\n---\n\n# ✍️ 9. Query Rewriting\n\nUsers do not always ask questions in retrieval-friendly language.\n\nFor example:\n\n```text\n\"what was that part where it failed?\"\n```\n\ncan be rewritten into something closer to:\n\n```text\n\"What happens during the failure section of the video?\"\n```\n\nThe query-rewriting stage converts conversational questions into cleaner standalone retrieval queries.\n\nThis rewritten query is then used by the retrieval pipeline.\n\n---\n\n# 🌍 10. Multilingual Conversation\n\nThe assistant is designed to work with:\n\n- English\n- Hindi\n- Hinglish\n\nThe system uses multilingual embeddings and a prompt that instructs the model to respond according to the language style of the user's question.\n\nThis is particularly useful for mixed-language questions such as:\n\n```text\n\"Video mein deployment kaise kiya hai?\"\n```\n\nrather than forcing every user into English-only queries.\n\n---\n\n# ✅ 11. Answer Verification\n\nRetrieval alone does not guarantee that the generated answer is correct.\n\nThe system therefore uses a second generation stage to check the first answer against the retrieved context.\n\nConceptually:\n\n```text\nRetrieved Context\n       ↓\nGenerate Answer\n       ↓\nCheck Answer Against Context\n       ↓\nCorrect if Necessary\n       ↓\nFinal Answer\n```\n\nIf the information is not available in the retrieved context, the system is instructed to return:\n\n```text\nI don't know the answer for this question.\n```\n\nThis keeps the system grounded in the indexed video instead of encouraging unsupported answers.\n\n---\n\n# 💬 12. Audience Intelligence\n\nThe transcript is not the only useful source.\n\nAudience comments provide a second layer of information.\n\nThe system retrieves comments using MMR retrieval and then compresses the relevant feedback before sending it to the structured analysis model.\n\nThe resulting report contains:\n\n### Positives\n\nWhat viewers liked or praised.\n\n### Criticisms\n\nWhat viewers disliked, complained about, or considered insufficient.\n\n### Tactical Enhancements\n\nActionable improvements or feature requests extracted from the feedback.\n\nThis changes the project from simple transcript Q&A into a small **creator intelligence system**.\n\n---\n\n# ⚡ 13. Concurrent Processing\n\nSome operations are independent of each other.\n\nDuring video processing, transcript and comment retrieval are executed concurrently using asynchronous execution.\n\nContext compression also processes batches concurrently.\n\nThe goal is to reduce unnecessary waiting when multiple independent operations can execute at the same time.\n\n---\n\n# 🧹 14. Temporary Data Cleanup\n\nEach video gets its own Chroma collections:\n\n```text\ntranscript_<video_id>\ncomments_<video_id>\n```\n\nOnce the user finishes working with a video, the application can explicitly remove those collections.\n\nThis prevents temporary video-specific indexes from accumulating indefinitely.\n\n---\n\n# 🖥️ User Experience\n\nThe application has three major stages.\n\n### Step 1 — Provide a YouTube URL\n\n![VoxTube URL Input](docs/images/url_paste.png)\n\nThe user selects the analysis profile and submits the YouTube video URL.\n\n---\n\n### Step 2 — RAG Pipeline Processing\n\n![VoxTube Processing](docs/images/loading.png)\n\nThe application processes the video and builds the retrieval context.\n\nBehind the interface, the system performs:\n\n```text\nExtract\n  ↓\nChunk\n  ↓\nEmbed\n  ↓\nIndex\n  ↓\nRetrieve\n  ↓\nRerank\n  ↓\nCompress\n  ↓\nAnalyze\n```\n\n---\n\n### Step 3 — Audience Dashboard\n\n![VoxTube Dashboard](docs/images/vid_dashboard.png)\n\nThe dashboard presents the extracted audience intelligence:\n\n- positives\n- criticisms\n- actionable improvements\n\n---\n\n### Step 4 — Ask Questions About the Video\n\n![VoxTube Chat](docs/images/chat_with_video.png)\n\nAfter indexing, users can interact with the transcript through the RAG-powered conversational interface.\n\nThe answer is generated from retrieved and processed transcript context rather than the entire transcript being blindly passed to the model.\n\n---\n\n# 🏗️ Retrieval Pipeline\n\nThe core RAG pipeline is intentionally layered:\n\n```text\n                    USER QUESTION\n                          │\n                          ▼\n                   QUERY REWRITING\n                          │\n              ┌───────────┴───────────┐\n              ▼                       ▼\n        VECTOR SEARCH              BM25\n              │                       │\n              └───────────┬───────────┘\n                          ▼\n                    RRF FUSION\n                          │\n                          ▼\n                 CROSS-ENCODER\n                    RERANKING\n                          │\n                          ▼\n                CONTEXT COMPRESSION\n                          │\n                          ▼\n                  TOKEN BUDGETING\n                          │\n                          ▼\n                    LLM ANSWER\n                          │\n                          ▼\n                  ANSWER CHECK\n                          │\n                          ▼\n                   FINAL RESPONSE\n```\n\nEach stage exists to address a specific retrieval or generation problem.\n\n---\n\n# 📊 Engineering Highlights\n\n| Problem | Solution |\n|---|---|\n| Large transcripts | Recursive chunking + overlap |\n| Semantic retrieval | Cohere multilingual embeddings |\n| Exact keyword matching | BM25 |\n| Combining retrieval strategies | Reciprocal Rank Fusion |\n| Poor candidate ordering | Cross-encoder reranking |\n| Redundant context | LLM-based compression |\n| Context overflow | Explicit token budgeting |\n| Conversational queries | Query rewriting |\n| Unsupported answers | Context-based answer verification |\n| Long processing time | Concurrent execution |\n| Temporary index growth | Per-video collections + cleanup |\n| Multilingual queries | Multilingual embeddings + language-aware prompting |\n\n---\n\n# 🧰 Tech Stack\n\n### Backend\n- Python\n- FastAPI\n- Pydantic\n\n### RAG\n- LangChain\n- ChromaDB\n- BM25\n- Reciprocal Rank Fusion\n- Cohere Embeddings\n- Cohere Reranker\n- Context Compression\n- Query Rewriting\n\n### LLM\n- Groq\n- GPT-OSS 120B\n- Qwen3 32B\n\n### YouTube Data\n- YouTube Transcript API\n- YouTube Data API\n- YouTube Comment Downloader\n\n### Processing\n- asyncio\n- tiktoken\n- RecursiveCharacterTextSplitter\n\n### Frontend\n- Web-based dashboard\n- Interactive chat interface\n\n---\n\n# 📁 Project Structure\n\n```text\nVoxTube-Analytics/\n│\n├── app/\n│   ├── routes/\n│   │   ├── chat.py\n│   │   ├── process.py\n│   │   └── schemas.py\n│   │\n│   ├── services/\n│   │   └── pipeline.py\n│   │\n│   ├── config.py\n│   └── main.py\n│\n├── chroma_db/\n│\n├── docs/\n│   └── images/\n│       ├── url_paste.png\n│       ├── loading.png\n│       ├── vid_dashboard.png\n│       └── chat_with_video.png\n│\n├── requirements.txt\n└── README.md\n```\n\n---\n\n# ⚙️ How It Works Internally\n\n### Video Processing\n\n```text\nYouTube URL\n    ↓\nExtract Video ID\n    ↓\nFetch Transcript + Comments\n    ↓\nClean Data\n    ↓\nCreate Chunks\n    ↓\nGenerate Embeddings\n    ↓\nStore in Chroma\n    ↓\nRetrieve Relevant Transcript\n    ↓\nRerank\n    ↓\nCompress Context\n    ↓\nGenerate Video Summary\n    ↓\nAnalyze Audience Comments\n    ↓\nReturn Dashboard\n```\n\n### Question Answering\n\n```text\nUser Question\n    ↓\nQuery Rewriting\n    ↓\nVector + BM25 Retrieval\n    ↓\nRRF Fusion\n    ↓\nCross-Encoder Reranking\n    ↓\nContext Limit\n    ↓\nAnswer Generation\n    ↓\nContext-Based Verification\n    ↓\nFinal Answer\n```\n\n---\n\n# 🔐 Data Handling\n\nEach video's transcript and comments are stored in video-specific Chroma collections.\n\n```text\ntranscript_<video_id>\ncomments_<video_id>\n```\n\nThe application also provides an explicit cleanup endpoint that removes the temporary collections associated with a video.\n\n---\n\n# 🚧 Current Limitations\n\n- Transcript availability depends on the YouTube video's available captions.\n- Audience analysis currently works from the retrieved comment set rather than every comment ever posted.\n- Retrieval quality depends on transcript quality and chunking.\n- Cross-encoder reranking and LLM-based compression add additional inference latency.\n- The current application is optimized for a single active video's analysis flow rather than a large persistent multi-tenant analytics platform.\n\n---\n\n# 🔮 Future Improvements\n\nPotential improvements include:\n\n- timestamp-aware retrieval\n- citation/source highlighting for every answer\n- larger-scale comment analytics\n- sentiment and topic clustering\n- creator-to-creator video comparison\n- persistent analytics history\n- evaluation datasets for retrieval quality\n- Recall@K / MRR / NDCG evaluation\n- answer faithfulness evaluation\n- streaming RAG responses\n- production-grade distributed vector storage\n\n---\n\n# 🎯 What This Project Demonstrates\n\nVoxTube Analytics was built around a simple principle:\n\n> **Good RAG is not just vector search + an LLM.**\n\nA useful retrieval system requires thinking about:\n\n```text\nQuery Quality\n      ↓\nRetrieval Diversity\n      ↓\nRanking Quality\n      ↓\nContext Quality\n      ↓\nContext Size\n      ↓\nGeneration\n      ↓\nVerification\n```\n\nThe project therefore focuses on the engineering decisions around the complete RAG lifecycle rather than treating the LLM as the entire system.\n\n---\n\n# 📌 Project Status\n\n**Live / Deployed**\n\nThe application provides an end-to-end workflow from YouTube URL ingestion to audience analytics and conversational transcript Q&A.\n\n---\n\n## 👤 Author\n\n**Nirmal Patel**\n\n[GitHub](https://github.com/NirmalPatel-02) · [LinkedIn](https://www.linkedin.com/in/nirmal-patel-184500251/)",
            "tech": [
                "Python",
                "FastAPI",
                "LangChain",
                "ChromaDB",
                "BM25",
                "RRF",
                "Cohere Embeddings",
                "Cohere Reranker",
                "Groq",
                "YouTube Transcript API",
                "YouTube Data API",
                "Pydantic"
            ],
            "links": {
                "demo": "#",
                "github": "https://github.com/NirmalPatel-02/VoxTube-Analytics"
            },
            "video": "",
            "icon": "fab fa-youtube"
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
                "github": "https://github.com/NirmalPatel-02/Career-Compass"
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