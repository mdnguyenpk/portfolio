import { useState } from 'react'
import { meta } from '@data/meta'
import Lightbox from '@components/ui/Lightbox'
import Button from '@components/ui/Button'
import CoverFlow from '@components/ui/CoverFlow'
import resumePdf from '@assets/Minh_Nguyen_Resume_2026.pdf'
import pfp from '@assets/images/about/pfp.jpg'
import about1 from '@assets/images/about/about1.webp'
import about2 from '@assets/images/about/about2.webp'
import about3 from '@assets/images/about/about3.webp'
import yoga from '@assets/images/about/yoga.jpg'
import styles from './About.module.scss'

const galleryImages = [
  { src: pfp, alt: `${meta.name} — profile photo` },
  { src: about1, alt: `${meta.name} — photo 1` },
  { src: about2, alt: `${meta.name} — photo 2` },
  { src: about3, alt: `${meta.name} — photo 3` },
  { src: yoga, alt: `${meta.name} practicing yoga` },
]

export default function About() {
  const [active, setActive] = useState(null)

  return (
    <main className={styles.about}>
      <h1>Who is this guy?</h1>

      <CoverFlow
        images={galleryImages}
        className={styles.gallery}
        autoPlay={4000}
        onImageClick={setActive}
      />

      <div className={styles.summary}>
        {meta.summary.split(/\n\s*\n/).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.resumeCta}>
        <Button href={resumePdf} download="Minh_Nguyen_Resume_2026.pdf">
          Download Resume
        </Button>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </main>
  )
}
