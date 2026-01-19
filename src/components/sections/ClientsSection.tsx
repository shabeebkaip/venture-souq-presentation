'use client'

import { motion } from 'framer-motion'
import {
  Crown,
  Users,
  Globe2,
  Store,
  BriefcaseBusiness,
  Warehouse,
} from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'

export default function ClientsSection() {
  const clients = [
    {
      title: 'Saudi Founders',
      desc: 'Entrepreneurs starting a new venture and needing a compliant launch plan.',
      icon: Crown,
    },
    {
      title: 'SMEs Expanding',
      desc: 'Businesses entering new categories, cities, or operational models.',
      icon: Users,
    },
    {
      title: 'Foreign Investors',
      desc: 'Companies entering Saudi Arabia requiring setup, approvals, and localisation.',
      icon: Globe2,
    },
    {
      title: 'E-commerce & Trading',
      desc: 'Setup + logistics + registrations to run efficiently from day one.',
      icon: Store,
    },
    {
      title: 'Service Businesses',
      desc: 'Consulting, salons, clinics, agencies, and licensed service operations.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Retail & Warehouse Ops',
      desc: 'Physical operations requiring office, warehouse, vendors, and readiness.',
      icon: Warehouse,
    },
  ]

  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070707]" />

        {/* cinematic glow */}
        <div className="absolute -top-44 -left-40 h-[520px] w-[520px] rounded-full bg-[#D6B15E]/12 blur-[150px]" />
        <div className="absolute -bottom-40 -right-44 h-[560px] w-[560px] rounded-full bg-white/5 blur-[170px]" />

        {/* Radial Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: 'radial-gradient(circle, #D6B15E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        {/* Luxury Ornamental Corners */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L200,0 L200,20 L20,20 L20,200 L0,200 Z' fill='%23D6B15E'/%3E%3Cpath d='M0,40 L160,40 L160,60 L60,60 L60,160 L40,160 L40,40 Z' fill='%23F3E7C9'/%3E%3C/svg%3E")`
        }} />

        {/* texture */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.10),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Narrative */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B15E]" />
            Client Profiles
          </motion.div>

          <SlideHeading className="text-left mt-6">
            Built for founders, operators, and investors who want to move
            <span className="text-[#D6B15E]"> fast — without mistakes</span>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
          >
            Whether you are launching your first entity or scaling operations across Saudi Arabia,
            we work best with businesses that value speed, compliance, and execution clarity.
          </motion.p>

          {/* premium statement block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[#D6B15E]/12 blur-[80px]" />

              <p className="text-[#D6B15E] text-xs tracking-widest uppercase">
                Best Fit Clients
              </p>

              <p className="mt-2 text-white text-lg font-semibold">
                High-trust execution partners, not “random service providers”
              </p>

              <p className="mt-2 text-gray-400 leading-relaxed">
                You get one structured plan, one accountable team, and full visibility from setup to launch.
              </p>

              <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-4 text-sm text-gray-400">
                Typical outcomes: Faster approvals • Cleaner setup • Stronger operations
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {clients.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden transition-all duration-300 hover:border-[#D6B15E]/35 hover:bg-white/[0.06]">
                  {/* glow */}
                  <div className="absolute -top-20 -left-20 h-44 w-44 rounded-full bg-[#D6B15E]/12 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl flex items-center justify-center border border-[#D6B15E]/25 bg-[#D6B15E]/10">
                      <Icon className="w-5 h-5 text-[#D6B15E]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-white font-semibold text-[15px] leading-snug">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                  <div className="mt-4 text-xs text-gray-400">
                    Designed for launch + scale
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
