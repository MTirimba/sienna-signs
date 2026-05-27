'use client'

import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

const TESTIMONIALS = [
  { quote: 'Sienna created the most beautiful welcome sign — exactly what I envisioned but even better. Every single guest stopped to take a photo.', author: 'Charlotte R.', event: 'Bride · June 2024' },
  { quote: 'From the first email to delivery, the process was effortless. The acrylic seating chart was an absolute showstopper.', author: 'Amara & James T.', event: 'Couple · August 2024' },
  { quote: 'I cannot recommend Sienna enough. The attention to detail is extraordinary — our signage looked like something from a magazine.', author: 'Sophie L.', event: 'Event Planner' },
]

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(0)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const show = mounted && visible
  const t = TESTIMONIALS[active]

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? '72px 24px' : '120px 80px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--sand)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--serif)',
        fontSize: isMobile ? '160px' : 'clamp(200px, 30vw, 320px)',
        fontWeight: 300,
        fontStyle: 'italic',
        color: 'var(--sand-dark)',
        opacity: 0.35,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>❝</div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '680px',
        margin: '0 auto',
        textAlign: 'center',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '40px' }}>
          What our clients say
        </p>
        <blockquote key={active} style={{
          fontFamily: 'var(--serif)',
          fontSize: isMobile ? '22px' : 'clamp(22px, 2.8vw, 32px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--ink)',
          lineHeight: 1.5,
          margin: '0 0 36px',
          animation: 'fadeUp 0.5s ease both',
        }}>
          {t.quote}
        </blockquote>
        <div key={`a-${active}`} style={{ animation: 'fadeUp 0.5s ease 0.08s both' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '6px' }}>
            {t.author}
          </p>
          <p style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'var(--muted)' }}>{t.event}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} style={{
              width: i === active ? '24px' : '6px',
              height: '1px',
              background: i === active ? 'var(--ink)' : 'var(--border)',
              border: 'none', padding: 0, cursor: 'pointer',
              transition: 'width 0.4s ease, background 0.3s ease',
            }} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}