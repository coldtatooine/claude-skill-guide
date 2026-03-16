import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-title">The Complete Guide to Building Skills for Claude</div>
      <div className="footer-divider" />
      <p>Anthropic — January 2026</p>
      <p style={{ marginTop: 8, fontSize: '0.8rem' }}>
        Cover the full cycle: Fundamentals · Planning &amp; Design · Testing &amp; Iteration · Distribution · Patterns · Troubleshooting · Resources
      </p>
      <p style={{ marginTop: 16, fontSize: '0.78rem', opacity: 0.5 }}>
        See also: claude.ai
      </p>
    </motion.footer>
  )
}
