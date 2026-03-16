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

export function TestingIteration() {
  const { lang } = useLang()
  const tr = t[lang].testing

  return (
    <section id="testing" className="section section-dark-alt">
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

          <motion.div variants={stagger} className="testing-grid">
            {tr.approaches.map((approach, i) => (
              <motion.div key={i} variants={fadeUp} className="testing-card">
                <h3>{approach.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>{approach.desc}</p>
                <span style={{ fontSize: '0.75rem', background: 'rgba(91,106,245,0.15)', color: 'var(--color-accent-light)', borderRadius: 100, padding: '3px 10px', fontWeight: 500 }}>{approach.best}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>{tr.triggerH3}</h3>
            <p>{tr.triggerGoal}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
              <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22c55e', marginBottom: 12 }}>{tr.shouldTrigger}</div>
                {tr.shouldTriggerItems.map((item, i) => (
                  <div key={i} className="test-item">
                    <span className="test-pass">✓</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: 12 }}>{tr.shouldNotTrigger}</div>
                {tr.shouldNotTriggerItems.map((item, i) => (
                  <div key={i} className="test-item">
                    <span className="test-fail">✗</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>{tr.perfH3}</h3>
            <p>{tr.perfGoal}</p>
            <div className="comparison-grid">
              <div className="comparison-card without">
                <h4>{tr.withoutSkill}</h4>
                {tr.withoutStats.map(([label, val], i) => (
                  <div key={i} className="comparison-stat">
                    <span>{label}</span>
                    <span className="stat-val-bad">{val}</span>
                  </div>
                ))}
              </div>
              <div className="comparison-card with">
                <h4>{tr.withSkill}</h4>
                {tr.withStats.map(([label, val], i) => (
                  <div key={i} className="comparison-stat">
                    <span>{label}</span>
                    <span className="stat-val-good">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 40, background: 'rgba(91,106,245,0.1)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 12, padding: 28 }}>
            <h3 style={{ color: 'var(--color-accent-light)', marginBottom: 10 }}>{tr.proTipH3}</h3>
            <p>{tr.proTipP}</p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 20 }}>{tr.iterationH3}</h3>
            <div className="signals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {tr.signals.map((s, i) => (
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
