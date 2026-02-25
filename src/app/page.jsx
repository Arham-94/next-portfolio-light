import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Marquee from "@/components/Marquee";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="wholePage">
        <Background />
        <Navbar />
        <Hero />
        <Skills />
        <ProjectsSection />
        <Certificate />
      </main>
    </>
  );
}
