import {
  SiJavascript,
  SiTypescript,
  SiCss,
  SiSass,
  SiHtml5,
  SiReact,
  SiRedux,
  SiVuedotjs,
  SiCodeigniter,
  SiNodedotjs,
  SiJquery,
  SiHandlebarsdotjs,
  SiGit,
  SiGithub,
  SiJira,
  SiSubversion,
  SiMysql,
  SiXml,
  SiClaude,
} from 'react-icons/si'
import { skills } from '@data/skills'
import styles from './Skills.module.scss'

const categories = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frameworks & Libraries', key: 'frameworks' },
  { label: 'Tools & Platforms', key: 'tools' },
  { label: 'Databases', key: 'databases' },
  { label: 'AI Tools', key: 'ai' },
]

// Only skills with an official brand icon available get one — the rest render as plain text.
const icons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  CSS: SiCss,
  Sass: SiSass,
  HTML: SiHtml5,
  React: SiReact,
  Redux: SiRedux,
  Vue: SiVuedotjs,
  CodeIgniter: SiCodeigniter,
  NodeJS: SiNodedotjs,
  jQuery: SiJquery,
  Handlebars: SiHandlebarsdotjs,
  Git: SiGit,
  GitHub: SiGithub,
  Jira: SiJira,
  SVN: SiSubversion,
  MySQL: SiMysql,
  XML: SiXml,
  Claude: SiClaude,
}

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {categories.map(({ label, key }) => (
          <div key={key} className={styles.group}>
            <h3 className={styles.category}>{label}</h3>
            <ul className={styles.tags}>
              {skills[key].map((skill) => {
                const Icon = icons[skill]
                return (
                  <li key={skill} className={styles.tag}>
                    {Icon && <Icon className={styles.tagIcon} aria-hidden="true" />}
                    {skill}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
