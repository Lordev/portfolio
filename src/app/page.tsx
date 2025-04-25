import Hero from "@/content/home/hero-section";
import ProjectsSection from "@/content/home/projects-section";
import AboutSection from "@/content/home/about-section";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <ProjectsSection />
            <AboutSection />
            <Footer />
        </div>
    )
}
