import { useEffect } from 'react'
import styles from './Lightbox.module.scss'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        ×
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
