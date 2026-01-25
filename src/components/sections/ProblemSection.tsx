'use client'

import { motion } from 'framer-motion'
import {
  FileCheck,
  Building2,
  MapPin,
  Users,
  Hammer,
  Shield,
  Target,
  AlertTriangle,
} from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'
import Image from 'next/image'

export default function ProblemSection() {
  const problems = [
    {
      title: 'Unclear licensing & activity classification',
      desc: 'Wrong activity selection can delay approvals and block key registrations.',
      icon: FileCheck,
    },
    {
      title: 'Government procedures and documentation delays',
      desc: 'Multiple portals, approvals, submissions, and follow-ups slow everything down.',
      icon: Building2,
    },
    {
      title: 'Finding compliant office/warehouse spaces',
      desc: 'Choosing the wrong property can create issues with licences & inspections.',
      icon: MapPin,
    },
    {
      title: 'Hiring the right team quickly',
      desc: 'Recruitment takes time — and delays operations once the licence is ready.',
      icon: Users,
    },
    {
      title: 'Vendor and construction coordination',
      desc: 'Fit-out, approvals, contractors, and timelines can easily spiral.',
      icon: Hammer,
    },
    {
      title: 'Legal compliance, contracts, and renewals',
      desc: 'Missing renewals and documentation leads to penalties and interruptions.',
      icon: Shield,
    },
    {
      title: 'Lack of a single trusted partner to manage everything',
      desc: 'Founders end up coordinating multiple parties with zero accountability.',
      icon: Target,
    },
  ]

  return (
    <Section className="relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070707]" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#D6B15E]/10 blur-[140px]" />
        <div className="absolute -bottom-44 -right-40 h-[540px] w-[540px] rounded-full bg-red-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.10),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B15E]" />
            Business Setup Reality
          </motion.div>

          <SlideHeading className="text-left mt-6">
            Starting a business in Saudi is full of
            <span className="text-[#D6B15E]"> hidden complexity</span>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            The challenge isn’t motivation — it’s navigating approvals, compliance, timelines, and multiple parties
            without losing momentum.
          </motion.p>

          {/* Cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {problems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative rounded-2xl border border-white/10 bg-white/4 p-4 overflow-hidden transition-all duration-300 hover:border-[#D6B15E]/35 hover:bg-white/6">
                    {/* glow */}
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#D6B15E]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-[#D6B15E]/25 bg-[#D6B15E]/10">
                        <Icon className="w-5 h-5 text-[#D6B15E]" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm md:text-[15px] font-semibold text-white leading-snug">
                          {item.title}
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* subtle bottom line accent */}
                    <div className="mt-4 h-[1px] w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="relative rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-red-400/25 bg-red-400/10">
                  <AlertTriangle className="w-5 h-5 text-red-300" />
                </div>

                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    Result: Time loss, extra cost, and launch delays
                  </p>
                  <p className="text-gray-300/80 text-sm md:text-base mt-1 leading-relaxed">
                    Without a single accountable partner, founders lose weeks in follow-ups, paperwork, and disconnected vendors.
                  </p>
                </div>
              </div>

              {/* luxe accent */}
              <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-[#D6B15E]/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/2 shadow-[0_20px_90px_rgba(0,0,0,0.55)]">
            <div className="aspect-[4/5] relative">
              <Image
                src="/dark-fantasy-scene.jpg"
                alt="Business complexity visualization"
                fill
                className="object-cover"
              />

              {/* cinematic overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#050505]/80 via-[#050505]/35 to-[#050505]/75" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.18),transparent_55%)]" />
            </div>

            {/* floating overlay cards */}
            <div className="absolute top-4 left-4 right-4 lg:top-6 lg:left-6 lg:right-6 grid gap-2 lg:gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-3 lg:p-4">
                <p className="text-xs tracking-widest uppercase text-[#D6B15E]">
                  Common Risk
                </p>
                <p className="text-white font-semibold mt-1 text-sm lg:text-base">
                  Delays compound fast
                </p>
                <p className="text-gray-400 text-xs lg:text-sm mt-1">
                  One missed document can trigger weeks of follow-ups.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 lg:p-4">
                <p className="text-xs tracking-widest uppercase text-[#D6B15E]">
                  Founder Experience
                </p>
                <p className="text-white font-semibold mt-1 text-sm lg:text-base">
                  Too many parties, no ownership
                </p>
                <p className="text-gray-400 text-xs lg:text-sm mt-1">
                  Legal, office, hiring, setup — all disconnected.
                </p>
              </div>
            </div>

            {/* corner accents */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#D6B15E]/12 blur-[85px]" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-red-500/10 blur-[90px]" />

            {/* gold frame line */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#D6B15E]/15 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
