import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TalhaBio from '@/components/TalhaBio';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import Portals from '@/components/Portals';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Plans from '@/components/Plans';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <Hero />
      <TalhaBio />
      <Overview />
      <Features />
      <Portals />
      <HowItWorks />
      <Benefits />
      <Plans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
