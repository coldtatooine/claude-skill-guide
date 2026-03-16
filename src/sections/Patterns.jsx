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

export function Patterns() {
  const { lang } = useLang()
  const tr = t[lang].patterns

  return (
    <section id="patterns" className="section section-dark">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">{tr.chapter}</motion.span>
          <motion.h2 variants={fadeUp}>{tr.h2}</motion.h2>
          <motion.p variants={fadeUp}>{tr.p}</motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 20, marginBottom: 36, background: 'rgba(91,106,245,0.1)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 12, padding: 24 }}>
            <h4 style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-heading)', marginBottom: 8 }}>{tr.chooseH4}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <p style={{ fontSize: '0.88rem', margin: 0 }} dangerouslySetInnerHTML={{ __html: tr.problemFirst }} />
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', margin: 0 }} dangerouslySetInnerHTML={{ __html: tr.toolFirst }} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {tr.patterns.map((p, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 28, gridColumn: i === 4 ? 'span 2' : undefined }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--color-accent-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{p.num}</div>
                <h3 style={{ color: 'rgba(232,234,246,0.95)', marginBottom: 6 }}>{p.title}</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-accent-light)', fontWeight: 500, marginBottom: 16 }}>{tr.useWhenLabel} {p.useWhen}</div>

                <div style={{ display: 'grid', gridTemplateColumns: i === 4 ? '1fr 1fr' : '1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 8 }}>{tr.exampleLabel} {p.example}</div>
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
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 8 }}>{tr.techniquesLabel}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.techniques.map((tech, j) => (
                        <span key={j} style={{ background: 'rgba(91,106,245,0.15)', border: '1px solid rgba(91,106,245,0.2)', borderRadius: 100, padding: '3px 10px', fontSize: '0.75rem', color: 'rgba(232,234,246,0.7)' }}>{tech}</span>
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
