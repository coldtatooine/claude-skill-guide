import { motion } from 'framer-motion'

const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'fundamentals', label: 'Fundamentals' },
  { id: 'planning', label: 'Planning & Design' },
  { id: 'testing', label: 'Testing' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'resources', label: 'Resources' },
  { id: 'checklist', label: 'Checklist' },
]

export function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
    >
      <span className="nav-logo">Skills for Claude</span>
      <div className="nav-links">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}>{s.label}</a>
        ))}
      </div>
    </motion.nav>
  )
}
