import Hero from "@/content/home/hero-section";
import ProjectsSection from "@/content/home/projects-section";
import AboutSection from "@/content/home/about-section";
import Footer from "@/components/layout/Footer";
import NavBar from '@/components/layout/NavBar';

export default function Home() {
    return (
        <div className="relative">
            <NavBar navbarDisplay='absolute'/>
            <Hero />
            <ProjectsSection />
            <AboutSection />
            <Footer />
        </div>
    )
}
