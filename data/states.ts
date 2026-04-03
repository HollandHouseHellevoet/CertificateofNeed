export interface StateData {
  name: string;
  slug: string;
  abbr: string;
  fips: string;
  conScore: number | null;
  hospitals: boolean;
  ascs: boolean;
  imaging: boolean;
  agency: string;
  statute: string;
  severityLabel: string;
  severityClass: string;
}

function getSeverity(score: number | null): { label: string; cssClass: string } {
  if (score === null) return { label: "Moderate", cssClass: "moderate" };
  if (score >= 80) return { label: "Most Restrictive", cssClass: "critical" };
  if (score >= 60) return { label: "Highly Restrictive", cssClass: "high" };
  if (score >= 30) return { label: "Moderate", cssClass: "moderate" };
  return { label: "Low / No CON", cssClass: "low" };
}

const rawStates: Omit<StateData, "severityLabel" | "severityClass">[] = [
  { name: "Alabama", slug: "alabama", abbr: "AL", fips: "01", conScore: 80, hospitals: true, ascs: true, imaging: true, agency: "Alabama State Health Planning and Development Agency (SHPDA)", statute: "Ala. Code § 22-21-260" },
  { name: "Alaska", slug: "alaska", abbr: "AK", fips: "02", conScore: 45, hospitals: true, ascs: true, imaging: false, agency: "Alaska Department of Health", statute: "Alaska Stat. § 18.07" },
  { name: "Connecticut", slug: "connecticut", abbr: "CT", fips: "09", conScore: 85, hospitals: true, ascs: true, imaging: true, agency: "Office of Health Strategy (OHS)", statute: "Conn. Gen. Stat. § 19a-638" },
  { name: "Delaware", slug: "delaware", abbr: "DE", fips: "10", conScore: 40, hospitals: true, ascs: false, imaging: false, agency: "Delaware Health Resources Board", statute: "Del. Code tit. 16, § 9301" },
  { name: "District of Columbia", slug: "district-of-columbia", abbr: "DC", fips: "11", conScore: 75, hospitals: true, ascs: true, imaging: true, agency: "State Health Planning and Development Agency (SHPDA)", statute: "D.C. Code § 44-401" },
  { name: "Georgia", slug: "georgia", abbr: "GA", fips: "13", conScore: 80, hospitals: true, ascs: true, imaging: true, agency: "Georgia Department of Community Health", statute: "O.C.G.A. § 31-6-40" },
  { name: "Hawaii", slug: "hawaii", abbr: "HI", fips: "15", conScore: 75, hospitals: true, ascs: true, imaging: true, agency: "Hawaii State Health Planning and Development Agency", statute: "Haw. Rev. Stat. § 323D" },
  { name: "Illinois", slug: "illinois", abbr: "IL", fips: "17", conScore: 70, hospitals: true, ascs: true, imaging: true, agency: "Illinois Health Facilities and Services Review Board", statute: "20 ILCS 3960" },
  { name: "Iowa", slug: "iowa", abbr: "IA", fips: "19", conScore: 40, hospitals: true, ascs: false, imaging: false, agency: "Iowa Department of Health and Human Services", statute: "Iowa Code § 135.61" },
  { name: "Kentucky", slug: "kentucky", abbr: "KY", fips: "21", conScore: 100, hospitals: true, ascs: true, imaging: true, agency: "Kentucky Cabinet for Health and Family Services", statute: "KRS § 216B.010" },
  { name: "Maine", slug: "maine", abbr: "ME", fips: "23", conScore: 35, hospitals: true, ascs: false, imaging: false, agency: "Maine Department of Health and Human Services", statute: "Me. Rev. Stat. tit. 22, § 329" },
  { name: "Maryland", slug: "maryland", abbr: "MD", fips: "24", conScore: 85, hospitals: true, ascs: true, imaging: true, agency: "Maryland Health Care Commission (MHCC)", statute: "Md. Code, Health-Gen. § 19-120" },
  { name: "Massachusetts", slug: "massachusetts", abbr: "MA", fips: "25", conScore: 80, hospitals: true, ascs: true, imaging: true, agency: "Massachusetts Department of Public Health", statute: "Mass. Gen. Laws ch. 111, § 25C" },
  { name: "Michigan", slug: "michigan", abbr: "MI", fips: "26", conScore: 70, hospitals: true, ascs: true, imaging: true, agency: "Michigan Department of Health and Human Services", statute: "Mich. Comp. Laws § 333.22201" },
  { name: "Minnesota", slug: "minnesota", abbr: "MN", fips: "27", conScore: 30, hospitals: true, ascs: false, imaging: false, agency: "Minnesota Department of Health", statute: "Minn. Stat. § 144.551" },
  { name: "Mississippi", slug: "mississippi", abbr: "MS", fips: "28", conScore: 90, hospitals: true, ascs: true, imaging: true, agency: "Mississippi State Department of Health", statute: "Miss. Code Ann. § 41-7-171" },
  { name: "Missouri", slug: "missouri", abbr: "MO", fips: "29", conScore: 65, hospitals: true, ascs: true, imaging: false, agency: "Missouri Health Facilities Review Committee", statute: "Mo. Rev. Stat. § 197.300" },
  { name: "Nevada", slug: "nevada", abbr: "NV", fips: "32", conScore: null, hospitals: true, ascs: false, imaging: false, agency: "Nevada Department of Health and Human Services", statute: "Nev. Rev. Stat. § 439A" },
  { name: "New Jersey", slug: "new-jersey", abbr: "NJ", fips: "34", conScore: 70, hospitals: true, ascs: true, imaging: true, agency: "New Jersey Department of Health", statute: "N.J. Stat. Ann. § 26:2H-1" },
  { name: "New York", slug: "new-york", abbr: "NY", fips: "36", conScore: 90, hospitals: true, ascs: true, imaging: true, agency: "New York State Department of Health", statute: "N.Y. Pub. Health Law § 2800" },
  { name: "North Carolina", slug: "north-carolina", abbr: "NC", fips: "37", conScore: 85, hospitals: true, ascs: true, imaging: true, agency: "North Carolina Department of Health and Human Services", statute: "N.C. Gen. Stat. § 131E-175" },
  { name: "Oregon", slug: "oregon", abbr: "OR", fips: "41", conScore: 50, hospitals: true, ascs: false, imaging: false, agency: "Oregon Health Authority", statute: "Or. Rev. Stat. § 442.315" },
  { name: "Rhode Island", slug: "rhode-island", abbr: "RI", fips: "44", conScore: 80, hospitals: true, ascs: true, imaging: true, agency: "Rhode Island Department of Health", statute: "R.I. Gen. Laws § 23-15-2" },
  { name: "South Carolina", slug: "south-carolina", abbr: "SC", fips: "45", conScore: 85, hospitals: true, ascs: true, imaging: true, agency: "South Carolina Department of Health and Environmental Control", statute: "S.C. Code Ann. § 44-7-110" },
  { name: "Tennessee", slug: "tennessee", abbr: "TN", fips: "47", conScore: 75, hospitals: true, ascs: true, imaging: true, agency: "Tennessee Health Services and Development Agency", statute: "Tenn. Code Ann. § 68-11-1601" },
  { name: "Vermont", slug: "vermont", abbr: "VT", fips: "50", conScore: 90, hospitals: true, ascs: true, imaging: true, agency: "Vermont Green Mountain Care Board", statute: "Vt. Stat. Ann. tit. 18, § 9431" },
  { name: "Virginia", slug: "virginia", abbr: "VA", fips: "51", conScore: 100, hospitals: true, ascs: true, imaging: true, agency: "Virginia Department of Health", statute: "Va. Code Ann. § 32.1-102.1" },
  { name: "Washington", slug: "washington", abbr: "WA", fips: "53", conScore: 65, hospitals: true, ascs: true, imaging: false, agency: "Washington State Department of Health", statute: "Wash. Rev. Code § 70.38" },
  { name: "West Virginia", slug: "west-virginia", abbr: "WV", fips: "54", conScore: 80, hospitals: true, ascs: true, imaging: true, agency: "West Virginia Health Care Authority", statute: "W. Va. Code § 16-2D-1" },
];

export const states: StateData[] = rawStates.map((s) => {
  const severity = getSeverity(s.conScore);
  return {
    ...s,
    severityLabel: severity.label,
    severityClass: severity.cssClass,
  };
});

export const qualifyingAbbrs = new Set(states.map((s) => s.abbr));

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getScoreColor(score: number | null): string {
  if (score === null) return "#8a6a1a";
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}
