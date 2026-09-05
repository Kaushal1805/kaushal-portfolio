import biAgentWorkflowImg from '@/assets/bi_agent_workflow.jpg';
import aiLeadCaptureWorkflowImg from '@/assets/ai_lead_capture_workflow.jpg';
import twitterSentimentUiImg from '@/assets/twitter_sentiment_ui.jpg';
import project1Img from '@/assets/project1.jpg';
import project2Img from '@/assets/project2.jpg';
import project3Img from '@/assets/project3.jpg';
import blinkitGroceryDashboard from '@/assets/blinkit_grocery_dashboard.png';
import onlineRetailDashboard from '@/assets/online_retail_dashboard.png';
import hospitalErDashboard from '@/assets/hospital_er_dashboard.png';

export interface WorkflowStep {
  step: number;
  name: string;
  category: 'database' | 'sql' | 'analytics' | 'ai' | 'reporting' | 'delivery' | 'python' | 'dashboard' | 'insights' | 'nlp' | 'ml' | 'automation' | 'crm';
  description: string;
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  longDescription: string;
  overview?: string;
  datasetInfo?: { rows: string; columns: string };
  workflow?: string[];
  workflowStepsDetail?: WorkflowStep[];
  features?: string[];
  dataCleaning?: string[];
  dataPreparation?: string[];
  sqlAnalysis?: string[];
  businessAnalysis?: string[];
  dashboardFeatures?: string[];
  keyInsights?: string[];
  mlConcepts?: string[];
  sentimentClasses?: string[];
  leadInfoFields?: string[];
  useCases?: string[];
  futurePossibilities?: string[];
  businessValue?: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  workflowUrl?: string;
  image: string;
  featured?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'ai-powered-business-intelligence-agent',
    title: 'AI-Powered Business Intelligence Agent',
    category: 'AI Automation | Business Intelligence | SQL Analytics',
    tagline: 'Database → Analysis → Insight → Action',
    featured: true,
    description:
      'An AI-powered Business Intelligence automation system that transforms raw business data into KPIs, anomaly detection, actionable insights, and automated executive reports.',
    longDescription:
      'This project automates the complete business intelligence analysis workflow using n8n, MySQL, SQL, JavaScript, and AI. Instead of manually querying databases, calculating KPIs, identifying underperforming segments, analyzing anomalies, and preparing management reports, the workflow automates the complete process from data discovery to business recommendations.',
    overview:
      'This project automates the complete business intelligence analysis workflow using n8n, MySQL, SQL, JavaScript, and AI. Instead of manually querying databases, calculating KPIs, identifying underperforming segments, analyzing anomalies, and preparing management reports, the workflow automates the complete process from data discovery to business recommendations.',
    workflow: [
      'Database Discovery',
      'Schema Inspection',
      'Dynamic SQL Generation',
      'Data Quality Validation',
      'KPI Analysis',
      'Comparative Analysis',
      'Anomaly Detection',
      'AI Business Analyst',
      'Business Recommendations',
      'Executive Report',
      'Telegram / Gmail Notification',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Database Discovery',
        category: 'database',
        description: 'Automatically discovers available MySQL tables and scans existing entity structures.',
      },
      {
        step: 2,
        name: 'Schema Inspection',
        category: 'database',
        description: 'Inspects column types, keys, and relational constraints dynamically without hardcoded assumptions.',
      },
      {
        step: 3,
        name: 'Dynamic SQL Generation',
        category: 'sql',
        description: 'Constructs optimized SQL queries targeting key performance metrics and dimensional slices.',
      },
      {
        step: 4,
        name: 'Data Quality Validation',
        category: 'sql',
        description: 'Performs automated data-quality checks, sanity tests, null handling, and anomaly filtering.',
      },
      {
        step: 5,
        name: 'KPI Analysis',
        category: 'analytics',
        description: 'Calculates high-priority business KPIs across revenue, volume, and operational metrics.',
      },
      {
        step: 6,
        name: 'Comparative Analysis',
        category: 'analytics',
        description: 'Performs product, regional, and customer segment comparisons across analytical dimensions.',
      },
      {
        step: 7,
        name: 'Anomaly Detection',
        category: 'analytics',
        description: 'Detects underperforming segments, deviations, outliers, and emerging behavioral trends.',
      },
      {
        step: 8,
        name: 'AI Business Analyst',
        category: 'ai',
        description: 'Leverages LLM AI engine to interpret complex analytical patterns and synthesize insights in context.',
      },
      {
        step: 9,
        name: 'Business Recommendations',
        category: 'ai',
        description: 'Generates structured, actionable business recommendations prioritized for decision-makers.',
      },
      {
        step: 10,
        name: 'Executive Report',
        category: 'reporting',
        description: 'Compiles clean executive summaries, visual telemetry breakdowns, and formatted action items.',
      },
      {
        step: 11,
        name: 'Telegram / Gmail Notification',
        category: 'delivery',
        description: 'Dispatches automated alerts and executive reports directly to Telegram channels and Gmail inboxes.',
      },
    ],
    features: [
      'Automatically discovers available MySQL tables',
      'Inspects database schemas dynamically',
      'Generates SQL queries based on available business data',
      'Performs automated data-quality checks',
      'Calculates important business KPIs',
      'Performs product and segment analysis',
      'Detects underperforming segments and anomalies',
      'Uses AI to interpret analytical results',
      'Generates actionable business recommendations',
      'Creates structured executive reports',
      'Sends reports through Telegram and Gmail',
      'Maintains workflow execution logs',
      'Includes error handling and AI fallback logic',
    ],
    businessValue:
      'The system reduces repetitive manual BI work by automating the pipeline from raw database data to business insight and management reporting.',
    tech: [
      'n8n',
      'MySQL',
      'SQL',
      'JavaScript',
      'AI / LLM',
      'Telegram',
      'Gmail',
      'Business Intelligence',
    ],
    highlights: [
      'Automated Database Discovery & Schema Inspection',
      'Dynamic SQL Generation with Automated Data Quality Checks',
      'Multi-Dimensional KPI, Segment & Anomaly Analysis',
      'AI LLM Business Analyst Engine for Strategic Recommendations',
      'Automated Executive Reports delivered via Telegram and Gmail',
      'Robust Execution Logging & AI Fallback Logic',
    ],
    github: 'https://github.com/Kaushal1805/ai-powered-business-intelligence-agent',
    workflowUrl: '#workflow-diagram',
    image: biAgentWorkflowImg,
  },
  {
    id: 2,
    slug: 'ai-lead-capture-bot',
    title: 'AI Lead Capture Bot',
    category: 'AI Automation | n8n | Workflow Automation',
    tagline: 'Telegram Interaction → n8n Lead Processing → Google Sheets CRM → Auto-Confirmation',
    description:
      'An automated lead capture workflow that collects customer information through Telegram, structures the data, stores it in Google Sheets, and automatically confirms the submission.',
    longDescription:
      'This project demonstrates how workflow automation can reduce manual lead collection and CRM data entry. The system uses Telegram as the customer interface and Google Sheets as a lightweight CRM, ensuring zero friction in lead capture and instant real-time data synchronization.',
    overview:
      'This project demonstrates how workflow automation can reduce manual lead collection and CRM data entry. The system uses Telegram as the customer interface and Google Sheets as a lightweight CRM.',
    workflow: [
      'Telegram User',
      'Telegram Trigger',
      'Lead Information Collection',
      'Data Processing',
      'Google Sheets CRM',
      'Confirmation Message',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Telegram User',
        category: 'delivery',
        description: 'Prospective client or customer initiates conversation through Telegram bot interface.',
      },
      {
        step: 2,
        name: 'Telegram Trigger',
        category: 'automation',
        description: 'n8n webhook triggers immediately upon incoming message event from the Telegram Bot API.',
      },
      {
        step: 3,
        name: 'Lead Information Collection',
        category: 'ai',
        description: 'Captures and prompts structured fields: Name, Requirement, Budget, Date, and initial Lead Status.',
      },
      {
        step: 4,
        name: 'Data Processing',
        category: 'python',
        description: 'JavaScript & AI nodes sanitize, validate, format, and structure the collected lead payload.',
      },
      {
        step: 5,
        name: 'Google Sheets CRM',
        category: 'crm',
        description: 'Appends or updates formatted lead records dynamically into the centralized Google Sheets lightweight CRM.',
      },
      {
        step: 6,
        name: 'Confirmation Message',
        category: 'delivery',
        description: 'Dispatches an instantaneous, personalized confirmation message back to the user on Telegram.',
      },
    ],
    leadInfoFields: [
      'Name',
      'Requirement',
      'Budget',
      'Date',
      'Lead Status',
    ],
    features: [
      'Automated lead collection',
      'Telegram-based interaction',
      'Structured lead processing',
      'Google Sheets CRM integration',
      'Append/update lead records',
      'Automatic customer confirmation',
      'No manual data entry required',
    ],
    useCases: [
      'Freelancers',
      'Agencies',
      'Small businesses',
      'Sales teams',
      'Marketing teams',
      'Service providers',
      'Startups',
    ],
    futurePossibilities: [
      'AI lead qualification',
      'Lead scoring',
      'Automatic follow-ups',
      'Email notifications',
      'Slack integration',
      'CRM integration',
      'Duplicate lead detection',
    ],
    businessValue:
      'Eliminates manual lead logging delays, captures client requirements 24/7 without human latency, and maintains an always-updated lightweight CRM pipeline.',
    tech: [
      'n8n',
      'Telegram Bot API',
      'Google Sheets',
      'JavaScript',
      'AI-based data processing',
    ],
    highlights: [
      'Telegram User → Trigger → Lead Collection → Data Processing → CRM → Confirmation',
      'Zero manual entry with real-time Google Sheets lightweight CRM sync',
      'Captures Name, Requirement, Budget, Date, and Lead Status',
      'Instant automated customer confirmation and error-resilient workflow',
    ],
    github: 'https://github.com/Kaushal1805/ai-lead-capture-bot-n8n',
    workflowUrl: '#workflow-diagram',
    image: aiLeadCaptureWorkflowImg,
  },
  {
    id: 3,
    slug: 'online-retail-sales-analysis',
    title: 'Online Retail Sales Analysis',
    category: 'Data Analytics | SQL | Power BI',
    tagline: 'Raw Data → Python Cleaning → SQL Analytics → Power BI Intelligence',
    description:
      'An end-to-end retail analytics project that transforms raw transaction data into business insights using Python, SQL, and Power BI.',
    longDescription:
      'This project demonstrates a complete data analytics workflow starting from raw retail transaction data and ending with an interactive business intelligence dashboard. The dataset was cleaned and transformed using Python, analyzed using SQL, and visualized through Power BI to understand sales performance, customer behavior, products, countries, and revenue trends.',
    overview:
      'This project demonstrates a complete data analytics workflow starting from raw retail transaction data and ending with an interactive business intelligence dashboard. The dataset was cleaned and transformed using Python, analyzed using SQL, and visualized through Power BI to understand sales performance, customer behavior, products, countries, and revenue trends.',
    workflow: [
      'Raw Transaction Data',
      'Data Cleaning with Python',
      'Data Transformation',
      'SQL Business Analysis',
      'KPI Analysis',
      'Power BI Dashboard',
      'Business Insights',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Raw Transaction Data',
        category: 'database',
        description: 'Ingests raw multi-national online retail transaction logs including invoices, stock codes, customer IDs, and quantities.',
      },
      {
        step: 2,
        name: 'Data Cleaning with Python',
        category: 'python',
        description: 'Cleans missing data, removes duplicate transactions, eliminates cancelled orders, and normalizes schema types in Pandas.',
      },
      {
        step: 3,
        name: 'Data Transformation',
        category: 'python',
        description: 'Engineers Total Sales metric, extracts Year and Month dimensions, and generates structured analysis-ready dataframes.',
      },
      {
        step: 4,
        name: 'SQL Business Analysis',
        category: 'sql',
        description: 'Executes complex SQL aggregations, date-based trends, CASE WHEN logic, and customer segmentation queries.',
      },
      {
        step: 5,
        name: 'KPI Analysis',
        category: 'analytics',
        description: 'Calculates high-priority retail KPIs: Total Revenue, Total Orders, Total Customers, Avg Order Value, and Quantity Sold.',
      },
      {
        step: 6,
        name: 'Power BI Dashboard',
        category: 'dashboard',
        description: 'Designs interactive dashboards with country breakdowns, top products, customer revenue matrices, and dynamic slicers.',
      },
      {
        step: 7,
        name: 'Business Insights',
        category: 'insights',
        description: 'Synthesizes key takeaways across top-performing markets, high-velocity product lines, and customer purchasing patterns.',
      },
    ],
    dataCleaning: [
      'Handled missing values',
      'Removed duplicate records',
      'Removed cancelled transactions',
      'Converted data types',
      'Created Total Sales',
      'Extracted Year and Month',
      'Created Month-Year analysis fields',
      'Prepared analysis-ready data',
    ],
    sqlAnalysis: [
      'Sales aggregation',
      'Monthly revenue analysis',
      'Top-selling products',
      'Country-wise sales',
      'Customer analysis',
      'Category/product performance',
      'Date-based analysis',
      'CASE WHEN logic',
      'GROUP BY and HAVING',
      'Aggregate functions',
    ],
    dashboardFeatures: [
      'Total Revenue',
      'Total Orders',
      'Total Customers',
      'Average Order Value',
      'Quantity Sold',
      'Country-wise Sales',
      'Monthly Revenue Trends',
      'Top Products',
      'Category Performance',
      'Interactive slicers and filters',
    ],
    keyInsights: [
      'Identified major revenue-contributing countries',
      'Analyzed top-performing products',
      'Studied monthly revenue trends',
      'Analyzed customer purchasing behavior',
      'Identified important sales patterns',
    ],
    features: [
      'End-to-end pipeline from raw data to interactive Power BI report',
      'Robust Python & Pandas data cleaning and validation',
      'Structured SQL aggregation and cohort analysis queries',
      'Interactive Power BI dashboard with dynamic slicers and filters',
      'In-depth country, product, and customer revenue breakdown',
      'Monthly trend tracking and order pattern visualization',
    ],
    businessValue:
      'Eliminates manual reporting bottlenecks by structuring an automated analytics pipeline that transforms messy retail transactions into executive-ready visual business intelligence.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Power BI',
      'Power Query',
      'DAX',
      'Microsoft Excel',
    ],
    highlights: [
      'End-to-End Data Pipeline: Python Data Cleaning → SQL Analytics → Power BI',
      'Calculated Key Retail KPIs: Total Revenue, Orders, Customers, AOV, Quantity',
      'Multi-Dimensional Breakdown: Country-Wise, Top 10 Products & Customers',
      'Dynamic Temporal Filtering by Year, Month, and Date Slicers',
    ],
    github: 'https://github.com/Kaushal1805/-Online-Retail-Sales-Analysis-End-to-End-Data-Analytics-Project',
    workflowUrl: '#dashboard-view',
    image: onlineRetailDashboard,
  },
  {
    id: 4,
    slug: 'twitter-sentiment-analyzer',
    title: 'Twitter Sentiment Analyzer',
    category: 'Machine Learning | NLP | Text Classification',
    tagline: 'Tweet Input → Preprocessing → TF-IDF Vectorization → ML Models → Real-Time Prediction',
    description:
      'An NLP-based sentiment analysis web application that classifies tweets as Positive, Negative, or Neutral using text preprocessing, TF-IDF vectorization, and machine learning models.',
    longDescription:
      'This project demonstrates an end-to-end Natural Language Processing workflow for sentiment classification. The application preprocesses text, converts it into numerical features using TF-IDF, applies machine learning models, and provides real-time sentiment predictions through a Streamlit interface.',
    overview:
      'This project demonstrates an end-to-end Natural Language Processing workflow for sentiment classification. The application preprocesses text, converts it into numerical features using TF-IDF, applies machine learning models, and provides real-time sentiment predictions through a Streamlit interface.',
    workflow: [
      'Tweet/Text Input',
      'Text Preprocessing',
      'Feature Extraction',
      'TF-IDF Vectorization',
      'Machine Learning Model',
      'Sentiment Prediction',
      'Streamlit Interface',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Tweet/Text Input',
        category: 'nlp',
        description: 'Accepts raw text or tweet phrases directly entered into the user interface.',
      },
      {
        step: 2,
        name: 'Text Preprocessing',
        category: 'python',
        description: 'Performs tokenization, lowercase conversion, punctuation removal, regex cleaning, and stop-word filtering using NLTK.',
      },
      {
        step: 3,
        name: 'Feature Extraction',
        category: 'nlp',
        description: 'Extracts relevant n-grams and linguistic patterns indicating sentiment polarity across vocabulary tokens.',
      },
      {
        step: 4,
        name: 'TF-IDF Vectorization',
        category: 'ml',
        description: 'Transforms text tokens into numerical feature matrices using Term Frequency-Inverse Document Frequency weighting.',
      },
      {
        step: 5,
        name: 'Machine Learning Model',
        category: 'ml',
        description: 'Evaluates and trains classification algorithms including Logistic Regression and Naive Bayes classifiers.',
      },
      {
        step: 6,
        name: 'Sentiment Prediction',
        category: 'ml',
        description: 'Predicts target sentiment class probabilities and categorizes inputs as Positive, Negative, or Neutral.',
      },
      {
        step: 7,
        name: 'Streamlit Interface',
        category: 'delivery',
        description: 'Renders dynamic real-time prediction cards, sentiment badges, and model selection toggles in the deployed web app.',
      },
    ],
    sentimentClasses: [
      'Positive',
      'Negative',
      'Neutral',
    ],
    features: [
      'Text preprocessing',
      'TF-IDF feature extraction',
      'Sentiment classification',
      'Logistic Regression model',
      'Naive Bayes model',
      'Real-time prediction interface',
      'Streamlit deployment',
    ],
    mlConcepts: [
      'Natural Language Processing',
      'Text preprocessing',
      'Feature extraction',
      'TF-IDF',
      'Classification',
      'Model comparison',
      'Prediction',
    ],
    businessValue:
      'Enables brands and researchers to rapidly gauge public opinion, analyze feedback sentiment, and automate customer satisfaction monitoring in real time.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'NLTK',
      'TF-IDF',
      'Logistic Regression',
      'Naive Bayes',
      'Streamlit',
    ],
    highlights: [
      'End-to-End NLP pipeline: Preprocessing → TF-IDF → Model Training → Real-Time Prediction',
      'Three-class sentiment classification: Positive, Negative, and Neutral',
      'Compared Logistic Regression and Naive Bayes models for text classification',
      'Interactive Streamlit web application for instant live tweet sentiment testing',
    ],
    github: 'https://github.com/Kaushal1805/twitter-sentiment-app',
    demo: 'https://twitter-sentiment-app-txfn222lyab5nmczbbvhs5.streamlit.app/',
    image: twitterSentimentUiImg,
  },
  {
    id: 5,
    slug: 'movie-recommendation-system',
    title: 'Movie Recommendation System',
    category: 'Machine Learning | NLP | Recommendation System',
    tagline: 'Select a movie → Analyze its metadata → Find similar movies → Generate recommendations',
    description:
      'A content-based movie recommendation system that uses movie metadata, NLP techniques, and cosine similarity to recommend movies similar to a user\'s selected movie.',
    longDescription:
      'This project implements a content-based recommendation engine using movie metadata such as genres, keywords, cast, and crew. The system processes movie information, converts textual features into numerical representations, calculates similarity between movies, and recommends the most similar movies.',
    overview:
      'This project implements a content-based recommendation engine using movie metadata such as genres, keywords, cast, and crew. The system processes movie information, converts textual features into numerical representations, calculates similarity between movies, and recommends the most similar movies.',
    workflow: [
      'Movie Dataset',
      'Data Cleaning',
      'Feature Selection',
      'Feature Combination',
      'Text Vectorization',
      'Cosine Similarity',
      'Similarity Ranking',
      'Top Movie Recommendations',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Movie Dataset',
        category: 'database',
        description: 'Ingests TMDB movie dataset containing 5,000+ film records with title, overview, genres, keywords, cast, and crew metadata.',
      },
      {
        step: 2,
        name: 'Data Cleaning',
        category: 'python',
        description: 'Cleans missing entries, parses JSON-formatted fields, and removes spaces between multi-word tags (e.g. "Sam Worthington" → "SamWorthington").',
      },
      {
        step: 3,
        name: 'Feature Selection',
        category: 'python',
        description: 'Selects high-signal textual metadata features: genre keywords, plot overview, top 3 cast members, and the director.',
      },
      {
        step: 4,
        name: 'Feature Combination',
        category: 'nlp',
        description: 'Concatenates extracted text tokens into a single unified "tags" metadata representation for every movie record.',
      },
      {
        step: 5,
        name: 'Text Vectorization',
        category: 'ml',
        description: 'Applies Scikit-learn\'s CountVectorizer with stop words removal to transform textual tags into high-dimensional numerical word vectors.',
      },
      {
        step: 6,
        name: 'Cosine Similarity',
        category: 'ml',
        description: 'Calculates the cosine similarity metric across all movie vectors to quantify geometric closeness and thematic overlap.',
      },
      {
        step: 7,
        name: 'Similarity Ranking',
        category: 'ml',
        description: 'Sorts cosine distances in descending order to identify the nearest neighbor movies for the selected query film.',
      },
      {
        step: 8,
        name: 'Top Movie Recommendations',
        category: 'delivery',
        description: 'Delivers the top 5 most similar movie titles along with poster thumbnails dynamically fetched in the Streamlit application.',
      },
    ],
    features: [
      'Content-based movie recommendations',
      'NLP-based feature processing',
      'Movie metadata analysis',
      'CountVectorizer text vectorization',
      'Cosine similarity calculation',
      'Top 5 similar movie recommendations',
      'Interactive Streamlit interface',
      'Deployed web application',
    ],
    mlConcepts: [
      'Natural Language Processing',
      'Text Vectorization',
      'Feature Engineering',
      'Similarity Measurement',
      'Ranking',
      'Recommendation Systems',
    ],
    businessValue:
      'Solves the content discovery dilemma by providing instantaneous, algorithmically grounded film recommendations based on rich textual and thematic metadata.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'NLP',
      'CountVectorizer',
      'Cosine Similarity',
      'Streamlit',
    ],
    highlights: [
      'Select a movie → Analyze its metadata → Find similar movies → Generate recommendations',
      'Vectorized movie metadata using Scikit-learn CountVectorizer',
      'Cosine similarity metric for accurate distance ranking',
      'Live deployed Streamlit application with interactive film poster cards',
    ],
    github: 'https://github.com/Kaushal1805/Movie-recommendation-system',
    demo: 'https://movie-recommendation-system-xj3d3lmvjsn24qritgbzyr.streamlit.app/',
    image: project3Img,
  },
  {
    id: 6,
    slug: 'blinkit-grocery-sales-dashboard',
    title: 'BlinkIT Grocery Sales Dashboard',
    category: 'Data Analytics | Power BI | Business Intelligence',
    tagline: 'Raw Transactions → Power Query Cleaning → DAX Modeling → Interactive BI Dashboard',
    description:
      'An interactive Power BI dashboard designed to analyze grocery sales performance across products, outlet types, outlet sizes, locations, and categories.',
    longDescription:
      'This project analyzes transaction-level grocery sales data to understand what drives business performance across different products and outlet characteristics. The raw dataset was cleaned and standardized using Excel and Power Query before creating the Power BI data model and interactive dashboard.',
    overview:
      'This project analyzes transaction-level grocery sales data to understand what drives business performance across different products and outlet characteristics. The raw dataset was cleaned and standardized using Excel and Power Query before creating the Power BI data model and interactive dashboard.',
    datasetInfo: {
      rows: '8,523',
      columns: '12',
    },
    workflow: [
      'Raw Grocery Data',
      'Power Query Cleaning',
      'Data Modeling & DAX',
      'KPI Formulation',
      'Interactive Dashboard',
      'Business Insights',
    ],
    workflowStepsDetail: [
      {
        step: 1,
        name: 'Raw Grocery Data',
        category: 'database',
        description: 'Ingests transaction-level grocery records containing 8,523 rows and 12 distinct analytical attributes.',
      },
      {
        step: 2,
        name: 'Power Query Cleaning',
        category: 'python',
        description: 'Standardizes inconsistent category labels, handles missing fields, validates visibility, and resolves data type discrepancies.',
      },
      {
        step: 3,
        name: 'Data Modeling & DAX',
        category: 'sql',
        description: 'Designs relational schemas and develops DAX calculation measures for Total Sales, Avg Sales, Item Counts, and Rating aggregations.',
      },
      {
        step: 4,
        name: 'KPI Formulation',
        category: 'analytics',
        description: 'Formulates core performance metrics across sales velocity, average transaction values, and customer satisfaction ratings.',
      },
      {
        step: 5,
        name: 'Interactive Dashboard',
        category: 'dashboard',
        description: 'Builds comprehensive multi-panel visuals with interactive slicers for Outlet Location, Size, and Item Types.',
      },
      {
        step: 6,
        name: 'Business Insights',
        category: 'insights',
        description: 'Analyzes sales distribution patterns across outlet tiers, product fat contents, and historical establishment trends.',
      },
    ],
    dataPreparation: [
      'Standardized inconsistent category labels',
      'Handled missing values',
      'Fixed data types',
      'Standardized text values',
      'Checked duplicate records',
      'Validated sales and visibility values',
      'Prepared the dataset for analysis',
    ],
    dashboardFeatures: [
      'Total Sales KPI',
      'Average Sales KPI',
      'Number of Items',
      'Average Rating',
      'Sales by Outlet Type',
      'Sales by Outlet Size',
      'Sales by Location',
      'Item Type analysis',
      'Fat Content analysis',
      'Outlet establishment trends',
      'Interactive slicers',
      'Multiple analytical views',
    ],
    businessAnalysis: [
      'Item categories',
      'Outlet types',
      'Outlet sizes',
      'Location tiers',
      'Fat content',
      'Customer ratings',
      'Item visibility',
    ],
    keyInsights: [
      'Identified the highest-performing outlet segments',
      'Compared total sales with average sales',
      'Analyzed product category performance',
      'Examined outlet location and size trends',
      'Investigated the relationship between item visibility and sales',
    ],
    businessValue:
      'Provides retail decision-makers with clear visibility into store performance, category trends, and outlet footprint optimization without manual spreadsheet consolidation.',
    tech: [
      'Microsoft Excel',
      'Power BI',
      'Power Query',
      'DAX',
    ],
    highlights: [
      'Dataset: 8,523 rows across 12 analytical dimensions',
      'Created custom DAX measures for dynamic KPI calculation',
      'Segmented sales across Outlet Types, Tier Locations, and Fat Content',
      'Multi-view interactive dashboard with dynamic filtering',
    ],
    github: 'https://github.com/Kaushal1805/-BlinkIT-Grocery-Sales-Dashboard-Power-BI',
    workflowUrl: '#dashboard-view',
    image: blinkitGroceryDashboard,
  },
  {
    id: 7,
    slug: 'vrinda-store-analysis',
    title: 'Vrinda Store Annual Sales Dashboard',
    category: 'Data Analytics | Excel BI',
    description: 'Built an Excel dashboard using Pivot Tables and charts to analyze sales data and customer trends.',
    longDescription: 'Developed a comprehensive Excel dashboard to visualize and analyze annual sales performance for Vrinda Store. The dashboard provides interactive insights into sales trends, customer behavior, and revenue patterns.',
    tech: ['Excel', 'Pivot Tables', 'Data Visualization', 'Charts'],
    highlights: [
      'Analyzed sales data and customer trends',
      'Created interactive Pivot Tables for dynamic filtering',
      'Designed charts for visual representation of KPIs',
      'Generated insights to support sales growth and decision-making',
    ],
    github: 'https://github.com/Kaushal1805/vrinda-store-analysis',
    image: project1Img,
  },
  {
    id: 8,
    slug: 'hospital-er-dashboard',
    title: 'Hospital Emergency Room (ER) Dashboard',
    category: 'Healthcare Analytics | Power BI',
    description: 'Interactive dashboard visualizing ER patient flow, admission times, wait periods, and staffing efficiency metrics.',
    longDescription: 'Built an emergency department performance dashboard to analyze patient flow, peak hours, satisfaction rates, and triage distribution. Provides administrative staff with real-time operational insights.',
    tech: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    highlights: [
      'Visualized average waiting times and patient satisfaction metrics',
      'Tracked department utilization and admission trends by age and triage level',
      'Developed interactive filters for clinical staff to drill down into operational bottlenecks',
      'Implemented robust data modeling using DAX and Excel sources',
    ],
    github: 'https://github.com/Kaushal1805/-Hospital-Emergency-Room-Dashboard',
    image: hospitalErDashboard,
  },
];
