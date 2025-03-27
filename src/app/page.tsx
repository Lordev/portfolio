import Nav from "@/components/layout/Nav";
import Hero from "@/content/home/hero-section";
import AboutSection from "@/content/home/AboutSection";
import ProjectsSection from "@/content/home/ProjectsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Nav />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <Footer />
        </div>
    )
}
