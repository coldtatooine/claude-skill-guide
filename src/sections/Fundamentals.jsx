import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const principles = [
  {
    title: 'Progressive Disclosure',
    desc: 'Three-level system: YAML frontmatter always loaded, SKILL.md body loaded on relevance, linked files discovered as needed. Minimizes token usage while maintaining specialized expertise.',
  },
  {
    title: 'Composability',
    desc: 'Claude can load multiple skills simultaneously. Your skill should work well alongside others, not assume it\'s the only capability available.',
  },
  {
    title: 'Portability',
    desc: 'Skills work identically across Claude.ai, Claude Code, and API. Create a skill once and it works across all surfaces without modification.',
  },
]

const mcpRows = [
  { mcp: 'Connects Claude to your service (Notion, Asana, Linear...)', skills: 'Teaches Claude how to use your service effectively' },
  { mcp: 'Provides real-time data access and tool invocation', skills: 'Captures workflows and best practices' },
  { mcp: 'What Claude can do', skills: 'How Claude should do it' },
]

export function Fundamentals() {
  return (
    <section id="fundamentals" className="section section-dark">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 1</motion.span>
          <motion.h2 variants={fadeUp}>Fundamentals</motion.h2>
          <motion.p variants={fadeUp}>A skill is a folder containing a few simple components. Understanding the structure and design principles lets you build skills that integrate seamlessly with Claude's capabilities.</motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 36 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 16 }}>Skill folder anatomy</h3>
            <div className="skill-anatomy">
              <div>your-skill-name/</div>
              <div>&nbsp;&nbsp;├── <span className="file-required">SKILL.md</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Required — main skill file with YAML frontmatter</span></div>
              <div>&nbsp;&nbsp;├── <span className="file-optional">scripts/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — Python, Bash, etc.</span></div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── process_data.py</div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── validate.sh</div>
              <div>&nbsp;&nbsp;├── <span className="file-optional">references/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — docs loaded as needed</span></div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── api-guide.md</div>
              <div>&nbsp;&nbsp;└── <span className="file-optional">assets/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — templates, fonts, icons</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── report-template.md</div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="principle-grid">
            {principles.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="principle-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>For MCP Builders: Skills + Connectors</h3>
            <p style={{ marginBottom: 0 }}>
              Think of it as a professional kitchen: <strong style={{ color: 'var(--color-accent-light)' }}>MCP provides the kitchen</strong> — access to tools, ingredients, and equipment. <strong style={{ color: 'var(--color-accent-light)' }}>Skills provide the recipes</strong> — step-by-step instructions on how to create something valuable.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <table className="mcp-table">
              <thead>
                <tr>
                  <th>MCP (Connectivity)</th>
                  <th>Skills (Knowledge)</th>
                </tr>
              </thead>
              <tbody>
                {mcpRows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.mcp}</td>
                    <td>{r.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
            {[
              {
                label: 'Without skills',
                items: [
                  'Users connect your MCP but don\'t know what to do next',
                  'Support tickets asking "how do I do X with your integration"',
                  'Each conversation starts from scratch',
                  'Inconsistent results because users prompt differently',
                ],
                color: '#f85149',
              },
              {
                label: 'With skills',
                items: [
                  'Pre-built workflows activate automatically when needed',
                  'Consistent, reliable tool usage',
                  'Best practices embedded in every interaction',
                  'Lower learning curve for your integration',
                ],
                color: '#7ee787',
              },
            ].map((col, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${col.color}30`, borderRadius: 12, padding: 24 }}>
                <h4 style={{ color: col.color, fontFamily: 'var(--font-heading)', fontSize: '0.85rem', marginBottom: 14 }}>{col.label}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', color: 'rgba(232,234,246,0.7)', padding: '5px 0 5px 16px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ position: 'absolute', left: 0, color: col.color }}>•</span>
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
