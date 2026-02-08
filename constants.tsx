import React from 'react';
import { ProjectNode, TimelineEvent, Interest, ExperienceItem } from './types';
import profileImg from './final_k.png';

export const KRISHA_INFO = {
  name: "Krisha Sompura",
  role: "Business Analyst Intern @ Amazon",
  location: "India",
  email: "krishasomapura@gmail.com",
  github: "https://github.com/Krisha2000",
  linkedin: "https://www.linkedin.com/in/krisha-sompura-04ba8a238/",
  profileImage: profileImg,
  skills: [
    "Python", "SQL", "Docker", "Airflow", "DVC", "Deep Learning", "LSTM", "GRU", "Statistical Modeling", "Business Intelligence"
  ],
  currentExploration: [
    { topic: "Machine Learning", status: "Active" },
    { topic: "Statistics", status: "Deep Dive" },
    { topic: "Generative AI", status: "Focus" }
  ],
  bio: `I am a Business Analyst Intern at Amazon, specializing in the development of scalable automation pipelines for data-driven insights. With a strong academic foundation in Data Science and Mathematics, I am deeply motivated by solving complex analytical problems. I bring a curious, structured approach to data analysis, consistently seeking meaningful patterns that inform decision-making and drive impact.`
};

export const PROJECTS: ProjectNode[] = [
  {
    id: "comic-ai",
    title: "Gandhinagar Comic AI",
    problem: "Solves generative AI consistency using a Multi-RAG architecture to maintain character identity across generated panels.",
    techStack: ["Python", "Streamlit", "Gemini LLM/Vision", "ChromaDB"],
    impact: "Enables professional-grade, consistent character-driven visual storytelling.",
    vizType: 'line',
    githubUrl: "https://github.com/Krisha2000/T16_mlse_project.git"
  },
  {
    id: "warehouse",
    title: "Flower Warehouse Optimizer",
    problem: "Optimizes perishable inventory using an automated, event-driven pipeline with multi-factor storage allocation and FIFO fulfillment.",
    techStack: ["Python", "Apache Airflow", "Docker", "PostgreSQL"],
    impact: "Minimized product spoilage and optimized labor efficiency.",
    vizType: 'bar',
    githubUrl: "https://github.com/Krisha2000/flower_warehouse_optimizer.git"
  },
  {
    id: "fake-review",
    title: "Fake Review Detection System",
    problem: "Identifies deceptive reviews using Supervised Machine Learning (SVM, MLP) trained on Word2Vec text embeddings.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Gensim"],
    impact: "Enhances consumer trust by filtering out fake content with high accuracy.",
    vizType: 'radar',
    githubUrl: "https://github.com/Krisha2000/Project_WoC_7.0_Fake_Review_Detection_Chechpoint_4.git"
  },
  {
    id: "traffic",
    title: "Traffic Flow Forecasting System",
    problem: "Addresses urban congestion by predicting traffic flow using time-series forecasting with Deep Learning (GRU, LSTM) and Quantile Regression for uncertainty estimation.",
    techStack: ["Python", "PyTorch", "Statsmodels", "Scikit-learn"],
    impact: "Achieved lowest RMSE (3.57) and 90% prediction interval coverage.",
    vizType: 'line',
    githubUrl: "https://github.com/Krisha2000/Traffic-Flow-Forecasting-System.git"
  },
  {
    id: "anomaly",
    title: "Hybrid Time-Series Anomaly Detector",
    problem: "Detects anomalies using a hybrid model combining LSTM Autoencoders for pattern recognition and Benford's Law for statistical forensic analysis.",
    techStack: ["Python", "Streamlit", "PyTorch", "Google Gemini API"],
    impact: "Reduces false positives and provides explainable AI insights for data integrity.",
    vizType: 'scatter',
    githubUrl: "https://github.com/Krisha2000/hybrid-timeseries-anomaly-detector-app.git"
  },
  {
    id: "yulu",
    title: "Yulu Bike Sharing Demand Analysis",
    problem: "Diagnoses revenue decline via Statistical Hypothesis Testing (ANOVA, Chi-Square) and K-Means Clustering for segmentation.",
    techStack: ["Python", "Pandas", "SciPy", "Scikit-learn"],
    impact: "Revealed 3 key user segments; enabled dynamic pricing (+15%) to recover revenue.",
    vizType: 'bar',
    githubUrl: "https://github.com/Krisha2000/Yulu_Bike_Sharing_Demand_Analysis.git"
  },
  {
    id: "health",
    title: "Healthcare Spending Economics",
    problem: "Investigates correlation between healthcare spending and life expectancy using regression analysis and a Behavioral Risk Index.",
    techStack: ["Python", "Jupyter", "Pandas", "Matplotlib"],
    impact: "Informed policy by proving preventive care structure is more critical than raw expenditure.",
    vizType: 'scatter',
    githubUrl: "https://github.com/Krisha2000/Economics.git"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Amazon",
    role: "Business Analyst Intern",
    period: "Jan 2026 - Present",
    description: "Focusing on building robust Automation Pipelines and exploring Clustering Methods for data-driven insights.",
    skills: ["Automation", "Data Analysis", "Clustering"]
  },
  {
    company: "Research Assistant",
    role: "Catastrophic Risk Analysis",
    period: "March 2025 - Dec 2025",
    description: "Conducted in-depth analysis on catastrophic risks, utilizing statistical models to predict and mitigate potential threats.",
    skills: ["Risk Analysis", "Statistical Modeling", "Research"]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    period: "2024 - 2026",
    institution: "Dhirubhai Ambani University",
    qualification: "M.Sc. Data Science",
    achievement: "8.88 CGPA",
    type: "college"
  },
  {
    period: "2021 - 2024",
    institution: "R.R. Lalan College",
    qualification: "B.Sc. Hons Mathematics",
    achievement: "8.31 CGPA",
    type: "college"
  },
  {
    period: "2007 - 2021",
    institution: "Matruchhaya Kanya Vidhyalay",
    qualification: "Schooling",
    achievement: "10th: 90.66%; 12th PCM: 85.65%",
    type: "school"
  }
];

export const INTERESTS: Interest[] = [
  { name: "Kathak", icon: "fa-shoe-prints", color: "from-pink-500 to-rose-500", detail: "Visharad Degree" },
  { name: "Singing", icon: "fa-microphone-lines", color: "from-blue-500 to-cyan-500", detail: "Classically Trained" },
  { name: "Tabla", icon: "fa-drum", color: "from-amber-500 to-orange-500", detail: "Classically Trained" },
  { name: "Guitar", icon: "fa-guitar", color: "from-purple-500 to-indigo-500", detail: "Multi-instrumentalist" },
  { name: "Harmonium", icon: "fa-keyboard", color: "from-emerald-500 to-teal-500", detail: "Classical Performance" },
  { name: "Exploring", icon: "fa-compass", color: "from-yellow-500 to-amber-600", detail: "Always Learning" }
];
