const INSIGHTS = [
  { 
    id: "community-programs-reduce-isolation",
    title: "Community programs reduce social isolation by ~20% within 6 months", 
    tags:["Intervention","SDG 3"], 
    sdgs: [3], 
    sdg: 3,
    sources: ["https://data-explorer.oecd.org/vis?tm=DF_IDD&pg=0&snb=1&vw=sr&df[ds]=dsDisseminateFinalDMZ&df[id]=DSD_WISE_IDD%40DF_IDD&df[ag]=OECD.WISE.INE&df[vs]=&pd=2010%2C&dq=.A.INC_DISP_GINI..._T.METH2012.D_CUR.&ly[rw]=REF_AREA%2CUNIT_MEASURE&ly[cl]=TIME_PERIOD&to[TIME_PERIOD]=false"],
    companies: [
      "WellnessTech - Digital platform connecting isolated individuals with local community groups",
      "SocialConnect App - Mobile app facilitating neighborhood meetups and shared activities",
      "HealthTogether - Community health service that pairs participants for mutual support"
    ],
    link:"/data.html#sources" 
  },
  { 
    id: "renewables-lower-energy-burden",
    title: "Renewables adoption correlates with lower household energy burden", 
    tags:["Energy","SDG 7"], 
    sdgs: [7], 
    sdg: 7,
    sources: ["https://data.worldbank.org/country/greece", "https://ec.europa.eu/eurostat/web/main/data/database"],
    companies: [
      "SolarShare Collective - Community solar installation service reducing upfront costs",
      "EnergySwitch Pro - Platform helping households transition to renewable energy with financing",
      "GreenHome Advisor - Consulting service for residential renewable energy adoption"
    ],
    link:"/data.html#sources" 
  },

  // --- Yota–Giannis Insights ---
  { id:"home-modifications-cut-falls", title:"Home modifications can cut elderly falls by ~39%", sdgs:[3], sdg: 3, tags:["Aging","Falls Prevention","Home Safety","Greece"], excerpt:"Retrofitting bathrooms, improving lighting, and non‑slip floors can reduce falls by nearly 40% for seniors living at home.", sources: ["https://prosvasimotita.minscfa.gov.gr/", "http://www.tzaneio.gr/wp-content/uploads/epistimonika_xronika/p13-3-5.pdf", "https://www.cdc.gov/falls/data-research/facts-stats/index.html"], link:"https://prosvasimotita.minscfa.gov.gr/" },
  { id:"exercise-lowers-fall-risk", title:"Exercise (≥150 min/week) lowers fall risk by ~23%", sdgs:[3], sdg: 3, tags:["Aging","Physical Activity","Prevention"], excerpt:"Regular strength and balance training is linked with ~23% lower risk of falls among older adults.", sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10360303/", "https://www.oslomet.no/en/research/featured-research/exercise-thirties"], link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10360303/" },
  { id:"falls-economic-burden-greece", title:"Falls impose >€1B annual cost in Greece", sdgs:[3], sdg: 3, tags:["Health System","Economics","Greece"], excerpt:"Fall injuries among the elderly cost the health system over €1B per year—roughly 10% of public health spending.", sources: ["https://www.statistics.gr/documents/20181/7362cdf6-c0d0-ffd3-d27d-c042ddc4cd71", "https://www.statistics.gr/el/statistics/-/publication/SPO18/-", "https://www.kathimerini.gr/life/health/1014962/ptoseis-ilikiomenon-mia-ypoyli-nosos/"] , link:"https://www.statistics.gr/documents/20181/7362cdf6-c0d0-ffd3-d27d-c042ddc4cd71" },
  { id:"indoor-falls-majority", title:"Indoors are deadlier than streets for seniors", sdgs:[3], sdg: 3, tags:["Home Safety","Elderly","Risk"], excerpt:"50–60% of falls occur inside the home—especially bathrooms and kitchens—where surfaces are slippery and lighting is poor.", sources: ["https://www.neurocenter.gr/syxnes-ptwseis-se-hlikiwmenous.html", "https://www.sosiatroi.gr/falls-of-elderly-ptwseis-ilikiwmenwn/", "https://www.worldlifeexpectancy.com/greece-falls"], link:"https://www.neurocenter.gr/syxnes-ptwseis-se-hlikiwmenous.html" },

  { id:"retirement-social-participation", title:"Retirement can shrink income and social participation", sdgs:[10], sdg: 10, tags:["Inclusion","Poverty Risk","Greece"], excerpt:"Elderly Greeks often lose income and identity after retirement, increasing isolation and dependence on family.", sources: ["https://www.age-platform.eu/barometer-2023/greece/", "https://www.who.int/news-room/fact-sheets/detail/mental-health-of-older-adults", "https://www.researchgate.net/publication/349573581_Retirement...lation_and_Intergenerational_Allocation_of_Risks_and_Benefits"], link:"https://www.age-platform.eu/barometer-2023/greece/" },
  { id:"subsidized-home-proofing", title:"Subsidized home-proofing reduces inequality of risk", sdgs:[10], sdg: 10, tags:["Equity","Policy","Housing"], excerpt:"Public/insurance co-funding for home adaptations can protect the most vulnerable seniors who cannot afford upgrades.", sources: ["https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf", "https://prosvasimotita.minscfa.gov.gr/"], link:"https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf" },

  { id:"age-friendly-streets", title:"Age‑friendly streets lower outdoor fall incidence", sdgs:[11], sdg: 11, tags:["Urban Design","Accessibility","Municipal"], excerpt:"Better sidewalks, ramps, benches, and lighting reduce falls outdoors and support independent living.", sources: ["https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/", "https://prosvasimotita.minscfa.gov.gr/"], link:"https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/" },
  { id:"neighborhood-wellness-hubs", title:"Neighborhood wellness hubs fight isolation", sdgs:[11], sdg: 11, tags:["Community","Isolation","Active Aging"], excerpt:"Local centers offering movement classes, nutrition advice, and social activities reduce isolation and health risks.", sources: ["https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf", "https://www.lifelinehellas.gr/%cf%84%ce%b9-%ce%ba%ce%ac%ce%bd%ce%bf%cf%85%ce%bc%ce%b5/"] , link:"https://www.cityofathens.gr/wp-content/uploads/2024/03/schedio-kanonismoy-leschon-filias-2024.pdf" },

  { id:"insurer-prevention-partnerships", title:"Insurer partnerships can fund prevention and save costs", sdgs:[8], sdg: 8, tags:["Insurance","Silver Economy","Costs"], excerpt:"Fall‑prevention programs reduce claims; insurers can offer premium discounts for certified 'safe homes'.", sources: ["https://www.interamerican.gr/idiotes/proionta-ypiresies/ygeia/kalyterh-zwh/ygeia-diatrofh", "https://www.kathimerini.gr/life/health/1014962/ptoseis-ilikiomenon-mia-ypoyli-nosos/"] , link:"https://www.interamerican.gr/idiotes/proionta-ypiresies/ygeia/kalyterh-zwh/ygeia-diatrofh" },

  { id:"iot-fall-detection", title:"IoT wearables & sensors enable fast fall detection", sdgs:[9], sdg: 9, tags:["IoT","Telehealth","Safety"], excerpt:"Wearables and smart sensors can detect falls and alert caregivers, cutting time‑to‑help and complications.", sources: ["https://www.sensorem.com/en/fall-accident-statistics/", "https://www.bayalarmmedical.com/free-quote/?affiliate_id=rr_4...72&a=101699&c=107619&s1=2243187188.1956503840&s3=844-946-1712"], link:"https://www.sensorem.com/en/fall-accident-statistics/" },

  { id:"multi-sector-coalition", title:"Municipality–NGO–Insurer coalitions accelerate impact", sdgs:[17], sdg: 17, tags:["Partnerships","Policy","Pilots"], excerpt:"Pilots that bundle home safety, activity programs, and nutrition—co‑funded by cities, NGOs, and insurers—can scale faster.", sources: ["https://www.timafoundation.org/el/third-age/", "https://www.cityofathens.gr/who/programma-voitheia-sto-spiti-plus/", "https://www.anka.gr/index.php/en/programs/completed/senexia", "https://www.dypa.gov.gr/en/proghramma-apaskholisis-anerghon-55-ano"], link:"https://www.timafoundation.org/el/third-age/" }
];
