import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { t } from '../i18n/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function PlanningDesign() {
  const { lang } = useLang()
  const tr = t[lang].planning

  return (
    <section id="planning" className="section section-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">{tr.chapter}</motion.span>
          <motion.h2 variants={fadeUp}>{tr.h2}</motion.h2>
          <motion.p variants={fadeUp}>{tr.p}</motion.p>

          <motion.div variants={stagger} className="use-case-grid">
            {tr.useCases.map((uc, i) => (
              <motion.div key={i} variants={fadeUp} className="use-case-card">
                <div className="use-case-num">{uc.num}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="use-case-example">{uc.example}</div>
                <ul style={{ listStyle: 'none', marginTop: 14 }}>
                  {uc.techniques.map((tech, j) => (
                    <li key={j} style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', padding: '4px 0 4px 14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>·</span>{tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 8 }}>{tr.successH3}</h3>
            <p>{tr.successP}</p>
          </motion.div>

          <motion.div variants={stagger} className="metrics-grid">
            <motion.div variants={fadeUp} className="metrics-card">
              <h3>{tr.quantH3}</h3>
              {tr.quantMetrics.map((m, i) => (
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
              <h3>{tr.qualH3}</h3>
              {tr.qualMetrics.map((m, i) => (
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
            <h3 style={{ marginBottom: 8 }}>{tr.yamlH3}</h3>
            <p>{tr.yamlP}</p>
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
                label: tr.goodLabel,
                color: '#22c55e',
                examples: [
                  'Analyzes Figma design files and generates developer handoff documentation. Use when user uploads .fig files, asks for "design specs", "component documentation", or "design-to-code handoff".',
                  'Manages Linear project workflows including sprint planning, task creation, and status tracking. Use when user mentions "sprint", "Linear tasks", "project planning", or asks to "create tickets".',
                ],
              },
              {
                label: tr.badLabel,
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
