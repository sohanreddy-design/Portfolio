// Portfolio data - Aileni Sohan Reddy
export const profile = {
  name: "Aileni Sohan Reddy",
  firstName: "Sohan",
  role: "AI / ML Researcher & Developer",
  tagline: "Building intelligent systems at the intersection of research and real-world impact.",
  about: [
    "I'm an undergraduate student passionate about Artificial Intelligence, Machine Learning, and Web Development. I enjoy turning research ideas into practical, reliable systems.",
    "My recent work focuses on clinical NLP, factual summarization, and building data-driven tools that help people make better decisions."
  ],
  details: {
    phone: "+91 7989885210",
    emailPersonal: "reddysohan18@gmail.com",
    emailCollege: "se23uari006@mahindrauniversity.edu.in",
    location: "Hyderabad, India",
    university: "Mahindra University"
  },
  socials: {
    github: "https://github.com/sohanreddy-design",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:reddysohan18@gmail.com"
  },
  research: [
    { label: "Artificial Intelligence", icon: "Brain" },
    { label: "Machine Learning", icon: "Cpu" },
    { label: "Web Development", icon: "Code2" },
    { label: "Natural Language Processing", icon: "MessageSquareText" }
  ],
  skills: [
    { name: "Python", level: "Advanced" },
    { name: "MySQL", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "NLP", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" }
  ],
  stats: [
    { value: "2+", label: "Research Projects" },
    { value: "6+", label: "Technologies" },
    { value: "4", label: "Focus Areas" }
  ]
};

export const projects = [
  {
    id: "clinical-summarization",
    title: "Entity-Accurate Clinical Summarization",
    shortDescription:
      "A clinical NLP system that produces concise, factual patient-note summaries while preserving critical medical entities.",
    bullets: [
      "Novel summarization pipeline designed to minimize hallucinations in medical text.",
      "Integrated Named Entity Recognition (NER) to preserve diseases, drugs, procedures, and patient details.",
      "Accurate attribution of medical facts to the source document for improved factual consistency."
    ],
    tech: ["Python", "NLP", "NER", "Transformers", "Summarization"],
    github: "https://github.com/sohanreddy-design/clinical-text-summarization",
    accent: "emerald",
    year: "2025"
  },
  {
    id: "feedback-engine",
    title: "Customer Feedback Insight Engine",
    shortDescription:
      "A tool that summarizes Amazon product reviews and surfaces actionable, sentiment-aware improvement suggestions.",
    bullets: [
      "Summarizes reviews and ratings directly from an Amazon product link.",
      "Sentiment and demographic-based analysis to uncover customer preferences.",
      "Generates actionable improvement suggestions from recurring feedback patterns."
    ],
    tech: ["Python", "Web Scraping", "Sentiment Analysis", "Data Viz"],
    github: "https://github.com/sohanreddy-design/Customer-Feedback-Insight-Engine.git",
    accent: "amber",
    year: "2024"
  }
];
