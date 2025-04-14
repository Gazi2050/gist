import PublicCard from './PublicCard';
import { Project } from '@/constants/type';

const TrendingProjects = () => {

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending Projects</h2>
                    <a href="#" className="text-violet-400 hover:underline">
                        View all
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* {Projects?.map((project: Project) => (
                        <PublicCard key={project._id} project={project} />
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default TrendingProjects;
