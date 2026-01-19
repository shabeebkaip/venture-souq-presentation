'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  TrendingUp,
  Users,
  Laptop,
  Award,
  Shield,
  ArrowRight,
} from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'

export default function DifferentiatorsSection() {
  const differentiators = [
    {
      title: 'Execution-focused',
      desc: 'Not just advice — we deliver outcomes.',
      icon: Zap,
    },
    {
      title: 'Fast setup roadmap',
      desc: 'Clear milestones and predictable timelines.',
      icon: TrendingUp,
    },
    {
      title: 'Trusted partner network',
      desc: 'Legal, PRO, accounting, recruitment, vendors.',
      icon: Users,
    },
    {
      title: 'Tech advantage',
      desc: 'Digital systems enabled from Day 1.',
      icon: Laptop,
    },
    {
      title: 'Cost-efficient',
      desc: 'Avoid supplier chaos and repeated mistakes.',
      icon: Award,
    },
    {
      title: 'Full transparency',
      desc: 'Checklist-based process + status tracking.',
      icon: Shield,
    },
  ]

  return (
    <Section className="relative overflow-hidden">
      {/* Fresh Background Style (different from previous sections) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* diagonal luxury light */}
        <div className="absolute inset-0 bg-[conic-gradient(from_220deg_at_50%_20%,rgba(214,177,94,0.18),transparent_30%,rgba(214,177,94,0.10),transparent_70%)] opacity-30" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-90" />

        {/* noise */}
        <div className="absolute inset-0 opacity-[0.10] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
          >
            Why Us
          </motion.div>

          <SlideHeading className="mt-6">
            What makes us different is not what we say —
            <span className="text-[#D6B15E]"> it’s how we execute</span>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            A premium setup partner is measured by delivery speed, control, compliance, and end-to-end accountability.
          </motion.p>
        </div>

        {/* Content */}
        <div className="mt-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          {/* Left Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/15 to-transparent" />

            <div className="space-y-5">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="relative pl-14"
                  >
                    {/* dot */}
                    <div className="absolute left-[14px] top-6 h-3.5 w-3.5 rounded-full bg-[#D6B15E] shadow-[0_0_0_6px_rgba(214,177,94,0.14)]" />

                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#D6B15E]/25 transition-all duration-300 p-6">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-2xl border border-[#D6B15E]/25 bg-[#D6B15E]/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[#D6B15E]" />
                          </div>

                          <div>
                            <p className="text-white font-semibold text-lg">
                              {item.title}
                            </p>
                            <p className="text-gray-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
                          <span className="tracking-widest">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-[#D6B15E]/20 bg-linear-to-b from-[#D6B15E]/12 via-white/[0.04] to-transparent p-7">
              {/* glow */}
              <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#D6B15E]/20 blur-[100px]" />

              <p className="text-xs tracking-widest uppercase text-[#D6B15E]">
                Client Experience
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 leading-tight">
                One roadmap. One accountable team.
                <br />
                Zero confusion.
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                We combine legal setup, operations, vendor execution, recruitment, and technology support into one structured plan —
                so your business launches with control and momentum.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  'Defined milestones & ownership',
                  'Compliance-first execution',
                  'Transparent tracking & updates',
                  'Faster launch, fewer mistakes',
                ].map((x, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#D6B15E]" />
                    <p className="text-sm text-gray-200">{x}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="text-sm text-gray-300">
                  <span className="text-white font-semibold">The result:</span> You focus on the business vision —
                  we manage the setup execution.
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/55 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
