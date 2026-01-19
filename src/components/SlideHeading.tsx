'use client'

import { motion } from 'framer-motion'

interface SlideHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function SlideHeading({ children, className = '' }: SlideHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl font-bold mb-8 md:mb-12 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.h2>
  )
}
