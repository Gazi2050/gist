import { featureList } from "@/constants/data";

const Features = () => {
    return (
        <section id="features" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why Choose Gist?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featureList.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105"
                            >
                                <div className="bg-violet-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
