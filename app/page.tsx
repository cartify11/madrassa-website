import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductIntro from '@/components/ProductIntro';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import PlatformPreview from '@/components/PlatformPreview';
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
      <ProductIntro />
      <Overview />
      <PlatformPreview />
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
