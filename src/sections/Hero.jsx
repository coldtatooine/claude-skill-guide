import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { t } from '../i18n/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section id="intro" className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container-wide">
        <div className="hero-grid">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <div className="hero-badge">
                <span></span>
                {tr.badge}
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp}>
              {tr.h1[0]}<br />{tr.h1[1]}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', color: '#5a6080' }}>
              {tr.p1}
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '0.9rem' }}>
              <strong>{tr.p2label}</strong> {tr.p2body}
            </motion.p>
            <motion.div variants={fadeUp} className="hero-paths">
              {tr.paths.map((p, i) => (
                <div key={i} className="hero-path">
                  <span className="hero-path-icon">{p.icon}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="hero-stat-grid">
              {tr.stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat-num">{s.num}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} style={{ marginTop: 20, background: 'white', borderRadius: 12, padding: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tr.whoLabel}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tr.whoItems.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
