'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Section from '@/components/Section'

export default function HeroSection() {
  return (
    <Section gradient className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D6B15E]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D6B15E]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#F3E7C9]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric Patterns */}
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D6B15E' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M20 40L40 20M0 20L20 0' stroke='%23F3E7C9' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D6B15E08_1px,transparent_1px),linear-gradient(to_bottom,#D6B15E08_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        
        {/* Radial Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, #D6B15E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Luxury Ornamental Corners */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L200,0 L200,20 L20,20 L20,200 L0,200 Z' fill='%23D6B15E'/%3E%3Cpath d='M0,40 L160,40 L160,60 L60,60 L60,160 L40,160 L40,40 Z' fill='%23F3E7C9'/%3E%3C/svg%3E")`
        }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.04] rotate-180" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L200,0 L200,20 L20,20 L20,200 L0,200 Z' fill='%23D6B15E'/%3E%3Cpath d='M0,40 L160,40 L160,60 L60,60 L60,160 L40,160 L40,40 Z' fill='%23F3E7C9'/%3E%3C/svg%3E")`
        }} />
        
        {/* Animated Dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#D6B15E]/40 rounded-full animate-float" />
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-[#F3E7C9]/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#D6B15E]/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#D6B15E]/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#F3E7C9]/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
        
        {/* Subtle Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F3E7C9]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/10 to-transparent" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,10,0.4)_100%)]" />
      </div>
      
      <div className="text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Logo/Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="glass px-6 py-2 rounded-full inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Trusted Business Partner</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-linear-to-r from-[#F3E7C9] via-[#D6B15E] to-[#8B6B2D] bg-clip-text text-transparent leading-tight text-shadow-lg ">
            VentureSouq
          </h1>
          
          <div className="space-y-3">
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-200 font-light tracking-wide">
              Business Setup & Expansion Partner
            </p>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              in Saudi Arabia
            </p>
          </div>
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-3 max-w-5xl mx-auto"
        >
          {['Idea', 'Licence', 'Office', 'Hiring', 'Launch'].map((step, index) => (
            <div key={step} className="flex items-center gap-2 md:gap-3">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                className="group"
              >
                <div className="relative px-6 py-3 rounded-lg border border-[#D6B15E]/20 bg-[#D6B15E]/5 hover:border-[#D6B15E]/40 hover:bg-[#D6B15E]/10 transition-all duration-300">
                  <span className="flex items-center gap-2.5 text-base md:text-lg font-medium text-[#F3E7C9] group-hover:text-[#D6B15E] transition-colors">
                    <span className="text-xs text-[#D6B15E]/60 font-bold">{index + 1}</span>
                    {step}
                  </span>
                </div>
              </motion.div>
              {index < 4 && (
                <ArrowRight className="hidden md:block w-4 h-4 text-[#D6B15E]/30" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-6 md:p-8 rounded-2xl backdrop-blur-xl">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Helping <span className="text-[#D6B15E] font-semibold">founders</span>, <span className="text-[#F3E7C9] font-semibold">SMEs</span>, and <span className="text-[#D6B15E] font-semibold">investors</span> build businesses in Saudi Arabia—faster and with full compliance
            </p>
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 text-gray-400 pt-8"
        >
          {[
            { city: 'Riyadh', label: 'Capital Region' },
            { city: 'Jeddah', label: 'Western Region' },
            { city: 'Dammam', label: 'Eastern Region' }
          ].map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <MapPin className="w-5 h-5 text-[#D6B15E]/60 group-hover:text-[#D6B15E] transition-colors" />
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {location.city}
                </div>
                <div className="text-xs text-gray-500">
                  {location.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-12"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</div>
            <div className="w-px h-12 bg-linear-to-b from-[#D6B15E]/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
