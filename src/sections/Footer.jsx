import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { t } from '../i18n/translations'

export function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-title">{tr.title}</div>
      <div className="footer-divider" />
      <p>{tr.company}</p>
      <p style={{ marginTop: 8, fontSize: '0.8rem' }}>
        {tr.cycle}
      </p>
      <p style={{ marginTop: 16, fontSize: '0.78rem', opacity: 0.5 }}>
        {tr.seeAlso}
      </p>
    </motion.footer>
  )
}
