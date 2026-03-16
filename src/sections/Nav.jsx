import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { t } from '../i18n/translations'

const LANGS = [
  { code: 'en',    label: 'EN', flag: '🇺🇸' },
  { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
  { code: 'es-MX', label: 'ES', flag: '🇲🇽' },
]

export function Nav() {
  const { lang, setLang } = useLang()
  const tr = t[lang].nav

  return (
    <motion.nav
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
    >
      <span className="nav-logo">{tr.logo}</span>
      <div className="nav-links">
        {tr.sections.map(s => (
          <a key={s.id} href={`#${s.id}`}>{s.label}</a>
        ))}
      </div>
      <div className="lang-switcher">
        {LANGS.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`lang-btn${lang === l.code ? ' lang-btn--active' : ''}`}
            aria-label={l.code}
          >
            <span className="lang-flag">{l.flag}</span>
            <span className="lang-label">{l.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
