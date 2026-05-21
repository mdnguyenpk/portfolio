import { projects } from '@data/projects'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
                View Project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
