import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const resources = [
  {
    title: 'Official Documentation',
    items: [
      'Best Practices Guide',
      'Skills Documentation',
      'API Reference',
      'MCP Documentation',
    ],
  },
  {
    title: 'Blog Posts',
    items: [
      'Introducing Agent Skills',
      'Engineering Blog: Equipping Agents for the Real World',
      'Skills Explained',
      'How to Create Skills for Claude',
      'Building Skills for Claude Code',
      'Improving Frontend Design through Skills',
    ],
  },
  {
    title: 'Example Skills',
    items: [
      'GitHub: anthropics/skills',
      'Document Skills — PDF, DOCX, PPTX, XLSX creation',
      'Example Skills — Various workflow patterns',
      'Partner Skills Directory — Asana, Atlassian, Canva, Figma, Sentry, Zapier and more',
    ],
  },
  {
    title: 'Tools and Utilities',
    items: [
      'skill-creator skill — Built into Claude.ai and available for Claude Code',
      'Generate skills from natural language descriptions',
      'Reviews and provides recommendations',
      'Use: "Help me build a skill using skill-creator"',
    ],
  },
  {
    title: 'Getting Support',
    items: [
      'Claude Developers Discord — community forums',
      'GitHub Issues: anthropics/skills/issues',
      'Include: Skill name, error message, steps to reproduce',
    ],
  },
  {
    title: 'Quick References',
    items: [
      'Skills API Quickstart',
      'Create Custom Skills guide',
      'Skills in the Agent SDK',
      'Partner Skills Directory',
    ],
  },
]

export function Resources() {
  return (
    <section id="resources" className="section section-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 6</motion.span>
          <motion.h2 variants={fadeUp}>Resources and References</motion.h2>
          <motion.p variants={fadeUp}>If you're building your first skill, start with the Best Practices Guide, then reference the API docs as needed. The skill-creator skill can generate your first draft in minutes.</motion.p>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 36 }}>
            {resources.map((r, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 12, padding: 28, boxShadow: 'var(--shadow)' }}>
                <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>{r.title}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {r.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '7px 0', borderBottom: '1px solid var(--color-bg-alt)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', flexShrink: 0, marginTop: 2 }}>↗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
