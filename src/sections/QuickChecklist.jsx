import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const phases = [
  {
    label: 'Phase 01',
    title: 'Before You Start',
    items: [
      'Identified 2–3 concrete use cases',
      'Tools identified (built-in or MCP)',
      'Reviewed this guide and example skills',
      'Planned folder structure',
    ],
  },
  {
    label: 'Phase 02',
    title: 'During Development',
    items: [
      'Folder named in kebab-case',
      'SKILL.md file exists (exact spelling)',
      'YAML frontmatter has --- delimiters',
      'name field: kebab-case, no spaces, no capitals',
      'description includes WHAT and WHEN',
      'No XML tags (< >) anywhere',
      'Instructions are clear and actionable',
      'Error handling included',
      'Examples provided',
      'References clearly linked',
    ],
  },
  {
    label: 'Phase 03',
    title: 'Before Upload',
    items: [
      'Tested triggering on obvious tasks',
      'Tested triggering on paraphrased requests',
      'Verified doesn\'t trigger on unrelated topics',
      'Functional tests pass',
      'Tool integration works (if applicable)',
      'Compressed as .zip file',
    ],
  },
  {
    label: 'Phase 04',
    title: 'After Upload',
    items: [
      'Test in real conversations',
      'Monitor for under/over-triggering',
      'Collect user feedback',
      'Iterate on description and instructions',
      'Update version in metadata',
    ],
  },
]

export function QuickChecklist() {
  return (
    <section id="checklist" className="section section-dark">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Reference A</motion.span>
          <motion.h2 variants={fadeUp}>Quick Checklist</motion.h2>
          <motion.p variants={fadeUp}>Use this checklist to validate your skill before and after upload. If you want a faster start, use the skill-creator skill to generate your first draft, then run through this list to make sure you haven't missed anything.</motion.p>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 36 }}>
            {phases.map((phase, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent-light)', marginBottom: 10 }}>{phase.label}</div>
                <h3 style={{ color: 'rgba(232,234,246,0.95)', marginBottom: 18 }}>{phase.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: 'rgba(232,234,246,0.75)' }}>
                      <div style={{ width: 18, height: 18, border: '2px solid rgba(91,106,245,0.4)', borderRadius: 4, flexShrink: 0, marginTop: 1 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 36, background: 'rgba(91,106,245,0.1)', border: '1px solid rgba(91,106,245,0.25)', borderRadius: 12, padding: 28, textAlign: 'center' }}>
            <p style={{ color: 'rgba(232,234,246,0.8)', fontSize: '1rem', margin: 0 }}>
              <strong style={{ color: 'var(--color-accent-light)' }}>Shortcut:</strong> Use the skill-creator skill — available in Claude.ai and Claude Code — to generate your SKILL.md from a natural language description. Then run through this checklist to validate.
            </p>
            <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: '12px 20px', display: 'inline-block', color: '#7ee787' }}>
              "Use the skill-creator skill to help me build a skill for [your use case]"
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
