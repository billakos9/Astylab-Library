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
  },
  {
    id: "low-trust-low-participation-greece",
    slug: "low-trust-low-participation-greece",
    title: "Low trust & weak participation undermine local governance",
    sdg: 16,
    sdgs: [16, 11],
    tags: ["Governance","Participation","Greece"],
    excerpt: "Greece struggles with low trust in institutions and limited citizen participation, which weakens local policy-making and delivery.",
    link: "https://www.oecd.org/gov/trust-in-government-white-paper.htm",
    sources: [
      "https://www.oecd.org/gov/trust-in-government-white-paper.htm",
      "https://www.opengovpartnership.org/members/athens-greece/commitments/AT0169/",
      "https://europa.eu/eurobarometer/surveys/detail/2423"
    ],
    companies: [
      { name: "CitizenLab", url: "https://www.citizenlab.co/", blurb: "Digital democracy platform used by 300+ governments to crowdsource input and co-create policy." },
      { name: "Granicus – EngagementHQ", url: "https://granicus.com/product/engagementhq/", blurb: "End‑to‑end online engagement suite (surveys, forums, mapping, analytics)." },
      { name: "Decidim", url: "https://decidim.org/", blurb: "Open‑source participation platform powering Barcelona’s participatory processes." },
      { name: "Pol.is", url: "https://pol.is/", blurb: "Real‑time large‑scale opinion mapping to discover consensus and surface divisions." },
      { name: "Crowdpolicy (GR)", url: "https://www.crowdpolicy.com/en/", blurb: "Greek civic‑tech & open‑innovation integrator for public participation and services." }
    ]
  },
  {
    id: "neighborhood-civic-hubs-boost-participation",
    slug: "neighborhood-civic-hubs-boost-participation",
    title: "Neighborhood civic hubs increase participation & cohesion",
    sdg: 11,
    sdgs: [11, 16, 3],
    tags: ["Community Hubs","Participation","Greece"],
    excerpt: "Local hubs that host activities, making, and mutual aid (e.g., SynAthina, Domatia Geitonias) bring residents together and build trust.",
    link: "https://www.synathina.gr/",
    sources: [
      "https://www.synathina.gr/",
      "https://thessaloniki.gr/city/neighborhood-room/",
      "https://www.weareeveryone.org/",
      "https://imaginethecity.gr/"
    ],
    companies: [
      { name: "Participatory City Foundation (Everyone, Everyday)", url: "https://www.weareeveryone.org/", blurb: "Neighborhood‑scale participatory ecology with making, sharing and help‑to‑learn projects." },
      { name: "Impact Hub Athens", url: "https://athens.impacthub.net/?lang=en", blurb: "Community & programs that incubate social innovation and local initiatives." },
      { name: "Fab Lab Barcelona (IAAC)", url: "https://fablabbcn.org/", blurb: "Makerspace and urban innovation lab enabling community making & circular projects." }
    ]
  },
  {
    id: "library-of-things-reduces-consumption",
    slug: "library-of-things-reduces-consumption",
    title: "Libraries of Things cut waste & costs through sharing",
    sdg: 12,
    sdgs: [12, 11],
    tags: ["Circular Economy","Sharing","Community"],
    excerpt: "Tool & item‑lending libraries let residents borrow instead of buy, reducing material consumption and building skills.",
    link: "https://www.libraryofthings.co.uk/",
    sources: [
      "https://www.libraryofthings.co.uk/",
      "https://torontotoollibrary.com/",
      "https://www.thethingery.com/",
      "https://www.shareshed.org.uk/"
    ],
    companies: [
      { name: "Library of Things (UK)", url: "https://www.libraryofthings.co.uk/", blurb: "Neighborhood rental lockers for appliances & tools with repair training." },
      { name: "Toronto Tool Library", url: "https://torontotoollibrary.com/", blurb: "Membership‑based tool lending and makerspace with workshops." },
      { name: "The Thingery (CA)", url: "https://www.thethingery.com/", blurb: "Cargo‑container lending libraries for neighborhoods across Vancouver." },
      { name: "Share Shed (UK)", url: "https://www.shareshed.org.uk/", blurb: "Mobile ‘library of things’ reducing waste and cost in rural communities." }
    ]
  },
  {
    id: "community-owned-cafe-funds-projects",
    slug: "community-owned-cafe-funds-projects",
    title: "Community‑owned businesses can fund city projects",
    sdg: 11,
    sdgs: [11, 17, 8],
    tags: ["Social Enterprise","Civic Funding","Case Study"],
    excerpt: "Urban Space 100 dedicates 80% of profits to local initiatives—an exportable model for community wealth building.",
    link: "https://urbanspace.if.ua/en",
    sources: [
      "https://urbanspace.if.ua/en",
      "https://urbanspaceradio.com/"
    ],
    companies: [
      { name: "Urban Space 100 (Ivano‑Frankivsk)", url: "https://urbanspace.if.ua/en", blurb: "Community‑owned restaurant that grants profits to civic projects." },
      { name: "Urban Space Radio", url: "https://urbanspaceradio.com/", blurb: "Sister social enterprise amplifying urbanism & community stories." },
      { name: "Impact Hub Network", url: "https://impacthub.net/", blurb: "Global network supporting social enterprise models and place‑based impact." }
    ]
  },
  {
    id: "civic-journalism-documenters-accountability",
    slug: "civic-journalism-documenters-accountability",
    title: "Civic journalism & Documenters improve accountability",
    sdg: 16,
    sdgs: [16, 11],
    tags: ["Transparency","Media","Participation"],
    excerpt: "Training residents to cover public meetings (City Bureau’s Documenters) builds a new public record and strengthens oversight.",
    link: "https://www.citybureau.org/",
    sources: [
      "https://www.citybureau.org/",
      "https://www.documenters.org/"
    ],
    companies: [
      { name: "City Bureau", url: "https://www.citybureau.org/", blurb: "Nonprofit civic media lab; operates the Documenters Network in 20+ communities." },
      { name: "Documenters.org", url: "https://www.documenters.org/", blurb: "Platform to train and pay locals to document public meetings and share notes." },
      { name: "Hearken", url: "https://www.wearehearken.com/", blurb: "Engagement platform for audience‑powered journalism and public agencies." }
    ]
  },
  {
    id: "cdcs-revitalize-neighborhoods",
    slug: "cdcs-revitalize-neighborhoods",
    title: "Community Development Corporations revive neighborhoods",
    sdg: 11,
    sdgs: [11, 8, 10],
    tags: ["Affordable Housing","Inclusive Growth","Policy"],
    excerpt: "CDCs combine housing, business support, and public‑space improvements—backed by intermediaries like LISC and NeighborWorks.",
    link: "https://www.lisc.org/",
    sources: [
      "https://www.lisc.org/",
      "https://www.neighborworks.org/",
      "https://www.enterprisecommunity.org/"
    ],
    companies: [
      { name: "LISC", url: "https://www.lisc.org/", blurb: "National intermediary financing inclusive development and CDCs." },
      { name: "NeighborWorks America", url: "https://www.neighborworks.org/", blurb: "Network supporting 240+ community groups with training and capital." },
      { name: "Enterprise Community Partners", url: "https://www.enterprisecommunity.org/", blurb: "Nonprofit deploying capital and policy to expand affordable housing." }
    ]
  },
  {
    id: "anti-speculative-ownership-keeps-spaces-affordable",
    slug: "anti-speculative-ownership-keeps-spaces-affordable",
    title: "Anti‑speculative ownership keeps civic spaces affordable",
    sdg: 11,
    sdgs: [11, 8],
    tags: ["Property Models","Affordability","Berlin"],
    excerpt: "ExRotaprint uses land trusts and long leases with foundations to take property off the speculative market and preserve low rents.",
    link: "https://www.exrotaprint.de/en/",
    sources: [
      "https://www.exrotaprint.de/en/",
      "https://maryon.ch/en/",
      "https://www.stiftung-trias.de/english/"
    ],
    companies: [
      { name: "ExRotaprint gGmbH", url: "https://www.exrotaprint.de/en/", blurb: "Non‑profit real‑estate model for work, art and community with capped rents." },
      { name: "Edith Maryon Foundation", url: "https://maryon.ch/en/", blurb: "Buys land to remove it from speculation and ensure social use." },
      { name: "Stiftung trias", url: "https://www.stiftung-trias.de/english/", blurb: "Foundation that secures land and grants heritable building rights for social projects." }
    ]
  },
  {
    id: "greenspace-scarcity-health-burden-athens",
    slug: "greenspace-scarcity-health-burden-athens",
    title: "Athens’ lack of green space hurts health",
    sdg: 11,
    sdgs: [11, 3, 13],
    tags: ["Green Space","Health","Athens"],
    excerpt: "Studies rank Athens among European capitals with the highest mortality burden from scarce urban green space; per‑capita green is ~6.6 m².",
    link: "https://www.lse.ac.uk/Cities/Assets/Documents/Urban-Age/Athens-Urban-Age-Task-Force-Spatial-Compendium.pdf",
    sources: [
      "https://www.lse.ac.uk/Cities/Assets/Documents/Urban-Age/Athens-Urban-Age-Task-Force-Spatial-Compendium.pdf",
      "https://www.thelancet.com/journals/landig/article/PIIS2542-5196(21)00229-1/fulltext",
      "https://gogreenroutes.eu/fileadmin/user_upload/Resources/Green_space_and_mortality_in_European_cities.pdf"
    ],
    companies: [
      { name: "Green City Solutions", url: "https://greencitysolutions.de/", blurb: "CityTree moss biofilters and urban greening systems for air quality & cooling." },
      { name: "Biotecture Living Walls", url: "https://www.biotecture.uk.com/", blurb: "Modular green wall systems for buildings and public realm." },
      { name: "Land Life Company", url: "https://landlifecompany.com/", blurb: "Reforestation & urban tree‑planting using data‑driven methods." },
      { name: "KOMPAN Parks & Play", url: "https://www.kompan.com/", blurb: "Active‑aging friendly parks & outdoor fitness equipment for healthier cities." }
    ]
  },
  {
    id: "menstrual-health-sdg-6-2",
    slug: "menstrual-health-sdg-6-2",
    title: "Menstrual health is integral to SDG 6.2—and links to education & equality",
    sdg: 6,
    sdgs: [6, 4, 5, 3, 12],
    tags: ["Menstrual Health","SDGs","Global"],
    excerpt: "SDG 6.2 calls for adequate sanitation & hygiene with attention to the needs of women and girls; menstrual health also impacts learning (SDG4), equality (SDG5), health (SDG3) and consumption (SDG12).",
    link: "https://washdata.org/topics/menstrual-health",
    sources: [
      "https://washdata.org/topics/menstrual-health",
      "https://www.unicef.org/media/91341/file/UNICEF-Guidance-menstrual-health-hygiene-2019.pdf"
    ],
    companies: [
      { name: "Days for Girls International", url: "https://www.daysforgirls.org/", blurb: "Global nonprofit pairing washable pads with culturally relevant menstrual health education." },
      { name: "Plan International", url: "https://plan-uk.org/our-work/health-and-rights/periods", blurb: "Programs to end period poverty, stigma and taboos in schools and communities." },
      { name: "Bloody Good Period", url: "https://www.bloodygoodperiod.com/", blurb: "UK charity providing products and menstrual education for those least likely to access it." }
    ]
  },
  {
    id: "period-poverty-absenteeism-greece",
    slug: "period-poverty-absenteeism-greece",
    title: "Period poverty drives school absenteeism & inequality in Greece",
    sdg: 4,
    sdgs: [4, 5, 10, 3, 6],
    tags: ["Period Poverty","Education","Greece"],
    excerpt: ">10k girls miss school monthly due to unaffordable products; some risk up to 30 absence days/year—an education and equity issue.",
    link: "https://www.thenationalherald.com/greece-will-help-women-girls-who-cant-afford-menstrual-product-costs/",
    sources: [
      "https://www.thenationalherald.com/greece-will-help-women-girls-who-cant-afford-menstrual-product-costs/",
      "https://balkaninsight.com/2024/03/01/greece-presents-plan-to-tackle-period-poverty-among-women/",
      "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52019IP0014"
    ],
    companies: [
      { name: "Hey Girls (UK)", url: "https://www.heygirls.co.uk/", blurb: "Buy‑one‑give‑one social enterprise donating period products and delivering education." },
      { name: "Aunt Flow", url: "https://goauntflow.com/", blurb: "Free‑vend pads & tampon dispensers for schools, campuses and workplaces." },
      { name: "Riley", url: "https://www.energiagroup.com/news-media/riley", blurb: "Corporate programs supplying free organic products in offices (e.g., Energia Group)." },
      { name: "Bloody Good Period", url: "https://www.bloodygoodperiod.com/", blurb: "Menstrual equity programs & education for marginalized communities." }
    ]
  },
  {
    id: "free-period-dispensers-schools-workplaces",
    slug: "free-period-dispensers-schools-workplaces",
    title: "Free product dispensers in schools & workplaces improve dignity and participation",
    sdg: 6,
    sdgs: [6, 4, 5, 10],
    tags: ["Access","Dispensers","Facilities"],
    excerpt: "86% start periods unexpectedly in public; accessible dispensers reduce panic, stigma, and lost time at school or work.",
    link: "https://www.freethetampons.org/",
    sources: [
      "https://www.freethetampons.org/",
      "https://redlocker.eu/",
      "https://organicmondays.com/collections/dispensers",
      "https://www.cws.com/en/hygiene/products/toilet-hygiene/tampon-pad-dispenser"
    ],
    companies: [
      { name: "Aunt Flow", url: "https://goauntflow.com/", blurb: "Modern free‑vend dispensers; ADA‑compliant; widely used in schools and campuses." },
      { name: "RedLocker", url: "https://redlocker.eu/", blurb: "Battery‑powered dispensers with anti‑waste delay; installed in 4k+ European locations." },
      { name: "Mondays (Organic Mondays)", url: "https://organicmondays.com/", blurb: "EU provider of sustainable products & dispensers for workplaces, schools and venues." },
      { name: "CWS Hygiene", url: "https://www.cws.com/en/hygiene/products/toilet-hygiene/tampon-pad-dispenser", blurb: "Free‑dispense tampon/pad units for public washrooms with service & refill options." }
    ]
  },
  {
    id: "chemicals-in-period-products-health-risks",
    slug: "chemicals-in-period-products-health-risks",
    title: "Conventional period products may contain plastics & toxic metals—transparency gap persists",
    sdg: 3,
    sdgs: [3, 12],
    tags: ["Product Safety","Chemicals","Health"],
    excerpt: "2024 research found lead, arsenic and other metals in tampons from major brands; labeling rules often don’t require full ingredient disclosure.",
    link: "https://publichealth.berkeley.edu/articles/spotlight/research/first-study-to-measure-toxic-metals-in-tampons-shows-arsenic-and-lead",
    sources: [
      "https://publichealth.berkeley.edu/articles/spotlight/research/first-study-to-measure-toxic-metals-in-tampons-shows-arsenic-and-lead",
      "https://www.sciencedirect.com/science/article/pii/S0160412024004355",
      "https://www.niehs.nih.gov/news/factor/2024/8/feature/3-feature-metals-in-tampons"
    ],
    companies: [
      { name: "August", url: "https://www.itsaugust.co/", blurb: "Organic cotton pads & tampons; transparency‑focused brand challenging ‘tampon tax’." },
      { name: "LOLA", url: "https://mylola.com/", blurb: "Clearly labeled period care made without synthetic fibers, fragrance or dyes." },
      { name: "Freda", url: "https://www.myfreda.com/", blurb: "EU brand emphasizing organic materials and reduced‑plastic packaging." }
    ]
  },
  {
    id: "menstrual-products-environmental-footprint",
    slug: "menstrual-products-environmental-footprint",
    title: "Disposable period products create plastic waste & CO₂—reusables cut impact",
    sdg: 12,
    sdgs: [12, 13, 14],
    tags: ["Circularity","Waste","Climate"],
    excerpt: "Period products rank among common freshwater plastics; meta‑analyses show reusables (cups, underwear, pads) reduce waste and lifetime footprint.",
    link: "https://earthwatch.org.uk/top-10/",
    sources: [
      "https://earthwatch.org.uk/top-10/",
      "https://www.lifecycleinitiative.org/wp-content/uploads/2021/07/UNEP-LCI-Single-use-vs-reusable-Menstrual-Products-Meta-study.pdf"
    ],
    companies: [
      { name: "AllMatters (OrganiCup)", url: "https://allmatters.com/en-eu", blurb: "Reusable cups/discs & period underwear; programs with NGOs for period equity." },
      { name: "Saalt", url: "https://saalt.com/", blurb: "Reusable cups, discs and leak‑proof underwear to replace disposables." },
      { name: "Aisle (formerly Lunapads)", url: "https://periodaisle.com/", blurb: "Reusable pads & underwear; early pioneer in modern reusables." }
    ]
  },
  {
    id: "greece-period-poverty-program-2024",
    slug: "greece-period-poverty-program-2024",
    title: "Greece’s Period Poverty Programme supplies 14M products to 200 schools + education & destigmatization",
    sdg: 5,
    sdgs: [5, 4, 3, 6, 10],
    tags: ["Policy","Greece","RRF"],
    excerpt: "National program (RRF‑funded) targets West Attica & West Thessaloniki with free products, parent education and stigma‑reduction campaigns.",
    link: "https://balkaninsight.com/2024/03/01/greece-presents-plan-to-tackle-period-poverty-among-women/",
    sources: [
      "https://balkaninsight.com/2024/03/01/greece-presents-plan-to-tackle-period-poverty-among-women/",
      "https://www.thenationalherald.com/greece-will-help-women-girls-who-cant-afford-menstrual-product-costs/"
    ],
    companies: [
      { name: "Herbox", url: "https://www.herbox.se/en/", blurb: "European free‑vend dispensers with timed lock to prevent waste; used in schools & offices." },
      { name: "Aunt Flow", url: "https://goauntflow.com/", blurb: "Turnkey school/workplace deployments and refill supply." },
      { name: "RedLocker", url: "https://redlocker.eu/", blurb: "Scalable dispenser networks with automated restocking across Europe." }
    ]
  },
  {
    id: "extreme-heat-deadliest-europe",
    slug: "extreme-heat-deadliest-europe",
    title: "Extreme heat is Europe’s deadliest climate hazard",
    sdg: 13,
    sdgs: [13, 11, 3],
    tags: ["Heat", "Climate Risk", "Europe"],
    excerpt: "Heat accounts for >85% of Europe’s weather-related fatalities (1981–2020); Med capitals could feel up to +15°C vs rural baseline by 2050.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "Tomorrow.io", url: "https://www.tomorrow.io/", blurb: "Weather intelligence & heat-risk forecasting for cities." },
      { name: "Everbridge", url: "https://www.everbridge.com/", blurb: "Mass-notification for citywide heat alerts and sEAPs." },
      { name: "GAF Cool Roofs", url: "https://www.gaf.com/en-us/roofing-products/commercial-roofing/cool-roofing", blurb: "High-SRI cool roofing to lower surface temps." }
    ]
  },
  {
    id: "athens-record-heatwaves-2023-2024",
    slug: "athens-record-heatwaves-2023-2024",
    title: "Athens set new heatwave duration records in 2023 & 2024",
    sdg: 13,
    sdgs: [13, 3, 11],
    tags: ["Heatwaves", "Athens", "Climate Trends"],
    excerpt: "“Cleon” (2023) lasted 15 consecutive days; July 2024 stretched to 17 days—the longest on record in Athens.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "Vaisala", url: "https://www.vaisala.com/", blurb: "Professional WBGT/heat sensors for urban monitoring." },
      { name: "IBM/The Weather Company", url: "https://www.ibm.com/weather", blurb: "City-scale forecasts & decision dashboards." }
    ]
  },
  {
    id: "hellenic-red-cross-seap",
    slug: "hellenic-red-cross-seap",
    title: "Early Action Protocol activates targeted heat response",
    sdg: 3,
    sdgs: [3, 11, 13],
    tags: ["Preparedness", "Public Health", "Athens"],
    excerpt: "Hellenic Red Cross sEAP triggers hydration points, outreach & comms when NOA issues high-danger heat alerts.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "Esri", url: "https://www.esri.com/", blurb: "Hotspot mapping & resource routing for response teams." },
      { name: "RAYVN", url: "https://rayvn.global/", blurb: "Crisis management platform for coordinated field ops." }
    ]
  },
  {
    id: "athens-heat-hotspots-western-core",
    slug: "athens-heat-hotspots-western-core",
    title: "Peristeri–Attiki–Metaxourgeio–Eleonas emerge as heat hotspots",
    sdg: 11,
    sdgs: [11, 13, 3],
    tags: ["Urban Heat Island", "Hotspots", "Equity"],
    excerpt: "Data layers show compounded risk where heat, air pollution and lack of green space overlap in dense districts.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "GreenBlue Urban", url: "https://greenblue.com/", blurb: "Street-tree systems for tough urban streetscapes." },
      { name: "Treeconomics", url: "https://www.treeconomics.co.uk/", blurb: "Urban-forest audits & ROI for cooling strategies." },
      { name: "KOMPAN Outdoor Fitness", url: "https://www.kompan.com/", blurb: "Shade-friendly active parks with social co-benefits." }
    ]
  },
  {
    id: "imperviousness-and-forest-diversity",
    slug: "imperviousness-and-forest-diversity",
    title: "80% impervious cover + low tree diversity heighten heat risk",
    sdg: 11,
    sdgs: [11, 13, 15],
    tags: ["Urban Greening", "Biodiversity", "Cooling"],
    excerpt: "Athens’ urban fabric is ~80% impervious and tree species diversity is limited—raising vulnerability to heat and pests.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305",
      "https://minka-sdg.org/"
    ],
    companies: [
      { name: "DeepRoot (Silva Cell)", url: "https://www.deeproot.com/", blurb: "Soil/Stormwater systems that keep street trees alive." },
      { name: "Biotecture Living Walls", url: "https://www.biotecture.uk.com/", blurb: "Green walls to cool facades and boost biodiversity." }
    ]
  },
  {
    id: "athens-greening-3-30-300",
    slug: "athens-greening-3-30-300",
    title: "5,000 trees/year & the 3-30-300 rule guide cooling",
    sdg: 11,
    sdgs: [11, 13, 3],
    tags: ["Nature-Based Solutions", "Planning", "Targets"],
    excerpt: "Athens plans 5k trees annually to 2028 and aims for 3-30-300 access—plus micro-forests like Alepotrypa Park.",
    link: "https://onebillionresilient.org/hadrian-aqueduct-cooling-district-heat-risk-reduction-guidelines/",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305",
      "https://onebillionresilient.org/hadrian-aqueduct-cooling-district-heat-risk-reduction-guidelines/"
    ],
    companies: [
      { name: "SUGi Projects", url: "https://www.sugiproject.com/", blurb: "Miyawaki micro-forests for urban cooling." },
      { name: "Land Life Company", url: "https://landlifecompany.com/", blurb: "Data-driven tree planting and aftercare." }
    ]
  },
  {
    id: "water-alignment-for-nbs",
    slug: "water-alignment-for-nbs",
    title: "Cooling NbS need water planning to scale",
    sdg: 6,
    sdgs: [6, 11, 13],
    tags: ["Water", "NbS", "Governance"],
    excerpt: "RBMPs and water scarcity must align with greening; water-smart design is critical for sustained cooling benefits.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "Netafim", url: "https://www.netafim.com/", blurb: "Precision drip irrigation for urban trees/parks." },
      { name: "Hydro International", url: "https://www.hydro-int.com/", blurb: "Stormwater capture & reuse systems." }
    ]
  },
  {
    id: "digital-twin-heat-mortality-forecast",
    slug: "digital-twin-heat-mortality-forecast",
    title: "Digital Twin (DT-HEAT+) forecasts heat-related mortality",
    sdg: 13,
    sdgs: [13, 3, 11],
    tags: ["Digital Twin", "Forecasting", "Health"],
    excerpt: "NOA’s DT-HEAT+ delivers next-day mortality risk forecasts; integrates with ESA’s DestinE for city planning.",
    link: "https://doi.org/10.5281/zenodo.17243305",
    sources: [
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "UrbanFootprint", url: "https://urbanfootprint.com/", blurb: "Scenario modeling for heat & equity planning." },
      { name: "Esri", url: "https://www.esri.com/", blurb: "Digital-twin geospatial stack for cities." }
    ]
  },
  {
    id: "calheatscore-equity-tool",
    slug: "calheatscore-equity-tool",
    title: "CalHeatScore shows equity-centred heat risk mapping",
    sdg: 10,
    sdgs: [10, 13, 11],
    tags: ["Equity", "Risk Index", "Planning"],
    excerpt: "California’s public tool blends exposure + vulnerability to target investments—transferable method for Athens & peers.",
    link: "https://calheatscore.calepa.ca.gov/",
    sources: [
      "https://calheatscore.calepa.ca.gov/",
      "https://doi.org/10.5281/zenodo.17243305"
    ],
    companies: [
      { name: "Granicus – EngagementHQ", url: "https://granicus.com/product/engagementhq/", blurb: "Community input to ground heat plans in lived reality." },
      { name: "CitizenLab", url: "https://www.citizenlab.co/", blurb: "Participatory budgeting & mapping for fair siting." }
    ]
  }
];
