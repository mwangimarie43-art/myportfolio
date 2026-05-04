const portfolioData = {
  personal: {
    name: "Mary Mwangi",
    title: "Data Analyst & Scientist",
    bio: "Passionate about uncovering insights from data and building predictive models. With 5+ years of experience in data analysis and machine learning, I've helped organizations make data-driven decisions.",
    email: "mariemwangi43@gmail.com",
    phone: "+254792813165",
    location: "Naitobi, Kenya"
  },

  stats: [
    { number: "5+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "4+", label: "Clients Served" }
  ],

  projects: [
    {
      id: 1,
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.",
      technologies: ["Python", "XGBoost", "SQL", "Pandas"],
      icon: "📊"
    },
    {
      id: 2,
      title: "Sales Forecasting Dashboard",
      description: "Developed an interactive dashboard using Tableau and Python to forecast quarterly sales with trend analysis.",
      technologies: ["Tableau", "Python", "Power BI", "SQL"],
      icon: "📈"
    },
    {
      id: 3,
      title: "Sentiment Analysis of Social Media",
      description: "Applied NLP techniques to analyze 500K+ social media posts and identify brand sentiment patterns.",
      technologies: ["NLP", "Python", "NLTK", "TensorFlow"],
      icon: "💬"
    },
    {
      id: 4,
      title: "Product Recommendation Engine",
      description: "Created a collaborative filtering recommendation system that increased cross-selling by 35%.",
      technologies: ["Machine Learning", "Python", "Scikit-learn", "AWS"],
      icon: "🎯"
    },
    {
      id: 5,
      title: "A/B Testing Analysis",
      description: "Designed and analyzed 15+ A/B tests, providing statistical insights to optimize conversion rates.",
      technologies: ["Statistics", "Python", "R", "Excel"],
      icon: "🔬"
    },
    {
      id: 6,
      title: "Real Estate Market Analysis",
      description: "Analyzed real estate data across 10 cities to identify investment opportunities and market trends.",
      technologies: ["Exploratory Analysis", "Python", "Visualization", "GeoPandas"],
      icon: "🏠"
    }
  ],

  skills: {
    "Programming & Tools": [
      "Python", "SQL", "R", "Excel", "Git", "Jupyter Notebook", "VS Code"
    ],
    "Data Visualization": [
      "Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"
    ],
    "Machine Learning": [
      "Scikit-learn", "TensorFlow", "XGBoost", "Keras", "Feature Engineering", "Model Evaluation"
    ],
    "Big Data & Cloud": [
      "AWS", "Google Cloud", "Hadoop", "Spark", "Apache Kafka", "ETL Pipelines"
    ],
    "Databases": [
      "MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Data Warehousing"
    ],
    "Statistical Analysis": [
      "Hypothesis Testing", "Regression Analysis", "A/B Testing", "Time Series Analysis", "Bayesian Statistics"
    ]
  },

  experience: [
    {
      id: 1,
      position: "Senior Data Scientist",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      description: "Lead data science initiatives, mentor junior analysts, and deliver strategic insights through advanced analytics and machine learning models."
    },
    {
      id: 2,
      position: "Data Analyst",
      company: "Finance Insights Ltd.",
      duration: "Jun 2021 - Dec 2022",
      description: "Analyzed financial data to identify trends, built predictive models for market forecasting, and created comprehensive dashboards for stakeholders."
    },
    {
      id: 3,
      position: "Junior Data Analyst",
      company: "Retail Analytics Co.",
      duration: "Jan 2020 - May 2021",
      description: "Performed exploratory data analysis, created SQL queries for data extraction, and assisted in building visualization dashboards."
    },
    {
      id: 4,
      position: "Analytics Intern",
      company: "StartUp Data Labs",
      duration: "Jun 2019 - Dec 2019",
      description: "Supported the analytics team with data cleaning, analysis, and documentation of findings and recommendations."
    }
  ],

  testimonials: [
    {
      id: 1,
      text: "Sarah's ability to translate complex data into actionable insights has been invaluable to our business. Her churn prediction model reduced customer loss by 25%.",
      author: "John Smith",
      role: "CEO, Tech Solutions Inc."
    },
    {
      id: 2,
      text: "Working with Sarah was a game-changer. She didn't just provide data—she told the story behind it and helped us make confident business decisions.",
      author: "Maria Garcia",
      role: "Product Manager, Finance Insights Ltd."
    },
    {
      id: 3,
      text: "Sarah's expertise in machine learning and her attention to detail set her apart. She consistently delivers results that exceed expectations.",
      author: "David Chen",
      role: "VP of Analytics, Retail Analytics Co."
    }
  ]
}

export default portfolioData
