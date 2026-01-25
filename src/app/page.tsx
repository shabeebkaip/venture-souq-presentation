import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ClientsSection from '@/components/sections/ClientsSection'
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection'
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection'
import PackagesSection from '@/components/sections/PackagesSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ClientsSection />
      <DifferentiatorsSection />
      <ServicesOverviewSection />
      {/* <PackagesSection /> */}
      <CTASection />

    </main>
  )
}
