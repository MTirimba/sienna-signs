import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import CtaBand from '@/components/CtaBand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Process />
      <Gallery />
      <Pricing />
      <Testimonial />
      <CtaBand />
      <Footer />
    </main>
  )
}