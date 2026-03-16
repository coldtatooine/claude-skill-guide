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

export function Fundamentals() {
  const { lang } = useLang()
  const tr = t[lang].fundamentals

  return (
    <section id="fundamentals" className="section section-dark">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">{tr.chapter}</motion.span>
          <motion.h2 variants={fadeUp}>{tr.h2}</motion.h2>
          <motion.p variants={fadeUp}>{tr.p}</motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 36 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 16 }}>{tr.anatomyTitle}</h3>
            <div className="skill-anatomy">
              <div>your-skill-name/</div>
              <div>&nbsp;&nbsp;├── <span className="file-required">SKILL.md</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Required — main skill file with YAML frontmatter</span></div>
              <div>&nbsp;&nbsp;├── <span className="file-optional">scripts/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — Python, Bash, etc.</span></div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── process_data.py</div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── validate.sh</div>
              <div>&nbsp;&nbsp;├── <span className="file-optional">references/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — docs loaded as needed</span></div>
              <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── api-guide.md</div>
              <div>&nbsp;&nbsp;└── <span className="file-optional">assets/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="file-comment"># Optional — templates, fonts, icons</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── report-template.md</div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="principle-grid">
            {tr.principles.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="principle-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3 style={{ color: 'rgba(232,234,246,0.9)', marginBottom: 8 }}>{tr.mcpTitle}</h3>
            <p style={{ marginBottom: 0 }}>
              {tr.mcpP} <strong style={{ color: 'var(--color-accent-light)' }}>{tr.mcpBold1}</strong>{tr.mcpMid} <strong style={{ color: 'var(--color-accent-light)' }}>{tr.mcpBold2}</strong>{tr.mcpEnd}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <table className="mcp-table">
              <thead>
                <tr>
                  <th>{tr.mcpHeaders[0]}</th>
                  <th>{tr.mcpHeaders[1]}</th>
                </tr>
              </thead>
              <tbody>
                {tr.mcpRows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.mcp}</td>
                    <td>{r.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
            {[
              {
                label: tr.withoutLabel,
                items: tr.withItems,
                color: '#f85149',
              },
              {
                label: tr.withLabel,
                items: tr.withSkillItems,
                color: '#7ee787',
              },
            ].map((col, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${col.color}30`, borderRadius: 12, padding: 24 }}>
                <h4 style={{ color: col.color, fontFamily: 'var(--font-heading)', fontSize: '0.85rem', marginBottom: 14 }}>{col.label}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', color: 'rgba(232,234,246,0.7)', padding: '5px 0 5px 16px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ position: 'absolute', left: 0, color: col.color }}>•</span>
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
