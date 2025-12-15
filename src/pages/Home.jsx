import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection/CTASection';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import SectorsSection from '../components/SectorsSection/SectorsSection';
import Startup from '../components/StartupHub/StartupHub';
import SuccessStories from '../components/SuccessStories/SuccessStories';
import WhyNepal from '../components/WhyNepal/WhyNepal';
import { urlFor } from '../sanity/lib/client'; // Adjust path if needed

const Home = () => {
    const [latestArticles, setLatestArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatest = async () => {
            try {
                const response = await fetch(
                    `https://32iguwoj.api.sanity.io/v2025-01-01/data/query/production?query=*[_type == "article"] | order(date desc)[0...3]{_id, title, category, date, shortDesc, coverImage, slug}`
                );
                const data = await response.json();
                setLatestArticles(data.result || []);
            } catch (error) {
                console.error("Failed to load latest articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatest();
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <SectorsSection />
            <WhyNepal />


            {/* Latest Insights Section - Directly added in Home */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                            <TrendingUp className="text-orange-600" size={32} />
                            Latest Insights
                        </h2>
                        <Link
                            to="/insights"
                            className="text-sm font-bold text-gray-600 hover:text-orange-600 flex items-center gap-1 transition-colors"
                        >
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-500 py-16">
                            <p className="text-lg">Loading latest insights...</p>
                        </div>
                    ) : latestArticles.length === 0 ? (
                        <div className="text-center text-gray-500 py-16">
                            <p className="text-lg">No articles available yet.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {latestArticles.map((article) => (
                                <Link
                                    key={article._id}
                                    to={`/article/${article.slug?.current || ''}`}
                                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={
                                                article.coverImage
                                                    ? urlFor(article.coverImage).width(800).height(400).url()
                                                    : 'https://via.placeholder.com/800x400?text=Insight'
                                            }
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">
                                            <Calendar size={14} />
                                            {article.date
                                                ? new Date(article.date).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })
                                                : 'Recent'}
                                            {article.category && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-orange-600">{article.category}</span>
                                                </>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {article.shortDesc || 'Latest strategic analysis from our experts.'}
                                        </p>

                                        <span className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                            Read More{' '}
                                            <ArrowRight
                                                size={16}
                                                className="ml-1 group-hover:translate-x-1 transition-transform"
                                            />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Startup />
            <SuccessStories />

            <CTASection />
        </div>
    );
};

export default Home;