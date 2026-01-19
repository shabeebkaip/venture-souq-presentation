'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'blue' | 'teal' | 'cyan' | 'slate' | 'none'
  delay?: number
}

export default function GlassCard({ children, className = '', glowColor = 'none', delay = 0 }: GlassCardProps) {
  const glowClass = {
    blue: 'glow-blue',
    teal: 'glow-teal',
    cyan: 'glow-cyan',
    slate: 'glow-slate',
    none: '',
  }[glowColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl p-8 hover:border-white/20 transition-all duration-300 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  )
}
