import statesData from "@/data/states-final.json";

export interface Citation {
  number: number;
  text: string;
  url?: string;
}

export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  conScore: number | null;
  severityLabel: string;
  hospitals: boolean;
  ascs: boolean;
  imaging: boolean;
  conStatuteTitle: string;
  conStatuteCitation: string;
  adminAgency: string;
  yearEnacted: number;
  lastAmended: string;
  reformStatus: string;
  marketConcentration: string;
  dominantSystems: string[];
  averagePriceToMedicare: string | null;
  summary: string;
  deepProfile: boolean;
  profileLevel: "deep" | "standard" | "minimal";
  dateModified: string;
  citations: Citation[];
}

export function getAllStates(): StateData[] {
  return statesData as StateData[];
}

export function getStateBySlug(slug: string): StateData | undefined {
  return (statesData as StateData[]).find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return (statesData as StateData[]).map((s) => s.slug);
}

export function getSeverityColor(score: number | null): string {
  if (score === null) return "#8a6a1a";
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}

export function getSeverityClass(score: number | null): string {
  if (score === null) return "moderate";
  if (score >= 80) return "critical";
  if (score >= 60) return "high";
  if (score >= 30) return "moderate";
  return "low";
}

export function getSeverityLabel(score: number | null): string {
  if (score === null) return "Moderate";
  if (score >= 80) return "Most Restrictive";
  if (score >= 60) return "Highly Restrictive";
  if (score >= 30) return "Moderate";
  return "Low";
}
