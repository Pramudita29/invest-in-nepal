// src/pages/StoriesPage.jsx
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const allStories = [
    // HYDROPOWER
    { title: 'Upper Tamakoshi Hydropower (456 MW)', description: 'Nepal’s largest domestically funded hydropower project, fully operational since 2021.', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-red-800 text-white', url: 'https://www.sasec.asia/index.php?page=news&nid=1290&url=upper-tamakoshi-operates' },
    { title: 'Rasuwagadhi Hydropower (111 MW)', description: 'China-backed project boosting cross-border energy cooperation.', image: 'https://images.unsplash.com/photo-1473341304170-9712b40c60bb?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-blue-900 text-white', url: 'https://kathmandupost.com/money/2023/03/15/rasuwagadhi-hydropower-project-nears-completion' },
    { title: 'Sanjen Hydro Projects (78 MW)', description: 'Two cascading plants by Chilime Hydropower, powering the Kathmandu Valley.', image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?w=1200', colorClass: 'bg-cyan-800 text-white', url: 'https://myrepublica.nagariknetwork.com/news/sanjen-hydropower-projects-begin-commercial-operation' },

    // MANUFACTURING & INDUSTRY
    { title: 'Hongshi Shivam Cement', description: 'Nepal-China JV, one of the largest cement plants in South Asia.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-gray-700 text-white', url: 'https://www.globalcement.com/news/itemlist/tag/Hongshi%20Shivam%20Cement' },
    { title: 'Unilever Nepal Factory Expansion', description: 'Global FMCG giant doubles production capacity in Nepal.', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-green-700 text-white', url: 'https://kathmandupost.com/money/2022/07/20/unilever-nepal-to-invest-rs3-5-billion-in-new-factory' },
    { title: 'Asian Paints Nepal', description: 'Major Indian paint manufacturer sets up advanced plant in Hetauda.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-purple-800 text-white', url: 'https://myrepublica.nagariknetwork.com/news/asian-paints-nepal-inaugurates-rs1-2-billion-plant' },

    // TECH & INNOVATION
    { title: 'Fusemachines AI Center', description: 'Nepali-founded AI company training thousands and going global.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-gray-900 text-white', url: 'https://fusemachines.com/' },
    { title: 'Khalti Digital Wallet', description: 'Nepal’s leading fintech platform with over 3 million users.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-indigo-800 text-white', url: 'https://khalti.com/' },
    { title: 'Deerwalk Institute of Technology', description: 'Producing top-tier software engineers for Silicon Valley and Nepal.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-pink-800 text-white', url: 'https://deerwalk.edu.np/' },
    { title: 'CloudFactory (AI Data Labeling)', description: 'Nepali company powering AI for Tesla, Microsoft, and more.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-teal-900 text-white', url: 'https://www.cloudfactory.com/' },

    // TOURISM & HOSPITALITY
    { title: 'Marriott & Sheraton Hotels', description: 'Five-star international chains open in Kathmandu and Pokhara.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-orange-600 text-white', url: 'https://kathmandupost.com/money/2024/01/15/sheraton-kathmandu-opens' },
    { title: 'Hilton Kathmandu', description: 'Global hospitality giant enters Nepal with 170-room luxury hotel.', image: 'https://images.unsplash.com/photo-1542314831-0682f6e04d62?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-amber-700 text-white', url: 'https://myrepublica.nagariknetwork.com/news/hilton-kathmandu-opens-doors-to-guests' },
    { title: 'Pokhara International Airport', description: 'New gateway welcoming direct flights from India, China, and beyond.', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-sky-800 text-white', url: 'https://kathmandupost.com/national/2023/01/01/pokhara-international-airport-comes-into-operation' },

    // HEALTHCARE & EDUCATION
    { title: 'Manipal Teaching Hospital', description: 'Transforming medical education and healthcare in Western Nepal.', image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?w=1200', colorClass: 'bg-teal-700 text-white', url: 'https://kathmandupost.com/miscellaneous/2019/07/22/manipal-teaching-hospital-a-pioneering-medical-institution-in-western-nepal' },
    { title: 'B.P. Koirala Cancer Hospital Expansion', description: 'Major upgrade with Indian grant support for advanced cancer care.', image: 'https://images.unsplash.com/photo-1579684386123-ed2b2b95c413?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-rose-800 text-white', url: 'https://myrepublica.nagariknetwork.com/news/bp-koirala-memorial-cancer-hospital-gets-new-facilities' },
    { title: 'Kathmandu University School of Medicine', description: 'Producing world-class doctors and researchers.', image: 'https://images.unsplash.com/photo-1588776813674-342e3d3f7cbd?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-emerald-800 text-white', url: 'https://kusms.edu.np/' },

    // STARTUPS & INVESTMENT
    { title: 'Tootle & Pathao Ride-Sharing', description: 'Local startups revolutionizing urban transport in Kathmandu.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-violet-800 text-white', url: 'https://tootle.today/' },
    { title: 'Daraz Nepal (Alibaba Group)', description: 'E-commerce giant transforms online shopping in Nepal.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-yellow-700 text-white', url: 'https://www.daraz.com.np/' },
    { title: 'Sastodeal Success Story', description: 'Homegrown e-commerce platform competing with global players.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-lime-800 text-white', url: 'https://www.sastodeal.com/' },
    { title: 'Nepal Investment Mega Bank', description: 'One of Nepal’s fastest-growing commercial banks with nationwide reach.', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-slate-800 text-white', url: 'https://www.nimb.com.np/' },
    { title: 'Chaudhary Group (CG Corp Global)', description: 'Nepal’s first billionaire conglomerate expanding across 40+ countries.', image: 'https://images.unsplash.com/photo-1519389951293-0ab56edafb4e?auto=format&fit=crop&w=1200&q=80', colorClass: 'bg-amber-900 text-white', url: 'https://www.chaudharygroup.com/' }
];

// Reusable Card Component (same beautiful 3D tilt + shine)
const StoryCard = ({ story, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-120, 120], [12, -12]);
    const rotateY = useTransform(x, [-120, 120], [-12, 12]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            viewport={{ once: true }}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className={`relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer h-[560px] ${story.colorClass} transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl`}
        >
            <a href={story.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={story.title} />

            <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-12 pb-16">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-white drop-shadow-2xl">
                    {story.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-lg">
                    {story.description}
                </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
            </div>
        </motion.div>
    );
};

export default function StoriesPage() {
    return (
        <>
            <title>All Success Stories | Nepal Ventures</title>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24">
                <div className="max-w-screen-2xl mx-auto px-8">

                    <div className="text-center mb-20">
                        <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tighter">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-yellow-500">
                                All Success
                            </span>
                            <span className="block text-gray-900">Stories</span>
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            20+ inspiring investments and ventures shaping the future of Nepal.
                        </p>
                    </div>

                    <div className="mb-12">
                        <Link to="/" className="inline-flex items-center gap-3 text-orange-600 font-bold text-lg hover:text-orange-700 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {allStories.map((story, i) => (
                            <StoryCard key={i} story={story} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}