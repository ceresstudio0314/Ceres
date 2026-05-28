import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedGames } from '@/components/home/FeaturedGames'
import { StudioIntro } from '@/components/home/StudioIntro'
import { TrailerSection } from '@/components/home/TrailerSection'
import { PartnerLogos } from '@/components/home/PartnerLogos'
import { CareersCTA } from '@/components/home/CareersCTA'
import { NewsletterSection } from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedGames />
      <StudioIntro />
      <TrailerSection />
      {/* <CareersCTA /> */}
      <PartnerLogos />
      <NewsletterSection />
    </>
  )
}
