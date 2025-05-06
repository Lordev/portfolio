import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import ProjectShowcase from '@/content/projects/showcase/ProjectShowcase';
import ProjectSidebar from '@/content/projects/sidebar';
import projectsData from '@/lib/data/projectsData';
import SideBarProjectLinks from '@/content/projects/sidebar/components/SideBarProjectLinks';

function getNextProjects(currentIndex: number, count: number) {
    return Array.from({ length: count }, (_, i) => {
        const nextIndex = (currentIndex + i + 1) % projectsData.length;
        const project = projectsData[nextIndex];
        return {
            title: project.title,
            slug: project.slug,
            thumbnail: project.thumbnail,
        };
    });
}

export default async function Page({ params }: {   params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = projectsData.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl">Project not found</h1>
            </div>
        );
    }

    const currentIndex = projectsData.findIndex(p => p.slug === slug);
    const otherProjectsLinks = getNextProjects(currentIndex, 2);

    return (
        <>
            <div className="relative z-10 bg-background border-b border-neutral-800 lg:pb-120" id="page">
                <NavBar navbarDisplay='sticky' />
                <div className="row in-container max-lg:flex max-lg:flex-col lg:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-x-24">
                    <ProjectSidebar project={project} otherProjectsLinks={otherProjectsLinks} />
                    <ProjectShowcase project={project} />
                    <div className="lg:hidden lg:py-120 py-80">
                        <SideBarProjectLinks otherProjectsLinks={otherProjectsLinks} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
