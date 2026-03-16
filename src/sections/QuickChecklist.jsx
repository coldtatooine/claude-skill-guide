import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { t } from '../i18n/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function QuickChecklist() {
  const { lang } = useLang()
  const tr = t[lang].checklist

  return (
    <section id="checklist" className="section section-dark">
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

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 36 }}>
            {tr.phases.map((phase, i) => (
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
              <strong style={{ color: 'var(--color-accent-light)' }}>{tr.shortcutBold}</strong> {tr.shortcutP}
            </p>
            <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: '12px 20px', display: 'inline-block', color: '#7ee787' }}>
              {tr.shortcutCode}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
