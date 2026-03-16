import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const stats = [
  { num: '15–30', label: 'min to build your first skill' },
  { num: '3', label: 'levels of progressive disclosure' },
  { num: '1×', label: 'create, deploy everywhere' },
  { num: '∞', label: 'reusable across conversations' },
]

const paths = [
  {
    icon: '📄',
    title: 'Building standalone skills?',
    desc: 'Focus on Fundamentals, Planning and Design.',
  },
  {
    icon: '🔌',
    title: 'Enhancing an MCP integration?',
    desc: 'The "Skills + MCP" section and Category 3 are for you.',
  },
]

export function Hero() {
  return (
    <section id="intro" className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container-wide">
        <div className="hero-grid">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <div className="hero-badge">
                <span></span>
                The Complete Guide
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp}>
              Building Skills<br />for Claude
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', color: '#5a6080' }}>
              A skill is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows. Instead of re-explaining your preferences every conversation, skills let you teach Claude once and benefit every time.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '0.9rem' }}>
              <strong>What you'll learn:</strong> Technical requirements, planning patterns, testing strategies, and distribution — whether you're building for yourself, your team, or the community.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-paths">
              {paths.map((p, i) => (
                <div key={i} className="hero-path">
                  <span className="hero-path-icon">{p.icon}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="hero-stat-grid">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat-num">{s.num}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} style={{ marginTop: 20, background: 'white', borderRadius: 12, padding: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Who this is for</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Developers who want Claude to follow specific workflows consistently',
                  'Power users who want Claude to follow specific workflows',
                  'Teams looking to standardize how Claude works across their organization',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
