import { useEffect, useRef } from 'react'
import styles from './Snowfall.module.scss'

export default function Snowfall() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W = window.innerWidth
    let H = window.innerHeight

    canvas.width = W
    canvas.height = H

    // Flake pool
    const COUNT = Math.floor((W * H) / 9000)
    const flakes = Array.from({ length: COUNT }, () => createFlake(W, H, true))

    function createFlake(w, h, scatter = false) {
      return {
        x: Math.random() * w,
        y: scatter ? Math.random() * h : -10,
        r: Math.random() * 2.4 + 0.4,
        speed: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.55 + 0.15,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: (Math.random() - 0.5) * 0.008,
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (const f of flakes) {
        f.wobble += f.wobbleSpeed
        f.x += f.drift + Math.sin(f.wobble) * 0.18
        f.y += f.speed

        if (f.y > H + 10) {
          Object.assign(f, createFlake(W, H, false))
        }

        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 228, 248, ${f.opacity})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
