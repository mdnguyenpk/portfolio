import { useEffect, useState } from 'react'
import { cn } from '@utils/cn'
import styles from './CoverFlow.module.scss'

const VISIBLE_RANGE = 3
const STEP = 42 // % of slide width to shift per position
const ROTATE = 50 // deg
const SCALE_STEP = 0.13
const OPACITY_STEP = 0.28

export default function CoverFlow({ images, className, autoPlay, onImageClick }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!autoPlay || paused || !images || images.length <= 1) return
    const interval = autoPlay === true ? 4000 : autoPlay
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [autoPlay, paused, images])

  if (!images?.length) return null

  const selectSlide = (i) => {
    setPaused(true)
    if (i === index) {
      onImageClick?.(images[i])
    } else {
      setIndex(i)
    }
  }

  const go = (delta) => {
    setPaused(true)
    setIndex((i) => (i + delta + images.length) % images.length)
  }

  return (
    <div className={cn(styles.coverflow, className)}>
      <div className={styles.stage}>
        {images.map((img, i) => {
          const n = images.length
          let offset = i - index
          if (offset > n / 2) offset -= n
          if (offset < -n / 2) offset += n
          if (Math.abs(offset) > VISIBLE_RANGE) return null

          const isActive = offset === 0
          const sign = Math.sign(offset)
          const abs = Math.abs(offset)
          const translateX = offset * STEP
          const rotateY = isActive ? 0 : -sign * ROTATE
          const scale = isActive ? 1 : Math.max(0.55, 1 - abs * SCALE_STEP - 0.15)
          const opacity = isActive ? 1 : Math.max(0.2, 1 - abs * OPACITY_STEP)

          return (
            <button
              key={img.src}
              type="button"
              className={cn(styles.slide, isActive && styles.active)}
              style={{
                transform: `translateX(-50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: 100 - abs,
                opacity,
              }}
              onClick={() => selectSlide(i)}
              aria-label={isActive ? 'Zoom photo' : `Show photo ${i + 1}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          )
        })}
      </div>
      {images.length > 1 && (
        <div className={styles.controls}>
          <button type="button" className={styles.nav} onClick={() => go(-1)} aria-label="Previous image">
            ‹
          </button>
          <div className={styles.dots}>
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={cn(styles.dot, i === index && styles.dotActive)}
                onClick={() => { setPaused(true); setIndex(i) }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" className={styles.nav} onClick={() => go(1)} aria-label="Next image">
            ›
          </button>
        </div>
      )}
    </div>
  )
}
