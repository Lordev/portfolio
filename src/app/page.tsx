import Nav from "@/components/layout/Nav"
import Hero from "@/sections/home/Hero"
import AboutSection	 from "@/sections/home/AboutSection"


export default function Home() {
    return (
        <div className="relative">
            <Nav />
            <Hero />
            <AboutSection />
        </div>
    )
}
