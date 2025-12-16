import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'
import CallToAction from '@/components/sections/home/CallToAction'
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
      <section id="cta">
        <CallToAction />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
