import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const testingApproaches = [
  {
    title: 'Manual Testing in Claude.ai',
    desc: 'Run queries directly and observe behavior. Fast iteration, no setup required.',
    best: 'Best for early development',
  },
  {
    title: 'Scripted Testing in Claude Code',
    desc: 'Automate test cases for repeatable validation across changes.',
    best: 'Best for stable skills',
  },
  {
    title: 'Programmatic via Skills API',
    desc: 'Build evaluation suites that run systematically against defined test sets.',
    best: 'Best for production/enterprise',
  },
]

const triggerTests = {
  shouldTrigger: [
    '"Help me set up a new ProjectHub workspace"',
    '"I need to create a project in ProjectHub"',
    '"Initialize a ProjectHub project for Q4 planning"',
  ],
  shouldNotTrigger: [
    '"What\'s the weather in San Francisco?"',
    '"Help me write Python code"',
    '"Create a spreadsheet" (unless ProjectHub skill handles sheets)',
  ],
}

const signals = [
  {
    tag: 'under',
    label: 'Undertriggering',
    title: 'Skill doesn\'t load when it should',
    signals: [
      'Skill doesn\'t load when it should',
      'Users manually enabling it',
      'Support questions about when to use it',
    ],
    solution: 'Add more detail and nuance to the description — especially keywords for technical terms',
  },
  {
    tag: 'over',
    label: 'Overtriggering',
    title: 'Skill loads for unrelated queries',
    signals: [
      'Skill loads for irrelevant queries',
      'Users disabling it',
      'Confusion about purpose',
    ],
    solution: 'Add negative triggers, be more specific about scope',
  },
  {
    tag: 'exec',
    label: 'Execution Issues',
    title: 'Skill loads but results are inconsistent',
    signals: [
      'Inconsistent results across runs',
      'API call failures',
      'User corrections needed mid-workflow',
    ],
    solution: 'Improve instructions, add error handling, be more specific and actionable',
  },
]

export function TestingIteration() {
  return (
    <section id="testing" className="section section-dark-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 3</motion.span>
          <motion.h2 variants={fadeUp}>Testing and Iteration</motion.h2>
          <motion.p variants={fadeUp}>Skills can be tested at varying levels of rigor depending on your needs. Choose the approach that matches your quality requirements and the visibility of your skill.</motion.p>

          <motion.div variants={stagger} className="testing-grid">
            {testingApproaches.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="testing-card">
                <h3>{t.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>{t.desc}</p>
                <span style={{ fontSize: '0.75rem', background: 'rgba(91,106,245,0.15)', color: 'var(--color-accent-light)', borderRadius: 100, padding: '3px 10px', fontWeight: 500 }}>{t.best}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>1. Triggering Tests</h3>
            <p>Goal: Ensure your skill loads at the right times.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
              <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22c55e', marginBottom: 12 }}>Should trigger</div>
                {triggerTests.shouldTrigger.map((t, i) => (
                  <div key={i} className="test-item">
                    <span className="test-pass">✓</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: 12 }}>Should NOT trigger</div>
                {triggerTests.shouldNotTrigger.map((t, i) => (
                  <div key={i} className="test-item">
                    <span className="test-fail">✗</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>3. Performance Comparison</h3>
            <p>Goal: Prove the skill improves results vs. baseline.</p>
            <div className="comparison-grid">
              <div className="comparison-card without">
                <h4>Without Skill</h4>
                {[
                  ['Messages needed', '15 back-and-forth'],
                  ['API failures', '3 failed calls + retries'],
                  ['Tokens consumed', '12,000'],
                  ['User instructions', 'Every conversation'],
                ].map(([label, val], i) => (
                  <div key={i} className="comparison-stat">
                    <span>{label}</span>
                    <span className="stat-val-bad">{val}</span>
                  </div>
                ))}
              </div>
              <div className="comparison-card with">
                <h4>With Skill</h4>
                {[
                  ['Messages needed', '2 clarifying questions'],
                  ['API failures', '0'],
                  ['Tokens consumed', '6,000'],
                  ['User instructions', 'Automatic workflow'],
                ].map(([label, val], i) => (
                  <div key={i} className="comparison-stat">
                    <span>{label}</span>
                    <span className="stat-val-good">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 40, background: 'rgba(91,106,245,0.1)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 12, padding: 28 }}>
            <h3 style={{ color: 'var(--color-accent-light)', marginBottom: 10 }}>Pro Tip: Iterate on a single task before expanding</h3>
            <p>The most effective skill creators iterate on a single challenging task until Claude succeeds, then extract the winning approach into a skill. This leverages Claude's in-context learning and provides faster signal than broad testing. Once you have a working foundation, expand to multiple test cases for coverage.</p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 20 }}>Iteration Signals</h3>
            <div className="signals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {signals.map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 100, fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12,
                    background: s.tag === 'under' ? 'rgba(239,68,68,0.15)' : s.tag === 'over' ? 'rgba(245,158,11,0.15)' : 'rgba(139,92,246,0.15)',
                    color: s.tag === 'under' ? '#f87171' : s.tag === 'over' ? '#fbbf24' : '#a78bfa',
                  }}>{s.label}</div>
                  <ul style={{ listStyle: 'none', marginBottom: 14 }}>
                    {s.signals.map((sig, j) => (
                      <li key={j} style={{ fontSize: '0.85rem', color: 'rgba(232,234,246,0.7)', padding: '4px 0 4px 16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'rgba(232,234,246,0.4)' }}>•</span>
                        {sig}
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-accent-light)', fontWeight: 500, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12 }}>
                    → {s.solution}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
