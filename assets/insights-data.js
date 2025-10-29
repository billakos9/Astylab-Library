const INSIGHTS = [
  { 
    id: "community-programs-reduce-isolation",
    title: "Community programs reduce social isolation by ~20% within 6 months", 
    tags:["Intervention","SDG 3"], 
    sdgs: [3], 
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
    sources: ["https://data.worldbank.org/country/greece", "https://ec.europa.eu/eurostat/web/main/data/database"],
    companies: [
      "SolarShare Collective - Community solar installation service reducing upfront costs",
      "EnergySwitch Pro - Platform helping households transition to renewable energy with financing",
      "GreenHome Advisor - Consulting service for residential renewable energy adoption"
    ],
    link:"/data.html#sources" 
  },

  // --- Yota–Giannis Insights ---
  { id:"home-modifications-cut-falls", title:"Home modifications can cut elderly falls by ~39%", sdgs:[3], tags:["Aging","Falls Prevention","Home Safety","Greece"], excerpt:"Retrofitting bathrooms, improving lighting, and non‑slip floors can reduce falls by nearly 40% for seniors living at home.", link:"/data.html#home-safety" },
  { id:"exercise-lowers-fall-risk", title:"Exercise (≥150 min/week) lowers fall risk by ~23%", sdgs:[3], tags:["Aging","Physical Activity","Prevention"], excerpt:"Regular strength and balance training is linked with ~23% lower risk of falls among older adults.", link:"/data.html#exercise" },
  { id:"falls-economic-burden-greece", title:"Falls impose >€1B annual cost in Greece", sdgs:[3], tags:["Health System","Economics","Greece"], excerpt:"Fall injuries among the elderly cost the health system over €1B per year—roughly 10% of public health spending.", link:"/data.html#costs" },
  { id:"indoor-falls-majority", title:"Indoors are deadlier than streets for seniors", sdgs:[3], tags:["Home Safety","Elderly","Risk"], excerpt:"50–60% of falls occur inside the home—especially bathrooms and kitchens—where surfaces are slippery and lighting is poor.", link:"/data.html#locations" },

  { id:"retirement-social-participation", title:"Retirement can shrink income and social participation", sdgs:[10], tags:["Inclusion","Poverty Risk","Greece"], excerpt:"Elderly Greeks often lose income and identity after retirement, increasing isolation and dependence on family.", link:"/data.html#inclusion" },
  { id:"subsidized-home-proofing", title:"Subsidized home-proofing reduces inequality of risk", sdgs:[10], tags:["Equity","Policy","Housing"], excerpt:"Public/insurance co-funding for home adaptations can protect the most vulnerable seniors who cannot afford upgrades.", link:"/data.html#subsidies" },

  { id:"age-friendly-streets", title:"Age‑friendly streets lower outdoor fall incidence", sdgs:[11], tags:["Urban Design","Accessibility","Municipal"], excerpt:"Better sidewalks, ramps, benches, and lighting reduce falls outdoors and support independent living.", link:"/data.html#urban" },
  { id:"neighborhood-wellness-hubs", title:"Neighborhood wellness hubs fight isolation", sdgs:[11], tags:["Community","Isolation","Active Aging"], excerpt:"Local centers offering movement classes, nutrition advice, and social activities reduce isolation and health risks.", link:"/data.html#hubs" },

  { id:"insurer-prevention-partnerships", title:"Insurer partnerships can fund prevention and save costs", sdgs:[8], tags:["Insurance","Silver Economy","Costs"], excerpt:"Fall‑prevention programs reduce claims; insurers can offer premium discounts for certified 'safe homes'.", link:"/data.html#insurance" },

  { id:"iot-fall-detection", title:"IoT wearables & sensors enable fast fall detection", sdgs:[9], tags:["IoT","Telehealth","Safety"], excerpt:"Wearables and smart sensors can detect falls and alert caregivers, cutting time‑to‑help and complications.", link:"/data.html#iot" },

  { id:"multi-sector-coalition", title:"Municipality–NGO–Insurer coalitions accelerate impact", sdgs:[17], tags:["Partnerships","Policy","Pilots"], excerpt:"Pilots that bundle home safety, activity programs, and nutrition—co‑funded by cities, NGOs, and insurers—can scale faster.", link:"/data.html#partnerships" }
];
