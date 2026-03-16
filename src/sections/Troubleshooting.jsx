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

const issueCode = [
  [
    { type: 'comment', text: '# Wrong - missing delimiters' },
    { type: 'bad', text: 'name: my-skill' },
    { type: 'bad', text: 'description: Does things' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# Correct' },
    { type: 'ok', text: '---' },
    { type: 'ok', text: 'name: my-skill' },
    { type: 'ok', text: 'description: Does things' },
    { type: 'ok', text: '---' },
  ],
  [
    { type: 'comment', text: '# Too broad' },
    { type: 'bad', text: 'description: Processes documents' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# More specific with negative trigger' },
    { type: 'ok', text: 'description: Advanced data analysis for CSV' },
    { type: 'ok', text: 'files. Use for statistical modeling.' },
    { type: 'ok', text: 'Do NOT use for simple data exploration.' },
  ],
  [
    { type: 'comment', text: '# Skill references correct tool names?' },
    { type: 'ok', text: 'Call MCP tool: `create_customer`' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# Wrong (case mismatch)' },
    { type: 'bad', text: 'Call MCP tool: `Create_Customer`' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# Check MCP server documentation' },
    { type: 'comment', text: '# for exact tool names' },
  ],
  [
    { type: 'comment', text: '# Bad - ambiguous' },
    { type: 'bad', text: 'Make sure to validate things properly' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# Good - specific and deterministic' },
    { type: 'ok', text: 'CRITICAL: Before calling create_project:' },
    { type: 'ok', text: '- Project name is non-empty' },
    { type: 'ok', text: '- At least one team member assigned' },
    { type: 'ok', text: '- Start date is not in the past' },
  ],
  [
    { type: 'comment', text: '# In SKILL.md - keep it lean' },
    { type: 'ok', text: 'For rate limiting guidance, see:' },
    { type: 'ok', text: '`references/api-patterns.md`' },
    { type: 'comment', text: '' },
    { type: 'comment', text: '# Move detailed docs OUT of SKILL.md' },
    { type: 'comment', text: '# Claude loads them only as needed' },
  ],
]

export function Troubleshooting() {
  const { lang } = useLang()
  const tr = t[lang].troubleshooting

  return (
    <section id="troubleshooting" className="section section-dark-alt">
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

          <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 36 }}>
            {tr.issues.map((issue, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.15)' }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{issue.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(232,234,246,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{issue.symptom}</div>
                    <h3 style={{ color: 'rgba(232,234,246,0.95)', fontSize: '1rem', margin: 0 }}>{issue.title}</h3>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 12 }}>{tr.checklistLabel}</div>
                    <ul style={{ listStyle: 'none' }}>
                      {issue.checks.map((check, j) => (
                        <li key={j} style={{ fontSize: '0.85rem', color: 'rgba(232,234,246,0.7)', padding: '5px 0 5px 18px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-light)' }}>→</span>
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232,234,246,0.4)', marginBottom: 12 }}>{issue.codeLabel}</div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 8, padding: 14, fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 1.7, overflow: 'auto' }}>
                      {issueCode[i].map((line, j) => (
                        <div key={j} style={{
                          color: line.type === 'comment' ? '#6e7681' : line.type === 'ok' ? '#7ee787' : '#f85149',
                          fontStyle: line.type === 'comment' ? 'italic' : 'normal',
                        }}>
                          {line.text || '\u00A0'}
                        </div>
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
