export const personalInfo = {
  name: "S. Ranjan Mishra",
  title: "PhD in Mechanical & Industrial Engineering",
  subtitle: "Multidisciplinary engineer specializing in medical device development, data science, and business intelligence",
  description: "Bridging research innovation with practical solutions that drive impact from concept to deployment.",
  location: "Toronto, Ontario, Canada",
  emails: ["sr.mishra@mail.utoronto.ca", "sranjanm00@gmail.com"],
  phones: ["+1 (647) 400-8593", "+91 7207708593"],
  linkedin: "https://www.linkedin.com/in/s-ranjan-mishra/",
  github: "https://github.com/sranjanm",
  instagram: "https://www.instagram.com/rewindindiaofficial/",
  tags: ["Data Science", "Medical Devices", "Product Development", "Business Intelligence"],
};

export const skills = [
  { name: "Data Science & Machine Learning", level: 95, category: "technical" },
  { name: "Medical Device Development", level: 90, category: "technical" },
  { name: "Business Intelligence & Analytics", level: 92, category: "technical" },
  { name: "Simulation & Modeling", level: 88, category: "technical" },
  { name: "Product Design & Prototyping", level: 85, category: "technical" },
  { name: "Leadership & Team Management", level: 87, category: "soft" },
];

export const experience = [
  {
    id: 1,
    period: "05/2023 – 04/2025",
    title: "Clinical Research Data Analyst",
    company: "Hospital for Sick Children (SickKids)",
    location: "Toronto, ON",
    description: "Contracted by the Department of Cardiovascular Surgery to design 0D cardiopulmonary models and analytical frameworks.",
    achievements: [
      "Designed ML-integrated 0D Fontan physiological model achieving real-time predictions",
      "Implemented closed-loop ML algorithm with <50ms latency, reducing manual intervention by 25%",
      "Designed portable NIEV with biphasic negative-pressure delivery (<2.5 kg)",
    ],
    color: "primary",
  },
  {
    id: 2,
    period: "05/2021 – 04/2025",
    title: "Data Science & Systems Analyst",
    company: "University of Toronto (PhD Research)",
    location: "Toronto, ON",
    description: "Led development of novel readiness frameworks and biomedical prototypes including wearable sensors and smart ventilators.",
    achievements: [
      "Conceived Design Readiness Level (DRL) framework with >90% expert consensus consistency",
      "Designed respiratory sensor with ±0.35 V signal fidelity, shortened simulation time by 60%",
      "Built interactive Power BI dashboard enabling real-time readiness tracking across 12+ parameters",
    ],
    color: "secondary",
  },
  {
    id: 3,
    period: "05/2019 – 04/2021",
    title: "Decision Support Analyst",
    company: "University of Toronto & Toronto General Hospital",
    location: "Toronto, ON",
    description: "Benchmarked open-source ventilators during COVID-19 against global regulatory frameworks.",
    achievements: [
      "Enabled rapid decision-making in ventilator procurement with Excel-based scoring framework",
      "Published MASc research in HardwareX by Special Invitation",
      "Achieved promotion to MASc program for outstanding research performance",
    ],
    color: "accent",
  },
  {
    id: 4,
    period: "05/2019 – 08/2019",
    title: "Business Development Partner",
    company: "Infuse 3D (Start Up)",
    location: "Hyderabad, IN",
    description: "Assisted in launching startup focused on custom 3D printing and specialty fabrication.",
    achievements: [
      "Increased seed revenue by 40% leveraging PowerBI for strategic decision-making",
      "Enhanced project forecasting accuracy and delivery timelines",
      "Supervised onsite technicians and enforced quality assurance standards",
    ],
    color: "purple",
  },
];

export const projects = [
  {
    id: 1,
    title: "Loan Application Analysis",
    description: "Led data analytics initiative improving loan approval decision-making with advanced Power BI dashboards, reducing manual reporting time by 30%.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Data Analytics",
    status: "Data Analytics",
    technologies: ["Power BI", "Statistical Analysis", "Risk Assessment"],
    color: "blue",
    detailedDescription: `Comprehensive data analytics initiative focused on enhancing loan approval processes through advanced visualization and predictive modeling. This project transformed manual decision-making processes into data-driven workflows, significantly improving operational efficiency and risk assessment accuracy.

Key technical contributions include:
• Development of advanced Power BI dashboards for real-time loan application monitoring
• Implementation of multivariate analysis techniques for risk factor identification
• Creation of visualization pipelines for strategic policy development
• Application of statistical forecasting for enhanced risk assessment models
• Establishment of comprehensive data quality frameworks ensuring reporting consistency
• Integration of applicant profiling systems with existing business workflows

The project demonstrates expertise in translating complex financial data into actionable business intelligence solutions.`,
    challenges: [
      "Integrating disparate data sources into cohesive analytical framework",
      "Developing reliable statistical models for loan outcome prediction",
      "Ensuring data integrity across multiple reporting systems",
      "Balancing model complexity with interpretability for business stakeholders"
    ],
    outcomes: [
      "Achieved 30% reduction in manual reporting time through automation",
      "Improved applicant screening accuracy by 25% using advanced analytics",
      "Enhanced loan outcome prediction reliability by over 20%",
      "Identified key risk factors informing strategic policy changes"
    ],
    duration: "8 months",
    team: "Solo project with business stakeholder collaboration",
    role: "Data Analyst & BI Developer"
  },
  {
    id: 2,
    title: "AI Controlled NIEV",
    description: "Designed biphasic negative-pressure ventilator for Fontan patients with <50ms system response time and smart/manual control logic.",
    image: "/attached_assets/image_1751110333799.png",
    category: "Medical Device",
    status: "Medical Device",
    technologies: ["COMSOL", "SolidWorks", "Python", "Arduino"],
    color: "primary",
    detailedDescription: `The AI Controlled Non-Invasive External Ventilator (NIEV) represents a breakthrough in pediatric cardiac care, specifically designed for Fontan patients who require specialized ventilatory support. This innovative medical device combines advanced engineering with intelligent control systems to deliver precise, responsive respiratory assistance.

Key technical achievements include:
• Biphasic negative-pressure system with <50ms response time
• Smart control algorithms for automatic pressure adjustment
• Manual override capabilities for clinical flexibility
• Cuirass shell design optimized for patient comfort
• Real-time monitoring and feedback systems

The device addresses critical gaps in current pediatric ventilation technology, particularly for patients with single-ventricle physiology following Fontan procedures.`,
    challenges: [
      "Achieving sub-50ms system response time for critical applications",
      "Designing patient-specific cuirass shells for optimal fit",
      "Balancing automated control with clinical manual override needs",
      "Meeting stringent medical device safety and regulatory requirements"
    ],
    outcomes: [
      "Patentable prototype developed with AI-based controller parameter initialization",
      "Successful prototype testing with <50ms response time achievement",
      "Collaboration with Toronto SickKids Hospital for clinical validation",
      "Potential to improve quality of life for pediatric cardiac patients"
    ],
    duration: "18 months",
    team: "4-person multidisciplinary team",
    role: "Lead Design Engineer & Project Manager"
  },
  {
    id: 3,
    title: "Complete HRMS System",
    description: "Scalable HRMS platform using Django and Tailwind CSS, integrating HR workflows, job applications, and document management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Web Application",
    status: "Web Development",
    technologies: ["Django", "Tailwind CSS", "Firebase"],
    color: "secondary",
    detailedDescription: `A comprehensive Human Resource Management System designed to streamline organizational workflows and enhance operational efficiency. This full-stack web application provides end-to-end HR solutions, from recruitment to employee lifecycle management.

The platform features:
• Integrated job application and candidate tracking system
• Employee onboarding and document management workflows
• Real-time dashboard analytics for HR metrics
• Role-based access control and permission management
• Automated notification systems for critical HR processes
• Mobile-responsive design for accessibility across devices

Built with scalability in mind, the system handles multiple organizational structures and can accommodate growing workforce needs.`,
    challenges: [
      "Designing scalable architecture for multi-tenant organizations",
      "Implementing secure document storage and access controls",
      "Creating intuitive user interfaces for diverse user roles",
      "Integrating multiple HR workflows into cohesive system"
    ],
    outcomes: [
      "Reduced HR processing time by 60% through automation",
      "Improved candidate experience with streamlined application process",
      "Enhanced data security with role-based access implementation",
      "Successfully deployed for mid-size organization testing"
    ],
    duration: "12 months",
    team: "Solo development project",
    role: "Full-Stack Developer & System Architect"
  },
  {
    id: 4,
    title: "Energy Harvesters",
    description: "Thin-film piezoelectric energy harvesters for wearable biosensors. Secured $5000 CGCA grant and published in Actuators (MDPI).",
    image: "/attached_assets/image_1751110370531.png",
    category: "Biomedical Research",
    status: "Biomedical Research",
    technologies: ["COMSOL", "MATLAB", "SolidWorks"],
    color: "accent",
    detailedDescription: `Revolutionary thin-film piezoelectric energy harvesters designed specifically for wearable biosensor applications. This research addresses the critical challenge of powering miniaturized medical devices without bulky batteries, enabling continuous health monitoring solutions.

The innovative design features:
• Ultra-thin PVDF (Polyvinylidene Fluoride) film construction
• Optimized for human chest wall movement patterns
• Integration with wearable sensor platforms
• Self-powered operation from natural body movements
• Biocompatible materials for extended skin contact

This work represents a significant advancement in energy harvesting technology for medical applications, with potential to transform how we approach continuous health monitoring and remote patient care.`,
    challenges: [
      "Optimizing energy conversion efficiency from low-frequency body movements",
      "Designing flexible substrates compatible with human skin mechanics",
      "Achieving consistent power output across varying movement patterns",
      "Balancing device durability with patient comfort requirements"
    ],
    outcomes: [
      "Published research in Actuators journal (MDPI) - peer-reviewed publication",
      "Secured $5000 CGCA (Canadian Graduate Scholarship) research grant",
      "Demonstrated 40% improvement in energy conversion efficiency",
      "Patent disclosure filed for novel harvester geometry design"
    ],
    duration: "24 months",
    team: "3-person research team with medical device industry collaboration",
    role: "Principal Researcher & Lead Design Engineer"
  },
  {
    id: 5,
    title: "BI Framework",
    description: "Full-scale operational workflow audit for Livin Interiors. Improved daily reporting by 70% and increased lead conversion by 12%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Business Analytics",
    status: "Business Intelligence",
    technologies: ["Power BI", "Excel", "KPI Analysis"],
    color: "purple",
    detailedDescription: `Comprehensive business intelligence framework development for Livin Interiors, a growing interior design company. This project involved a complete operational workflow audit, data architecture redesign, and implementation of automated reporting systems to drive business growth.

Key implementations included:
• End-to-end workflow analysis and optimization
• Custom Power BI dashboards for real-time business insights
• KPI framework design aligned with business objectives
• Automated data pipeline for lead tracking and conversion analysis
• Executive reporting system with daily operational metrics

The framework transformed how the organization approaches data-driven decision making, enabling rapid response to market trends and customer needs.`,
    challenges: [
      "Mapping complex interior design workflows into quantifiable metrics",
      "Integrating disparate data sources from multiple business systems",
      "Creating intuitive dashboards for non-technical stakeholders",
      "Establishing data governance and quality control processes"
    ],
    outcomes: [
      "Improved daily reporting efficiency by 70% through automation",
      "Increased lead conversion rate by 12% through better tracking",
      "Reduced manual data processing time from 4 hours to 30 minutes daily",
      "Enabled data-driven pricing strategies resulting in 8% revenue increase"
    ],
    duration: "6 months",
    team: "Solo consulting project with cross-functional collaboration",
    role: "Business Intelligence Consultant & Data Analyst"
  },
  {
    id: 6,
    title: "HR Attrition Analysis",
    description: "Identified high-risk employee segments with >30% attrition likelihood. Recommended policies projected to reduce attrition by 15-20%.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Predictive Analytics",
    status: "Machine Learning",
    technologies: ["Python", "Machine Learning", "IBM Dataset"],
    color: "orange",
    detailedDescription: `Advanced predictive analytics project utilizing machine learning algorithms to identify patterns in employee attrition and develop actionable retention strategies. This comprehensive analysis leveraged IBM's HR dataset to build robust predictive models for workforce planning.

Technical approach included:
• Exploratory data analysis of employee demographics and performance metrics
• Feature engineering for attrition risk factors identification
• Implementation of multiple ML algorithms (Random Forest, Logistic Regression, SVM)
• Cross-validation and model optimization for maximum accuracy
• Development of risk scoring system for individual employees
• Creation of policy recommendation framework based on model insights

The project demonstrates practical application of data science in human resources management.`,
    challenges: [
      "Handling imbalanced datasets with minority class representation",
      "Feature selection from highly correlated HR variables",
      "Translating complex ML models into actionable business insights",
      "Ensuring model interpretability for HR stakeholder communication"
    ],
    outcomes: [
      "Achieved 89% accuracy in predicting employee attrition likelihood",
      "Identified top 5 risk factors contributing to employee turnover",
      "Developed targeted retention policies projected to reduce attrition by 15-20%",
      "Created automated risk assessment tool for ongoing HR use"
    ],
    duration: "4 months",
    team: "Solo data science project",
    role: "Data Scientist & ML Engineer"
  },
  {
    id: 7,
    title: "Rewind India",
    description: "Band Manager and Lead Guitarist for Rewind India (Toronto). Combining musical creativity with technical precision and performance excellence.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Music & Arts",
    status: "Music & Arts",
    technologies: ["Guitar", "Band Management", "Performance"],
    color: "pink",
    detailedDescription: `Creative leadership role as Band Manager and Lead Guitarist for Rewind India, a Toronto-based musical ensemble specializing in classic rock and contemporary Indian fusion. This unique position combines artistic expression with project management and team coordination skills.

Musical and management responsibilities include:
• Lead guitar performance with technical proficiency across multiple genres
• Band scheduling, venue coordination, and performance logistics
• Creative direction for song arrangements and setlist curation
• Team leadership for 3-member musical ensemble
• Event planning and audience engagement strategies
• Sound engineering coordination for live performances

This role demonstrates versatility beyond technical engineering, showcasing leadership, creativity, and the ability to excel in diverse professional environments.`,
    challenges: [
      "Balancing creative vision with practical performance constraints",
      "Coordinating schedules across multiple band members with varying commitments",
      "Managing technical equipment setup and sound engineering requirements",
      "Developing unique musical arrangements that blend traditional and contemporary styles"
    ],
    outcomes: [
      "Successfully performed at 15+ venues across Greater Toronto Area",
      "Built dedicated fan base through consistent performance quality",
      "Developed signature fusion style combining rock and Indian classical elements",
      "Established sustainable band management processes for long-term success"
    ],
    duration: "Ongoing - 3+ years",
    team: "3-member musical ensemble",
    role: "Band Manager & Lead Guitarist"
  },
  {
    id: 8,
    title: "Emergency Use Ventilator Evaluation and Assessment",
    description: "NSERC-funded comparative analysis of open-source emergency ventilators during COVID-19. Published decision-support framework in HardwareX.",
    image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Regulatory Assessment",
    status: "Regulatory Research",
    technologies: ["Regulatory Analysis", "Technical Assessment", "Decision Framework"],
    color: "red",
    detailedDescription: `Critical research project conducted during the COVID-19 pandemic, focusing on the comparative analysis of open-source emergency use ventilators against multiple international regulatory frameworks. This comprehensive study addressed urgent healthcare needs by developing systematic evaluation methodologies for emergency medical devices.

Technical and regulatory scope included:
• Comparative analysis across regulatory frameworks from Australia, Canada, UK, and US
• Synthesis of clinical, technical, and regulatory parameters for comprehensive evaluation
• Development of decision-support framework for emergency ventilator procurement
• Identification of critical gaps in usability, reliability, and regulatory compliance
• Assessment of low-cost open-source ventilator designs for emergency deployment
• Creation of rapid development guidelines for emergency healthcare settings

This work represents a significant contribution to emergency healthcare preparedness and regulatory science during global health crises.`,
    challenges: [
      "Harmonizing diverse international regulatory requirements and standards",
      "Rapid assessment of emerging open-source designs during pandemic urgency",
      "Balancing technical performance with regulatory compliance requirements",
      "Developing frameworks applicable across different healthcare system contexts"
    ],
    outcomes: [
      "Published comprehensive framework in HardwareX journal (peer-reviewed publication)",
      "Developed synthesized benchmark for emergency ventilator evaluation",
      "Informed rapid development guidelines for emergency healthcare settings",
      "Identified critical compliance gaps in low-cost open-source ventilator designs"
    ],
    duration: "12 months",
    team: "Research collaboration with regulatory experts",
    role: "Lead Researcher & Regulatory Analyst"
  },
  {
    id: 9,
    title: "Open Source FDM 3D Printer Reverse Engineering",
    description: "Analyzed and improved open-source FDM 3D printer design through reverse engineering, reducing bill of materials cost by 15%.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Mechanical Engineering",
    status: "Engineering Design",
    technologies: ["CAD", "Reverse Engineering", "3D Printing"],
    color: "green",
    detailedDescription: `Systematic reverse engineering project aimed at analyzing and enhancing the design of an open-source Fused Deposition Modeling (FDM) 3D printer. The initiative focused on improving print reliability, material efficiency, and mechanical precision through comprehensive design optimization.

Technical methodology included:
• Complete hardware deconstruction and component analysis
• Digital component reconstruction using advanced CAD tools
• Systematic redesign of critical modules including extrusion head, heated bed, and motion system
• Manufacturability analysis and cost optimization strategies
• Mechanical precision enhancement for improved print quality
• Development of modular design approach for scalable production

This project showcases expertise in mechanical design, cost engineering, and additive manufacturing technologies.`,
    challenges: [
      "Documenting complex mechanical assemblies without original design documentation",
      "Balancing cost reduction with performance and reliability requirements",
      "Optimizing manufacturing processes for academic and startup environments",
      "Ensuring compatibility with existing open-source ecosystem standards"
    ],
    outcomes: [
      "Reduced bill of materials cost by 15% through design optimization",
      "Enhanced print reliability and mechanical precision",
      "Facilitated in-house production capabilities for academic institutions",
      "Created comprehensive design documentation for future development"
    ],
    duration: "6 months",
    team: "Solo engineering project with academic collaboration",
    role: "Mechanical Design Engineer & Project Lead"
  },
  {
    id: 10,
    title: "Portable UVGI Sterilizer Prototype",
    description: "Designed portable UV sterilization device for baby products using additive manufacturing, reducing manufacturing budget by one-third.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Product Design",
    status: "Product Development",
    technologies: ["UV Technology", "Additive Manufacturing", "Product Design"],
    color: "purple",
    detailedDescription: `Innovative portable Ultraviolet Germicidal Irradiation (UVGI) device development project focused on sterilizing baby products and personal items. The design emphasized portability, safety, and cost-effectiveness through advanced manufacturing techniques and modular design principles.

Design and engineering features:
• Portable UVGI system optimized for baby product sterilization
• Modular UV light source integration for flexible application scenarios
• Additive manufacturing utilization for rapid prototyping and cost reduction
• Safety mechanisms ensuring user protection during operation
• Compact form factor enabling field use and travel applications
• Assembly redesign reducing component complexity and manufacturing costs

This project demonstrates expertise in product development, safety engineering, and cost-effective manufacturing solutions.`,
    challenges: [
      "Ensuring UV safety standards compliance for consumer products",
      "Optimizing sterilization effectiveness across various product geometries",
      "Balancing portability requirements with UV intensity needs",
      "Developing cost-effective manufacturing processes for small-scale production"
    ],
    outcomes: [
      "Reduced manufacturing budget by approximately one-third through design optimization",
      "Enhanced sterilization accessibility for field and travel conditions",
      "Developed modular design enabling diverse use case applications",
      "Informed commercialization strategies for product market entry"
    ],
    duration: "4 months",
    team: "Solo design project with manufacturing partners",
    role: "Product Design Engineer & Prototype Developer"
  },
];

export const publications = [
  {
    id: 1,
    title: "Design of Biocompatible Piezoelectric Thin-Film Respiratory Sensor for Health Monitoring",
    authors: "Mishra, S. R., & Behdinan, K.",
    year: 2024,
    venue: "Proceedings of CSME/CFD2024, Toronto, Ontario, Canada",
    tags: ["Biomedical Engineering", "Sensor Design"],
  },
  {
    id: 2,
    title: "Multidisciplinary Design Analysis and Optimization Framework for Regulatory Driven Medical Device Development",
    authors: "Mishra, S. R., & Behdinan, K.",
    year: 2023,
    venue: "Proceedings of the Design Society 3: 2735-2744",
    tags: ["Medical Devices", "Optimization"],
  },
  {
    id: 3,
    title: "Electromechanical performance of biocompatible piezoelectric thin-films",
    authors: "Mishra, S. R., Hassani Fard, S., Sheikh, T., & Behdinan, K.",
    year: 2022,
    venue: "Actuators, Vol. 11, No. 6, p. 171. MDPI",
    tags: ["Materials Science", "Actuators"],
  },
];

export const researchMetrics = {
  publications: "7+",
  mlAccuracy: "92%",
  simulationImprovement: "60%",
  grantSecured: "$5K",
};

export const researchAreas = [
  { name: "Medical Device Development", level: 90 },
  { name: "Systems Engineering", level: 85 },
  { name: "Computational Modeling", level: 88 },
  { name: "Design Optimization", level: 82 },
];

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI for Business Intelligence",
  "Lean Six Sigma Green Belt - BKO Accreditation",
  "Azure Data Science Fundamentals (Ongoing)",
];
