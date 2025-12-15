// src/data/sectorData.js

export const sectorData = {
    hydropower: {
        title: "Hydropower",
        tagline: "The Battery of South Asia",
        heroImage: "https://images.pexels.com/photos/2699258/pexels-photo-2699258.jpeg",
        accent: "text-cyan-500",
        bgAccent: "bg-cyan-500",
        description: "The Himalaya’s water wealth gives Nepal a strategic edge in clean energy — unlocking export opportunities across South Asia.",
        numbers: [
            { label: "Physical Potential", value: "83k", suffix: "MW" },
            { label: "Feasible Potential", value: "32k", suffix: "%" },
            { label: "Access", value: "99", suffix: "%" },
        ],
        facts: [
            "100% corporate tax holiday for first 10 years + 50% discount for next 5 years",
            "99% of population now has electricity access",
            "Installed capacity: 3,591 MW hydro (NEA/DOED)",
            "Export capacity to India: 1,090.9 MW today → 4,000 MW by 2029",
            "Tripartite deal signed: first 40 MW already flowing to Bangladesh",
            "10-year agreement to export 10,000 MW to India (2024)",
            "Peak wet-season surplus reached 3,500 MW in 2025",
            "Total revenue from exports: NPR 17.46 billion",
            "Exports to India: NPR 17.19 billion",
            "Exports to Bangladesh: NPR 266.7 million"
        ],
        majorProjects: [
            { name: "Arun-3", capacity: "900 MW", status: "Under Construction", completion: "2027", developer: "SJVN (India)", details: "Run-of-river on Arun River; 70% complete as of Nov 2025; 21.9% free power to Nepal; key for eastern grid export." },
            { name: "Tanahu", capacity: "140 MW", status: "Under Construction", completion: "May 2026", developer: "Tanahu Hydropower Ltd (NEA subsidiary)", details: "Third storage-type project on Seti River; 63% physical progress; $505M cost with ADB/JICA/EIB funding; enhances dry-season supply." },
            { name: "Upper Arun", capacity: "1,063 MW", status: "Pre-Construction", completion: "2031", developer: "NEA (with World Bank funding)", details: "Storage-type on Arun River; financial closure by June 2025, construction starts mid-2025; vital for export peaking." },
            { name: "Dudh Koshi", capacity: "670 MW", status: "Pre-Construction", completion: "2030", developer: "NEA (with ADB funding)", details: "Peaking-run-of-river in Solukhumbu; financial closure end-2024; focuses on dry-season power for domestic/export balance." },
            { name: "Upper Tamakoshi", capacity: "456 MW", status: "Operational", completion: "2023", developer: "NEA", details: "Largest run-of-river project in Nepal; crucial for national grid stability." },
            { name: "Marsyangdi Hydropower Project", capacity: "69 MW", status: "Operational", completion: "2020", developer: "NEA", details: "Significant contribution to local electricity supply and regional exports." }
        ],
        fdiData: [
            { name: 'India', value: 32.3 },
            { name: 'China', value: 10.2 },
            { name: 'Singapore', value: 8.3 },
            { name: 'Others', value: 49.2 },
        ],
        investmentGuidance: [
            "Conduct a feasibility study and research on potential hydropower sites, including hydrological data and economic viability.",
            "Obtain foreign investment approval from the Department of Industry (DOI) for projects under $25 million or the Investment Board Nepal (IBN) for larger projects.",
            "Apply for a survey license from the Department of Electricity Development (DOED).",
            "Register the company at the Office of Company Registrar (OCR) and obtain necessary tax registrations (PAN/VAT).",
            "Secure environmental clearances through an Initial Environmental Examination (IEE) or Environmental Impact Assessment (EIA).",
            "Negotiate and sign a Power Purchase Agreement (PPA) with Nepal Electricity Authority (NEA).",
            "Acquire land and obtain generation license from DOED.",
            "Arrange financing, including debt and equity, and commence construction.",
            "Upon completion, obtain operational licenses and begin power generation and export if applicable."
        ],
        faqs: [
            { question: "What is FDI in Hydropower?", answer: "FDI in Nepal’s hydropower sector refers to foreign investment in power generation, transmission, and distribution projects. Full foreign ownership is allowed under FITTA 2019." },
            { question: "Why Invest in Nepal’s Hydropower?", answer: "Nepal has abundant rivers, growing electricity demand, and a legal framework designed for international investors." },
            { question: "Who handles hydropower investment approvals?", answer: "Investment Board Nepal (IBN) for large projects, Department of Industry (DOI) for smaller ones." },
            { question: "Types of hydropower licenses?", answer: "Survey License, Generation License, Transmission License, Distribution License." },
            { question: "VAT and customs incentives?", answer: "VAT and customs duty exemptions on equipment and machinery for renewable energy projects." },
            { question: "Income tax and tax holidays?", answer: "100% exemption for first 10–15 years depending on project type, 50% for next 5–6 years, with loss carry-forward provisions." },
            { question: "Export opportunities to India and Bangladesh?", answer: "High demand in India and Bangladesh offers huge potential for clean hydropower exports." }
        ]
    },

    tourism: {
        title: "Tourism",
        tagline: "Experience the Top of the World",
        heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
        accent: "text-orange-500",
        bgAccent: "bg-orange-500",
        description: "From luxury wellness retreats in the Himalayas to jungle safaris in Chitwan, Nepal offers high-yield opportunities in hospitality.",
        numbers: [
            { label: "Visitors", value: "1.2", suffix: "M+" },
            { label: "GDP Share", value: "7.9", suffix: "%" },
            { label: "UNESCO Sites", value: "10", suffix: "" },
            { label: "Avg Stay", value: "13", suffix: "Days" },
        ],
        facts: [
            "Government opened 5 new peaks for climbing.",
            "New international airports in Pokhara and Bhairahawa.",
            "Tourism arrivals reached over 1 million in 2025, a 20% increase from 2024.",
            "Strong recovery post-COVID with focus on sustainable and adventure tourism.",
            "New visa policies and enhanced flight connectivity boosting arrivals.",
            "Investment in cultural villages and eco-tourism across all provinces.",
            "Community-based tourism projects empowering local economies.",
            "National Tourism Dialogue 2025 outlining roadmap for resilient growth."
        ],
        majorProjects: [
            { name: "Nijgadh International Airport", capacity: "30M passengers/year", status: "Pre-Construction", completion: "2030", developer: "CAAN", details: "Mega airport in Bara district; environmental clearances ongoing." },
            { name: "Great Himalaya Trail Upgrades", capacity: "N/A", status: "Under Construction", completion: "2027", developer: "NTB & ADB", details: "Enhancements to 1,700km trail network; sustainable trekking focus." },
            { name: "Luxury Eco-Resorts in Chitwan", capacity: "500 rooms", status: "Under Construction", completion: "2026", developer: "Private consortium", details: "High-end resorts with wildlife safaris; $200M investment." },
            { name: "Pokhara Lakeside Development", capacity: "300 rooms", status: "Pre-Construction", completion: "2028", developer: "Private & NTB", details: "Tourism infrastructure including hotels, boating, and cultural centers." },
            { name: "Mount Everest Base Camp Facilities", capacity: "200 beds", status: "Operational", completion: "2025", developer: "NTB & Private", details: "Improved accommodation and rescue infrastructure." }
        ],
        fdiData: [
            { name: 'China', value: 40 },
            { name: 'USA', value: 20 },
            { name: 'India', value: 15 },
            { name: 'Europe', value: 25 },
        ],
        investmentGuidance: [
            "Conduct market research on tourism sub-sectors like hospitality, adventure, or eco-tourism.",
            "Obtain FDI approval from DOI or IBN based on investment size.",
            "Register the company at OCR.",
            "Apply for tourism-specific licenses from Department of Tourism or NTB.",
            "Secure necessary environmental and local clearances.",
            "Register for taxes (PAN/VAT) and comply with labor laws.",
            "Bring in minimum capital (NPR 20M) via approved banking channels.",
            "Partner with local communities for sustainable projects.",
            "Launch operations and market through NTB promotions."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "NPR 20 million (~USD 150,000)." },
            { question: "Foreign ownership allowed?", answer: "Yes, 100% foreign ownership is permitted." },
            { question: "What incentives exist?", answer: "Tax holidays, duty exemptions, and subsidies for eco-tourism." },
            { question: "How long does it take to get a tourism license?", answer: "1–2 months after company registration." },
            { question: "Can hotels export services?", answer: "Yes, international hotel chains can bring foreign management and market services abroad." },
            { question: "Which tourism areas are priority?", answer: "Adventure, cultural, eco-tourism, wellness, and mountain trekking regions are prioritized." },
            { question: "Are land restrictions applied?", answer: "Some national parks and heritage sites have restrictions; private land can be leased or purchased." },
            { question: "Can resorts hire foreign staff?", answer: "Yes, foreign staff can be employed with proper work permits." },
            { question: "Is NEB/NTB support available?", answer: "Yes, Nepal Tourism Board provides marketing and promotion support for investors." },
            { question: "Is investment refundable if project fails?", answer: "Standard corporate and foreign investment laws apply; insurance is recommended." },
            { question: "Can FDI participate in trekking agencies?", answer: "Yes, foreign investors can establish trekking and tour agencies in Nepal." },
            { question: "What is the visa policy for staff?", answer: "Tourism businesses can sponsor work visas for foreign employees under Department of Immigration rules." }
        ]
    },

    manufacturing: {
        title: "Manufacturing",
        tagline: "The Industrial Export Hub",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
        accent: "text-slate-600",
        bgAccent: "bg-slate-600",
        description: "Low labor costs and duty-free access to Indian markets make Nepal an ideal manufacturing base.",
        numbers: [
            { label: "Export Growth", value: "24", suffix: "%" },
            { label: "GDP Share", value: "6.5", suffix: "%" },
            { label: "Labor Cost", value: "Low", suffix: "" },
            { label: "SEZs", value: "7", suffix: "" },
        ],
        facts: [
            "Access to 1.4 Billion consumers in India duty-free.",
            "554 new industries registered in FY 2024/25 with NPR 200B investment.",
            "Focus on green manufacturing and export-oriented units.",
            "Special Economic Zones offering tax incentives.",
            "Growth in non-hydropower manufacturing led by construction materials and agro-processing.",
            "FDI commitments reaching USD 5.5B across sectors.",
        ],
        majorProjects: [
            { name: "Bhairahawa SEZ Expansion", capacity: "500 units", status: "Under Construction", completion: "2027", developer: "SEZ Authority", details: "Focus on garments and electronics; $300M investment." },
            { name: "Green Hydrogen Pilot Plant", capacity: "10 MW", status: "Pre-Construction", completion: "2027", developer: "Private (Chinese FDI)", details: "Pilot for industrial applications." },
            { name: "Kathmandu Industrial Park", capacity: "200 units", status: "Pre-Construction", completion: "2028", developer: "Private consortium", details: "Diversified manufacturing units focusing on agro-processing and light industry." },
            { name: "Biratnagar Textile Hub", capacity: "150 units", status: "Under Construction", completion: "2026", developer: "NEA & Private", details: "Garment manufacturing cluster with export orientation." }
        ],
        fdiData: [
            { name: 'India', value: 60 },
            { name: 'China', value: 30 },
            { name: 'Others', value: 10 },
        ],
        investmentGuidance: [
            "Identify manufacturing sub-sector and conduct feasibility study.",
            "Obtain FDI approval from DOI or IBN.",
            "Register company at OCR and obtain industry registration.",
            "Apply for environmental clearances if required.",
            "Register for taxes (PAN/VAT) and comply with labor regulations.",
            "Secure location in SEZ or industrial park for incentives.",
            "Bring in capital via approved banks and import machinery.",
            "Obtain operational licenses and start production.",
            "Focus on export markets using bilateral trade agreements."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "NPR 20 million (~USD 150,000)." },
            { question: "Foreign ownership allowed?", answer: "Yes, 100% ownership allowed except restricted areas." },
            { question: "What SEZ incentives exist?", answer: "Tax exemptions for 10 years, duty-free imports, and simplified customs procedures." },
            { question: "Is export support available?", answer: "Yes, duty-free access to India and export promotion programs exist." },
            { question: "What licenses are required?", answer: "Industry registration with DOI, SEZ registration if applicable, and environmental clearances." },
            { question: "Can foreign companies set up joint ventures?", answer: "Yes, joint ventures with local or international partners are common." },
            { question: "Are skilled workers available?", answer: "Yes, technical training institutes and industrial parks provide workforce." },
            { question: "How long to start production?", answer: "Typically 6–12 months after approvals and machinery installation." },
            { question: "Are industrial loans available?", answer: "Yes, banks and DFIs provide financing for manufacturing." },
            { question: "What environmental regulations exist?", answer: "All factories require pollution control, waste management, and EIA if large scale." },
            { question: "Can products be exported duty-free?", answer: "Yes, within SEZs or through bilateral trade agreements." },
            { question: "Are incentives available for green manufacturing?", answer: "Yes, renewable energy and energy-efficient investments are encouraged." }
        ]
    },

    it: {
        title: "Information Technology",
        tagline: "Nepal’s Digital Leap",
        heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        accent: "text-blue-600",
        bgAccent: "bg-blue-600",
        description: "Nepal is rapidly emerging as an IT outsourcing and software development hub with competitive labor costs and growing startup ecosystem.",
        numbers: [
            { label: "IT Export Revenue", value: "500", suffix: "M USD" },
            { label: "IT Companies", value: "1.5k", suffix: "" },
            { label: "IT Workforce", value: "50k+", suffix: "" },
            { label: "Growth Rate", value: "18", suffix: "%" },
        ],
        facts: [
            "Government IT parks in Kathmandu and Pokhara.",
            "Tax incentives for software exports and startups.",
            "Focus on AI, fintech, e-commerce, and mobile apps.",
            "Partnerships with international tech firms.",
            "Rapidly growing number of freelancers and IT entrepreneurs."
        ],
        majorProjects: [
            { name: "Kathmandu IT Park", capacity: "100+ companies", status: "Under Construction", completion: "2026", developer: "Government of Nepal", details: "Supports software startups and IT service firms." },
            { name: "Pokhara Tech Hub", capacity: "50+ companies", status: "Pre-Construction", completion: "2027", developer: "Private consortium", details: "Focus on software outsourcing and digital services." },
            { name: "Nepal AI & Innovation Center", capacity: "20 startups", status: "Pre-Construction", completion: "2028", developer: "Private & Gov", details: "AI research and incubation for local startups." },
            { name: "Lalitpur Software Cluster", capacity: "40 companies", status: "Under Construction", completion: "2026", developer: "Private consortium", details: "Specializing in fintech and mobile applications." }
        ],
        fdiData: [
            { name: 'USA', value: 40 },
            { name: 'India', value: 25 },
            { name: 'Europe', value: 20 },
            { name: 'Others', value: 15 },
        ],
        investmentGuidance: [
            "Conduct market research on IT services and software development.",
            "Register company at OCR and obtain DOI approval for FDI.",
            "Apply for IT-related incentives and tax breaks.",
            "Secure office space in IT parks or hubs.",
            "Recruit skilled software engineers and digital talent.",
            "Launch services locally and export IT solutions internationally."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "NPR 10 million (~USD 75,000)." },
            { question: "Foreign ownership?", answer: "100% allowed." },
            { question: "What incentives exist?", answer: "Tax holidays for IT service exports and startup registration benefits." },
            { question: "How long to register a company?", answer: "1–2 weeks with DOI/IBN approval." },
            { question: "Can IT companies hire foreign employees?", answer: "Yes, with proper work permits." },
            { question: "Are IT parks required?", answer: "No, but IT parks provide infrastructure and incentives." },
            { question: "Which sub-sectors are priority?", answer: "Software development, BPO, fintech, AI, digital services." },
            { question: "Can IT services be exported?", answer: "Yes, Nepal’s IT exports are growing rapidly, especially to the USA and India." },
            { question: "Are grants or funding available?", answer: "Startup funding and co-working programs are available via government or private programs." },
            { question: "Is internet infrastructure reliable?", answer: "Yes, fiber networks and 4G/5G expansion cover major urban hubs." },
            { question: "Are cybersecurity regulations strict?", answer: "Yes, data protection laws and IT security standards are enforced for companies." },
            { question: "Are incubators available?", answer: "Yes, government and private incubators support IT startups." }
        ]
    },

    agriculture: {
        title: "Agriculture",
        tagline: "Farming the Future",
        heroImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80",
        accent: "text-green-500",
        bgAccent: "bg-green-500",
        description: "Nepal’s fertile lands and diverse agro-climatic zones make it ideal for high-value agriculture and agribusiness investments.",
        numbers: [
            { label: "Agricultural GDP", value: "27", suffix: "%" },
            { label: "Farmers", value: "3M+", suffix: "" },
            { label: "Irrigated Land", value: "30%", suffix: "" },
            { label: "Agri-Exports", value: "120", suffix: "M USD" },
        ],
        facts: [
            "High-value crops: tea, cardamom, apples.",
            "Emerging organic farming and agro-processing sector.",
            "FDI in agribusiness, cold storage, and value chains.",
            "Government incentives for modern farming technology."
        ],
        majorProjects: [
            { name: "Chitwan Agro-Processing Hub", capacity: "100k tons/year", status: "Pre-Construction", completion: "2026", developer: "Private consortium", details: "Processing and export of fruits and vegetables." },
            { name: "Kaski Organic Vegetable Cluster", capacity: "50k tons/year", status: "Under Construction", completion: "2027", developer: "Private & Gov", details: "Focus on certified organic produce for export." },
            { name: "Sunsari Tea & Cardamom Park", capacity: "30k tons/year", status: "Pre-Construction", completion: "2028", developer: "Private investors", details: "Processing hub for high-value cash crops." }
        ],
        fdiData: [
            { name: 'India', value: 35 },
            { name: 'China', value: 20 },
            { name: 'Europe', value: 25 },
            { name: 'Others', value: 20 },
        ],
        investmentGuidance: [
            "Identify high-value crops and conduct soil/market feasibility.",
            "Register company at OCR and obtain DOI/IBN approvals for FDI.",
            "Secure land and irrigation access.",
            "Apply for agricultural and export incentives.",
            "Invest in cold storage, processing, and logistics.",
            "Establish linkages with domestic and export markets."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "NPR 10 million." },
            { question: "Foreign ownership?", answer: "Yes, 100% allowed." },
            { question: "Are subsidies available?", answer: "Yes, for seeds, fertilizers, machinery, and high-value crops." },
            { question: "Can agribusiness export?", answer: "Yes, Nepal exports fruits, tea, cardamom, and vegetables." },
            { question: "Are organic farms supported?", answer: "Yes, government incentives exist for certified organic production." },
            { question: "What licenses are required?", answer: "Company registration, DOI/IBN approval, agricultural product license." },
            { question: "Can foreign investors acquire land?", answer: "Land lease or joint ventures are permitted; freehold ownership has restrictions." },
            { question: "Are cold storage facilities incentivized?", answer: "Yes, grants and tax benefits are provided for agri-processing infrastructure." },
            { question: "Can investors partner with cooperatives?", answer: "Yes, public-private partnerships with local farmers are encouraged." },
            { question: "Is research and tech supported?", answer: "Yes, government and university collaborations provide technical support." },
            { question: "How long to set up agri-processing?", answer: "Typically 6–12 months depending on scale." },
            { question: "Are export quotas applied?", answer: "No, but phytosanitary and quality standards must be met." }
        ]
    },

    energy: {
        title: "Infrastructure & Non-Hydro Energy",
        tagline: "Building Nepal’s Backbone",
        heroImage: "https://images.unsplash.com/photo-1536408525595-8a6c1d3d71ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        accent: "text-gray-700",
        bgAccent: "bg-gray-700",
        description: "Investment opportunities in roads, bridges, airports, and solar/wind energy projects across Nepal.",
        numbers: [
            { label: "Road Network", value: "30k", suffix: "km" },
            { label: "Airports", value: "54", suffix: "" },
            { label: "Solar/Wind Capacity", value: "150", suffix: "MW" },
            { label: "Urbanization Rate", value: "21", suffix: "%" },
        ],
        facts: [
            "Major road expansion and highway projects ongoing.",
            "Focus on renewable energy beyond hydropower (solar, wind).",
            "Government PPPs for bridges, airports, and smart cities.",
            "FDI incentives in energy transmission and transport infrastructure."
        ],
        majorProjects: [
            { name: "Pokhara International Airport", capacity: "3M passengers/year", status: "Pre-Construction", completion: "2026", developer: "CAAN", details: "Regional hub and tourism boost." },
            { name: "Belt Highway Expansion", capacity: "100 km", status: "Under Construction", completion: "2027", developer: "Government of Nepal", details: "Connectivity improvement and trade facilitation." },
            { name: "Kathmandu Ring Road Upgrade", capacity: "45 km", status: "Under Construction", completion: "2026", developer: "Government of Nepal", details: "Traffic decongestion and urban mobility improvement." },
            { name: "Solar Power Park, Dang", capacity: "50 MW", status: "Pre-Construction", completion: "2028", developer: "Private & Gov", details: "Large-scale solar PV installation for national grid supply." }
        ],
        fdiData: [
            { name: 'China', value: 50 },
            { name: 'India', value: 30 },
            { name: 'Others', value: 20 },
        ],
        investmentGuidance: [
            "Identify priority infrastructure projects.",
            "Obtain FDI approvals and permits from relevant authorities.",
            "Plan financing via PPPs or private investment.",
            "Ensure environmental and social compliance.",
            "Implement and maintain infrastructure with long-term revenue models."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "Varies by project type, usually NPR 50M+." },
            { question: "Foreign ownership allowed?", answer: "Yes, under PPP frameworks." },
            { question: "What licenses are required?", answer: "DOI/IBN approval, environmental clearances, construction permits." },
            { question: "Are PPPs encouraged?", answer: "Yes, government prioritizes PPP models for large infrastructure." },
            { question: "Are solar/wind projects incentivized?", answer: "Yes, via FIT rates and tax exemptions for renewable energy." },
            { question: "How long to complete infrastructure?", answer: "Depends on project size, typically 2–7 years." },
            { question: "Can foreign contractors participate?", answer: "Yes, with appropriate approvals and licensing." },
            { question: "Are tariffs or user fees regulated?", answer: "Yes, tolls and electricity tariffs are regulated by government authorities." },
            { question: "Is environmental compliance strict?", answer: "Yes, all projects require IEEs or EIAs and follow mitigation plans." },
            { question: "Can infrastructure revenues be exported?", answer: "PPP and energy projects can generate foreign exchange via export of energy or services." },
            { question: "Are urban development projects allowed?", answer: "Yes, smart city, roads, bridges, and airports are priority sectors." },
            { question: "Are incentives available for investors?", answer: "Yes, tax exemptions, low-interest loans, and government guarantees are possible." }
        ]
    },

    others: {
        title: "Education & Health",
        tagline: "Investing in Human Capital",
        heroImage: "https://plus.unsplash.com/premium_photo-1661762445818-38f6bae716e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        accent: "text-purple-500",
        bgAccent: "bg-purple-500",
        description: "Nepal is focusing on private sector participation in education and healthcare to improve quality and access.",
        numbers: [
            { label: "Schools", value: "40k", suffix: "" },
            { label: "Hospitals", value: "2.5k", suffix: "" },
            { label: "Literacy Rate", value: "74", suffix: "%" },
            { label: "Healthcare Access", value: "65", suffix: "%" },
        ],
        facts: [
            "Private schools and universities expanding rapidly.",
            "Emerging private healthcare networks and specialty clinics.",
            "Government incentives for FDI in education and health sectors.",
            "Focus on digital education and telemedicine initiatives."
        ],
        majorProjects: [
            { name: "Kathmandu Medical College Expansion", capacity: "500 beds", status: "Under Construction", completion: "2026", developer: "Private FDI", details: "Specialty hospital and research center." },
            { name: "International School Network", capacity: "5 campuses", status: "Pre-Construction", completion: "2027", developer: "Private consortium", details: "Modern education campuses in major cities." },
            { name: "Pokhara Telemedicine Center", capacity: "200 patients/day", status: "Pre-Construction", completion: "2028", developer: "Private & Gov", details: "Remote healthcare access using digital platforms." },
            { name: "Biratnagar Skill & Vocational Institute", capacity: "1,000 students", status: "Under Construction", completion: "2026", developer: "Private consortium", details: "Focus on technical and healthcare skill development." }
        ],
        fdiData: [
            { name: 'India', value: 45 },
            { name: 'USA', value: 25 },
            { name: 'Europe', value: 20 },
            { name: 'Others', value: 10 },
        ],
        investmentGuidance: [
            "Identify gaps in private education and healthcare.",
            "Obtain FDI approval from DOI or IBN.",
            "Register entity at OCR and acquire relevant licenses.",
            "Ensure compliance with Nepal Health and Education regulations.",
            "Invest in modern facilities, telemedicine, or digital learning.",
            "Focus on quality and accessibility for sustainability."
        ],
        faqs: [
            { question: "Minimum FDI?", answer: "NPR 20 million (~USD 150,000)." },
            { question: "Foreign ownership allowed?", answer: "Yes, 100% allowed." },
            { question: "What licenses are required?", answer: "DOI/IBN approval, Ministry of Education/Health registration, local permits." },
            { question: "Are tax incentives available?", answer: "Yes, tax holidays and exemptions for new schools/hospitals." },
            { question: "Can foreign staff be employed?", answer: "Yes, with proper work permits." },
            { question: "Is land acquisition supported?", answer: "Yes, via lease or purchase depending on local laws." },
            { question: "Can schools provide international curricula?", answer: "Yes, with Ministry approval." },
            { question: "Are telemedicine projects allowed?", answer: "Yes, with adherence to health regulations." },
            { question: "How long to set up a facility?", answer: "6–18 months depending on size and approvals." },
            { question: "Are public-private partnerships supported?", answer: "Yes, especially for hospitals and vocational training." },
            { question: "Can investors export educational services?", answer: "Yes, online education services can reach international markets." },
            { question: "Are grants or research incentives available?", answer: "Yes, government and donor programs may provide support." }
        ]
    }
};
