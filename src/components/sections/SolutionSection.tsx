"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  Building2,
  MapPin,
  Users,
  Settings,
  Hammer,
  RefreshCw,
} from "lucide-react";
import Section from "@/components/Section";
import SlideHeading from "@/components/SlideHeading";

export default function SolutionSection() {
  const solutions = [
    {
      title: "Feasibility & Market Validation",
      desc: "Validate demand, pricing, and positioning before you invest.",
      icon: Briefcase,
      phase: "Phase 1",
      timeline: "Week 1-2",
    },
    {
      title: "Company Registration & Licensing",
      desc: "Correct activity selection, approvals, and entity setup.",
      icon: Building2,
      phase: "Phase 2",
      timeline: "Week 2-4",
    },
    {
      title: "Legal Documentation & Compliance",
      desc: "Contracts, policies, renewals, and regulatory clarity.",
      icon: FileText,
      phase: "Phase 2",
      timeline: "Week 3-5",
    },
    {
      title: "Commercial Space & Property Solutions",
      desc: "Find the right location—office, retail, warehouse, or mixed-use—that fits your business needs.",
      icon: MapPin,
      phase: "Phase 3",
      timeline: "Week 4-6",
    },
    {
      title: "Recruitment & HR Setup",
      desc: "Build the right team quickly with a structured hiring plan.",
      icon: Users,
      phase: "Phase 3",
      timeline: "Week 5-7",
    },
    {
      title: "Tech Systems (CRM / ERP / Website)",
      desc: "Launch-ready operations with scalable digital foundations.",
      icon: Settings,
      phase: "Phase 4",
      timeline: "Week 6-8",
    },
    {
      title: "Operations Setup & Vendor Management",
      desc: "Coordinate suppliers, service providers, and workspace setup to get you operational.",
      icon: Hammer,
      phase: "Phase 4",
      timeline: "Week 7-10",
    },
    {
      title: "Ongoing Support & Renewals",
      desc: "Keep the business running smoothly after launch.",
      icon: RefreshCw,
      phase: "Phase 5",
      timeline: "Ongoing",
    },
  ];

  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070707]" />

        {/* luxe glows */}
        <div className="absolute -top-44 -left-40 h-130 w-130 rounded-full bg-[#D6B15E]/12 blur-[150px]" />
        <div className="absolute -bottom-44 -right-44 h-135 w-135 rounded-full bg-white/5 blur-[170px]" />

        {/* top spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,177,94,0.10),transparent_52%)]" />

        {/* Hexagon Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D6B15E' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M20 40L40 20M0 20L20 0' stroke='%23F3E7C9' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-size-[52px_52px]" />
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
            A complete <span className="text-[#D6B15E]">All-in-One</span>{" "}
            Business Setup Partner
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We help you launch in Saudi Arabia by managing everything end-to-end
            — From legal groundwork to team, space, and execution—we don’t just
            support, we take over. Your problem is ours to solve. 
          </motion.p>
        </div>

        {/* Timeline Cards */}
        <div className="mt-12 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D6B15E]/0 via-[#D6B15E]/30 to-[#D6B15E]/0 hidden lg:block" />

          <div className="space-y-8">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                  >
                    {/* Content Card - Left on even, Right on odd */}
                    <div
                      className={`${isEven ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}
                    >
                      <div className="group inline-block w-full">
                        <div className="relative rounded-3xl border border-white/10 bg-white/4 p-6 overflow-hidden transition-all duration-300 hover:border-[#D6B15E]/35 hover:bg-white/6">
                          {/* hover glow */}
                          <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[#D6B15E]/12 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div
                            className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : ""}`}
                          >
                            <div className="h-12 w-12 rounded-2xl flex items-center justify-center border border-[#D6B15E]/25 bg-[#D6B15E]/10 flex-shrink-0">
                              <Icon className="w-6 h-6 text-[#D6B15E]" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="mb-2">
                                <span className="text-[#D6B15E]/80 text-xs font-semibold tracking-wider uppercase">
                                  {item.phase}
                                </span>
                              </div>

                              <p className="text-white font-semibold text-base lg:text-lg leading-snug">
                                {item.title}
                              </p>
                              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          {/* bottom detail line */}
                          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node - Center */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="h-5 w-5 rounded-full border-2 border-[#D6B15E] bg-[#070707]">
                          <div className="absolute inset-0 rounded-full bg-[#D6B15E]/20 animate-ping" />
                        </div>
                        {/* Connecting line animation */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.3,
                          }}
                          viewport={{ once: true }}
                          className={`absolute top-1/2 -translate-y-1/2 h-px w-12 bg-gradient-to-r ${
                            isEven
                              ? "left-5 from-[#D6B15E]/50 to-transparent"
                              : "right-5 from-transparent to-[#D6B15E]/50"
                          }`}
                          style={{ transformOrigin: isEven ? "left" : "right" }}
                        />
                      </motion.div>
                    </div>

                    {/* Empty space for alignment */}
                    <div
                      className={`hidden lg:block ${isEven ? "lg:col-start-2" : ""}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              A single partner accountable for every step — so you launch
              faster, stay compliant, and scale confidently.
            </p>

            {/* gold highlight line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#D6B15E]/55 to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
