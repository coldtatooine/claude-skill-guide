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

export function Resources() {
  const { lang } = useLang()
  const tr = t[lang].resources

  return (
    <section id="resources" className="section section-alt">
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

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 36 }}>
            {tr.groups.map((r, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 12, padding: 28, boxShadow: 'var(--shadow)' }}>
                <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>{r.title}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {r.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '7px 0', borderBottom: '1px solid var(--color-bg-alt)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', flexShrink: 0, marginTop: 2 }}>↗</span>
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
