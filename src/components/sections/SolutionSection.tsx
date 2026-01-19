'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Briefcase,
  FileText,
  Building2,
  MapPin,
  Users,
  Settings,
  Hammer,
  RefreshCw,
} from 'lucide-react'
import Section from '@/components/Section'
import SlideHeading from '@/components/SlideHeading'

export default function SolutionSection() {
  const solutions = [
    {
      title: 'Feasibility & Market Validation',
      desc: 'Validate demand, pricing, and positioning before you invest.',
      icon: Briefcase,
    },
    {
      title: 'Company Registration & Licensing',
      desc: 'Correct activity selection, approvals, and entity setup.',
      icon: Building2,
    },
    {
      title: 'Legal Documentation & Compliance',
      desc: 'Contracts, policies, renewals, and regulatory clarity.',
      icon: FileText,
    },
    {
      title: 'Office / Warehouse / Property Sourcing',
      desc: 'Shortlist compliant spaces that match your activity requirements.',
      icon: MapPin,
    },
    {
      title: 'Recruitment & HR Setup',
      desc: 'Build the right team quickly with a structured hiring plan.',
      icon: Users,
    },
    {
      title: 'Tech Systems (CRM / ERP / Website)',
      desc: 'Launch-ready operations with scalable digital foundations.',
      icon: Settings,
    },
    {
      title: 'Vendors & Construction Coordination',
      desc: 'Fit-out, contractors, timelines, and vendor accountability.',
      icon: Hammer,
    },
    {
      title: 'Ongoing Support & Renewals',
      desc: 'Keep the business running smoothly after launch.',
      icon: RefreshCw,
    },
  ]

  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070707]" />

        {/* luxe glows */}
        <div className="absolute -top-44 -left-40 h-[520px] w-[520px] rounded-full bg-[#D6B15E]/12 blur-[150px]" />
        <div className="absolute -bottom-44 -right-44 h-[540px] w-[540px] rounded-full bg-white/5 blur-[170px]" />

        {/* top spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.10),transparent_52%)]" />

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D6B15E' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M20 40L40 20M0 20L20 0' stroke='%23F3E7C9' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />

        {/* subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B15E]" />
            The Solution
          </motion.div>

          <SlideHeading className="mt-6">
            A complete <span className="text-[#D6B15E]">All-in-One</span> Business Setup Partner
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We help you launch in Saudi Arabia by managing everything end-to-end — from legal setup to operations,
            people, property, and execution.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden transition-all duration-300 hover:border-[#D6B15E]/35 hover:bg-white/[0.06]">
                  {/* hover glow */}
                  <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[#D6B15E]/12 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

                  {/* bottom detail line */}
                  <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                  {/* subtle check mark */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#D6B15E]/90" />
                    Included in full-service setup
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Signature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="relative inline-flex flex-col items-center gap-2 px-10 py-6 rounded-3xl border border-[#D6B15E]/25 bg-[#D6B15E]/10 overflow-hidden">
            {/* glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-72 bg-[#D6B15E]/20 blur-[80px]" />

            <p className="text-[#D6B15E] text-xs tracking-widest uppercase relative">
              Our Promise
            </p>

            <p className="text-xl md:text-2xl text-white font-semibold relative">
              One team. One plan. One timeline.
            </p>

            <p className="text-sm md:text-base text-gray-300/90 max-w-2xl relative leading-relaxed">
              A single partner accountable for every step — so you launch faster, stay compliant, and scale confidently.
            </p>

            {/* gold highlight line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/55 to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
