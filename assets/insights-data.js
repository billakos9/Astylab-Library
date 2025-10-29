/* Astylab — Insights Data (Yota–Giannis + examples)
   This file defines the global INSIGHTS array used by /insights.html and SDG pages.
   Each insight may include: id, slug, sdg, sdgs, title, tags, excerpt, link (primary source), sources[], body (optional HTML).
*/

const INSIGHTS = [
  // ---- Example insights removed per request ----

  // ---- Yota–Giannis insights (SDG 3) ----
  {
    id: "home-modifications-cut-falls",
    slug: "home-modifications-cut-falls",
    title: "Home modifications can cut elderly falls by ~39%",
    sdg: 3,
    sdgs: [3],
    tags: ["Aging","Falls Prevention","Home Safety","Greece"],
    excerpt: "Retrofitting bathrooms, improving lighting, and non-slip floors can reduce falls by nearly 40% for seniors living at home.",
    link: "https://prosvasimotita.minscfa.gov.gr/",
    sources: [
      "https://prosvasimotita.minscfa.gov.gr/",
      "http://www.tzaneio.gr/wp-content/uploads/epistimonika_xronika/p13-3-5.pdf",
      "https://www.cdc.gov/falls/data-research/facts-stats/index.html"
    ]
  },
  {
    id: "exercise-lowers-fall-risk",
    slug: "exercise-lowers-fall-risk",
    title: "Exercise (≥150 min/week) lowers fall risk by ~23%",
    sdg: 3,
    sdgs: [3],
    tags: ["Aging","Physical Activity","Prevention"],
    excerpt: "Regular strength and balance training is linked with ~23% lower risk of falls among older adults.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10360303/",
    sources: [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10360303/",
      "https://www.oslomet.no/en/research/featured-research/exercise-thirties"
    ]
  },
  {
    id: "falls-economic-burden-greece",
    slug: "falls-economic-burden-greece",
    title: "Falls impose >€1B annual cost in Greece",
    sdg: 3,
    sdgs: [3],
    tags: ["Health System","Economics","Greece"],
    excerpt: "Fall injuries among the elderly cost the health system over €1B per year—roughly 10% of public health spending.",
    link: "https://www.statistics.gr/documents/20181/7362cdf6-c0d0-ffd3-d27d-c042ddc4cd71",
    sources: [
      "https://www.statistics.gr/documents/20181/7362cdf6-c0d0-ffd3-d27d-c042ddc4cd71",
      "https://www.statistics.gr/el/statistics/-/publication/SPO18/-",
      "https://www.kathimerini.gr/life/health/1014962/ptoseis-ilikiomenon-mia-ypoyli-nosos/"
    ]
  },
  {
    id: "indoor-falls-majority",
    slug: "indoor-falls-majority",
    title: "Indoors are deadlier than streets for seniors",
    sdg: 3,
    sdgs: [3],
    tags: ["Home Safety","Elderly","Risk"],
    excerpt: "50–60% of falls occur inside the home—especially bathrooms and kitchens—where surfaces are slippery and lighting is poor.",
    link: "https://www.neurocenter.gr/syxnes-ptwseis-se-hlikiwmenous.html",
    sources: [
      "https://www.neurocenter.gr/syxnes-ptwseis-se-hlikiwmenous.html",
      "https://www.sosiatroi.gr/falls-of-elderly-ptwseis-ilikiwmenwn/",
      "https://www.worldlifeexpectancy.com/greece-falls"
    ]
  },

  // ---- Yota–Giannis insights (SDG 10) ----
  {
    id: "retirement-social-participation",
    slug: "retirement-social-participation",
    title: "Retirement can shrink income and social participation",
    sdg: 10,
    sdgs: [10],
    tags: ["Inclusion","Poverty Risk","Greece"],
    excerpt: "Elderly Greeks often lose income and identity after retirement, increasing isolation and dependence on family.",
    link: "https://www.age-platform.eu/barometer-2023/greece/",
    sources: [
      "https://www.age-platform.eu/barometer-2023/greece/",
      "https://www.who.int/news-room/fact-sheets/detail/mental-health-of-older-adults",
      "https://www.researchgate.net/publication/349573581_Retirement...lation_and_Intergenerational_Allocation_of_Risks_and_Benefits"
    ]
  },
  {
    id: "subsidized-home-proofing",
    slug: "subsidized-home-proofing",
    title: "Subsidized home-proofing reduces inequality of risk",
    sdg: 10,
    sdgs: [10],
    tags: ["Equity","Policy","Housing"],
    excerpt: "Public/insurance co-funding for home adaptations can protect the most vulnerable seniors who cannot afford upgrades.",
    link: "https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf",
    sources: [
      "https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf",
      "https://prosvasimotita.minscfa.gov.gr/"
    ]
  },

  // ---- Yota–Giannis insights (SDG 11) ----
  {
    id: "age-friendly-streets",
    slug: "age-friendly-streets",
    title: "Age‑friendly streets lower outdoor fall incidence",
    sdg: 11,
    sdgs: [11],
    tags: ["Urban Design","Accessibility","Municipal"],
    excerpt: "Better sidewalks, ramps, benches, and lighting reduce falls outdoors and support independent living.",
    link: "https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/",
    sources: [
      "https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/",
      "https://prosvasimotita.minscfa.gov.gr/"
    ]
  },
  {
    id: "neighborhood-wellness-hubs",
    slug: "neighborhood-wellness-hubs",
    title: "Neighborhood wellness hubs fight isolation",
    sdg: 11,
    sdgs: [11],
    tags: ["Community","Isolation","Active Aging"],
    excerpt: "Local centers offering movement classes, nutrition advice, and social activities reduce isolation and health risks.",
    link: "https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf",
    sources: [
      "https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf",
      "https://www.lifelinehellas.gr/%cf%84%ce%b9-%ce%ba%ce%ac%ce%bd%ce%bf%cf%85%ce%bc%ce%b5/"
    ]
  },

  // ---- Yota–Giannis insights (SDG 8) ----
  {
    id: "insurer-prevention-partnerships",
    slug: "insurer-prevention-partnerships",
    title: "Insurer partnerships can fund prevention and save costs",
    sdg: 8,
    sdgs: [8],
    tags: ["Insurance","Silver Economy","Costs"],
    excerpt: "Fall‑prevention programs reduce claims; insurers can offer premium discounts for certified 'safe homes'.",
    link: "https://www.interamerican.gr/idiotes/proionta-ypiresies/ygeia/kalyterh-zwh/ygeia-diatrofh",
    sources: [
      "https://www.interamerican.gr/idiotes/proionta-ypiresies/ygeia/kalyterh-zwh/ygeia-diatrofh",
      "https://www.kathimerini.gr/life/health/1014962/ptoseis-ilikiomenon-mia-ypoyli-nosos/"
    ]
  },

  // ---- Yota–Giannis insights (SDG 9) ----
  {
    id: "iot-fall-detection",
    slug: "iot-fall-detection",
    title: "IoT wearables & sensors enable fast fall detection",
    sdg: 9,
    sdgs: [9],
    tags: ["IoT","Telehealth","Safety"],
    excerpt: "Wearables and smart sensors can detect falls and alert caregivers, cutting time‑to‑help and complications.",
    link: "https://www.sensorem.com/en/fall-accident-statistics/",
    sources: [
      "https://www.sensorem.com/en/fall-accident-statistics/",
      "https://www.bayalarmmedical.com/free-quote/?affiliate_id=rr_4...72&a=101699&c=107619&s1=2243187188.1956503840&s3=844-946-1712"
    ]
  },

  // ---- Yota–Giannis insights (SDG 17) ----
  {
    id: "multi-sector-coalition",
    slug: "multi-sector-coalition",
    title: "Municipality–NGO–Insurer coalitions accelerate impact",
    sdg: 17,
    sdgs: [17],
    tags: ["Partnerships","Policy","Pilots"],
    excerpt: "Pilots that bundle home safety, activity programs, and nutrition—co‑funded by cities, NGOs, and insurers—can scale faster.",
    link: "https://www.timafoundation.org/el/third-age/",
    sources: [
      "https://www.timafoundation.org/el/third-age/",
      "https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/",
      "https://www.anka.gr/index.php/en/programs/completed/senexia",
      "https://www.dypa.gov.gr/en/proghramma-apaskholisis-anerghon-55-ano"
    ]
  }
];
