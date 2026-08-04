import resumePdf from '@assets/Minh_Nguyen_Resume_2026.pdf'
import styles from './NavCards.module.scss'

const cards = [
  {
    id: 'resume',
    label: 'Résumé',
    description: 'Full work history, skills, and education — downloadable PDF.',
    icon: '📄',
    href: resumePdf,
    download: 'Minh_Nguyen_Resume_2026.pdf',
    external: false,
    cta: 'Download PDF',
    accent: false,
  },
  {
    id: 'sandbox',
    label: 'Sandbox',
    description: 'Experiments, prototypes, and side projects — coming soon.',
    icon: '🧪',
    href: '/sandbox',
    external: false,
    cta: 'Coming Soon',
    accent: false,
    disabled: true,
  },
]

export default function NavCards() {
  return (
    <section className={styles.navCards}>
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.id} className={`${styles.card} ${card.disabled ? styles.disabled : ''}`}>
            <span className={styles.icon}>{card.icon}</span>
            <h3 className={styles.cardTitle}>{card.label}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
            {card.disabled ? (
              <span className={styles.badge}>Coming Soon</span>
            ) : (
              <a
                href={card.href}
                className={styles.cardLink}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                download={card.download}
              >
                {card.cta} →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
