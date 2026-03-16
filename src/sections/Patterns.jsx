import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const patterns = [
  {
    num: 'Pattern 01',
    title: 'Sequential Workflow Orchestration',
    useWhen: 'Your users need multi-step processes in a specific order.',
    example: 'Onboard New Customer',
    steps: [
      'Create Account — call create_customer with name, email, company',
      'Setup Payment — call setup_payment_method, wait for verification',
      'Create Subscription — call create_subscription with plan_id, customer_id',
      'Send Welcome Email — call send_email with welcome_email_template',
    ],
    techniques: ['Explicit step ordering', 'Dependencies between steps', 'Validation at each stage', 'Rollback instructions for failures'],
  },
  {
    num: 'Pattern 02',
    title: 'Multi-MCP Coordination',
    useWhen: 'Workflows span multiple services.',
    example: 'Design-to-Development Handoff',
    steps: [
      'Phase 1 (Figma MCP) — Export assets, generate specs, create asset manifest',
      'Phase 2 (Drive MCP) — Create project folder, upload assets, generate links',
      'Phase 3 (Linear MCP) — Create tasks, attach asset links, assign to team',
      'Phase 4 (Slack MCP) — Post handoff summary to #engineering',
    ],
    techniques: ['Clear phase separation', 'Data passing between MCPs', 'Validation before next phase', 'Centralized error handling'],
  },
  {
    num: 'Pattern 03',
    title: 'Iterative Refinement',
    useWhen: 'Output quality improves with iteration.',
    example: 'Report Generation',
    steps: [
      'Initial Draft — fetch data via MCP, generate first draft, save to temp file',
      'Quality Check — run validation script, identify missing sections/formatting issues',
      'Refinement Loop — address each issue, regenerate affected sections, re-validate',
      'Finalization — apply final formatting, generate summary, save final version',
    ],
    techniques: ['Explicit quality criteria', 'Iterative improvement', 'Validation scripts', 'Know when to stop iterating'],
  },
  {
    num: 'Pattern 04',
    title: 'Context-Aware Tool Selection',
    useWhen: 'Same outcome, different tools depending on context.',
    example: 'Smart File Storage',
    steps: [
      'Check file type and size',
      'Large files (>10MB) → cloud storage MCP',
      'Collaborative docs → Notion/Docs MCP',
      'Code files → GitHub MCP',
    ],
    techniques: ['Clear decision criteria', 'Fallback options', 'Transparency about choices'],
  },
  {
    num: 'Pattern 05',
    title: 'Domain-Specific Intelligence',
    useWhen: 'Your skill adds specialized knowledge beyond tool access.',
    example: 'Financial Compliance',
    steps: [
      'Before Processing — fetch transaction, check sanctions lists, verify jurisdiction',
      'Assess risk level — document compliance decision',
      'If passed → call payment MCP, apply fraud checks, process transaction',
      'Audit Trail — log all checks, record decisions, generate audit report',
    ],
    techniques: ['Domain expertise embedded in logic', 'Compliance before action', 'Comprehensive documentation', 'Clear governance'],
  },
]

export function Patterns() {
  return (
    <section id="patterns" className="section section-dark">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 5 — Part 1</motion.span>
          <motion.h2 variants={fadeUp}>Patterns</motion.h2>
          <motion.p variants={fadeUp}>These patterns emerged from skills created by early adopters and internal teams. They represent common approaches we've seen work well, not prescriptive templates.</motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 20, marginBottom: 36, background: 'rgba(91,106,245,0.1)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 12, padding: 24 }}>
            <h4 style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-heading)', marginBottom: 8 }}>Choosing your approach: Problem-first vs. Tool-first</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  <strong style={{ color: 'rgba(232,234,246,0.9)' }}>Problem-first:</strong> "I need to set up a project workspace" → Your skill orchestrates the right MCP calls in the right sequence. Users describe outcomes; the skill handles the tools.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  <strong style={{ color: 'rgba(232,234,246,0.9)' }}>Tool-first:</strong> "I have Notion MCP connected" → Your skill teaches Claude the optimal workflows and best practices. Users have access; the skill provides expertise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {patterns.map((p, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 28, gridColumn: i === 4 ? 'span 2' : undefined }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--color-accent-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{p.num}</div>
                <h3 style={{ color: 'rgba(232,234,246,0.95)', marginBottom: 6 }}>{p.title}</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-accent-light)', fontWeight: 500, marginBottom: 16 }}>Use when: {p.useWhen}</div>

                <div style={{ display: 'grid', gridTemplateColumns: i === 4 ? '1fr 1fr' : '1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 8 }}>Example: {p.example}</div>
                    <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {p.steps.map((step, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.84rem', color: 'rgba(232,234,246,0.7)' }}>
                          <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'rgba(91,106,245,0.2)', color: 'var(--color-accent-light)', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{j + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 8 }}>Key techniques</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.techniques.map((t, j) => (
                        <span key={j} style={{ background: 'rgba(91,106,245,0.15)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 100, padding: '3px 10px', fontSize: '0.75rem', color: 'rgba(232,234,246,0.7)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
