export type HackathonStatus = "live" | "coming-soon" | "wip";

export interface Hackathon {
  id: number;
  title: string;
  tech: string[];
  description: string;
  status: HackathonStatus;
  url: string;
  points: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 0,
    title: "Portfolio Hub",
    tech: ["Next.js 15", "Supabase", "Vercel"],
    description: "Central hub linking all Panaversity hackathon projects.",
    status: "live",
    url: "https://panaversity-hackathon-0.vercel.app",
    points: "1000 + 500 bonus",
  },
  {
    id: 1,
    title: "Physical AI & Robotics Textbook",
    tech: ["Docusaurus", "FastAPI", "Groq", "Supabase pgvector"],
    description: "AI-native textbook + embedded RAG chatbot.",
    status: "live",
    url: "https://panaversity-hackathon-1.vercel.app",
    points: "100 + 200 bonus",
  },
  {
    id: 2,
    title: "Evolution of Todo",
    tech: ["Next.js 15", "FastAPI", "Supabase", "Kafka", "Kubernetes"],
    description: "5-phase: console → full-stack → AI chatbot → K8s → cloud.",
    status: "live",
    url: "https://panaversity-hackathon-2.vercel.app",
    points: "1000 + 600 bonus",
  },
  {
    id: 3,
    title: "Reusable Intelligence + LearnFlow",
    tech: ["Agent Skills", "MCP", "Kubernetes", "Dapr"],
    description: "Skills library + AI Python tutoring platform.",
    status: "live",
    url: "https://panaversity-learnflow.vercel.app",
    points: "1000 + 400 bonus",
  },
  {
    id: 4,
    title: "Course Companion FTE",
    tech: ["Next.js 15", "Groq", "FastAPI", "Supabase"],
    description: "24/7 AI tutor — Zero-Backend-LLM → Hybrid.",
    status: "live",
    url: "https://panaversity-course-companion.vercel.app",
    points: "1000 + 500 bonus",
  },
];
