'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Sparkles, Crown } from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'

export default function PackagesSection() {
  const packages = [
    {
      name: 'Starter Package',
      subtitle: 'For early-stage founders',
      tag: 'Foundation',
      accent: 'soft',
      features: ['Consultation + roadmap', 'Setup & registration guidance', 'Basic support'],
    },
    {
      name: 'Launch Package',
      subtitle: 'For serious businesses ready to operate',
      tag: 'Most Popular',
      accent: 'gold',
      popular: true,
      features: ['Setup + office + hiring support', 'Documentation + compliance checklist', 'Tech setup assistance'],
    },
    {
      name: 'Turnkey Package',
      subtitle: 'Full end-to-end setup',
      tag: 'Premium',
      accent: 'darkgold',
      features: ['Complete end-to-end setup', 'Recruitment, vendors, systems', 'Launch + month support'],
    },
    {
      name: 'Monthly Retainer',
      subtitle: 'For ongoing operations & support',
      tag: 'Ongoing',
      accent: 'neutral',
      features: ['Renewals + compliance', 'Vendor & HR support', 'Tech updates and optimisation'],
    },
  ]

  const accentStyles: Record<
    string,
    {
      border: string
      bg: string
      icon: string
      tag: string
      glow: string
    }
  > = {
    soft: {
      border: 'border-white/10',
      bg: 'bg-white/3',
      icon: 'text-gray-200',
      tag: 'bg-white/10 text-gray-200',
      glow: 'bg-white/5',
    },
    gold: {
      border: 'border-[#D6B15E]/30',
      bg: 'bg-linear-to-b from-[#D6B15E]/16 via-white/4 to-transparent',
      icon: 'text-[#D6B15E]',
      tag: 'bg-[#D6B15E]/20 text-[#D6B15E]',
      glow: 'bg-[#D6B15E]/16',
    },
    darkgold: {
      border: 'border-[#D6B15E]/18',
      bg: 'bg-white/3',
      icon: 'text-[#D6B15E]',
      tag: 'bg-white/10 text-[#D6B15E]',
      glow: 'bg-[#D6B15E]/10',
    },
    neutral: {
      border: 'border-white/10',
      bg: 'bg-white/2',
      icon: 'text-gray-300',
      tag: 'bg-white/10 text-gray-300',
      glow: 'bg-white/5',
    },
  }

  return (
    <Section className="relative overflow-hidden">
      {/* Fresh background (different mood) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* stage glow */}
        <div className="absolute -top-44 left-1/4 h-[520px] w-[520px] rounded-full bg-[#D6B15E]/12 blur-[160px]" />
        <div className="absolute -bottom-44 right-1/4 h-[560px] w-[560px] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
          >
            Packages
          </motion.div>

          <SlideHeading className="mt-6">
            Choose a package that fits your
            <span className="text-[#D6B15E]"> business stage</span>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Start light, launch properly, or go fully turnkey — we scale the support based on complexity and speed.
          </motion.p>
        </div>

        {/* Package Ladder Layout */}
        <div className="mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Left column */}
          <div className="space-y-6">
            {[packages[0], packages[1]].map((pkg, index) => {
              const s = accentStyles[pkg.accent]
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative rounded-[28px] border ${s.border} ${s.bg} p-7 overflow-hidden`}
                >
                  {/* glow */}
                  <div
                    className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-[95px] ${s.glow}`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase ${s.tag}`}>
                        {pkg.popular ? (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            {pkg.tag}
                          </>
                        ) : (
                          pkg.tag
                        )}
                      </div>

                      <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                        {pkg.name}
                      </h3>
                      <p className="mt-2 text-gray-300/80">{pkg.subtitle}</p>
                    </div>

                    <div
                      className={`h-12 w-12 rounded-2xl border border-white/10 bg-black/20 flex items-center justify-center`}
                    >
                      <ArrowRight className={`w-5 h-5 ${s.icon}`} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${s.icon}`} />
                        <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* highlight line */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              )
            })}
          </div>

          {/* Middle connector (visual ladder spine) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[2px] bg-linear-to-b from-transparent via-white/15 to-transparent">
              <div className="absolute left-1/2 top-[12%] -translate-x-1/2 h-3 w-3 rounded-full bg-[#D6B15E] shadow-[0_0_0_8px_rgba(214,177,94,0.14)]" />
              <div className="absolute left-1/2 top-[50%] -translate-x-1/2 h-3 w-3 rounded-full bg-[#D6B15E] shadow-[0_0_0_8px_rgba(214,177,94,0.14)]" />
              <div className="absolute left-1/2 top-[88%] -translate-x-1/2 h-3 w-3 rounded-full bg-white/30 shadow-[0_0_0_8px_rgba(255,255,255,0.06)]" />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {[packages[2], packages[3]].map((pkg, index) => {
              const s = accentStyles[pkg.accent]
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative rounded-[28px] border ${s.border} ${s.bg} p-7 overflow-hidden`}
                >
                  <div
                    className={`absolute -top-24 -left-24 h-56 w-56 rounded-full blur-[95px] ${s.glow}`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase ${s.tag}`}>
                        {pkg.tag === 'Premium' ? (
                          <>
                            <Crown className="w-3.5 h-3.5" />
                            {pkg.tag}
                          </>
                        ) : (
                          pkg.tag
                        )}
                      </div>

                      <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                        {pkg.name}
                      </h3>
                      <p className="mt-2 text-gray-300/80">{pkg.subtitle}</p>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-black/20 flex items-center justify-center">
                      <ArrowRight className={`w-5 h-5 ${s.icon}`} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${s.icon}`} />
                        <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Pricing note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 italic mt-12"
        >
          Pricing depends on business activity and complexity.
        </motion.p>
      </div>
    </Section>
  )
}
