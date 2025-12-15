import { Banknote, Briefcase, FileText, Gavel, Landmark, Scale } from "lucide-react";

export const practiceAreas = [
    {
        id: "mergers-acquisitions",
        icon: Briefcase,
        title: "Mergers and Acquisitions",
        shortDescription: "We deliver maximum stakeholder value by successfully navigating the complex structuring and execution of domestic and global M&A transactions.",
        desc: "We expertly manage the complexities of mergers, acquisitions, and corporate restructurings for maximum value.",
        image: "https://plus.unsplash.com/premium_photo-1664910070114-33ab91630e46?fm=jpg&q=80&w=1080&ixlib=rb-4.0.3",
        contactInfo: {
            phone: "(555) 101-2020",
            email: "ma-inquiries@lawfirm.com"
        },
        keyServices: [
            'Securing Transactional Certainty (Deal Structure & Documentation)',
            'Advanced Cross-Border Due Diligence and Regulatory Clearance',
            'Private Equity and Venture Capital Exit Strategies',
            'Anti-Takeover Defense and Shareholder Proxy Contests',
        ],
        content: (
            <>
                <p>
                    For every transaction, our benchmark is <strong>value creation and definitive closure</strong>. We do not merely process deals; we structure them for optimal post-merger integration, tax efficiency, and regulatory success. We partner with CEOs and Boards to navigate the most critical decisions, ensuring that legal strategy perfectly aligns with core business objectives.
                </p>
                <p>
                    Our integrated due diligence approach goes beyond standard legal review. We deploy specialized teams across IP, data privacy, competition, and labor law from day one, anticipating regulatory hurdles and <strong>proactively engineering solutions</strong> that secure necessary approvals and stabilize the acquired entity.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Defining Success in M&A</h3>
                <ul>
                    <li><strong>Exit Optimization:</strong> Tailoring structures to maximize returns for private equity and institutional investors.</li>
                    <li><strong>Regulatory Foresight:</strong> Pre-empting anti-trust and CFIUS concerns to prevent deal collapse.</li>
                    <li><strong>Seamless Transition:</strong> Ensuring transaction terms minimize litigation exposure post-closing.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Our Methodology</h3>
                <p>We leverage a proprietary methodology that systematically addresses the three phases of complex M&A:</p>
                <ul>
                    <li><strong>Phase I (Inception):</strong> Strategic review, Letter of Intent (LOI) negotiation, and initial risk assessment.</li>
                    <li><strong>Phase II (Execution):</strong> Definitive agreement drafting, high-volume diligence, and securing regulatory consents.</li>
                    <li><strong>Phase III (Completion):</strong> Closing mechanics, post-merger integration guidance, and necessary legal filings.</li>
                </ul>
            </>
        ),
    },
    {
        id: "disputes",
        icon: Gavel,
        title: "Dispute Resolution and Litigation",
        shortDescription: "We champion client interests in complex, multi-jurisdictional disputes, turning high-stakes litigation into strategic advantage.",
        desc: "Our elite advocacy and strategic counsel resolve high-stakes commercial litigation, international arbitration, and regulatory enforcement matters.",
        image: "https://images.pexels.com/photos/7657083/pexels-photo-7657083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        contactInfo: {
            phone: "(555) 303-4040",
            email: "disputes@lawfirm.com"
        },
        keyServices: [
            'Global Coordinated Litigation Strategy and Case Management',
            'International Arbitration (Focus on Energy and Investment Treaty)',
            'Freezing Orders and Cross-Border Asset Tracing/Recovery',
            'Responding to Grand Jury Subpoenas and DOJ/FCA Investigations',
        ],
        content: (
            <>
                <p>
                    When commercial integrity or substantial assets are on the line, clients turn to us for <strong>decisive action and proven results</strong>. Our advocates are recognized for their courtroom tenacity and their ability to distill highly complex facts into compelling, persuasive legal arguments. We treat every dispute as a non-negotiable opportunity to protect and advance our client's position.
                </p>
                <p>
                    In international arbitration, our expertise extends beyond procedural rules; we deeply understand the cultural and political sensitivities that often define investment treaty and major construction disputes. We build teams fluent in multi-lingual evidence and diverse legal systems to deliver outcomes in the world’s most crucial venues.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Our Competitive Edge</h3>
                <ul>
                    <li><strong>Early Exit:</strong> Identifying and leveraging procedural gaps for early case dismissal or favorable settlement.</li>
                    <li><strong>Global Coordination:</strong> Managing litigation across five continents simultaneously without compromise.</li>
                    <li><strong>Reputational Defense:</strong> Strategic handling of media and public relations impact during high-profile cases.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Critical Services</h3>
                <ul>
                    <li><strong>Arbitration:</strong> Full-cycle representation from drafting clauses to award challenge and enforcement.</li>
                    <li><strong>Investigations:</strong> Leading internal and regulatory investigations to pre-empt formal charges and minimize liability.</li>
                </ul>
            </>
        ),
    },
    {
        id: "banking-finance",
        icon: Banknote,
        title: "Banking and Financial Regulation",
        shortDescription: "Securing financial institutions' market integrity and capital growth through rigorous regulatory compliance and innovative transaction structuring.",
        desc: "We provide tailored advice to financial institutions, investors, and corporate borrowers on all aspects of finance and regulation.",
        image: "https://images.pexels.com/photos/6801643/pexels-photo-6801643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        contactInfo: {
            phone: "(555) 505-6060",
            email: "banking@lawfirm.com"
        },
        keyServices: [
            'Acquisition Finance and Leveraged Buyouts (LBOs)',
            'Crisis Management and Regulatory Enforcement Defense',
            'Derivatives, Securitization, and Structured Products',
            'Proactive Compliance Architecture (AML, KYC, Sanctions)',
        ],
        content: (
            <>
                <p>
                    The financial landscape demands more than mere compliance—it requires <strong>strategic adaptability</strong>. We serve as trusted advisors to the world’s most sophisticated financial actors, helping them structure capital, manage systemic risk, and navigate the turbulent waters of global financial regulation. Our goal is to enable market participation, not restrict it.
                </p>
                <p>
                    Our transactional lawyers are experts in complex debt products, acquisition finance, and innovative lending platforms. Simultaneously, our regulatory specialists ensure that every strategy is compliant with the constantly shifting requirements of central banks and international financial bodies, protecting the client's license to operate.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Risk and Opportunity</h3>
                <ul>
                    <li><strong>Capital Structuring:</strong> Optimizing balance sheets for Basel III/IV requirements and market efficiency.</li>
                    <li><strong>Crisis Defense:</strong> Immediate deployment of teams to handle unexpected regulatory audits or market events.</li>
                    <li><strong>FinTech Leadership:</strong> Advising on the legal framework for blockchain, decentralized finance (DeFi), and digital asset trading platforms.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Key Differentiators</h3>
                <ul>
                    <li><strong>Market Access:</strong> Facilitating access to global capital markets through compliant securities offerings.</li>
                    <li><strong>Distressed Assets:</strong> Representing purchasers and sellers of distressed debt and non-performing loans.</li>
                </ul>
            </>
        ),
    },
    {
        id: "commercial-litigation",
        icon: FileText,
        title: "Commercial Litigation",
        shortDescription: "We win commercial disputes. Our team is strategically prepared for trial, securing decisive results through superior advocacy and case strategy.",
        desc: "We offer pragmatic, innovative solutions to our clients’ most daunting commercial challenges in state and federal courts.",
        image: "https://www.barnespc.com/wp-content/uploads/2025/04/shutterstock_2056444919-scaled.jpg",
        contactInfo: {
            phone: "(555) 707-8080",
            email: "litigation@lawfirm.com"
        },
        keyServices: [
            'Complex Contract Enforcement and Defense Against Breach Claims',
            'Business Conspiracy and Corporate Fraud Prosecution/Defense',
            'Emergency Injunctive Relief and Temporary Restraining Orders (TROs)',
            'Corporate Veil Piercing and Shareholder Fiduciary Duty Claims',
        ],
        content: (
            <>
                <p>
                    Our reputation in Commercial Litigation is built on our <strong>unwavering commitment to trial readiness</strong>. We understand that the most favorable settlements are negotiated from a position of undeniable strength. Our strategy is to prepare every case for a successful verdict, which invariably maximizes leverage at the negotiating table.
                </p>
                <p>
                    We handle the most significant disputes that challenge the very existence or reputation of a business, including shareholder derivative actions, corporate governance deadlocks, and high-value business torts. Our focus remains laser-sharp: <strong>efficiently achieving the best commercial outcome</strong> while managing litigation costs and minimizing business interruption.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Trial-Ready Advantages</h3>
                <ul>
                    <li><strong>Jury Insight:</strong> Deep understanding of jury psychology and local court dynamics to tailor case presentation.</li>
                    <li><strong>Expert Witness Strategy:</strong> Leveraging networks of industry-leading experts to validate critical elements of the case.</li>
                    <li><strong>Aggressive Discovery:</strong> Using forensic technology and sophisticated document review to uncover decisive evidence.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">When Time is Critical</h3>
                <ul>
                    <li><strong>Emergency Relief:</strong> Rapidly seeking or defending against injunctions and protective orders to safeguard assets or operations.</li>
                    <li><strong>Mediation Mastery:</strong> Guiding clients through high-stakes mediation to secure confidential, binding, and commercially favorable resolutions.</li>
                </ul>
            </>
        ),
    },
    {
        id: "constitutional-law",
        icon: Landmark,
        title: "Constitutional and Administrative Law",
        shortDescription: "Defining legal precedent in high-impact appellate litigation, judicial review, and challenges to government regulatory authority.",
        desc: "We provide authoritative counsel on the proper scope of state and federal power and navigate complex administrative agency rulemaking.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Supreme_Court_of_Nepal_%282018%29.jpg",
        contactInfo: {
            phone: "(555) 909-1010",
            email: "policy@lawfirm.com"
        },
        keyServices: [
            'Appellate Advocacy before the Supreme Court and Federal Circuits',
            'Challenges to Agency Rulemaking (Chevron Deference, APA)',
            'First Amendment, Equal Protection, and Due Process Litigation',
            'Public Policy Counsel and Legislative Scrutiny',
        ],
        content: (
            <>
                <p>
                    Our Constitutional Law practice is reserved for matters that <strong>shape legal doctrine and public policy</strong>. We operate at the highest levels of the judiciary, representing clients whose interests are directly impacted by the application or interpretation of the nation's fundamental laws. Our role is to secure rights and define the boundaries of government action.
                </p>
                <p>
                    We are masters of judicial review, challenging administrative regulations that are arbitrary, capricious, or exceed statutory authority. By dissecting the actions of powerful administrative agencies, we protect corporate and individual liberties from regulatory overreach.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Appellate Excellence</h3>
                <ul>
                    <li><strong>Amicus Brief Strategy:</strong> Crafting persuasive "friend of the court" briefs to influence pending high-court decisions.</li>
                    <li><strong>Oral Argument:</strong> Elite advocacy known for its clarity and command of complex constitutional principles.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Administrative Law Expertise</h3>
                <ul>
                    <li><strong>APA Compliance:</strong> Guiding clients through the Administrative Procedure Act rulemaking process to ensure fair and lawful outcomes.</li>
                    <li><strong>Regulatory Defense:</strong> Litigating against unwarranted penalties or enforcement actions initiated by federal agencies.</li>
                </ul>
            </>
        ),
    },
    {
        id: "projects-financing",
        icon: Scale,
        title: "Projects and Infrastructure Financing",
        shortDescription: "Structuring capital and allocating risk for large-scale infrastructure and energy projects to guarantee successful asset delivery and long-term viability.",
        desc: "We provide strategic legal counsel and support throughout the entire lifecycle of major infrastructure and energy projects.",
        image: "https://www.cfr.org/sites/default/files/image/2023/09/Infrastructure_BG.jpg",
        contactInfo: {
            phone: "(555) 202-3030",
            email: "projects@lawfirm.com"
        },
        keyServices: [
            'Project Bankability and Capital Structure Optimization',
            'Negotiation of Complex EPC (Engineering, Procurement, Construction) Contracts',
            'Public-Private Partnership (PPP) Drafting and Negotiation',
            'Acquisition, Development, and Permitting of Renewable Energy Assets',
        ],
        content: (
            <>
                <p>
                    The successful delivery of multi-billion dollar infrastructure requires absolute legal certainty. We are the architects of the complex legal and financial frameworks that allow major projects—from power plants to transit systems—to secure capital and move forward. Our primary focus is on <strong>robust risk allocation</strong> to ensure the asset is built on time and budget.
                </p>
                <p>
                    We specialize in structuring the relationship between sponsors, lenders, and contractors. By meticulously drafting and negotiating construction contracts (like EPC and O&M), we shield our clients from unforeseen liabilities and provide the necessary security for financial close.
                </p>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">De-Risking Project Delivery</h3>
                <ul>
                    <li><strong>Contractual Precision:</strong> Negotiating EPC agreements that lock in performance guarantees and penalty structures.</li>
                    <li><strong>Financial Security:</strong> Creating security packages that satisfy international lenders and maximize debt capacity.</li>
                    <li><strong>Regulatory Streamlining:</strong> Expediting complex permitting processes to maintain critical path schedules.</li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8 mb-4">Investment Focus</h3>
                <ul>
                    <li><strong>Renewables:</strong> Counseling on power purchase agreements (PPAs) and regulatory incentive structures for clean energy.</li>
                    <li><strong>Asset Disposal:</strong> Advising on the strategic sale or acquisition of operational infrastructure assets.</li>
                </ul>
            </>
        ),
    },
];