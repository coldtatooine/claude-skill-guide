import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const distSteps = [
  {
    num: '01',
    title: 'Host on GitHub',
    desc: 'Public repo for open-source skills.',
    code: 'git clone https://github.com/yourcompany/skills',
    details: ['Clear README with installation instructions', 'Example usage and screenshots', 'Link from your MCP documentation'],
  },
  {
    num: '02',
    title: 'Upload to Claude',
    desc: 'Install via Claude.ai or Claude Code.',
    code: 'Settings > Capabilities > Skills > Upload',
    details: ['Download the skill folder (zipped)', 'Toggle on the skill', 'Ensure your MCP server is connected'],
  },
  {
    num: '03',
    title: 'Deploy org-wide',
    desc: 'Admins can deploy workspace-wide (Dec 2025).',
    code: '/v1/skills API endpoint',
    details: ['Automatic updates', 'Centralized management', 'Works with Claude Agent SDK'],
  },
]

const apiTable = [
  { useCase: 'End users interacting with skills directly', surface: 'Claude.ai / Claude Code', tag: 'claude' },
  { useCase: 'Manual testing and iteration during development', surface: 'Claude.ai / Claude Code', tag: 'claude' },
  { useCase: 'Individual, ad-hoc workflows', surface: 'Claude.ai / Claude Code', tag: 'claude' },
  { useCase: 'Applications using skills programmatically', surface: 'API', tag: 'api' },
  { useCase: 'Production deployments at scale', surface: 'API', tag: 'api' },
  { useCase: 'Automated pipelines and agent systems', surface: 'API', tag: 'api' },
]

const positioning = [
  {
    type: 'good',
    label: 'Focus on outcomes',
    text: '"The ProjectHub skill enables teams to set up complete project workspaces in seconds — including pages, databases, and templates — instead of spending 30 minutes on manual setup."',
  },
  {
    type: 'bad',
    label: 'Don\'t describe mechanics',
    text: '"The ProjectHub skill is a folder containing YAML frontmatter and Markdown instructions that calls our MCP server tools."',
  },
]

export function Distribution() {
  return (
    <section id="distribution" className="section section-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="chapter-label">Chapter 4</motion.span>
          <motion.h2 variants={fadeUp}>Distribution and Sharing</motion.h2>
          <motion.p variants={fadeUp}>Skills make your MCP integration more complete. As users compare connectors, those with skills offer a faster path to value, giving you an edge over MCP-only alternatives.</motion.p>

          <motion.div variants={stagger} className="dist-steps">
            {distSteps.map((s, i) => (
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
            <h3 style={{ marginBottom: 6 }}>Using Skills via API</h3>
            <p>For programmatic use cases — building applications, agents, or automated workflows — the API provides direct control over skill management and execution.</p>
            <div style={{ background: 'var(--color-bg-dark)', borderRadius: 12, padding: 28, marginTop: 20 }}>
              <p style={{ color: 'rgba(232,234,246,0.6)', fontSize: '0.85rem', marginBottom: 16 }}>Key capabilities:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  '/v1/skills endpoint for listing and managing skills',
                  'Add skills to Messages API requests via the container.skills parameter',
                  'Version control and management through the Claude Console',
                  'Works with the Claude Agent SDK for building custom agents',
                ].map((item, i) => (
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
                    <th>Use Case</th>
                    <th>Best Surface</th>
                  </tr>
                </thead>
                <tbody>
                  {apiTable.map((r, i) => (
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
            <h3 style={{ marginBottom: 6 }}>Positioning Your Skill</h3>
            <p>How you describe your skill determines whether users understand its value and actually try it.</p>
            <div className="positioning-grid">
              {positioning.map((p, i) => (
                <div key={i} style={{ borderRadius: 12, padding: 24, border: `1px solid ${p.type === 'good' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`, background: p.type === 'good' ? 'rgba(34,197,94,0.05)' : 'rgba(239,68,68,0.05)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12, color: p.type === 'good' ? '#22c55e' : '#ef4444' }}>{p.label}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontStyle: 'italic', margin: 0 }}>{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 28, background: 'var(--color-accent-dim)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 28 }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: 8 }}>An Open Standard</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              We've published Agent Skills as an open standard. Like MCP, we believe skills should be portable across tools and platforms — the same skill should work whether you're using Claude or other AI platforms. We've been collaborating with members of the ecosystem on the standard, and we're excited by early adoption.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
