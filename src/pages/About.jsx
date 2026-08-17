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
import about4 from '@assets/images/about/about4.webp'
import about5 from '@assets/images/about/about5.jpg'
import about6 from '@assets/images/about/about6.webp'
import styles from './About.module.scss'

const galleryImages = [
  { src: pfp, alt: `${meta.name} — Minh in Oracle Pack standing on the field.` },
  { src: about1, alt: `${meta.name} — 3rd place at a pinball tournament` },
  { src: about2, alt: `${meta.name} — Snowboarding while staring at the mountain range` },
  { src: about3, alt: `${meta.name} — Soyjack pose with snow monkeys` },
  { src: about4, alt: `${meta.name} — Minh holding a giant bok choy leaf` },
  { src: about5, alt: `${meta.name} — Celebrating 500th Class at YogaSix` },
  { src: about6, alt: `${meta.name} — Standing in front of a slope at Shiga Kogen` },
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
