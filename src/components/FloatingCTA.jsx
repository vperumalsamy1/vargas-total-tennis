import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function FloatingCTA({ label }) {
  return (
    <motion.a
      href="tel:8644312442"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-6 right-6 z-50 flex md:hidden items-center gap-2.5 text-white text-sm font-medium px-5 py-3.5 rounded-full shadow-lg"
      style={{ backgroundColor: '#1D9E75' }}
      aria-label="Text Coach Nestor"
    >
      <MessageSquare size={16} />
      {label}
    </motion.a>
  )
}
