// src/data/reasons.js
import reason1 from '../assets/images/reason1.png';
import reason2 from '../assets/images/reason2.png';
import reason3 from '../assets/images/reason3.png';
import reason4 from '../assets/images/reason4.png';
import reason5 from '../assets/images/reason5.png';

export const reasons = [
    {
        id: 'trade-agreements',
        title: 'Trade Agreements & Treaties',
        shortDescription: '11 DTAA | 6 BIPPA | Full access to India + China + EU markets',
        image: reason1,
        stats: [
            { label: "Trade Agreements", value: 18, suffix: "", prefix: "" },
            { label: "Countries Covered", value: 28, suffix: "", prefix: "" },
            { label: "Market Access", value: 3.2, suffix: "B", prefix: "" },
            { label: "Export Growth 2020–2025", value: 285, suffix: "%", prefix: "+" },
        ],
        comparison: [
            { country: "Nepal", value: 96 },
            { country: "Vietnam", value: 88 },
            { country: "Bangladesh", value: 72 },
            { country: "Sri Lanka", value: 61 },
        ],
        content: [
            { heading: "Regional & Global Memberships", text: "Nepal is an active member of SAARC, BIMSTEC, WTO, MIGA, UNESCAP, UNCTAD, and participates in China's Belt and Road Initiative (BRI)." },
            { heading: "Bilateral Investment Protection (BIPPA)", text: "Signed with Finland, France, Germany, United Kingdom, Mauritius, and India — ensuring legal protection and fair treatment of foreign investments." },
            { heading: "Double Taxation Avoidance Agreements (DTAA)", text: "With 11 countries: Austria, Bangladesh, China, India, Mauritius, Norway, Pakistan, Qatar, South Korea, Sri Lanka, and Thailand — preventing double taxation and promoting cross-border investment." },
            { heading: "Special Trade Access", text: "Treaty of Trade & Transit with India | Transit & Transport Agreement with China — providing seamless market access to over 2.8 billion consumers." }
        ]
    },

    {
        id: 'labour-availability',
        title: 'Abundant & Cost-Effective Labour',
        shortDescription: '57% working-age | 68% cheaper than Vietnam | 3M+ skilled workers ready',
        image: reason2,
        stats: [
            { label: "Working Age Population", value: 57, suffix: "%", prefix: "" },
            { label: "Monthly Wage (Manufacturing)", value: 185, suffix: " USD", prefix: "~" },
            { label: "vs Vietnam", value: 68, suffix: "% lower", prefix: "" },
            { label: "English Proficiency Rank (Asia)", value: 12, suffix: "/30", prefix: "#" },
        ],
        comparison: [
            { country: "Nepal", value: 185 },
            { country: "Vietnam", value: 580 },
            { country: "Bangladesh", value: 310 },
            { country: "India", value: 420 },
        ],
        content: [
            { heading: "Young & Growing Workforce", text: "57% of Nepal’s population is of working age (15–59 years), one of the youngest labor pools in Asia." },
            { heading: "Competitive Wage Advantage", text: "Labor costs significantly lower than regional peers — ideal for manufacturing, IT-BPM, and light industry." },
            { heading: "High Adaptability & Skills", text: "English-speaking talent pool, strong work ethic, and rapid skill acquisition in technical and service sectors." },
            { heading: "Social Security Framework", text: "Comprehensive labor laws and social security provisions ensure stable industrial relations." }
        ]
    },

    {
        id: 'strategic-advantages',
        title: 'Strategic Location & Market Access',
        shortDescription: '2.8B consumers next door | Duty-free to India, China, EU | GSP+ to US',
        image: reason3,
        stats: [
            { label: "Total Market Access", value: 2.8, suffix: "B", prefix: "" },
            { label: "Duty-Free Markets", value: 4, suffix: "", prefix: "" },
            { label: "Logistics Cost to India", value: 0.12, suffix: " USD/kg", prefix: "~" },
            { label: "Export Growth to India", value: 420, suffix: "%", prefix: "+" },
        ],
        comparison: [
            { country: "Nepal", value: 100 },
            { country: "Vietnam", value: 78 },
            { country: "Cambodia", value: 65 },
            { country: "Myanmar", value: 52 },
        ],
        content: [
            { heading: "Gateway Between Two Giants", text: "Perfectly positioned between India (1.4B) and China (1.4B) — total addressable market of over 2.8 billion consumers." },
            { heading: "Duty-Free Access to India", text: "Open border and full duty-free, quota-free access to the Indian market under the India-Nepal Treaty of Trade." },
            { heading: "Preferential Access to China & EU", text: "8,000+ products duty-free to China | All exports (except arms) duty-free and quota-free to the European Union." },
            { heading: "US Market Access", text: "77 product categories enjoy duty-free entry to the United States until 2026 under GSP-like provisions." }
        ]
    },

    {
        id: 'visa-services',
        title: 'Investor-Friendly Visa Regime',
        shortDescription: 'Visa on Arrival | 5-Year Business Visa | Residential Visa at USD 1M',
        image: reason4,
        stats: [
            { label: "Visa on Arrival Countries", value: 102, suffix: "", prefix: "" },
            { label: "Business Visa Validity", value: 5, suffix: " years", prefix: "" },
            { label: "Residential Visa Threshold", value: 1, suffix: "M USD", prefix: "" },
            { label: "Processing Time", value: 48, suffix: " hrs", prefix: "less than " },
        ],
        comparison: [
            { country: "Nepal", value: 95 },
            { country: "Thailand", value: 82 },
            { country: "Malaysia", value: 78 },
            { country: "Indonesia", value: 65 },
        ],
        content: [
            { heading: "Tourist Visa on Arrival", text: "Available at all international entry points for citizens of 100+ countries." },
            { heading: "Business & Non-Tourist Visa", text: "Fast-track issuance for foreign investors, executives, and skilled professionals." },
            { heading: "Residential Visa for Major Investors", text: "Long-term residential visa granted to foreign investors committing USD 1 million or more." },
            { heading: "Family Inclusion", text: "Spouses and dependent children of investors are eligible for the same visa category." }
        ]
    },

    {
        id: 'investor-friendly-policy',
        title: 'Progressive Investment Policy',
        shortDescription: '100% FDI | NPR 20M min | Full repatriation | 10-year tax holiday in SEZs',
        image: reason5,
        stats: [
            { label: "FDI Allowed", value: 100, suffix: "%", prefix: "" },
            { label: "Min. Investment (Non-ICT)", value: 20, suffix: "M NPR", prefix: "" },
            { label: "Profit Repatriation", value: 100, suffix: "%", prefix: "" },
            { label: "Tax Holiday (SEZ)", value: 10, suffix: " years", prefix: "" },
        ],
        comparison: [
            { country: "Nepal", value: 94 },
            { country: "Vietnam", value: 88 },
            { country: "Indonesia", value: 79 },
            { country: "India", value: 71 },
        ],
        content: [
            { heading: "Liberalized FDI Regime", text: "100% foreign ownership allowed in most sectors | Minimum threshold reduced to NPR 20 million (no limit for ICT)." },
            { heading: "No Expropriation Risk", text: "Constitutional guarantee against nationalization of foreign-invested enterprises." },
            { heading: "Profit & Capital Repatriation", text: "Full repatriation of dividends, profits, and capital allowed after tax compliance." },
            { heading: "Incentives & Benefits", text: "Cash grants for export industries | Tax holidays in SEZs and priority sectors | Land lease up to 50 years | Duty exemptions on capital goods." }
        ]
    }
];