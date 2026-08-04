import { useState } from 'react'
import { cn } from '@utils/cn'
import styles from './Carousel.module.scss'

export default function Carousel({ images, className }) {
  const [index, setIndex] = useState(0)

  if (!images?.length) return null

  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <div className={cn(styles.carousel, className)}>
      <div className={styles.viewport}>
        <img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          className={styles.image}
          loading="lazy"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className={cn(styles.nav, styles.prev)}
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className={cn(styles.nav, styles.next)}
              onClick={() => go(1)}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={cn(styles.dot, i === index && styles.active)}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
