'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  gradient?: boolean
}

export default function Section({ children, className = '', id, gradient = false }: SectionProps) {
  return (
    <section id={id} className={` w-full  relative ${className}`}>
      {gradient && (
        <div className="absolute inset-0 gradient-glow pointer-events-none" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full flex items-center justify-center relative z-10 px-6 py-12"
      >
        {children}
      </motion.div>
    </section>
  )
}
