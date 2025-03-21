import Nav from "@/components/layout/Nav";
import AboutSection from "@/content/home/AboutSection";
import Hero from "@/content/home/Hero";
import ProjectsSection from "@/content/home/ProjectsSection";

export default function Home() {
    return (
        <div className="relative">
            <Nav />
            <Hero />
            <AboutSection />
            <ProjectsSection />
        </div>
    )
}
