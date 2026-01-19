'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Globe2, Calendar, ArrowRight } from 'lucide-react'
import Section from '@/components/Section'
import Image from 'next/image'

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden  flex items-center">
      {/* Background (Fresh style) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* luxury spotlight */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-245 h-245 rounded-full bg-[#D6B15E]/12 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.16),transparent_60%)]" />

        {/* diagonal cinematic gradient */}
        <div className="absolute inset-0 bg-linear-to-tr from-black via-transparent to-black/60" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-size-[70px_70px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE (Closing Message) */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/25 bg-[#D6B15E]/10 text-[#D6B15E] text-xs tracking-widest uppercase"
            >
              Final Step
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B15E]" />
              Start Today
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold leading-tight text-white"
            >
              Ready to start your business in{' '}
              <span className="text-[#D6B15E]">Saudi Arabia</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-gray-300 max-w-xl leading-relaxed"
            >
              Let’s build it the right way — fast, compliant, and scalable.
            </motion.p>

            {/* Value bullets (premium, minimal) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-3 max-w-xl"
            >
              {[
                'Setup roadmap & milestones',
                'Compliance-first execution',
                'Office + hiring + vendors',
                'Tech-ready operations',
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-gray-200"
                >
                  <span className="text-[#D6B15E] mr-2">•</span>
                  {x}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#D6B15E] text-black font-semibold transition-all duration-300 hover:opacity-90"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+966XXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/15 bg-white/3 text-white font-semibold hover:border-[#D6B15E]/35 hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#D6B15E]" />
                Call Now
              </a>
            </motion.div>

            {/* Free Consultation Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm text-green-300"
            >
              <Calendar className="w-4 h-4" />
              Free first consultation included
            </motion.div>
          </div>

          {/* RIGHT SIDE (Contact Card) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-white/4 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/modern-minimalist-office-black-white (2).jpg"
                  alt="Professional office"
                  fill
                  className="object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#050505]/95 via-[#050505]/85 to-[#050505]/95" />
              </div>
              
              {/* top glow */}
              <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-[#D6B15E]/18 blur-[95px]" />

              {/* header */}
              <div className="p-8 relative z-10">
                <p className="text-xs tracking-widest uppercase text-[#D6B15E]">
                  Contact
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">
                  Let’s talk and map your setup plan
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Share your business activity and target city — we’ll advise the fastest compliant path.
                </p>

                {/* contact methods */}
                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+966XXXXXXXXX"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 hover:border-[#D6B15E]/35 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl border border-[#D6B15E]/25 bg-[#D6B15E]/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#D6B15E]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-400 text-sm">+966 561 765 707</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#D6B15E] transition-colors" />
                  </a>

                  <a
                    href="mailto:your@email.com"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 hover:border-[#D6B15E]/35 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl border border-[#D6B15E]/25 bg-[#D6B15E]/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#D6B15E]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-400 text-sm">raghib@code-ox.com</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#D6B15E] transition-colors" />
                  </a>
                </div>
              </div>

              {/* footer: kingdom-wide service */}
              <div className="px-8 pb-8 relative z-10">
                <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-4">
                  <p className="text-xs tracking-widest uppercase text-gray-500">
                    Service Coverage
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B15E]/30 bg-[#D6B15E]/10 text-base text-[#D6B15E] font-semibold">
                      Kingdom-Wide Services
                    </span>
                  </div>
                </div>
              </div>

              {/* gold baseline */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/55 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
