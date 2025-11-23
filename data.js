const portfolioData = {
    "profile": {
        "name": "Nirmal Patel",
        "roles": [
            "AI/ML Engineer",
            "Backend Developer"
        ],
        "bio": "B.Sc. IT graduate with a strong foundation in Python, Machine Learning, and Deep Learning. I specialize in building intelligent models, data preprocessing, and API integration. Passionate about leveraging AI to solve real-world problems through clean, efficient, and impactful code.",
        "email": "nilupatel02005@gmail.com",
        "phone": "+91-8140637181",
        "location": "Patan, Gujarat, India",
        "profileImage": "PortfolioCurrent.png",
        "social": {
            "github": "https://github.com/NirmalPatel-02",
            "linkedin": "https://www.linkedin.com/in/nirmal-patel-184500251/",
            "huggingface": "https://huggingface.co/Nirmal-Patel",
            "email": "mailto:nilupatel02005@gmail.com"
        }
    },
    "about": {
        "summary": "B.Sc. IT graduate and aspiring AI/ML Engineer with a strong foundation in Python, Machine Learning, and Deep Learning. Skilled in developing intelligent models, data preprocessing, and API integration. Passionate about applying AI to solve real-world problems with clean and efficient code. Currently pursuing M.Sc. (CA & IT) with a focus on advanced AI concepts."
    },
    "education": [
        {
            "degree": "M.Sc. (CA & IT)",
            "institution": "Ganpat University",
            "year": "2025 – 2027",
            "score": "Current CGPA: 8.6"
        },
        {
            "degree": "B.Sc. (CA & IT)",
            "institution": "Ganpat University",
            "year": "2022 – 2025",
            "score": "CGPA: 7.97"
        }
    ],
    "problemSolving": [
        {
            "platform": "LeetCode",
            "stats": "100+ Problems Solved",
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
                "JavaScript",
                "SQL"
            ]
        },
        {
            "category": "Frameworks & Libraries",
            "items": [
                "Laravel",
                "Django",
                "TensorFlow",
                "Keras",
                "NumPy",
                "Pandas",
                "Matplotlib",
                "Scikit-learn"
            ]
        },
        {
            "category": "ML Concepts",
            "items": [
                "Data Preprocessing",
                "EDA",
                "Feature Engineering",
                "Transfer Learning",
                "ANN",
                "CNN",
                "RNN",
                "LSTM",
                "NLP"
            ]
        },
        {
            "category": "Database",
            "items": [
                "MySQL"
            ]
        },
        {
            "category": "Tools",
            "items": [
                "Git",
                "VS Code",
                "Jupyter Notebook",
                "Postman",
                "Hugging Face"
            ]
        }
    ],
    "experience": [
        {
            "role": "Backend Developer Intern",
            "company": "BM Coder",
            "duration": "Jan 2025 – Jun 2025",
            "description": "Built and maintained dynamic web applications, crafting robust APIs and optimized database structures. Resolved complex bugs in live projects, enhancing reliability and user satisfaction. Actively participated in code reviews to uphold best practices."
        }
    ],
    "projects": [
        {
            "title": "CommentVision AI",
            "description": "YouTube Toxicity Analyzer using Bidirectional GRU multi-label classifier. Analyzes 500 comments in <8s.",
            "notes": "I developed this project using a Bidirectional GRU architecture to handle the sequential nature of text data effectively. The model was trained on a balanced dataset of toxic and non-toxic comments. Key challenges included handling class imbalance and optimizing inference time, which I achieved by using FastAPI for asynchronous request handling.",
            "tech": [
                "Python",
                "TensorFlow",
                "FastAPI",
                "NLP",
                "Scikit-Learn"
            ],
            "links": {
                "demo": "https://nirmal-patel-commentvision-ai.hf.space/",
                "github": "https://github.com/NirmalPatel-02/Youtube-Commant-Analyzer-AI"
            },
            "icon": "fas fa-comment-slash"
        },
        {
            "title": "CarDamageAnalysis AI",
            "description": "Multi-Stage Car Damage Assessment System using EfficientNet-B3. Achieved 99.1% accuracy.",
            "notes": "This system uses Transfer Learning with EfficientNet-B3. I implemented a two-stage pipeline: first detecting if a car is present, and second classifying the damage type. Data augmentation was crucial here to prevent overfitting.",
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
            "icon": "fas fa-car-crash"
        },
        {
            "title": "Used Car Value Estimator",
            "description": "Neural Network model to estimate resale value based on age, mileage, and brand.",
            "notes": "Built using a deep neural network regression model. I spent significant time on Feature Engineering, specifically encoding categorical variables like Car Brand and Fuel Type. The model is deployed on Hugging Face Spaces.",
            "tech": [
                "Python",
                "Tensorflow",
                "Neural Networks",
                "Regression",
                "Hugging Face"
            ],
            "links": {
                "demo": "https://nirmal-patel-oldcarpriceprediction.hf.space",
                "github": "https://github.com/NirmalPatel-02/UsedCarPricePredict"
            },
            "icon": "fas fa-tags"
        },
        {
            "title": "CampusHire Predictor",
            "description": "Classification model predicting student placement probability using academic data.",
            "notes": "A binary classification project using Scikit-learn. I compared multiple algorithms (Logistic Regression, Random Forest, SVM) and found Random Forest gave the best precision-recall trade-off.",
            "tech": [
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "Pandas",
                "Matplotlib",
                "FastAPI"
            ],
            "links": {
                "demo": "https://nirmal-patel-placementpredicter.hf.space/",
                "github": "#"
            },
            "icon": "fas fa-graduation-cap"
        },
        {
            "title": "SwiftETA",
            "description": "Predicts accurate Estimated Delivery Time (ETD) for food delivery apps.",
            "notes": "Trained on real-world Indian delivery datasets. I cleaned the data to remove outliers (e.g., deliveries taking 5 hours) and used a Neural Network to predict time based on distance, traffic, and time of day.",
            "tech": [
                "Python",
                "Tensorflow",
                "Scikit-Learn",
                "Neural Network",
                "Pandas",
                "Numpy"
            ],
            "links": {
                "demo": "https://nirmal-patel-swifteta.hf.space/",
                "github": "https://github.com/NirmalPatel-02/DeliveryETA"
            },
            "icon": "fas fa-stopwatch"
        }
    ]
};