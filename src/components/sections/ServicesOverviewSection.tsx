'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Building2,
  FileCheck,
  MapPin,
  Users,
  Laptop,
  Hammer,
  Briefcase,
} from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'

export default function ServicesOverviewSection() {
  const services = [
    { title: 'Consultation & Feasibility', icon: Search },
    { title: 'Setup & Registration', icon: Building2 },
    { title: 'Legal, Compliance & Docs', icon: FileCheck },
    { title: 'Office / Warehouse Sourcing', icon: MapPin },
    { title: 'Recruitment & HR Setup', icon: Users },
    { title: 'Tech & Digital Systems', icon: Laptop },
    { title: 'Vendors & Construction', icon: Hammer },
    { title: 'Monthly Ops Support', icon: Briefcase },
  ]

  return (
    <Section className="relative overflow-hidden">
      {/* Background - different visual language */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* premium orbit glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#D6B15E]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,177,94,0.12),transparent_60%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />
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
            Service Coverage
          </motion.div>

          <SlideHeading className="mt-6">
            End-to-End Business Setup
            <span className="text-[#D6B15E]"> Services</span>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            One partner managing legal setup, operations, people, property, and execution — with one timeline and full accountability.
          </motion.p>
        </div>

        {/* Service Map */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left = Orbit Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-8 overflow-hidden">
              {/* Orbits */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 opacity-50" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/10 opacity-40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#D6B15E]/20 opacity-60" />

                {/* gold soft flare */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D6B15E]/20 blur-[100px]" />
              </div>

              {/* Center Core */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-[230px] h-[230px] rounded-full border border-[#D6B15E]/30 bg-linear-to-b from-[#D6B15E]/20 via-white/[0.04] to-transparent flex flex-col items-center justify-center text-center px-6">
                  <p className="text-xs tracking-widest uppercase text-[#D6B15E]">
                    Core Partner
                  </p>
                  <p className="mt-2 text-white font-semibold text-xl leading-tight">
                    All-in-One
                    <br />
                    Business Setup
                  </p>
                  <p className="mt-3 text-sm text-gray-300/80 leading-relaxed">
                    One roadmap, one team,
                    one accountable delivery.
                  </p>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/55 to-transparent" />
                </div>
              </div>

              {/* Services orbit nodes */}
              <div className="relative mt-10 grid grid-cols-2 gap-4">
                {services.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-[#D6B15E]/30 hover:bg-white/[0.05] transition-all duration-300">
                        <div className="h-10 w-10 rounded-2xl border border-[#D6B15E]/25 bg-[#D6B15E]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#D6B15E]" />
                        </div>
                        <p className="text-sm md:text-[15px] text-gray-200 leading-snug">
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right = Presentation Text / Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-[#D6B15E] text-xs tracking-widest uppercase">
                What you get
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 leading-tight">
                A complete operating system
                <br />
                for launching in Saudi Arabia
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Instead of hiring multiple disconnected suppliers, you get one coordinated setup team
                managing every moving part — legal, operational, and execution.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { label: 'One roadmap', value: 'Clear milestones & ownership' },
                  { label: 'One team', value: 'Specialists across every requirement' },
                  { label: 'One timeline', value: 'Faster setup with fewer delays' },
                ].map((x, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <p className="text-sm text-gray-400">{x.label}</p>
                    <p className="text-sm text-white font-semibold">{x.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#D6B15E]/20 bg-[#D6B15E]/10 px-7 py-6">
              <p className="text-white font-semibold text-lg">
                Built for founders who want speed — without risk.
              </p>
              <p className="text-gray-200/80 mt-2 leading-relaxed">
                We reduce mistakes, prevent compliance issues, and keep execution moving from Day 1 until launch.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
