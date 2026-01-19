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
      <PackagesSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 VentureSouq. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
