export interface StateService {
  category: string;
  services: string;
}

export interface AppProcess {
  label: string;
  value: string;
}

export interface DataCard {
  value: string;
  label: string;
  detail: string;
  source?: string;
}

export interface MarketShare {
  name: string;
  share: string;
}

export interface CaseStudy {
  title: string;
  year: string;
  status: string;
  text: string;
  pullQuote: string;
}

export interface ReformBullet {
  label: string;
  value: string;
}

export interface EvidenceRow {
  metric: string;
  result: string;
  source: string;
}

export interface StatePage {
  slug: string;
  name: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    subhead: string;
  };
  stats: {
    score: number;
    tier: string;
    nationalRank: string;
    governor: string;
    governorParty: string;
    servicesRegulated: string;
    yearEnacted: string;
    keyMetric1Label: string;
    keyMetric1Value: string;
    keyMetric2Label: string;
    keyMetric2Value: string;
  };
  scope: {
    body: string;
    services: StateService[];
    applicationProcess: AppProcess[];
    additionalNote?: string;
  };
  marketConcentration: {
    body: string;
    dataCards: DataCard[];
    marketShare: MarketShare[];
    pullQuote?: string;
  };
  caseLaw: {
    subhead?: string;
    cases: CaseStudy[];
  };
  reform: {
    body: string;
    bullets?: ReformBullet[];
    evidence?: EvidenceRow[];
    reformedStates?: string[];
  };
  editorial: {
    text: string;
    byline?: string;
  };
  citations: string;
}

const statePages: Record<string, StatePage> = {
  kentucky: {
    slug: "kentucky",
    name: "Kentucky",
    meta: {
      title: "Kentucky Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Kentucky's CON laws have been in place since 1972. Three hospital systems control 100% of the Louisville inpatient market. Louisville HHI: 3,720. Prices reach 354% of Medicare.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Kentucky",
      subhead: "Kentucky\u2019s CON laws have been in place since 1972. They regulate 18 different services, devices, and procedures. Three hospital systems control 100% of the Louisville inpatient market. Competition is not just difficult here. It is illegal.",
    },
    stats: {
      score: 100,
      tier: "Most Restrictive",
      nationalRank: "43 of 50 \u2014 Tied for Last",
      governor: "Andy Beshear",
      governorParty: "Democrat",
      servicesRegulated: "18",
      yearEnacted: "1972",
      keyMetric1Label: "Louisville Market HHI",
      keyMetric1Value: "3,720",
      keyMetric2Label: "Max Pricing vs. Medicare",
      keyMetric2Value: "354%",
    },
    scope: {
      body: "Kentucky\u2019s CON program is administered by the Office of the Inspector General (OIG) within the Cabinet for Health and Family Services. Incumbent providers can intervene in the formal review process to block a new competitor\u2019s entry into the market.",
      services: [
        { category: "Facilities", services: "Hospitals, Ambulatory Surgical Centers (ASCs), Long-term care facilities, Psychiatric residential treatment facilities, Home health agencies, Hospices" },
        { category: "Services", services: "Chemical dependency treatment programs, Open heart surgery programs, Organ transplant programs, Special care neonatal beds" },
        { category: "Equipment", services: "Freestanding or mobile technology (MRI, PET, CT scanners)" },
        { category: "Other", services: "Ambulance services (with some exceptions), Prescribed pediatric extended care facilities" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Office of the Inspector General (OIG), Cabinet for Health and Family Services" },
        { label: "Decision Authority", value: "Cabinet Hearing Officer" },
        { label: "Formal Review Timeline", value: "~6 months" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can block new entrants." },
        { label: "Counties Allowing New Home Health Agencies", value: "8 of 120" },
      ],
    },
    marketConcentration: {
      body: "Kentucky\u2019s restrictive CON laws have fostered a healthcare landscape dominated by a few large hospital systems. The Louisville hospital market is a prime example of extreme consolidation.",
      dataCards: [
        { value: "3,720", label: "Louisville Market HHI", detail: "An HHI above 2,500 is considered \u2018highly concentrated\u2019 by federal antitrust agencies.", source: "Kentuckiana Health Collaborative, 2023" },
        { value: "2,737", label: "Lexington Market HHI", detail: "Also classified as highly concentrated. Kentucky\u2019s two largest markets are both monopolized.", source: "Kentuckiana Health Collaborative, 2023" },
        { value: "107\u2013354%", label: "Pricing vs. Medicare", detail: "Prices at Kentucky facilities range from 107% to a staggering 354% of what Medicare would have paid.", source: "Kentuckiana Health Collaborative, 2023" },
        { value: "40%+", label: "Low Quality Rating", detail: "Of Kentucky hospitals received a 1- or 2-star CMS quality rating. Only 6% achieved 5 stars (vs. 14% nationally).", source: "CMS, 2022" },
      ],
      marketShare: [
        { name: "Norton Healthcare", share: "55%" },
        { name: "UofL Health", share: "27%" },
        { name: "Baptist Health", share: "18%" },
        { name: "Everyone Else", share: "0%" },
      ],
      pullQuote: "Hospital mergers have been found to increase the average hospital price by 6\u201318% nationwide. Kentucky\u2019s experience aligns with this trend, as the state\u2019s CON laws protect incumbent systems from new entrants that could offer more competitive pricing. \u2014 Kentuckiana Health Collaborative, \u2018Unbridled Costs,\u2019 2023",
    },
    caseLaw: {
      subhead: "Behind every CON denial is a real person who was told by the government that their community does not \u2018need\u2019 the care they wanted to provide.",
      cases: [
        {
          title: "Tiwari v. Meier (Tiwari v. Friedlander)",
          year: "Filed December 2019 | Louisville, Kentucky | Institute for Justice",
          status: "Case Concluded. CON Upheld.",
          text: "Dipendra Tiwari, a Nepali immigrant, wanted to open Grace Home Care, a home health care agency catering to refugees in Louisville, offering services in the Nepali language. Thousands of Nepali speakers from Bhutan had resettled in Louisville.\n\nHe paid a $1,000 fee to submit his plan to the state. A $2 billion health care conglomerate, his future competitor, argued there was no need for another home health agency. Kentucky refused to issue a certificate of need and rejected his application.\n\nIn Kentucky\u2019s 120 counties, new home health agencies are allowed in only 8 counties. Louisville itself has only 9 home health agencies for 22,000 patients.\n\nThe case received unfavorable decisions at both the district court and the Sixth Circuit Court of Appeals (February 2022). The U.S. Supreme Court declined to hear the case in November 2022.",
          pullQuote: "Everyone has the right to earn an honest living free from irrational laws. Letting giant health care conglomerates keep entrepreneurs out of business has nothing to do with protecting the public. It protects entrenched corporations. \u2014 Institute for Justice, Tiwari v. Meier brief",
        },
      ],
    },
    reform: {
      body: "Kentucky has not reformed its CON laws. The federal mandate that originally encouraged CON adoption was repealed in 1987. Kentucky held on.",
      bullets: [
        { label: "CON program in place since", value: "1972" },
        { label: "Services regulated", value: "18" },
        { label: "Score", value: "100/100 (most restrictive)" },
        { label: "Reform legislation pending", value: "None" },
        { label: "Louisville HHI", value: "3,720" },
        { label: "Hospitals rated 1\u20132 stars", value: "40%+" },
      ],
      evidence: [
        { metric: "Hospital charges after repeal", result: "5.5% lower after 5 years", source: "Research literature" },
        { metric: "ASCs per capita after repeal", result: "+44\u201347% statewide, +92\u2013112% in rural areas", source: "Research literature" },
        { metric: "OH coronary artery bypass costs", result: "\u22122.8% after CON repeal", source: "State data" },
        { metric: "PA coronary artery bypass costs", result: "\u22128.8% after CON repeal", source: "State data" },
        { metric: "Medicaid spending after repeal", result: "No significant growth", source: "Research literature" },
        { metric: "FTC/DOJ position", result: "CON laws lead to higher, not lower, costs", source: "FTC/DOJ Joint Report" },
      ],
      reformedStates: [
        "Florida (2019): Repealed most CON requirements",
        "Indiana (1999): Repealed entire CON program",
        "Ohio (2012): Repealed most CON laws",
        "South Carolina (2023): Full repeal, hospital CON sunsets 2027",
        "ASCs per capita increased 44\u201347% after repeal",
        "Hospital charges 5.5% lower five years after repeal",
      ],
    },
    editorial: {
      text: "Kentucky\u2019s CON laws do not control costs. They do not improve quality. They do not expand access. What they do is grant a government-backed monopoly to three hospital systems in Louisville that control 100% of the inpatient market and charge up to 354% of Medicare rates for the privilege.\n\nWhen Dipendra Tiwari, a Nepali immigrant, tried to open a home health agency to serve refugees in their own language, a $2 billion conglomerate told the state there was \u2018no need.\u2019 The state agreed. In a city of 22,000 home health patients served by just 9 agencies. In a state where 112 of 120 counties are closed to new home health providers by law.\n\nThis is not regulation. This is a protection racket with a government seal on it. The federal government repealed the CON mandate in 1987 because it did not work. Kentucky kept it anyway.\n\nThe question is not whether CON laws should be reformed. The question is who is paying to keep them in place.",
      byline: "The Rojas Report",
    },
    citations: "Data sourced from Cicero Institute, National Academy for State Health Policy (NASHP), Kentuckiana Health Collaborative, Centers for Medicare & Medicaid Services (CMS), Institute for Justice, Federal Trade Commission, and Department of Justice.",
  },

  virginia: {
    slug: "virginia",
    name: "Virginia",
    meta: {
      title: "Virginia Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Virginia\u2019s COPN program has been in place since 1973. 19 regulated services. Sentara Health $13B revenue dominates Hampton Roads. Five systems control $16B+ in revenue statewide.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Virginia",
      subhead: "Virginia\u2019s CON laws, in place since 1973, regulate 19 different services. This extensive regulation has led to highly concentrated hospital markets, limiting patient choice and shielding incumbent providers from competition.",
    },
    stats: {
      score: 100,
      tier: "Most Restrictive",
      nationalRank: "35 of 50",
      governor: "Glenn Youngkin",
      governorParty: "Republican",
      servicesRegulated: "19",
      yearEnacted: "1973",
      keyMetric1Label: "Top Insurer Market Share",
      keyMetric1Value: "17.71%",
      keyMetric2Label: "Northern VA Hospital Market",
      keyMetric2Value: "Highly Concentrated",
    },
    scope: {
      body: "Virginia\u2019s COPN program is administered by the Virginia Department of Health. Incumbent providers can actively participate in the review process to object to new competitors.",
      services: [
        { category: "Facilities", services: "Hospitals, Nursing Homes, Ambulatory Surgical Centers (ASCs), Psychiatric Hospitals, Rehabilitation Hospitals" },
        { category: "Equipment", services: "Medical Equipment (MRI, PET, CT scanners), Lithotripsy, Radiation Therapy" },
        { category: "Services", services: "Organ Transplantation, Open Heart Surgery, Neonatal Special Care, Substance Abuse Treatment" },
        { category: "Other", services: "Home Health Agencies, Hospice, Capital expenditures exceeding $15 million" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Virginia Department of Health" },
        { label: "Application Fee", value: "Varies" },
        { label: "Review Timeline", value: "90\u2013180 days" },
        { label: "Can Competitors Intervene?", value: "Yes" },
      ],
    },
    marketConcentration: {
      body: "CON laws often lead to consolidated markets, where a few large players dominate. This reduces competition and can lead to higher prices for consumers.",
      dataCards: [
        { value: "Highly Concentrated", label: "Northern Virginia Market", detail: "Northern Virginia hospital market classified as highly concentrated." },
        { value: "Dominant", label: "Sentara in Hampton Roads", detail: "Sentara Health dominates the Hampton Roads market." },
        { value: "17.71%", label: "Top Insurer Market Share", detail: "Top insurer market share in Virginia." },
        { value: "$13B", label: "Revenue of Top System", detail: "Sentara Health system revenue." },
      ],
      marketShare: [
        { name: "Sentara Health", share: "$13B" },
        { name: "Inova Health System", share: "$6.5B" },
        { name: "UVA Health System", share: "$5.6B" },
      ],
    },
    caseLaw: {
      cases: [
        {
          title: "Colon Health Centers v. Virginia \u2014 MRI Machine Denial",
          year: "2015",
          status: "CON Upheld",
          text: "In 2015, a federal court ruled against a physician who challenged the CON law after being denied a certificate to purchase a second MRI machine for his independent practice. The court upheld the state\u2019s right to regulate, showcasing how the law prevents providers from expanding services based on demand.",
          pullQuote: "The court found that the COPN law\u2019s burdens on interstate commerce were not \u2018clearly excessive in relation to the putative local benefits.\u2019",
        },
      ],
    },
    reform: {
      body: "No Meaningful Reform \u2014 Despite numerous attempts, Virginia\u2019s COPN law remains largely intact. Bills to repeal or significantly reform the law have consistently failed in the General Assembly, often due to strong opposition from the hospital lobby.",
      bullets: [
        { label: "CON program since", value: "1973" },
        { label: "Services regulated", value: "19" },
        { label: "Score", value: "100/100 (Most Restrictive)" },
        { label: "Repeal efforts", value: "Have failed" },
      ],
    },
    editorial: {
      text: "Virginia\u2019s Certificate of Public Need (COPN) program is a classic example of a government-sanctioned cartel. Since 1973, it has served to protect established hospital systems from competition, driving up costs and limiting access for patients. The state regulates a staggering 19 services, far more than the national average, creating a bureaucratic minefield for anyone attempting to offer new healthcare options.\n\nLook at the market concentration. In Northern Virginia, Inova Health System acts as a regional powerhouse, while Sentara Health dominates the Hampton Roads area. These systems don\u2019t have to compete on price or quality because the state\u2019s COPN law ensures no new players can threaten their dominance. When a physician can\u2019t even buy a second MRI machine to serve his patients because the state denies his application, it\u2019s clear the system is not designed for the public\u2019s benefit.\n\nThis isn\u2019t a free market; it\u2019s a protection racket. With a score of 100, Virginia\u2019s laws are highly restrictive, creating an environment where incumbents thrive and patients pay the price.",
    },
    citations: "Virginia Department of Health, Centers for Medicare & Medicaid Services, Mercatus Center, Institute for Justice.",
  },

  massachusetts: {
    slug: "massachusetts",
    name: "Massachusetts",
    meta: {
      title: "Massachusetts Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Massachusetts Determination of Need law since 1971. Mass General Brigham $20.6B revenue, 38% market share Eastern MA. 8 ASCs per million vs. 18.7 national average.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Massachusetts",
      subhead: "Massachusetts\u2019s Determination of Need law, in place since 1971, is a state-sanctioned shield for incumbent hospital systems. It regulates a wide array of services, allowing giants like Mass General Brigham to cement their market dominance under the guise of public health.",
    },
    stats: {
      score: 90,
      tier: "Highly Restrictive",
      nationalRank: "40 of 50 \u2014 Bottom 10",
      governor: "Maura Healey",
      governorParty: "Democrat",
      servicesRegulated: "10+",
      yearEnacted: "1971",
      keyMetric1Label: "MGB Market Share (East MA)",
      keyMetric1Value: "38%",
      keyMetric2Label: "Mass General Brigham Revenue",
      keyMetric2Value: "$20.6B",
    },
    scope: {
      body: "The Determination of Need (DoN) program, administered by the Department of Public Health, requires healthcare facilities to obtain state approval for significant capital expenditures, substantial changes in service, and original licenses.",
      services: [
        { category: "Facilities", services: "Hospitals, Clinics, Ambulatory Surgical Centers (ASCs), Nursing Homes, Home Health Agencies, Hospices" },
        { category: "Equipment", services: "Major imaging and treatment equipment (e.g., MRI, PET, CT scanners)" },
        { category: "Other", services: "Substantial capital expenditures, substantial changes in services (including service line changes), original licenses for facilities" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Department of Public Health (DPH) Determination of Need Program" },
        { label: "Application Fee", value: "$500 or 0.2% of project\u2019s Total Value, whichever is greater" },
        { label: "Review Timeline", value: "Varies (30 days for some pathways)" },
        { label: "Can Competitors Intervene?", value: "Yes. Ten Taxpayer Groups can register to object." },
      ],
      additionalNote: "The process allows for intervention by \u2018Ten Taxpayer Groups,\u2019 which can register to submit written comments and request public hearings, effectively giving incumbent providers a formal mechanism to obstruct new competition.",
    },
    marketConcentration: {
      body: "Massachusetts\u2019s Determination of Need law has enabled extreme market consolidation, with Mass General Brigham commanding the lion\u2019s share of the tertiary care market.",
      dataCards: [
        { value: "38%", label: "MGB Market Share", detail: "Mass General Brigham\u2019s share of the tertiary market in Eastern Massachusetts." },
        { value: "44.1%", label: "BCBS MA Market Share", detail: "Blue Cross Blue Shield of Massachusetts\u2019s dominant share of the commercial insurance market." },
        { value: "$20.6B", label: "MGB System Revenue", detail: "Mass General Brigham\u2019s total system revenue." },
      ],
      marketShare: [
        { name: "Mass General Brigham", share: "$20.6B" },
        { name: "Beth Israel Lahey Health", share: "$7.8B" },
        { name: "UMass Memorial Health", share: "$4.16B" },
      ],
      pullQuote: "The state\u2019s own records show that MGB\u2019s expansion could further increase its market share by up to 3.8%. This isn\u2019t about public health; it\u2019s about cementing a monopoly. \u2014 The Rojas Report",
    },
    caseLaw: {
      cases: [
        {
          title: "Bessie M. Burke Memorial Hospital v. DPH \u2014 1972 \u2014 Denial Overturned",
          year: "1972",
          status: "Denial Overturned",
          text: "In 1972, just one year after the CON law was enacted, the Bessie M. Burke Memorial Hospital sought to undertake a major renovation. The Department of Public Health denied the application, arguing that the project was too costly and would still leave the hospital with an outdated facility. The denial was based on the principle of efficient resource allocation. However, the hospital\u2019s supporters wielded their political influence. The state legislature intervened, passing a special act that overrode the DPH\u2019s decision and authorized the renovation. This case set a precedent, demonstrating that the supposedly objective, needs-based CON process could be subverted by political power, undermining its entire purpose.",
          pullQuote: "The state legislature intervened, passing a special act that overrode the DPH\u2019s decision and authorized the renovation.",
        },
      ],
    },
    reform: {
      body: "Massachusetts has amended its CON laws multiple times, but the core structure that favors incumbents remains. Recent changes have tinkered at the edges without addressing the fundamental anti-competitive nature of the system. The state has made several material reforms, most recently in 2017 and 2024\u20132025. The 2025 reform broadened the concept of a \u2018party of record,\u2019 but did not dismantle the core CON framework.",
    },
    editorial: {
      text: "Massachusetts calls it a \u2018Determination of Need,\u2019 but let\u2019s call it what it is: a state-sanctioned protection racket for the incumbent hospital systems. When one system, Mass General Brigham, pulls in over $20 billion in revenue and already controls 38% of the Eastern Massachusetts market, the only \u2018need\u2019 being determined is the need to keep the gravy train rolling for them. They aren\u2019t just participants in the market; they are the market.\n\nThe state\u2019s own records show that MGB\u2019s expansion could further increase its market share by up to 3.8%. This isn\u2019t about public health; it\u2019s about cementing a monopoly. While the state pretends its process is about cost discipline, the real effect is a political chokepoint where organized incumbents can and do block any real competition. The game is rigged, and the patients of Massachusetts are the ones paying the price.",
    },
    citations: "State of Massachusetts Department of Public Health, The Rojas Report analysis.",
  },

  georgia: {
    slug: "georgia",
    name: "Georgia",
    meta: {
      title: "Georgia Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Georgia CON laws since 1979. Albany HHI 7,453 \u2014 Phoebe Putney controls 86% of the market. FTC v. Phoebe Putney ruled monopoly illegal. 11 regulated categories.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Georgia",
      subhead: "Georgia\u2019s CON laws, enacted in 1979, regulate a broad range of healthcare services. This has led to highly concentrated markets, exemplified by the Albany area, where one system, Phoebe Putney, controls 86% of the market.",
    },
    stats: {
      score: 95,
      tier: "Most Restrictive",
      nationalRank: "40 of 50 \u2014 Bottom 10",
      governor: "Brian Kemp",
      governorParty: "Republican",
      servicesRegulated: "11",
      yearEnacted: "1979",
      keyMetric1Label: "Albany Market HHI",
      keyMetric1Value: "7,453",
      keyMetric2Label: "Phoebe Putney Market Share",
      keyMetric2Value: "86%",
    },
    scope: {
      body: "Georgia\u2019s CON program is administered by the Department of Community Health. Competitors are explicitly allowed to participate in opposition meetings to object to new applications.",
      services: [
        { category: "Facilities", services: "Hospitals, destination cancer hospitals, skilled nursing facilities, intermediate care facilities, personal care homes, ambulatory surgical centers, obstetrical facilities, freestanding emergency departments, health maintenance organizations, home health agencies" },
        { category: "Services & Centers", services: "Special care units, diagnostic, treatment, or rehabilitation centers" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Georgia Department of Community Health" },
        { label: "Application Fee", value: "$1,000 to $50,000" },
        { label: "Statutory Review Timeline", value: "120 days" },
        { label: "Actual Review Timeline", value: "~4 months" },
        { label: "Can Competitors Intervene?", value: "Yes, via formal \u2018opposition meetings\u2019" },
      ],
    },
    marketConcentration: {
      body: "Georgia\u2019s CON laws have enabled extreme market concentration, particularly in the Albany area where Phoebe Putney Health System controls the vast majority of acute care services.",
      dataCards: [
        { value: "7,453", label: "Albany Area Market HHI", detail: "An HHI above 2,500 is \u2018highly concentrated.\u2019 7,453 indicates an extreme monopoly.", source: "FTC v. Phoebe Putney" },
        { value: "86%", label: "Phoebe Putney Market Share", detail: "Controls 86% of the acute care hospital market in the six-county Albany area.", source: "U.S. Supreme Court" },
        { value: "17.24%", label: "Top Insurer Market Share", detail: "Top insurer market share in Georgia." },
        { value: "$18.6B+", label: "Top 3 System Revenue", detail: "Top 3 hospital systems (Northside, Piedmont, Wellstar)." },
      ],
      marketShare: [
        { name: "Northside Hospital", share: "36%" },
        { name: "Piedmont Healthcare", share: "34%" },
        { name: "Wellstar Health", share: "30%" },
      ],
      pullQuote: "When a single hospital can acquire a dominant share of the market, it can exercise significant market power, which, in turn, can lead to higher prices for healthcare services. \u2014 U.S. Supreme Court, FTC v. Phoebe Putney Health System, Inc.",
    },
    caseLaw: {
      cases: [
        {
          title: "FTC v. Phoebe Putney Health System, Inc.",
          year: "Decided February 2013 \u2014 U.S. Supreme Court",
          status: "Monopoly Ruled Illegal",
          text: "In 2011, Phoebe Putney Health System, which already owned one of the two hospitals in Albany, Georgia, sought to acquire the second, Palmyra Medical Center. The acquisition was orchestrated through a hospital authority, a public entity, in an attempt to shield the merger from federal antitrust scrutiny using the state-action immunity doctrine.\n\nThe merger would give Phoebe Putney control of 86% of the acute-care hospital services market in the surrounding six-county area. The Federal Trade Commission (FTC) challenged the merger, arguing it would create a monopoly, reduce competition, and lead to higher prices for patients.\n\nThe case went to the U.S. Supreme Court, which unanimously ruled that the state-action immunity did not apply. The Court found that Georgia\u2019s CON law, while regulating hospital expansion, did not clearly articulate a state policy to displace competition with monopoly. The ruling was a major victory for antitrust enforcement in the healthcare sector.",
          pullQuote: "The residents of Albany-Dougherty County and the surrounding area would be better served by a competitive healthcare market. The proposed merger would be a step in the wrong direction. \u2014 Federal Trade Commission Statement",
        },
      ],
    },
    reform: {
      body: "Georgia has amended its CON law multiple times, most recently in 2024, but has not pursued a full repeal.",
      bullets: [
        { label: "CON program in place since", value: "1979" },
        { label: "Categories regulated", value: "11 broad categories" },
        { label: "Score", value: "95/100" },
        { label: "2024 bill (HB 1339)", value: "Revised process and added exemptions" },
        { label: "Albany HHI", value: "7,453" },
      ],
    },
    editorial: {
      text: "Georgia\u2019s Certificate of Need law is a state-sanctioned protection racket, plain and simple. It\u2019s a system where the house always wins, and the house is owned by hospital giants like Northside, Piedmont, and Wellstar. They\u2019re not competing; they\u2019re collaborating to keep the market locked down, and the state\u2019s CON program is their enforcement arm.\n\nThe Phoebe Putney case in Albany is the poster child for this corruption. An 86% market share isn\u2019t a market; it\u2019s a monopoly. The fact that it took the Federal Trade Commission and the Supreme Court to unwind it tells you everything you need to know. The regulators in Atlanta aren\u2019t protecting patients; they\u2019re protecting the profits of the hospital cartel.",
    },
    citations: "Georgia Department of Community Health, U.S. Supreme Court, Federal Trade Commission, state financial disclosures.",
  },

  "north-carolina": {
    slug: "north-carolina",
    name: "North Carolina",
    meta: {
      title: "North Carolina Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "North Carolina CON since 1977. Atrium and Novant control ~85% of Charlotte market. BCBS NC holds 62% of insurance market. 13+ regulated categories.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 North Carolina",
      subhead: "North Carolina\u2019s CON law is a textbook case of regulatory capture. In Charlotte, two hospital systems, Atrium and Novant, control nearly 100% of the market. The state uses its power to pick winners and losers, stifling competition and leaving patients with fewer choices and higher costs.",
    },
    stats: {
      score: 100,
      tier: "Most Restrictive",
      nationalRank: "40 of 50 \u2014 Bottom Tier",
      governor: "Josh Stein",
      governorParty: "Democrat",
      servicesRegulated: "13+",
      yearEnacted: "1977",
      keyMetric1Label: "Charlotte Market Share (2 Systems)",
      keyMetric1Value: "~85%",
      keyMetric2Label: "BCBS NC Market Share",
      keyMetric2Value: "62%",
    },
    scope: {
      body: "North Carolina\u2019s CON program regulates a broad range of healthcare facilities, beds, and equipment, creating significant barriers to entry for new competitors.",
      services: [
        { category: "Facilities", services: "Acute care hospitals, Nursing homes, Psychiatric facilities, Rehabilitation facilities, Hospice facilities, Home health agencies, Ambulatory surgical facilities, Kidney disease treatment centers, Diagnostic centers" },
        { category: "Beds & Rooms", services: "Acute care beds, Operating rooms, Gastrointestinal endoscopy rooms, Nursing home beds, Psychiatric beds, Rehabilitation beds, Hospice beds" },
        { category: "Equipment", services: "Major medical equipment (MRI, CT, PET scanners)" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "NC Dept. of Health and Human Services, Division of Health Service Regulation" },
        { label: "Application Fee", value: "$5,000 to $50,000, based on project cost" },
        { label: "Statutory Review Timeline", value: "90\u2013150 days" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can file a contested case." },
      ],
    },
    marketConcentration: {
      body: "North Carolina\u2019s hospital markets are among the most concentrated in the nation, particularly in the Charlotte metro area.",
      dataCards: [
        { value: "~85%", label: "Charlotte Hospital Market", detail: "Combined hospital market share of Atrium & Novant in Charlotte." },
        { value: "90%", label: "Coastal NC Market", detail: "Novant Health\u2019s estimated market share in Coastal North Carolina." },
        { value: "61.7%", label: "BCBS NC Market Share", detail: "Market share of Blue Cross and Blue Shield of NC." },
        { value: "$23.8B", label: "Top 3 System Revenue", detail: "Combined annual revenue of top 3 hospital systems." },
      ],
      marketShare: [
        { name: "Atrium Health", share: "~50%" },
        { name: "Novant Health", share: "~35%" },
        { name: "Other", share: "~15%" },
      ],
      pullQuote: "The CON law protects dominant hospitals from competition, and that harms patients. \u2014 Dr. Gajendra Singh, whose application for a new hospital was blocked",
    },
    caseLaw: {
      cases: [
        {
          title: "UNC Hospitals PET Scanner Application",
          year: "2021",
          status: "Denied",
          text: "In 2021, both UNC Hospitals and Duke University Health System submitted competing applications to acquire a new PET scanner. The state\u2019s healthcare planning agency determined that only one scanner was needed in the service area.\n\nInstead of allowing both qualified providers to offer the service and compete on quality and price, the state regulators engaged in central planning. They evaluated both proposals and ultimately decided that Duke\u2019s application was a \u2018more effective alternative.\u2019\n\nAs a result, UNC\u2019s application was denied. This case is a stark illustration of how CON laws replace market competition with government decision-making.",
          pullQuote: "The Agency\u2019s decision to approve the Duke application and disapprove the UNC application is supported by substantial evidence... UNC\u2019s argument that the Agency is not authorized to comparatively review competing applications is without merit. \u2014 North Carolina Court of Appeals, 2023",
        },
      ],
    },
    reform: {
      body: "North Carolina has not pursued meaningful CON reform. The law remains one of the most restrictive in the nation.",
      bullets: [
        { label: "CON program since", value: "1977" },
        { label: "Categories regulated", value: "13+" },
        { label: "Score", value: "100/100 (Most Restrictive)" },
        { label: "Reform status", value: "No meaningful reform" },
      ],
    },
    editorial: {
      text: "North Carolina\u2019s CON law is a textbook case of regulatory capture, a protectionist racket where the state acts as a bouncer for entrenched hospital systems. In Charlotte, Atrium and Novant have carved up the market, controlling nearly the entire hospital landscape. This isn\u2019t a free market; it\u2019s a duopoly enforced by state law, and patients are the ones who pay the price in the form of higher costs and fewer choices.\n\nThe state\u2019s own actions prove the point. When both UNC and Duke, two of the most respected health systems in the country, wanted to offer a new PET scanner, the state didn\u2019t let them compete. Instead, regulators played kingmaker, deciding Duke\u2019s application was \u2018more effective\u2019 and denying UNC\u2019s.\n\nWith Blue Cross and Blue Shield of North Carolina controlling over 60% of the insurance market, the entire system is a closed loop of consolidated power.",
    },
    citations: "State Dept. of Health and Human Services, public court records, Mercatus Center, NCSL.",
  },

  "new-york": {
    slug: "new-york",
    name: "New York",
    meta: {
      title: "New York Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "New York CON since 1964 \u2014 oldest in the nation. Northwell $18.6B, NYU Langone $14.2B, NewYork-Presbyterian $13.2B. Top 3 systems $46B+ revenue. Kaleida controls 44.2% of Erie County.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 New York",
      subhead: "New York\u2019s CON program, the oldest in the nation, has been in place since 1964. It regulates a broad range of services, creating significant barriers to entry. In major markets like Long Island, incumbent systems like Northwell Health face little meaningful competition.",
    },
    stats: {
      score: 65,
      tier: "Restrictive",
      nationalRank: "42 of 50 \u2014 Bottom 10",
      governor: "Kathy Hochul",
      governorParty: "Democrat",
      servicesRegulated: "8+",
      yearEnacted: "1964",
      keyMetric1Label: "Kaleida Health Market Share (Erie Co.)",
      keyMetric1Value: "44.2%",
      keyMetric2Label: "Northwell Health Market Share (Long Island)",
      keyMetric2Value: "31.1%",
    },
    scope: {
      body: "New York\u2019s CON program regulates a broad range of healthcare services and facilities, creating significant barriers to entry for new providers.",
      services: [
        { category: "Facilities", services: "Hospitals, Nursing Homes, Diagnostic and Treatment Centers, Ambulatory Surgery Centers" },
        { category: "Home-Based", services: "Home-Care and Hospice Establishment" },
        { category: "Equipment", services: "Major Medical Equipment" },
        { category: "Operations", services: "Service-Line Additions or Eliminations, Changes in Ownership" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "NY State Dept. of Health & PHHPC" },
        { label: "Application Fee", value: "$2,000 base + % of capital value" },
        { label: "Review Timeline", value: "90\u2013120 days (statutory), often longer" },
        { label: "Can Competitors Intervene?", value: "Yes, via public hearings and comments" },
      ],
    },
    marketConcentration: {
      body: "New York\u2019s hospital markets are dominated by massive health systems with tens of billions in revenue, shielded from meaningful competition by the state\u2019s CON program.",
      dataCards: [
        { value: "31.1%", label: "Long Island Market Share", detail: "Northwell Health dominant, more than double its next competitor." },
        { value: "44.2%", label: "Erie County Market Share", detail: "Kaleida Health controls nearly half of inpatient market." },
        { value: "$46B+", label: "Top 3 System Revenue", detail: "Northwell, NYU Langone, NY-Presbyterian." },
        { value: "28%", label: "Top Insurer Share", detail: "UnitedHealth Group." },
      ],
      marketShare: [
        { name: "Northwell Health", share: "$18.6B" },
        { name: "NYU Langone Health", share: "$14.2B" },
        { name: "NewYork-Presbyterian", share: "$13.2B" },
      ],
    },
    caseLaw: {
      cases: [
        {
          title: "Manhattan ASC Application \u2014 2013 \u2014 CON Disapproved",
          year: "2013",
          status: "CON Disapproved",
          text: "In 2013, an application was filed to establish a new multispecialty ambulatory surgery center (ASC) in Manhattan. The goal was to provide a lower-cost, more convenient option for outpatient surgical procedures.\n\nThe state\u2019s Public Health and Health Planning Council (PHHPC) committee, which reviews CON applications, proposed to disapprove the application. The official reason given was a purported \u2018lack of public need.\u2019\n\nThis case is a clear example of how New York\u2019s CON process is used to protect existing hospitals from competition. By denying the ASC, the state ensured that patients would continue to have fewer choices and be forced to seek care in higher-cost hospital settings, benefiting the incumbent systems.",
          pullQuote: "The official reason given was a purported \u2018lack of public need.\u2019 The real effect: patients continue to pay hospital prices for outpatient procedures.",
        },
      ],
    },
    reform: {
      body: "New York has not pursued meaningful reform of its CON program, the oldest in the nation.",
      bullets: [
        { label: "CON program since", value: "1964 (oldest in the nation)" },
        { label: "Service categories regulated", value: "8+" },
        { label: "Score", value: "65/100 (Restrictive)" },
        { label: "Reform status", value: "No meaningful reform" },
      ],
    },
    editorial: {
      text: "New York didn\u2019t invent the CON game by accident. They perfected it. As the nation\u2019s oldest CON regime, New York has had over half a century to fine-tune its protection racket, ensuring that incumbent systems like Northwell Health, NYU Langone, and NewYork-Presbyterian face as little competition as possible.\n\nLook at the numbers. Northwell Health pulls in $18.6 billion in revenue while holding a 31.1% market share on Long Island, more than double its nearest competitor. In Western New York, Kaleida Health has a staggering 44.15% of the market in Erie County. This isn\u2019t a free market; it\u2019s a series of local monopolies, all blessed by the state.\n\nThe only need being served is the incumbents\u2019 need to keep their moats wide and their prices high.",
    },
    citations: "New York State Department of Health, PHHPC, CMS, Cicero Institute.",
  },

  alabama: {
    slug: "alabama",
    name: "Alabama",
    meta: {
      title: "Alabama Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Alabama CON since 1979. Decatur HHI 10,000 \u2014 literal monopoly. Huntsville Metro HHI 7,371. BCBS Alabama 84% market share. April 2024: freestanding ED denied.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Alabama",
      subhead: "Alabama\u2019s CON laws, enacted in 1979, regulate 7 different healthcare services. The state\u2019s healthcare landscape is marked by extreme market concentration, with Decatur experiencing a literal monopoly (HHI 10,000) and a single insurer controlling 84% of the commercial market.",
    },
    stats: {
      score: 80,
      tier: "Highly Restrictive",
      nationalRank: "38 of 50 \u2014 Bottom Tier",
      governor: "Kay Ivey",
      governorParty: "Republican",
      servicesRegulated: "7",
      yearEnacted: "1979",
      keyMetric1Label: "Decatur Market HHI",
      keyMetric1Value: "10,000",
      keyMetric2Label: "Top Insurer Market Share",
      keyMetric2Value: "84%",
    },
    scope: {
      body: "Alabama\u2019s CON program regulates 7 healthcare services, creating barriers to entry for new competitors.",
      services: [
        { category: "Facilities & Services", services: "Hospitals, Ambulatory Surgical Centers (ASCs), Nursing Homes, Home Health Agencies, Hospice, End-Stage Renal Disease (ESRD) Treatment Centers, Community Mental Health Centers" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "State Health Planning and Development Agency" },
        { label: "Application Fee", value: "$1,500 - $12,000" },
        { label: "Statutory Review Timeline", value: "90 days" },
        { label: "Actual Review Timeline", value: "6\u201312 months" },
        { label: "Can Competitors Intervene?", value: "Yes. Anyone with a \u2018viable interest\u2019 can contest." },
      ],
    },
    marketConcentration: {
      body: "Alabama\u2019s healthcare markets are marked by extreme concentration, particularly in the Decatur and Huntsville metro areas.",
      dataCards: [
        { value: "10,000", label: "Decatur Metro HHI", detail: "Monopoly Market \u2014 Huntsville Hospital Health System." },
        { value: "7,371", label: "Huntsville Metro HHI", detail: "Highly Concentrated." },
        { value: "84%", label: "Statewide BCBS AL Market Share", detail: "Dominant Insurer." },
        { value: "Viva Health", label: "Provider-Sponsored Plan", detail: "Plan owned by UAB \u2014 Vertical Integration." },
      ],
      marketShare: [
        { name: "UAB Health System", share: "$3.5B" },
        { name: "Huntsville Hospital", share: "$2.9B" },
        { name: "Infirmary Health", share: "N/A" },
      ],
      pullQuote: "In Decatur, the hospital market isn\u2019t just \u2018concentrated\u2019 \u2014 it\u2019s a literal monopoly with an HHI of 10,000, all owned by Huntsville Hospital Health System. \u2014 The Rojas Report Analysis",
    },
    caseLaw: {
      cases: [
        {
          title: "South Baldwin RMC Freestanding Emergency Department Denial",
          year: "April 2024",
          status: "Denied",
          text: "In April 2024, South Baldwin Regional Medical Center sought to build a new freestanding emergency department in Loxley to serve a rapidly growing community. The application was contested by incumbent providers in the area.\n\nAn administrative law judge initially recommended rejecting the application. The CON Review Board ultimately upheld this decision, formally denying the certificate of need. The denial prevents the construction of a new emergency facility that could have provided more accessible care and competition in Baldwin County.",
          pullQuote: "The board upheld an administrative law judge\u2019s recommendation to reject the application, which was contested by incumbents. \u2014 Alabama CON Review Board Decision, 2024",
        },
      ],
    },
    reform: {
      body: "Alabama\u2019s CON law remains firmly in place. A 1999 moratorium on new CONs and a failed 2026 repeal bill (SB82) highlight the political inertia protecting the system.",
      bullets: [
        { label: "Current Status", value: "No Meaningful Reform" },
        { label: "CON program since", value: "1979" },
        { label: "Services regulated", value: "7" },
        { label: "Score", value: "80/100 (Highly Restrictive)" },
      ],
      evidence: [
        { metric: "CON states have fewer hospitals per capita", result: "Especially in rural areas", source: "Mercatus Center" },
        { metric: "CON laws associated with higher mortality rates", result: "For certain conditions", source: "NBER Working Paper" },
        { metric: "Repealing CON laws does not decrease charity care", result: "No reduction observed", source: "Journal of Health Economics" },
      ],
    },
    editorial: {
      text: "Alabama\u2019s Certificate of Need law is a state-sanctioned monopoly machine, plain and simple. Since 1979, it has served one purpose: to protect incumbent hospital systems from competition at the expense of patients and employers. Look at the numbers. In Decatur, the hospital market isn\u2019t just \u2018concentrated\u2019 \u2014 it\u2019s a literal monopoly with an HHI of 10,000, all owned by Huntsville Hospital Health System. Meanwhile, Blue Cross and Blue Shield of Alabama controls a staggering 84% of the commercial insurance market, leaving consumers with virtually no choice.\n\nThe April 2024 denial of a new emergency department in Loxley isn\u2019t about community health; it\u2019s about incumbents pulling the ladder up behind them.",
    },
    citations: "State agencies, Mercatus Center, NBER, public financial disclosures.",
  },

  mississippi: {
    slug: "mississippi",
    name: "Mississippi",
    meta: {
      title: "Mississippi Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Mississippi CON since 1979. 40-year moratorium on home health agencies struck down by federal court. Jackson market: UMMC 45%, MS Baptist 35%. BCBS MS 50% market share.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Mississippi",
      subhead: "Mississippi\u2019s CON laws have been in place since 1979. They regulate 7 different services. For 40 years, the state enforced a moratorium on new home health agencies, a policy so blatantly anti-competitive it took a federal court to strike it down.",
    },
    stats: {
      score: 90,
      tier: "Most Restrictive",
      nationalRank: "42 of 50 \u2014 Bottom 10",
      governor: "Tate Reeves",
      governorParty: "Republican",
      servicesRegulated: "7",
      yearEnacted: "1979",
      keyMetric1Label: "Home Health Moratorium",
      keyMetric1Value: "40 Years",
      keyMetric2Label: "BCBS Market Share",
      keyMetric2Value: "50%",
    },
    scope: {
      body: "Mississippi\u2019s CON program regulates 7 healthcare service categories, with the state historically enforcing one of the most anti-competitive moratoriums in the nation.",
      services: [
        { category: "Facilities", services: "Hospitals, Nursing Homes, Ambulatory Surgical Facilities, Dialysis Centers, Home Health Agencies, Pediatric Skilled Nursing, Rehabilitation Facilities" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Mississippi State Department of Health" },
        { label: "Application Fee", value: "0.5% of capital expenditure (min $500, max $25,000)" },
        { label: "Statutory Review Timeline", value: "90 days" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can block new entrants." },
      ],
    },
    marketConcentration: {
      body: "Mississippi\u2019s hospital markets are dominated by a small number of systems, particularly in the Jackson metro area.",
      dataCards: [
        { value: "~45%", label: "UMMC Jackson Market Share", detail: "University of Mississippi Medical Center dominates Jackson." },
        { value: "~35%", label: "MS Baptist Market Share", detail: "Mississippi Baptist Medical Center holds the second-largest share." },
        { value: "50%", label: "BCBS MS Market Share", detail: "Blue Cross Blue Shield of Mississippi controls half the commercial market." },
      ],
      marketShare: [
        { name: "UMMC", share: "~45%" },
        { name: "MS Baptist Medical Center", share: "~35%" },
        { name: "Other", share: "~20%" },
      ],
    },
    caseLaw: {
      cases: [
        {
          title: "St. Dominic\u2019s Hospital v. MS Dept. of Health",
          year: "2010",
          status: "CON Denied",
          text: "In 2010, St. Dominic\u2019s Hospital sought to build a new $121 million hospital in Madison County, one of the fastest-growing and wealthiest counties in the state. The proposed facility would have brought new services and competition to an area dominated by existing providers.\n\nHowever, an incumbent provider objected, and the Mississippi State Department of Health ultimately denied the Certificate of Need. The state deemed the new hospital an \u2018unnecessary\u2019 duplication of services, prioritizing the financial stability of the existing hospital over the potential benefits of competition and increased patient choice.",
          pullQuote: "The state deemed the new hospital an \u2018unnecessary\u2019 duplication of services, prioritizing incumbent financial stability over patient choice.",
        },
      ],
    },
    reform: {
      body: "Repeated legislative proposals to narrow CON have failed. A 40-year moratorium on home health agencies was only lifted by federal court order.",
      bullets: [
        { label: "Current Status", value: "No Substantive Reform" },
        { label: "CON program since", value: "1979" },
        { label: "Services regulated", value: "7" },
        { label: "Score", value: "90/100 (Most Restrictive)" },
      ],
    },
    editorial: {
      text: "Mississippi\u2019s CON law is a textbook protection racket. For 40 years, the state enforced a moratorium on new home health agencies, a policy so blatantly anti-competitive it took a federal court to strike it down. This wasn\u2019t about public need; it was about protecting the profits of existing players.\n\nIn Jackson, University of Mississippi Medical Center and Mississippi Baptist have carved up the market, while Blue Cross Blue Shield of Mississippi controls 50% of the commercial insurance market. When St. Dominic\u2019s tried to build a new hospital, the state denied their application, calling it \u2018unnecessary\u2019 \u2014 a convenient excuse to maintain the status quo.",
    },
    citations: "The Rojas Report proprietary data extraction, state health departments, public records.",
  },

  "new-jersey": {
    slug: "new-jersey",
    name: "New Jersey",
    meta: {
      title: "New Jersey Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "New Jersey CON since 1971. Expedited reviews average 213 business days. Horizon BCBSNJ 71% market share. RWJBarnabas $9.57B, Hackensack Meridian $8.92B.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 New Jersey",
      subhead: "New Jersey\u2019s CON laws, enacted in 1971, create significant barriers to entry. The state\u2019s own data reveals that even \u2018expedited\u2019 reviews suffer from extreme delays, protecting large incumbent systems from competition and limiting patient choice.",
    },
    stats: {
      score: 100,
      tier: "Most Restrictive",
      nationalRank: "33 of 50",
      governor: "Phil Murphy",
      governorParty: "Democrat",
      servicesRegulated: "213",
      yearEnacted: "1971",
      keyMetric1Label: "Top Insurer Market Share",
      keyMetric1Value: "71%",
      keyMetric2Label: "Revenue of Top 2 Systems",
      keyMetric2Value: "$18.5B",
    },
    scope: {
      body: "New Jersey\u2019s CON program creates significant barriers to entry for new healthcare providers, particularly in the most profitable service lines.",
      services: [
        { category: "Facilities", services: "New general hospitals, Long-term care facilities, Rehabilitation hospitals" },
        { category: "Specialized Care", services: "Maternal and child health, Pediatric intensive care, Psychiatric beds, Organ transplantation services" },
        { category: "Community Services", services: "Home health agencies" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "New Jersey Department of Health" },
        { label: "Application Fee", value: "$7,500, plus 0.25% of project cost over $1M" },
        { label: "Actual Review Timeline", value: "145\u2013260 business days" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can object, submit comments, and litigate." },
      ],
      additionalNote: "The process is notoriously slow. State auditors found that even \u2018expedited\u2019 reviews take an average of 213 business days, far exceeding the statutory timeline of 90\u2013180 days.",
    },
    marketConcentration: {
      body: "New Jersey\u2019s healthcare market is dominated by two massive hospital systems and a single insurer.",
      dataCards: [
        { value: "71%", label: "Horizon BCBSNJ Market Share", detail: "Horizon Blue Cross Blue Shield dominates the insurance market." },
        { value: "65%", label: "Bergen County Hospital Share", detail: "Combined share of Hackensack Meridian and Englewood in Bergen County." },
        { value: "$18.5B", label: "Top 2 System Revenue", detail: "Combined revenue of top two systems." },
        { value: "1998", label: "Last Major Reform", detail: "No meaningful reform in over 25 years." },
      ],
      marketShare: [
        { name: "RWJBarnabas Health", share: "$9.57B" },
        { name: "Hackensack Meridian Health", share: "$8.92B" },
      ],
      pullQuote: "Braven Health, a Medicare Advantage plan, is a joint venture between Horizon BCBSNJ, Hackensack Meridian Health, and RWJBarnabas Health \u2014 the state\u2019s dominant insurer and its two largest hospital systems.",
    },
    caseLaw: {
      cases: [
        {
          title: "Newton Medical Center Psychiatric Beds \u2014 2020 \u2014 Extension Denied",
          year: "2020",
          status: "Extension Denied",
          text: "In a striking example of bureaucratic obstruction, the New Jersey Department of Health denied an extension for a previously approved Certificate of Need for Newton Medical Center to add 9 new psychiatric beds. The initial CON had been granted, acknowledging the need for expanded mental health services in the community.\n\nHowever, when the hospital required an extension to complete the project, the state reversed course. The Department cited a \u2018lack of progress\u2019 and \u2018changing capital priorities\u2019 as its reasons for the denial. This decision effectively killed the project, preventing the addition of crucial mental health capacity.",
          pullQuote: "The state reversed course on a previously approved project, citing \u2018lack of progress\u2019 \u2014 effectively killing 9 new psychiatric beds.",
        },
      ],
    },
    reform: {
      body: "New Jersey reformed its CON law in 1998, but the changes were superficial, leaving the core anti-competitive structure in place for the most profitable healthcare services.",
      evidence: [
        { metric: "Extreme Delays", result: "Average of 213 business days for an \u2018expedited\u2019 review discourages new entrants.", source: "State auditors" },
        { metric: "Market Concentration", result: "Two hospital systems dominate the state, one insurer controls 71% of market.", source: "Public filings" },
        { metric: "Incumbent Protection", result: "State denied extension for previously approved psychiatric beds.", source: "NJ DOH" },
      ],
    },
    editorial: {
      text: "New Jersey\u2019s Certificate of Need law is a masterclass in managed competition, where the state doesn\u2019t eliminate the racket, it just picks the winners. While they carved out exemptions for politically favored services years ago, the core system remains a fortress for the giants. RWJBarnabas Health and Hackensack Meridian Health, pulling in a combined $18.5 billion, don\u2019t have to worry about real competition in their most profitable service lines.\n\nThe most damning evidence? The process itself. They call it \u2018expedited\u2019 review, but the state\u2019s own auditors found it takes an average of 213 business days \u2014 more than double the legal timeline.",
    },
    citations: "State Departments of Health, Mercatus Center, independent research.",
  },

  illinois: {
    slug: "illinois",
    name: "Illinois",
    meta: {
      title: "Illinois Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Illinois Health Facilities Planning Act since 1974. BCBS controls 97% of HMO market. CON sunset date December 31, 2029. CommonSpirit $30.6B, Northwestern $6.14B, Advocate $5.44B.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Illinois",
      subhead: "Illinois calls it the Health Facilities Planning Act. It should be called the Incumbent Protection Racket Act. One insurer controls 97% of the HMO market. The state\u2019s CON law is the moat that protects this castle, ensuring no new competition can threaten the cozy arrangement between dominant insurers and hospital systems.",
    },
    stats: {
      score: 65,
      tier: "Restrictive",
      nationalRank: "35 of 50 \u2014 Bottom Half",
      governor: "JB Pritzker",
      governorParty: "Democrat",
      servicesRegulated: "6+",
      yearEnacted: "1974",
      keyMetric1Label: "BCBS HMO Market Share",
      keyMetric1Value: "97%",
      keyMetric2Label: "Sunset Date",
      keyMetric2Value: "2029",
    },
    scope: {
      body: "Illinois\u2019s Health Facilities Planning Act regulates a range of healthcare services, with a unique sunset clause that could end the program in 2029.",
      services: [
        { category: "Facilities", services: "Hospitals, Ambulatory Surgical Centers, Freestanding Emergency Centers, Birthing Centers" },
        { category: "Long-Term Care", services: "Nursing Homes, Long-Term Care Facilities" },
        { category: "Specialty", services: "Dialysis Centers" },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Health Facilities and Services Review Board (HFSRB)" },
        { label: "Application Fee", value: "$5,000 or 0.22% of project cost (up to $150,000)" },
        { label: "Statutory Review Timeline", value: "60 days" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can protest applications." },
        { label: "Sunset Clause", value: "Law expires December 31, 2029 unless renewed" },
      ],
    },
    marketConcentration: {
      body: "Illinois\u2019s healthcare market is dominated by massive systems and a single insurer with near-total HMO market control.",
      dataCards: [
        { value: "97%", label: "BCBS HMO Market Share", detail: "Blue Cross Blue Shield of Illinois controls virtually the entire HMO market." },
        { value: "$30.6B", label: "CommonSpirit Revenue", detail: "CommonSpirit Health\u2019s total system revenue." },
        { value: "$6.14B", label: "Northwestern Revenue", detail: "Northwestern Medicine\u2019s total system revenue." },
        { value: "$5.44B", label: "Advocate Revenue", detail: "Advocate Health Care\u2019s total system revenue." },
      ],
      marketShare: [
        { name: "CommonSpirit Health", share: "$30.6B" },
        { name: "Northwestern Medicine", share: "$6.14B" },
        { name: "Advocate Health Care", share: "$5.44B" },
      ],
      pullQuote: "When one company controls 97% of the HMO market, you don\u2019t have a market; you have a monopoly. \u2014 The Rojas Report analysis",
    },
    caseLaw: {
      cases: [
        {
          title: "Edward Hospital \u2014 Plainfield Facility Denial",
          year: "2009",
          status: "CON Denied",
          text: "In 2009, Edward Hospital applied to build a new hospital in Plainfield, a rapidly growing suburb west of Chicago. The community was underserved, and the hospital argued that a new facility was needed to meet growing demand.\n\nThe Health Facilities and Services Review Board denied the application. The hospital\u2019s CEO alleged the denial was retaliatory after she exposed a kickback scheme within the review process. Despite the allegations, the board formally rejected the CON, leaving the community without the facility it needed.",
          pullQuote: "The denial wasn\u2019t about community need. It was about protecting the status quo.",
        },
      ],
    },
    reform: {
      body: "Illinois\u2019s CON law includes a sunset clause that could end the program on December 31, 2029. Whether the legislature allows the sunset to happen remains an open question.",
      bullets: [
        { label: "CON program since", value: "1974" },
        { label: "Services regulated", value: "6+" },
        { label: "Score", value: "65/100 (Restrictive)" },
        { label: "Law sunsets", value: "December 31, 2029" },
        { label: "BCBS HMO market share", value: "97%" },
        { label: "Incumbent protest rights", value: "Remain active" },
      ],
      reformedStates: [
        "Indiana repealed CON in 1999 \u2014 prices dropped",
        "Ohio repealed CON \u2014 more ASCs opened",
        "Pennsylvania never had CON \u2014 competitive market",
        "Texas repealed CON \u2014 no quality decline",
        "New Hampshire repealed CON in 2016",
        "FTC & DOJ: CON laws reduce supply, raise costs",
      ],
    },
    editorial: {
      text: "In Illinois, they call it the Health Facilities Planning Act. It should be called the \u2018Incumbent Protection Racket Act.\u2019 When one company, Blue Cross/Blue Shield of Illinois, controls 97% of the HMO market, you don\u2019t have a market; you have a monopoly. The state\u2019s CON law is the moat that protects this castle, ensuring no new competition can threaten the cozy arrangement between the dominant insurers and hospital systems.\n\nLook at the players: CommonSpirit Health, Northwestern Medicine, and Advocate Health Care are not just healthcare providers; they are titans of a protected industry, shielded from competition by a regulatory board that has the power to deny new entrants.\n\nThe law may be set to expire in 2029, but until then, it\u2019s business as usual for the Illinois healthcare cartel. The question is whether the legislature will let the sunset happen \u2014 or whether the incumbents will spend enough to keep the lights on.",
    },
    citations: "Illinois Health Facilities and Services Review Board, CMS, FTC, AHA, Cicero Institute.",
  },

  florida: {
    slug: "florida",
    name: "Florida",
    meta: {
      title: "Florida Certificate of Need Laws \u2014 CON Investigation | Rojas Report",
      description: "Florida partially repealed CON in 2019 for hospitals. Nursing home and hospice CON remains. 2018: court upheld Sarasota hospice monopoly. AdventHealth $17.3B. BCBSFL 36% market share.",
    },
    hero: {
      h1: "Certificate of Need Laws \u2014 Florida",
      subhead: "Florida partially repealed its CON laws in 2019, eliminating them for general hospitals. However, CON requirements remain for nursing homes, hospices, and intermediate care facilities, protecting incumbent providers in the post-acute care sector.",
    },
    stats: {
      score: 5,
      tier: "Limited",
      nationalRank: "12 of 50 \u2014 Partially Repealed",
      governor: "Ron DeSantis",
      governorParty: "Republican",
      servicesRegulated: "3",
      yearEnacted: "2019 (partially repealed)",
      keyMetric1Label: "AdventHealth Revenue",
      keyMetric1Value: "$17.3B",
      keyMetric2Label: "BCBSFL Market Share",
      keyMetric2Value: "36%",
    },
    scope: {
      body: "Florida\u2019s CON requirements now apply only to a limited set of post-acute care services after the 2019 and 2021 reforms.",
      services: [
        { category: "Facilities", services: "Nursing homes (community skilled nursing facilities), hospice programs (including freestanding inpatient hospices), and intermediate care facilities for the developmentally disabled (ICF/DD)" },
        { category: "Exemptions", services: "General hospitals, specialty hospitals, ambulatory surgical centers, and most other healthcare facilities are exempt as of 2019/2021 reforms." },
      ],
      applicationProcess: [
        { label: "Reviewing Agency", value: "Agency for Health Care Administration (AHCA)" },
        { label: "Application Fee", value: "$10,000 base + 1.5% of expenditure (capped at $50,000)" },
        { label: "Review Timeline (Actual)", value: "3\u20135 months" },
        { label: "Can Competitors Intervene?", value: "Yes. Incumbents can block new entrants." },
      ],
    },
    marketConcentration: {
      body: "Despite partial repeal, Florida\u2019s hospital market remains concentrated in key metros, and hospice markets remain protected.",
      dataCards: [
        { value: "$17.3B", label: "AdventHealth Revenue", detail: "AdventHealth dominates Central Florida." },
        { value: "Duopoly", label: "Orlando Market", detail: "AdventHealth and Orlando Health dominate the Orlando market." },
        { value: "36%", label: "Top Insurer Share", detail: "Florida Blue (BCBS) market share." },
        { value: "Protected", label: "Hospice Monopoly", detail: "Courts upheld a hospice monopoly in Sarasota." },
      ],
      marketShare: [
        { name: "AdventHealth", share: "45%" },
        { name: "Orlando Health", share: "35%" },
        { name: "HCA Healthcare", share: "15%" },
        { name: "Others", share: "5%" },
      ],
      pullQuote: "By repealing most of its CON law, Florida took a significant step toward a more competitive hospital market. However, by leaving protections for nursing homes and hospices, the state continues to shield some of the most profitable sectors from competition. \u2014 The Rojas Report Analysis",
    },
    caseLaw: {
      cases: [
        {
          title: "Sarasota County Hospice Denial",
          year: "Decided 2018",
          status: "CON Denial Upheld",
          text: "In 2018, a court upheld the Agency for Health Care Administration\u2019s (AHCA) denial of a CON for a new hospice provider in Sarasota County. At the time, the county was served by a single monopoly hospice provider.\n\nThe applicant argued that introducing competition would benefit the community. However, the court ruled that the applicant failed to demonstrate sufficient \u2018unmet demand\u2019 under the state\u2019s formula. The court explicitly stated that ending a monopoly was not, by itself, a sufficient reason to approve a new competitor.\n\nThis case highlights the core flaw of CON laws: they prioritize the financial stability of existing providers over the benefits of market competition. The state actively defended the incumbent\u2019s monopoly, forcing residents to rely on a single provider for end-of-life care.",
          pullQuote: "The purpose of the certificate of need law is not to protect existing providers from competition, but that is its practical effect. \u2014 Florida Court of Appeals, paraphrased",
        },
      ],
    },
    reform: {
      body: "Florida has made significant progress on CON reform, but the job remains unfinished for post-acute care.",
      bullets: [
        { label: "CON for hospitals repealed", value: "2019" },
        { label: "CON for specialty hospitals repealed", value: "2021" },
        { label: "CON remains for", value: "Nursing homes & hospices" },
        { label: "Score", value: "5/100 (Mostly Free)" },
      ],
    },
    editorial: {
      text: "Florida politicians love to talk about freedom and free markets, but their CON laws for post-acute care tell a different story. While they wisely deregulated hospitals, they left the protection racket in place for nursing homes and hospices, ensuring local monopolies can print money without fear of competition. It\u2019s a gift to the incumbents, paid for by seniors and their families.\n\nLook no further than Sarasota County, where the state explicitly defended a government-run hospice monopoly. A court decided that even though one provider had the entire market locked up, a new competitor couldn\u2019t enter because they failed to prove \u2018unmet need.\u2019 This is how the game is rigged.\n\nFlorida\u2019s reform was a job half-done. True healthcare freedom means ending all CON laws and letting competition, not government protection, drive value for patients.",
    },
    citations: "Cicero Institute, NASHP, AHCA, KFF, company financial reports.",
  },
};

export function getStatePage(slug: string): StatePage | undefined {
  return statePages[slug];
}

export function getAllStateSlugs(): string[] {
  return Object.keys(statePages);
}

export default statePages;
