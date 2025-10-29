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
    ],
    companies: [
      { name: "Lifeway Mobility", url: "https://www.lifewaymobility.com/solutions/", blurb: "Home modifications (grab bars, ramps, stairlifts) to improve safety & independence." },
      { name: "Acorn Stairlifts", url: "https://www.acornstairlifts.com/", blurb: "Global stairlift manufacturer exporting to 80+ countries." },
      { name: "Altro Safety Flooring", url: "https://www.altro.com/uk/products/floors/safety-floors", blurb: "Slip‑resistant vinyl flooring for wet rooms and high‑risk areas." },
      { name: "SlipDoctors", url: "https://slipdoctors.com/", blurb: "Anti‑slip coatings and treatments for baths, tiles and floors." }
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
    ],
    companies: [
      { name: "SilverSneakers (Tivity Health)", url: "https://www.tivityhealth.com/brands/silversneakers/", blurb: "Senior fitness classes in gyms & online; included with many Medicare plans." },
      { name: "Nymbl Science", url: "https://info.nymblscience.com/hubfs/White%20Papers/Myth%20Debunked-Older%20Adults%20Digital%20Tech.pdf", blurb: "Digital balance training and fall‑prevention app for older adults." },
      { name: "Renew Active (UnitedHealthcare)", url: "https://www.uhcrenewactive.com/", blurb: "Fitness program benefit with large gym network and brain‑health activities." }
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
    ],
    companies: [
      { name: "SafelyYou", url: "https://www.safely-you.com/", blurb: "AI‑enabled fall detection/analysis platform used by senior living operators." },
      { name: "Tunstall Healthcare", url: "https://www.tunstall.co.uk/our-solutions/connected-care/conditions--disabilities/falls-management/", blurb: "Telecare and falls‑management solutions for at‑risk older adults." },
      { name: "Vayyar Care", url: "https://vayyar.com/care/", blurb: "Privacy‑preserving, touchless radar sensors for fall detection and monitoring." }
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
    ],
    companies: [
      { name: "Forbo Step Safety Flooring", url: "https://www.forbo.com/flooring/en-gl/segments/healthcare/phf2yu", blurb: "R10–R12 slip‑resistant safety vinyl for wet rooms and high‑risk zones." },
      { name: "Altro Safety Floors", url: "https://www.altro.com/uk/products/floors/safety-floors", blurb: "Slip‑resistant flooring designed to reduce slips and trips in wet spaces." },
      { name: "Philips Hue MotionAware (Signify)", url: "https://www.theverge.com/smart-home/768585/philips-hue-motion-aware-rf-sensing-lights-motion-ivani", blurb: "Smart lighting with built‑in RF motion sensing to illuminate paths automatically." },
      { name: "SlipDoctors", url: "https://slipdoctors.com/", blurb: "Non‑slip coatings for baths, tiles and floors to increase traction." }
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
    ],
    companies: [
      { name: "Papa (Papa Pals)", url: "https://www.papa.com/", blurb: "Companion care and social support to reduce isolation and enable aging‑in‑place." },
      { name: "No Isolation – KOMP", url: "https://komp.family/en/", blurb: "One‑button video calling device that connects seniors with family to reduce loneliness." },
      { name: "GrandPad", url: "https://www.grandpad.net/", blurb: "Senior‑friendly tablet for simple video calls, photos and messaging." },
      { name: "Stitch", url: "https://www.stitch.net/", blurb: "Global social community for people 50+ with activities and companionship." }
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
    ],
    companies: [
      { name: "Lifeway Mobility", url: "https://www.lifewaymobility.com/solutions/", blurb: "Home adaptation provider (ramps, stairlifts, grab bars); works with payers and grants in some regions." },
      { name: "Acorn Stairlifts", url: "https://www.acornstairlifts.com/", blurb: "Stairlift solutions for indoor/outdoor stairs; global install network." },
      { name: "SlipDoctors", url: "https://slipdoctors.com/", blurb: "Cost‑effective anti‑slip treatments for bathrooms and floors." }
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
    ],
    companies: [
      { name: "Arup", url: "https://www.arup.com/insights/cities-alive-designing-for-ageing-communities/", blurb: "Consulting/engineering firm with age‑friendly city design frameworks." },
      { name: "Schréder", url: "https://www.schreder.com/en/solutions/how-light-pedestrian-crossings", blurb: "Pedestrian‑crossing and street lighting to improve visibility and safety." },
      { name: "Gehl", url: "https://www.gehlpeople.com/knowledge-hub/articles/designing-cities-for-our-youngest-residents-to-thrive/", blurb: "Urban design practice focused on people‑centred, walkable public space." }
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
    ],
    companies: [
      { name: "YMCA", url: "https://www.ymca.org/what-we-do/healthy-living/fitness/older-adults/better-balance", blurb: "Evidence‑based group classes (e.g., Moving for Better Balance) to reduce fall risk." },
      { name: "Nuffield Health", url: "https://www.nuffieldhealth.com/about-us/sustainability/healthy-community/free-programmes-for-local-communities", blurb: "Community rehabilitation & free local programmes that support healthy ageing." },
      { name: "Oasis Institute (Oasis Everywhere)", url: "https://www.oasisnet.org/", blurb: "Lifelong learning & health programs (online and in‑person) combating isolation." }
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
    ],
    companies: [
      { name: "Generali Vitality", url: "https://www.generalivitality.com/moodboard/generali-and-vitality-group-renew-partnership-until-2028/", blurb: "Behaviour‑change wellness program from Generali & Vitality; active across Europe." },
      { name: "UnitedHealthcare – Renew Active", url: "https://www.uhcrenewactive.com/", blurb: "Medicare fitness benefit offering gym network and cognitive health resources." },
      { name: "Aetna + SilverSneakers", url: "https://www.aetna.com/medicare/compare-plans-enroll/benefits-medicare-advantage-plan/gym-memberships-fitness-classes.html", blurb: "Medicare Advantage plans with included SilverSneakers memberships." }
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
    ],
    companies: [
      { name: "Apple Watch (Fall Detection)", url: "https://support.apple.com/en-us/108896", blurb: "Built‑in fall detection with emergency SOS on Apple Watch." },
      { name: "UnaliWear – Kanega Watch", url: "https://www.unaliwear.com/product/kanega-watch/", blurb: "Medical alert watch with 24/7 fall detection & monitoring." },
      { name: "Vayyar Care", url: "https://vayyar.com/care/", blurb: "Touchless, camera‑free radar sensors detect falls and unusual patterns." },
      { name: "Nobi Smart Lamp", url: "https://www.nobi.life/en", blurb: "Ceiling/pendant lamps with built‑in AI fall detection and prevention lighting." }
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
    ],
    companies: [
      { name: "AgeTech Collaborative (AARP)", url: "https://home.agetechcollaborative.org/network/company-directory", blurb: "Ecosystem linking startups & enterprises (e.g., ZIBRIO fall‑prevention) with payers/providers." },
      { name: "EIT Health – Falls/Frailty Projects", url: "https://eithealth.eu/product-service/ffalls-predictor/", blurb: "EU innovation network scaling collaborative falls‑prevention solutions." },
      { name: "Aging2.0", url: "https://www.aging2.com/", blurb: "Global network connecting senior‑care providers with tech startups for pilots and scaling." }
    ]
  }
];
