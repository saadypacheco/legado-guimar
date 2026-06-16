import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import VisionSection from '@/components/VisionSection'
import PilaresSection from '@/components/PilaresSection'
import TimelineSection from '@/components/TimelineSection'
import FasePreviewSection from '@/components/FasePreviewSection'
import MapSection from '@/components/MapSection'
import IdeasSection from '@/components/IdeasSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <VisionSection />
      <PilaresSection />
      <TimelineSection />
      <FasePreviewSection />
      <MapSection />
      <IdeasSection />
      <CTASection />
      <Footer />
    </main>
  )
}
