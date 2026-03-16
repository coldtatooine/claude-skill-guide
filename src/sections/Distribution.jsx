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

export function Distribution() {
  const { lang } = useLang()
  const tr = t[lang].distribution

  return (
    <section id="distribution" className="section section-alt">
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

          <motion.div variants={stagger} className="dist-steps">
            {tr.steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 12, padding: 28, boxShadow: 'var(--shadow)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-accent)', opacity: 0.25, lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
                <h3 style={{ marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: 10 }}>{s.desc}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-bg)', borderRadius: 8, padding: '10px 14px', color: 'var(--color-accent)', marginBottom: 14, overflow: 'auto' }}>{s.code}</div>
                <ul style={{ listStyle: 'none' }}>
                  {s.details.map((d, j) => (
                    <li key={j} style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', padding: '4px 0 4px 16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 6 }}>{tr.apiH3}</h3>
            <p>{tr.apiP}</p>
            <div style={{ background: 'var(--color-bg-dark)', borderRadius: 12, padding: 28, marginTop: 20 }}>
              <p style={{ color: 'rgba(232,234,246,0.6)', fontSize: '0.85rem', marginBottom: 16 }}>{tr.apiKeyLabel}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tr.apiItems.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'rgba(232,234,246,0.75)', paddingLeft: 18, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7ee787' }}>•</span>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#79c0ff' }}>{item.includes('/v1') || item.includes('container') ? item.split(' ')[0] : ''}</code>
                    {item.includes('/v1') || item.includes('container') ? item.substring(item.indexOf(' ')) : item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 28 }}>
            <div className="api-table-wrap">
              <table className="api-table" style={{ background: 'var(--color-bg-dark)', borderRadius: 12, overflow: 'hidden' }}>
                <thead>
                  <tr>
                    <th>{tr.apiTableHeaders[0]}</th>
                    <th>{tr.apiTableHeaders[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {tr.apiTable.map((r, i) => (
                    <tr key={i}>
                      <td>{r.useCase}</td>
                      <td>
                        <span className={r.tag === 'api' ? 'tag-api' : 'tag-claude'}>{r.surface}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 6 }}>{tr.posH3}</h3>
            <p>{tr.posP}</p>
            <div className="positioning-grid">
              {tr.positioning.map((p, i) => (
                <div key={i} style={{ borderRadius: 12, padding: 24, border: `1px solid ${p.type === 'good' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`, background: p.type === 'good' ? 'rgba(34,197,94,0.05)' : 'rgba(239,68,68,0.05)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12, color: p.type === 'good' ? '#22c55e' : '#ef4444' }}>{p.label}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontStyle: 'italic', margin: 0 }}>{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 28, background: 'var(--color-accent-dim)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 28 }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: 8 }}>{tr.openH4}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              {tr.openP}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
