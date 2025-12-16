import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'
import Reviews from '@/components/sections/home/Reviews'
import CTA from '@/components/sections/home/CTA'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
