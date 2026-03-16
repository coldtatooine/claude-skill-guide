import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const useCases = [
  {
    num: 'Category 01',
    title: 'Document & Asset Creation',
    desc: 'Creating consistent, high-quality output including documents, presentations, apps, designs, code, etc.',
    example: 'Real example: frontend-design skill — "Create distinctive, production-grade frontend interfaces with high design quality."',
    techniques: ['Embedded style guides and brand standards', 'Template structures for consistent output', 'Quality checklists before finalizing', 'No external tools required'],
  },
  {
    num: 'Category 02',
    title: 'Workflow Automation',
    desc: 'Multi-step processes that benefit from consistent methodology, including coordination across multiple MCP servers.',
    example: 'Real example: skill-creator skill — "Interactive guide for creating new skills. Walks user through use case definition, frontmatter generation, instruction writing, and validation."',
    techniques: ['Step-by-step workflow with validation gates', 'Templates for common structures', 'Built-in review and improvement suggestions', 'Iterative refinement loops'],
  },
  {
    num: 'Category 03',
    title: 'MCP Enhancement',
    desc: 'Workflow guidance to enhance the tool access an MCP server provides.',
    example: 'Real example: sentry-code-review skill — "Automatically analyzes and fixes detected bugs in GitHub Pull Requests using Sentry\'s error monitoring data."',
    techniques: ['Coordinates multiple MCP calls in sequence', 'Embeds domain expertise', 'Provides context users would otherwise need to specify', 'Error handling for common MCP issues'],
  },
]

const quantMetrics = [
  { metric: 'Skill triggers on 90% of relevant queries', how: 'Run 10–20 test queries. Track how many load automatically vs. require explicit invocation.' },
  { metric: 'Completes workflow in X tool calls', how: 'Compare the same task with and without the skill enabled. Count tool calls and total tokens.' },
  { metric: '0 failed API calls per workflow', how: 'Monitor MCP server logs during test runs. Track retry rates and error codes.' },
]

const qualMetrics = [
  { metric: 'Users don\'t need to prompt Claude about next steps', how: 'Note how often you need to redirect or clarify during testing. Ask beta users for feedback.' },
  { metric: 'Workflows complete without user correction', how: 'Run the same request 3–5 times. Compare outputs for structural consistency and quality.' },
  { metric: 'Consistent results across sessions', how: 'Can a new user accomplish the task on first try with minimal guidance?' },
]

export function PlanningDesign() {
  return (
    <section id="planning" className="section section-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 2</motion.span>
          <motion.h2 variants={fadeUp}>Planning and Design</motion.h2>
          <motion.p variants={fadeUp}>Before writing any code, identify 2–3 concrete use cases your skill should enable. Start by asking: What does a user want to accomplish? What multi-step workflows does this require? Which tools are needed?</motion.p>

          <motion.div variants={stagger} className="use-case-grid">
            {useCases.map((uc, i) => (
              <motion.div key={i} variants={fadeUp} className="use-case-card">
                <div className="use-case-num">{uc.num}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="use-case-example">{uc.example}</div>
                <ul style={{ listStyle: 'none', marginTop: 14 }}>
                  {uc.techniques.map((t, j) => (
                    <li key={j} style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', padding: '4px 0 4px 14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>·</span>{t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 8 }}>Define Success Criteria</h3>
            <p>These are aspirational targets — rough benchmarks rather than precise thresholds. Aim for rigor but accept that there will be an element of vibes-based assessment.</p>
          </motion.div>

          <motion.div variants={stagger} className="metrics-grid">
            <motion.div variants={fadeUp} className="metrics-card">
              <h3>Quantitative Metrics</h3>
              {quantMetrics.map((m, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-bullet" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)', marginBottom: 2 }}>{m.metric}</div>
                    <div style={{ fontSize: '0.78rem' }}>{m.how}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="metrics-card">
              <h3>Qualitative Metrics</h3>
              {qualMetrics.map((m, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-bullet" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)', marginBottom: 2 }}>{m.metric}</div>
                    <div style={{ fontSize: '0.78rem' }}>{m.how}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 8 }}>YAML Frontmatter — The Most Important Part</h3>
            <p>The YAML frontmatter is how Claude decides whether to load your skill. Get this right.</p>
            <div className="yaml-block">
              <div><span className="yaml-delim">---</span></div>
              <div><span className="yaml-key">name</span>: <span className="yaml-val">your-skill-name</span>&nbsp;&nbsp;<span className="yaml-comment"># kebab-case, must match folder name</span></div>
              <div><span className="yaml-key">description</span>: <span className="yaml-str">What it does. Use when user asks to [specific phrases].</span></div>
              <div><span className="yaml-comment"># Optional fields:</span></div>
              <div><span className="yaml-key">license</span>: <span className="yaml-val">MIT</span></div>
              <div><span className="yaml-key">metadata</span>:</div>
              <div>&nbsp;&nbsp;<span className="yaml-key">author</span>: <span className="yaml-str">Company Name</span></div>
              <div>&nbsp;&nbsp;<span className="yaml-key">version</span>: <span className="yaml-val">1.0.0</span></div>
              <div>&nbsp;&nbsp;<span className="yaml-key">mcp-server</span>: <span className="yaml-str">server-name</span></div>
              <div><span className="yaml-delim">---</span></div>
            </div>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
            {[
              {
                label: 'Good description',
                color: '#22c55e',
                examples: [
                  'Analyzes Figma design files and generates developer handoff documentation. Use when user uploads .fig files, asks for "design specs", "component documentation", or "design-to-code handoff".',
                  'Manages Linear project workflows including sprint planning, task creation, and status tracking. Use when user mentions "sprint", "Linear tasks", "project planning", or asks to "create tickets".',
                ],
              },
              {
                label: 'Bad description',
                color: '#ef4444',
                examples: [
                  'Helps with projects.',
                  'Creates sophisticated multi-page documentation systems.',
                  'Implements the Project entity model with hierarchical relationships.',
                ],
              },
            ].map((col, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'white', border: `1px solid ${col.color}40`, borderRadius: 12, padding: 24, boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: col.color, marginBottom: 14 }}>{col.label}</div>
                {col.examples.map((ex, j) => (
                  <div key={j} style={{ background: 'var(--color-bg)', borderRadius: 8, padding: '12px 14px', fontSize: '0.82rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 10, borderLeft: `3px solid ${col.color}` }}>
                    "{ex}"
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
